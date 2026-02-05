"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import gsap from "gsap";

type SlideItem = {
  title: string;
  description: string;
  cta: string;
  ctaurl: string;
  media: string; // image or video URL
};

type Props = {
  items: SlideItem[];
  interval?: number; // ms
  startIndex?: number;
  className?: string;
};

export default function AutoScrollSlider({
  items,
  interval = 6500,
  startIndex = 0,
  className
}: Props) {
  const safeItems = items?.filter(Boolean) ?? [];
  const count = safeItems.length;

  const rootRef = useRef<HTMLDivElement | null>(null);
  const slidesWrapRef = useRef<HTMLDivElement | null>(null);

  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mediaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const ctaRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const isHoveringRef = useRef(false);
  const isDraggingRef = useRef(false);
  const isInViewRef = useRef(false);

  const autoplayTl = useRef<gsap.core.Timeline | null>(null);
  const transitionTl = useRef<gsap.core.Timeline | null>(null);

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  const clampIndex = (n: number) => {
    if (count === 0) return 0;
    return ((n % count) + count) % count;
  };

  const [activeIndex, setActiveIndex] = useState(() => clampIndex(startIndex));
  const activeIndexRef = useRef(activeIndex);
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // --- Helpers
  const isVideo = (url: string) => /\.(mp4|webm|ogg)(\?|#|$)/i.test(url);

  const setSlideBaseState = () => {
    if (count === 0) return;

    slideRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, {
        autoAlpha: i === activeIndexRef.current ? 1 : 0,
        pointerEvents: i === activeIndexRef.current ? "auto" : "none"
      });
    });

    mediaRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, {
        scale: i === activeIndexRef.current ? 1 : 1.05,
        filter: i === activeIndexRef.current ? "blur(0px)" : "blur(6px)"
      });
    });

    // Text initial (active visible, others hidden)
    titleRefs.current.forEach((el, i) => el && gsap.set(el, { y: i === activeIndexRef.current ? 0 : 16, autoAlpha: i === activeIndexRef.current ? 1 : 0 }));
    descRefs.current.forEach((el, i) => el && gsap.set(el, { y: i === activeIndexRef.current ? 0 : 16, autoAlpha: i === activeIndexRef.current ? 1 : 0 }));
    ctaRefs.current.forEach((el, i) => el && gsap.set(el, { y: i === activeIndexRef.current ? 0 : 16, autoAlpha: i === activeIndexRef.current ? 1 : 0 }));
  };

  const killTransition = () => {
    transitionTl.current?.kill();
    transitionTl.current = null;
  };

  const killAutoplay = () => {
    autoplayTl.current?.kill();
    autoplayTl.current = null;
  };

  const restartAutoplay = () => {
    if (reducedMotion) return;
    killAutoplay();

    // A GSAP timeline to:
    // 1) animate progress bar from 0 -> 100%
    // 2) onComplete advance slide (if allowed)
    if (!progressBarRef.current) return;

    gsap.set(progressBarRef.current, { scaleX: 0, transformOrigin: "0% 50%" });

    autoplayTl.current = gsap
      .timeline({
        paused: true,
        onComplete: () => {
          // Decide if we should advance
          if (!isInViewRef.current) return;
          if (isHoveringRef.current) return;
          if (isDraggingRef.current) return;
          goTo(activeIndexRef.current + 1);
        }
      })
      .to(progressBarRef.current, { scaleX: 1, duration: interval / 1000, ease: "none" });

    autoplayTl.current.play(0);
  };

  const pauseAutoplay = () => {
    autoplayTl.current?.pause();
  };

  const resumeAutoplay = () => {
    if (reducedMotion) return;
    autoplayTl.current?.resume();
  };

  const goTo = (next: number) => {
    if (count <= 1) return;
    const from = activeIndexRef.current;
    const to = clampIndex(next);
    if (from === to) return;

    // Prevent double triggers
    killTransition();

    const fromSlide = slideRefs.current[from];
    const toSlide = slideRefs.current[to];

    const fromMedia = mediaRefs.current[from];
    const toMedia = mediaRefs.current[to];

    const toTitle = titleRefs.current[to];
    const toDesc = descRefs.current[to];
    const toCta = ctaRefs.current[to];

    const fromTitle = titleRefs.current[from];
    const fromDesc = descRefs.current[from];
    const fromCta = ctaRefs.current[from];

    if (!fromSlide || !toSlide) {
      setActiveIndex(to);
      restartAutoplay();
      return;
    }

    // Ensure to slide is on and above for crossfade
    gsap.set(toSlide, { autoAlpha: 1, pointerEvents: "auto" });
    gsap.set(fromSlide, { pointerEvents: "none" });

    // If reduced motion, hard swap
    if (reducedMotion) {
      gsap.set(fromSlide, { autoAlpha: 0 });
      setActiveIndex(to);
      setSlideBaseState();
      return;
    }

    // Reset target text states
    if (toTitle) gsap.set(toTitle, { y: 18, autoAlpha: 0 });
    if (toDesc) gsap.set(toDesc, { y: 18, autoAlpha: 0 });
    if (toCta) gsap.set(toCta, { y: 18, autoAlpha: 0 });

    transitionTl.current = gsap
      .timeline({
        defaults: { ease: "power4.out" },
        onComplete: () => {
          // Hide the old slide completely after fade
          gsap.set(fromSlide, { autoAlpha: 0 });
          setActiveIndex(to);
          // Reset base for non-active slides
          setSlideBaseState();
          restartAutoplay();
        }
      })
      // old text out
      .to([fromTitle, fromDesc, fromCta].filter(Boolean), { y: -10, autoAlpha: 0, duration: 0.35 }, 0)
      // crossfade slides
      .fromTo(toSlide, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, 0)
      .to(fromSlide, { autoAlpha: 0, duration: 0.8 }, 0)
      // media parallax-ish
      .to(fromMedia, { scale: 1.08, filter: "blur(10px)", duration: 0.8 }, 0)
      .fromTo(toMedia, { scale: 1.06, filter: "blur(8px)" }, { scale: 1, filter: "blur(0px)", duration: 0.9 }, 0)
      // new text in (stagger)
      .to(toTitle, { y: 0, autoAlpha: 1, duration: 0.5 }, 0.25)
      .to(toDesc, { y: 0, autoAlpha: 1, duration: 0.5 }, 0.33)
      .to(toCta, { y: 0, autoAlpha: 1, duration: 0.5 }, 0.41);

    // reset progress immediately on slide change
    restartAutoplay();
  };

  // --- In-view (scroll-trigger-ish autoplay)
  useEffect(() => {
    if (!rootRef.current) return;
    const el = rootRef.current;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const inView = !!entry?.isIntersecting && entry.intersectionRatio >= 0.35;
        isInViewRef.current = inView;

        if (!inView) {
          pauseAutoplay();
        } else {
          // start / resume when in view
          if (!autoplayTl.current) restartAutoplay();
          else resumeAutoplay();
        }
      },
      { threshold: [0, 0.15, 0.35, 0.6, 1] }
    );

    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval, reducedMotion, count]);

  // --- Base setup once
  useEffect(() => {
    if (count === 0) return;
    setSlideBaseState();
    // Start autoplay only if in view
    if (!reducedMotion) restartAutoplay();

    return () => {
      killTransition();
      killAutoplay();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  // --- Hover pause
  const onMouseEnter = () => {
    isHoveringRef.current = true;
    pauseAutoplay();
  };
  const onMouseLeave = () => {
    isHoveringRef.current = false;
    if (isInViewRef.current) resumeAutoplay();
  };

  // --- Swipe / drag
  const drag = useRef({
    startX: 0,
    lastX: 0,
    deltaX: 0,
    pointerId: -1
  });

  const onPointerDown = (e: React.PointerEvent) => {
    if (count <= 1) return;
    isDraggingRef.current = true;
    drag.current.pointerId = e.pointerId;
    drag.current.startX = e.clientX;
    drag.current.lastX = e.clientX;
    drag.current.deltaX = 0;

    pauseAutoplay();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    if (drag.current.pointerId !== e.pointerId) return;

    const dx = e.clientX - drag.current.lastX;
    drag.current.lastX = e.clientX;
    drag.current.deltaX = e.clientX - drag.current.startX;

    // Tiny “follow” feedback (don’t fully drag slides, just subtle movement)
    const active = slideRefs.current[activeIndexRef.current];
    if (active && !reducedMotion) {
      gsap.to(active, { x: gsap.utils.clamp(-24, 24, drag.current.deltaX * 0.05), duration: 0.12, ease: "power2.out" });
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    if (drag.current.pointerId !== e.pointerId) return;

    isDraggingRef.current = false;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);

    const active = slideRefs.current[activeIndexRef.current];
    if (active && !reducedMotion) gsap.to(active, { x: 0, duration: 0.25, ease: "power3.out" });

    const threshold = 60; // px
    const totalDx = drag.current.deltaX;

    if (Math.abs(totalDx) > threshold) {
      if (totalDx < 0) goTo(activeIndexRef.current + 1);
      else goTo(activeIndexRef.current - 1);
    } else {
      // no nav, resume autoplay if in view
      if (isInViewRef.current && !isHoveringRef.current) resumeAutoplay();
    }
  };

  if (count === 0) return null;

  return (
    <Root
      ref={rootRef}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="region"
      aria-label="Auto scrolling slider"
    >
      <Slides ref={slidesWrapRef}>
        {safeItems.map((item, i) => (
          <Slide
            key={i}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            aria-hidden={i !== activeIndex}
          >
            <Media
              ref={(el) => {
                mediaRefs.current[i] = el;
              }}
            >
              {isVideo(item.media) ? (
                <video src={item.media} autoPlay muted loop playsInline preload="metadata" />
              ) : (
                <img src={item.media} alt={item.title} />
              )}
              <MediaOverlay />
            </Media>

            <Content>
              <Kicker>MWUNGANO</Kicker>

              <H2
                ref={(el) => {
                  titleRefs.current[i] = el;
                }}
              >
                {item.title}
              </H2>

              <P
                ref={(el) => {
                  descRefs.current[i] = el;
                }}
              >
                {item.description}
              </P>

              <CTA
                ref={(el) => {
                  ctaRefs.current[i] = el;
                }}
                href={item.ctaurl}
              >
                {item.cta}
                <span aria-hidden="true">→</span>
              </CTA>

              <Controls>
                <NavBtn type="button" onClick={() => goTo(activeIndexRef.current - 1)} aria-label="Previous slide">
                  Prev
                </NavBtn>

                <Indicators aria-label="Slide indicators">
                  {safeItems.map((_, idx) => (
                    <DotBtn
                      key={idx}
                      type="button"
                      aria-label={`Go to slide ${idx + 1}`}
                      aria-current={idx === activeIndex}
                      $active={idx === activeIndex}
                      onClick={() => goTo(idx)}
                    />
                  ))}
                </Indicators>

                <NavBtn type="button" onClick={() => goTo(activeIndexRef.current + 1)} aria-label="Next slide">
                  Next
                </NavBtn>
              </Controls>
            </Content>
          </Slide>
        ))}
      </Slides>

      {/* Progress */}
      <ProgressWrap aria-hidden="true">
        <ProgressBar ref={progressBarRef} />
      </ProgressWrap>

      {/* Optional: a subtle hint */}
      <SwipeHint aria-hidden="true">Drag / swipe</SwipeHint>
    </Root>
  );
}

/* ---------------- styled-components ---------------- */

const Root = styled.div`
  position: relative;
  width: 100%;
  height: min(92vh, 920px);
  border-radius: 28px;
  overflow: hidden;
  user-select: none;
  touch-action: pan-y;
  background: #0b0b0b;
`;

const Slides = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Slide = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

const Media = styled.div`
  position: absolute;
  inset: 0;

  img,
  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translateZ(0);
  }
`;

const MediaOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(1200px 800px at 20% 70%, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75)),
    linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.1));
  pointer-events: none;
`;

const Content = styled.div`
  position: absolute;
  left: clamp(18px, 6vw, 84px);
  bottom: clamp(18px, 6vw, 84px);
  right: clamp(18px, 6vw, 84px);
  max-width: 680px;
  color: #fff;
`;

const Kicker = styled.div`
  letter-spacing: 0.18em;
  font-size: 12px;
  opacity: 0.78;
  margin-bottom: 14px;
`;

const H2 = styled.h2`
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.02;
  margin: 0 0 12px 0;
`;

const P = styled.p`
  margin: 0 0 22px 0;
  font-size: clamp(1rem, 1.2vw, 1.15rem);
  line-height: 1.5;
  opacity: 0.86;
  max-width: 58ch;
`;

const CTA = styled(Link)`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  padding: 14px 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: #0b0b0b;
  font-weight: 700;
  text-decoration: none;
  width: fit-content;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: #fff;
  }

  &:active {
    transform: translateY(0px);
  }
`;

const Controls = styled.div`
  margin-top: 22px;
  display: flex;
  align-items: center;
  gap: 14px;
`;

const NavBtn = styled.button`
  background: rgba(0, 0, 0, 0.35);
  color: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  padding: 10px 14px;
  font-weight: 650;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Indicators = styled.div`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.14);
`;

const DotBtn = styled.button<{ $active: boolean }>`
  width: ${(p) => (p.$active ? "28px" : "10px")};
  height: 10px;
  border-radius: 999px;
  border: 0;
  cursor: pointer;
  background: ${(p) => (p.$active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.35)")};
  transition: width 0.25s ease, background 0.25s ease;
`;

const ProgressWrap = styled.div`
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 14px;
  height: 3px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.18);
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  background: rgba(255, 255, 255, 0.95);
`;

const SwipeHint = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.86);
  font-size: 12px;
`;

/* ---------------- Usage Example ----------------
import AutoScrollSlider from "./AutoScrollSlider";

const slides = [
  { title: "Title", description: "Desc", cta: "Explore", ctaurl: "/about", media: "/media/hero.mp4" },
  { title: "Another", description: "More", cta: "Get started", ctaurl: "/contact", media: "/media/hero.jpg" },
];

<AutoScrollSlider items={slides} interval={6500} />
------------------------------------------------ */