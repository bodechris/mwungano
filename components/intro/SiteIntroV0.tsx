'use client';

import { useGlobalAppStates } from '@/context/GlobalAppProvider';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP); // register any plugins, including the useGSAP hook

function SiteIntroV0() {
    const { playIntro } = useGlobalAppStates();

    const introRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);


    useGSAP(() => {
        if( !introRef.current || !playIntro) return;

        tl.current = gsap
        .timeline()
        .set(".content .intro-logo", { y: 20 })
        .fromTo(".content .intro-logo .logo-mark", { y: 100, opacity: 0, clipPath: "inset(100% 0% 0% 0%)", }, { y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "power4.out" }) 
        .fromTo( ".content .intro-logo .logo-text", { y: -50, opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }, { y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "power4.out" }, "-=0.9" )
        .to( ".content .intro-logo", { y: 0, duration: 0.8, ease: "power4.inOut", delay: 0.3 } )
        .fromTo( ".content .into-logo-text", { y: -20, opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }, { y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "power4.out" }, "-=0.6" )
        .fromTo( introRef.current, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.8, duration: 1.2, ease: "power4.inOut", delay: 1.0, onComplete: () => {
            // done intro
            introRef.current?.style.setProperty("display", "none");
        } } )
        ;

    }, { dependencies: [playIntro], scope: introRef });


    if( !playIntro ) return null;
  return (
    <SiteIntroV0Wrapper ref={introRef}>
        <div className="content">
            <div className="intro-logo">
                <svg viewBox="0 0 658.2 488.45">
                    <g>
                        <g className="logo-mark">
                            <polygon points="437.93 0 409.89 0 381.85 53.34 381.85 332.2 437.93 332.2 437.93 0"/>
                            <polygon points="217.69 0 217.69 332.2 273.76 332.2 273.76 53.34 245.72 0 217.69 0"/>
                            <path d="M357.65,233.5v-113.28c-14.54,23.48-27.79,47.3-27.79,47.3,0,0-17.02-27.79-28.03-47.3v114.27l28.03,50.62,27.79-51.62Z"/>
                        </g>
                        <g className="logo-text">
                            <polygon points="44.57 461.1 25.51 411.8 0 411.8 0 487.7 21.1 487.7 21.1 445.5 35.53 487.7 53.18 487.7 67.5 445.82 67.5 487.7 88.6 487.7 88.6 411.8 63.19 411.8 44.57 461.1"/>
                            <polygon points="170.52 463.26 158.9 411.8 135.75 411.8 123.8 463.69 114.97 411.8 92.15 411.8 110.56 487.7 136.51 487.7 147.16 441.19 157.61 487.7 183.55 487.7 202.17 411.8 179.35 411.8 170.52 463.26"/>
                            <path d="M249.65,455.83c0,4.02-.99,7.16-2.96,9.42-1.97,2.26-4.9,3.39-8.77,3.39s-6.77-1.11-8.67-3.34c-1.9-2.22-2.85-5.38-2.85-9.47v-44.03h-20.99v44.03c0,7.04,1.38,12.99,4.15,17.87,2.76,4.88,6.57,8.56,11.41,11.03,4.84,2.48,10.35,3.71,16.52,3.71s11.79-1.24,16.85-3.71c5.06-2.48,9.06-6.17,12-11.09,2.94-4.92,4.41-10.85,4.41-17.82v-44.03h-21.1v44.03Z"/>
                            <polygon points="326.19 454.75 298.09 411.8 276.99 411.8 276.99 487.7 298.09 487.7 298.09 445.28 326.19 487.7 347.29 487.7 347.29 411.8 326.19 411.8 326.19 454.75"/>
                            <path d="M425.99,444.42h-39.4v15.18h21.21c-3.16,6.67-8.43,10.01-15.83,10.01-6.24,0-11-1.7-14.26-5.11-3.27-3.41-4.9-8.38-4.9-14.91,0-5.81,1.52-10.44,4.58-13.89,3.05-3.45,7.23-5.17,12.54-5.17,2.87,0,5.36.54,7.48,1.62,2.12,1.08,3.78,2.62,5.01,4.63h22.71c-1.51-7.97-5.38-14.25-11.63-18.84-6.24-4.59-14.14-6.89-23.68-6.89-7.61,0-14.32,1.63-20.13,4.9-5.81,3.27-10.32,7.82-13.51,13.67-3.19,5.85-4.79,12.51-4.79,19.97s1.6,14.23,4.79,20.08c3.19,5.85,7.71,10.41,13.56,13.67,5.85,3.27,12.58,4.9,20.19,4.9,6.24,0,11.8-1.13,16.69-3.39,4.88-2.26,8.92-5.15,12.11-8.67,3.19-3.51,5.61-7.28,7.27-11.3v-20.45Z"/>
                            <path d="M452.58,411.8l-27.67,75.9h22.18l4.09-12.38h26.91l4.09,12.38h22.28l-27.56-75.9h-24.33ZM456.56,459.17l8.07-24.55,8.18,24.55h-16.26Z"/>
                            <polygon points="555.17 454.75 527.07 411.8 505.97 411.8 505.97 487.7 527.07 487.7 527.07 445.28 555.17 487.7 576.27 487.7 576.27 411.8 555.17 411.8 555.17 454.75"/>
                            <path d="M653.03,429.4c-3.45-5.92-8.13-10.53-14.05-13.83-5.92-3.3-12.47-4.95-19.65-4.95s-13.64,1.65-19.59,4.95c-5.96,3.3-10.68,7.91-14.16,13.83-3.48,5.92-5.22,12.61-5.22,20.08s1.74,14.16,5.22,20.08c3.48,5.92,8.2,10.55,14.16,13.89,5.96,3.34,12.49,5.01,19.59,5.01s13.63-1.67,19.59-5.01c5.96-3.34,10.66-7.97,14.1-13.89,3.44-5.92,5.17-12.61,5.17-20.08s-1.72-14.16-5.17-20.08ZM632.09,463.58c-3.12,3.52-7.37,5.27-12.76,5.27s-9.73-1.74-12.81-5.22c-3.09-3.48-4.63-8.2-4.63-14.16s1.54-10.78,4.63-14.26c3.08-3.48,7.36-5.22,12.81-5.22s9.63,1.74,12.76,5.22c3.12,3.48,4.68,8.24,4.68,14.26s-1.56,10.59-4.68,14.1Z"/>
                        </g>
                    </g>
                </svg>
            </div>
            <div className="into-logo-text">
                consultancy
            </div>
        </div>
    </SiteIntroV0Wrapper>
  )
}

export default SiteIntroV0;

const SiteIntroV0Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    z-index: 100000;

    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        
        .intro-logo {
            width: 200px;
            height: auto;

            svg {
                fill: var(--mw-color-primary);
                fill: #222;
                width: 100%;
                height: auto;
                position: relative;

                .logo-mark {
                    will-change: clip-path, transform, opacity;
                }
                .logo-text {
                    will-change: clip-path, transform, opacity;
                }
            }
        }

        .into-logo-text {
            margin-top: 2rem;
            width: 100%;
            text-align: center;
            font-size: clamp(0.8rem, 1vw, 1.1rem);
            letter-spacing: 0.45rem;
            font-weight: 300;
            text-transform: uppercase;
            color: #555;  
            margin-top: 0.5rem;  
        }
    }

    -webkit-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
    -moz-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
    -ms-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
`;