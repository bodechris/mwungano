"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ease } from "@/lib/gsap";

import styled from "styled-components";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.fromTo(
      "[data-page]",
      { autoAlpha: 0, y: 12 },
      { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.inOut" }
    );
  }, []);

  return (
    <TemplatePage1 data-page style={{ minHeight: "100vh" }}>        
        {children}        
    </TemplatePage1>
  );
}

const TemplatePage1 = styled.div` 
  margin: 0 auto; 
  width: 100% !important;
  height: auto;
  // display: flex;  
  // flex-direction: column;  
  // border: 5px solid skyblue;

  -webkit-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
  -moz-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
  -ms-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
  transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
`;

