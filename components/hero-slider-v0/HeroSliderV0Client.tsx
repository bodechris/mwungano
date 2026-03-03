'use client';

import { useState, useRef, useEffect } from 'react';
import TransitionLink from '../transition/TransitionLink';
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // register any plugins, including the useGSAP hook


const SLIDE_DURATION = 50000; 

type HeroSliderItemType = {
    title: string,
    description: string,
    cta: string,
    ctaurl: string,
    mediasrc: string
}

type HeroSliderV0ClientType = {
    slides: HeroSliderItemType[]
}
function HeroSliderV0Client({ slides=[] }: HeroSliderV0ClientType) {
    const [activeSlideInd, setActiveSlideInd] = useState(0);
    const [prevSlideInd, setPrevSlideInd] = useState(-1);

    const slidesContainerRef = useRef<HTMLDivElement>(null);

    const updateSlide = (newInd: number) => {
        if (newInd === activeSlideInd) return; // do nothing if the same slide is selected
        setPrevSlideInd(activeSlideInd);
        setActiveSlideInd(newInd);
    }

    // Auto-change slides every SLIDE_DURATION milliseconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlideInd((prev) => (prev + 1) % slides.length);
        }, SLIDE_DURATION);
        return () => clearInterval(interval);
    }, [slides.length]);
    
    const tl = gsap.timeline();

    useGSAP(() => {
        if (!slidesContainerRef.current) return;

        const allSlides = slidesContainerRef.current.querySelectorAll('.slider-item');

        if( prevSlideInd === -1 ) {

            const currentSlide = allSlides[activeSlideInd] as HTMLElement;

            const currentTitleEl = currentSlide.querySelector('.info-box h2') as HTMLElement;
            const currentDescEl = currentSlide.querySelector('.info-box p') as HTMLElement;
            const currentCtaEl = currentSlide.querySelector('.info-box a') as HTMLElement;
            const currentMediaEl = currentSlide.querySelector('.media-box') as HTMLElement;

            // if it's the first time the slide is being shown, just fade it in without fading out previous slide
            tl.fromTo(currentTitleEl, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
            .fromTo(currentDescEl, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
            .fromTo(currentCtaEl, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
            .fromTo(currentMediaEl, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6");
            return;
        }

        const currentSlide = allSlides[prevSlideInd] as HTMLElement;
        const nextSlide = allSlides[activeSlideInd] as HTMLElement;

        const currentTitleEl = currentSlide.querySelector('.info-box h2') as HTMLElement;
        const currentDescEl = currentSlide.querySelector('.info-box p') as HTMLElement;
        const currentCtaEl = currentSlide.querySelector('.info-box a') as HTMLElement;
        const currentMediaEl = currentSlide.querySelector('.media-box') as HTMLElement;

        const nextTitleEl = nextSlide.querySelector('.info-box h2') as HTMLElement;
        const nextDescEl = nextSlide.querySelector('.info-box p') as HTMLElement;
        const nextCtaEl = nextSlide.querySelector('.info-box a') as HTMLElement;
        const nextMediaEl = nextSlide.querySelector('.media-box') as HTMLElement;

        // if next slide is not available, just fade in current slide       
        tl.fromTo(currentTitleEl, { y: 0, opacity: 1 }, { y: 100, opacity: 0, duration: 0.8 })
          .fromTo(currentDescEl, { y: 0, opacity: 1 }, { y: 100, opacity: 0, duration: 0.8 }, "-=0.6")
          .fromTo(currentCtaEl, { y: 0, opacity: 1 }, { y: 100, opacity: 0, duration: 0.8 }, "-=0.6")
          .fromTo(currentMediaEl, { y: 0, opacity: 1 }, { y: 100, opacity: 0, duration: 0.8 }, "-=0.6")
          .fromTo(nextTitleEl, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, `-=0.8`)
          .fromTo(nextDescEl, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.8")
          .fromTo(nextCtaEl, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.8")
          .fromTo(nextMediaEl, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=1.0");



    }, { scope: slidesContainerRef, dependencies: [activeSlideInd] } );
  return (
    <>
        <div className="all-slides" ref={slidesContainerRef}>
            {
            slides.map((v, i) => {
                return (<div key={i} className={`slider-item ${ i === activeSlideInd ? 'active' : '' }`}>
                        <div className="info-box">
                            <h2 dangerouslySetInnerHTML={{__html: v.title}}></h2>
                            <p>{v.description}</p>
                            <TransitionLink href={v.ctaurl}>{v.cta}</TransitionLink>
                        </div>
                        <div className="media-box">
                            <Image src={v.mediasrc} width={1000} height={600} alt="Mwungano" />
                        </div>
                        </div>)
            })
            }
        </div>
        <div className="slide-controls">
            {
                slides.map((v, i) => (<button key={i} className={`slider-item-btn ${ i === activeSlideInd ? 'active' : '' }`} onClick={() => updateSlide(i) }></button>))
            }
        </div>    
    </>
  )
}

export default HeroSliderV0Client