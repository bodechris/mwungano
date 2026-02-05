"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import styled from "styled-components";
import { useGlobalAppFuncs, useGlobalAppStates } from "@/context/GlobalAppProvider";

type Ctx = {
  navigate: (href: string) => void;
  isTransitioning: boolean;
};

const PageTransitionContext = createContext<Ctx | null>(null);

export function usePageTransition() {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) throw new Error("usePageTransition must be used within PageTransitionProvider");
  return ctx;
}

export default function PageTransitionProvider({
  header,
  footer,
  children,
}: {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const mountedRef = useRef(false);

  // "current" is whatever Next renders now
  const [current, setCurrent] = useState<React.ReactNode>(children);

  // "prev" is a frozen copy of the previous page that stays mounted during the transition
  const [prev, setPrev] = useState<React.ReactNode | null>(null);

  // track navigation intent
  const pendingHrefRef = useRef<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // DOM refs for animation layers
  const prevLayerRef = useRef<HTMLDivElement | null>(null);
  const currentLayerRef = useRef<HTMLDivElement | null>(null);

  const { playIntro, showMenu } = useGlobalAppStates();
  const { setShowMenu } = useGlobalAppFuncs();

  // When Next swaps children (route changed), keep the old page as "prev" and animate
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      setCurrent(children);
      return;
    }

    // Freeze old current into prev, then set new current from Next
    setPrev(current);
    setCurrent(children);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, pathname]);

  // Run animation whenever we have both layers (meaning route just changed)
  useEffect(() => {
    if (!prev) return;

    const prevEl = prevLayerRef.current;
    const nextEl = currentLayerRef.current;
    if (!prevEl || !nextEl) return;

    setIsTransitioning(true);

    // close any open menus, etc. here if needed
    if( showMenu ) setShowMenu?.(false);

    // Ensure correct stacking
    gsap.set(prevEl, { position: "absolute", inset: 0, zIndex: 2 });
    gsap.set(nextEl, { position: "absolute", inset: 0, zIndex: 1 });

    // Set initial state for incoming page (so it animates in while old animates out)
    gsap.set(nextEl, { opacity: 0, y: 24, filter: "blur(6px)" });

    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: "power3.inOut" },
      onComplete: () => {
        setPrev(null); // remove old page
        setIsTransitioning(false);
        pendingHrefRef.current = null;

        // After prev unmounts, ensure current becomes normal flow
        requestAnimationFrame(() => {
          const cur = currentLayerRef.current;
          if (cur) gsap.set(cur, { clearProps: "all" });
        });
      },
    });

    // Overlap: outgoing + incoming start at the same time
    tl.to(prevEl, { opacity: 0, y: -24, filter: "blur(8px)" }, 0)
      .to(nextEl, { opacity: 1, y: 0, filter: "blur(0px)" }, "-=0.35");

    return () => {
      tl.kill();
    };
  }, [prev]);

  const navigate = useCallback(
    (href: string) => {
      if (href === pathname) return;
      if (isTransitioning) return;

      pendingHrefRef.current = href;
      router.push(href); // navigate immediately so incoming mounts, then we animate both
    },
    [router, pathname, isTransitioning]
  );

  const value = useMemo(() => ({ navigate, isTransitioning }), [navigate, isTransitioning]);

  if( playIntro ) return null;

  return (
    <PageTransitionContext.Provider value={value}>
      {
        header
      }

      <PageTransitionWrapper>
        {/* Prev page on top */}
        {prev && (
          <div ref={prevLayerRef} aria-hidden>
            {prev}
          </div>
        )}

        {/* Current page (incoming) */}
        <div ref={currentLayerRef}>{current}</div>
      </PageTransitionWrapper>

    {
      footer
    }

    </PageTransitionContext.Provider>
  );
}

const PageTransitionWrapper = styled.div`
  marging: 0 auto;
  width: 100% !important;
  height: auto;
  position: relative; 
  min-height: 100vh; 
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #fff !important;

  -webkit-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
  -moz-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
  -ms-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
  transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);

`;