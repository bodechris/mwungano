'use client';


import TransitionLink from '../transition/TransitionLink';
import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';

import { useGSAP } from "@gsap/react";
import { useGlobalAppFuncs, useGlobalAppStates } from '@/context/GlobalAppProvider';

gsap.registerPlugin(useGSAP); // register any plugins, including the useGSAP hook




export const NavMenuList = () => {
    const { showMenu } = useGlobalAppStates();
    const { setShowMenu } = useGlobalAppFuncs();

    const mainMenuRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);
    const tl1 = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        console.log("Menu showMenu changed:", showMenu);
    }, [showMenu]);


    useGSAP(() => {
        if( !mainMenuRef.current ) return;

        // const allLinks = mainMenuRef.current.querySelectorAll('ul li a');
        const allLinks = gsap.utils.toArray<HTMLAnchorElement>(".nav-menu-holder a");
        // console.log("links found:", allLinks?.length, allLinks);

        tl.current?.kill();
        tl1.current?.kill();

        tl.current = gsap.timeline({ paused: true })
        .set( mainMenuRef.current, { display: 'flex', opacity: 0, } )
        .set(allLinks, { y: 100, opacity: 0 })
        .fromTo( mainMenuRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power4.in"} )
        .fromTo( allLinks, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power4.in", stagger: 0.08 }, "-=1" )
        ;

        tl1.current = gsap.timeline({ paused: true })
        .fromTo( allLinks, { y: 0, opacity: 1 }, { y: 100, opacity: 0, duration: 0.5, ease: "power1.in", stagger: 0.08 } )
        .fromTo( mainMenuRef.current, { opacity: 1, }, { opacity: 0, duration: 1, ease: "power1.in", onComplete: () => {     
            if( mainMenuRef.current ) {
                gsap.set( mainMenuRef.current, { display: 'none' } );
            }       
        } } );

        if( !showMenu ) {
            tl1.current.play();
        } else {
            tl.current.play();
        }

        return () => {
            tl.current?.kill();
            tl1.current?.kill();
        }

        
        
    }, { dependencies: [showMenu], scope: mainMenuRef });

    return (
        <div className="nav-menu-holder" ref={mainMenuRef}>
            <ul>
                <li>
                    <TransitionLink href="/">Home</TransitionLink>
                </li>
                <li>
                    <TransitionLink href="/about">About</TransitionLink>
                </li>
                <li>
                    <TransitionLink href="/services">Services</TransitionLink>
                </li>
                <li>
                    <TransitionLink href="/team">Team</TransitionLink>
                </li>
                <li>
                    <TransitionLink href="/contact">Contact</TransitionLink>
                </li>
            </ul>
            <button className="close-menu-btn" aria-label="Close Menu" onClick={() => setShowMenu?.(false)}>
                <svg viewBox="0 0 131.69 36.06">
                <g>
                    <rect y="32.76" width="131.69" height="5"/>
                </g>
                </svg>
            </button>
        </div>
    )
}


export const MainHeaderMenu = () => {
    const { setShowMenu } = useGlobalAppFuncs();
    return (
        <>
        <TransitionLink href="\" className="main-logo">
            <svg viewBox="0 0 898.39 247.62">
                <g>
                    <polygon points="143.27 0 122.37 39.76 122.37 247.62 164.17 247.62 164.17 0 143.27 0"/>
                    <polygon points="0 0 0 247.62 41.8 247.62 41.8 39.76 20.9 0 0 0"/>
                    <path d="M62.72,89.62v85.18l20.89,37.74,20.72-38.48v-84.44c-10.84,17.5-20.72,35.26-20.72,35.26,0,0-12.69-20.72-20.89-35.26Z"/>
                </g>
                <g>
                    <path d="M328.79,86.08v75.9h-21.1v-41.88l-14.32,41.88h-17.66l-14.43-42.2v42.2h-21.1v-75.9h25.51l19.05,49.31,18.62-49.31h25.41Z"/>
                    <path d="M442.36,86.08l-18.62,75.9h-25.94l-10.44-46.51-10.66,46.51h-25.94l-18.41-75.9h22.82l8.83,51.89,11.95-51.89h23.15l11.63,51.46,8.83-51.46h22.82Z"/>
                    <path d="M466.59,86.08v44.03c0,4.09.95,7.25,2.85,9.47,1.9,2.23,4.79,3.34,8.67,3.34s6.8-1.13,8.77-3.39c1.97-2.26,2.96-5.4,2.96-9.42v-44.03h21.1v44.03c0,6.96-1.47,12.9-4.41,17.82-2.94,4.92-6.94,8.61-12,11.09-5.06,2.48-10.68,3.71-16.85,3.71s-11.68-1.24-16.52-3.71c-4.84-2.48-8.65-6.15-11.41-11.03-2.76-4.88-4.15-10.84-4.15-17.87v-44.03h20.99Z"/>
                    <path d="M587.48,161.98h-21.1l-28.1-42.42v42.42h-21.1v-75.9h21.1l28.1,42.95v-42.95h21.1v75.9Z"/>
                    <path d="M642.6,111.05c-1.22-2.01-2.89-3.55-5.01-4.63-2.12-1.08-4.61-1.62-7.48-1.62-5.31,0-9.49,1.72-12.54,5.17-3.05,3.44-4.58,8.07-4.58,13.89,0,6.53,1.63,11.5,4.9,14.91,3.26,3.41,8.02,5.11,14.26,5.11,7.39,0,12.67-3.34,15.83-10.01h-21.21v-15.18h39.4v20.45c-1.65,4.02-4.07,7.79-7.27,11.3-3.19,3.52-7.23,6.41-12.11,8.67-4.88,2.26-10.44,3.39-16.69,3.39-7.61,0-14.34-1.63-20.19-4.9-5.85-3.26-10.37-7.82-13.56-13.67-3.19-5.85-4.79-12.54-4.79-20.08s1.6-14.12,4.79-19.97c3.19-5.85,7.7-10.41,13.51-13.67,5.81-3.26,12.52-4.9,20.13-4.9,9.54,0,17.44,2.3,23.68,6.89,6.24,4.59,10.12,10.87,11.63,18.84h-22.71Z"/>
                    <path d="M718.28,149.6h-26.91l-4.09,12.38h-22.18l27.67-75.9h24.33l27.56,75.9h-22.28l-4.09-12.38ZM713.01,133.45l-8.18-24.55-8.07,24.55h16.26Z"/>
                    <path d="M816.46,161.98h-21.1l-28.1-42.42v42.42h-21.1v-75.9h21.1l28.1,42.95v-42.95h21.1v75.9Z"/>
                    <path d="M839.93,157.72c-5.96-3.34-10.68-7.97-14.16-13.89-3.48-5.92-5.22-12.61-5.22-20.08s1.74-14.16,5.22-20.08c3.48-5.92,8.2-10.53,14.16-13.83,5.96-3.3,12.49-4.95,19.59-4.95s13.73,1.65,19.65,4.95c5.92,3.3,10.6,7.91,14.05,13.83,3.44,5.92,5.17,12.61,5.17,20.08s-1.72,14.16-5.17,20.08c-3.45,5.92-8.15,10.55-14.1,13.89-5.96,3.34-12.49,5.01-19.59,5.01s-13.64-1.67-19.59-5.01ZM872.28,137.86c3.12-3.52,4.68-8.22,4.68-14.1s-1.56-10.78-4.68-14.26c-3.12-3.48-7.37-5.22-12.76-5.22s-9.73,1.74-12.81,5.22c-3.09,3.48-4.63,8.24-4.63,14.26s1.54,10.68,4.63,14.16c3.08,3.48,7.36,5.22,12.81,5.22s9.63-1.76,12.76-5.27Z"/>
                </g>
            </svg>
        </TransitionLink>

        <button className="open-menu-btn" aria-label="Open Menu" onClick={() => setShowMenu?.(true)}>
            <svg viewBox="0 0 131.69 36.06">
            <g>
                <rect width="131.69" height="3.3"/>
                <rect y="32.76" width="131.69" height="3.3"/>
            </g>
            </svg>
        </button>
    </>
    )
}

