"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ease } from "@/lib/gsap";

type OverlayAPI = {
  playCover: () => Promise<void>;
  playReveal: () => Promise<void>;
  hideInstant: () => void;
};

type Props = {
  onReady?: (api: OverlayAPI) => void;
};

export default function TransitionOverlay({ onReady }: Props) {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    gsap.set(el, {
      yPercent: -100, // hidden above
      autoAlpha: 1,
    });

    const playCover = () =>
      new Promise<void>((resolve) => {
        gsap.killTweensOf(el);
        gsap.to(el, {
          yPercent: 0, // slide down to cover
          duration: 0.55,
          ease,
          onComplete: () => resolve(),
        });
      });

    const playReveal = () =>
      new Promise<void>((resolve) => {
        gsap.killTweensOf(el);
        gsap.to(el, {
          yPercent: 100, // slide down past the screen to reveal
          duration: 0.65,
          ease,
          onComplete: () => {
            // reset back above after reveal so next transition starts correctly
            gsap.set(el, { yPercent: -100 });
            resolve();
          },
        });
      });

    const hideInstant = () => {
      gsap.killTweensOf(el);
      gsap.set(el, { yPercent: -100, autoAlpha: 1 });
    };

    onReady?.({ playCover, playReveal, hideInstant });
  }, [onReady]);

  return (
    <div
      id="transition-overlay-hook"
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0b0b0f",
        pointerEvents: "none",
        transform: "translate3d(0,0,0)", // helps GPU
      }}
    />
  );
}