import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import TransitionLink from '../transition/TransitionLink';

function Footer() {
  const dt = new Date();
  return (
    <>

    <SecondaryFooter>
      <div className="content">
        <div className="sect-1">
          <TransitionLink href="/contact">
            <div className="link-text">
              <span>Let&apos;s talk</span>
            </div>
            <div className="link-arrow">
              <div className="arrow-wrapper">
                <svg viewBox="0 0 28 27" fill="none"><path d="M2 1.5H26V25.5" strokeWidth="3" stroke="currentColor"></path> <path d="M24.365 3.13128L2 25.5" strokeWidth="3" strokeLinejoin="round" stroke="currentColor"></path></svg>
                {/* <svg fill="currentColor" viewBox="0 0 22 19"><path d="m10.392 16.88 7.232-7.264-7.264-7.232 1.696-1.76 8.992 8.992-8.96 8.992zM.568 8.304h18.4v2.656H.568z"></path></svg>
                <svg fill="currentColor" viewBox="0 0 22 19"><path d="m10.392 16.88 7.232-7.264-7.264-7.232 1.696-1.76 8.992 8.992-8.96 8.992zM.568 8.304h18.4v2.656H.568z"></path></svg> */}
              </div>
            </div>
          </TransitionLink>          
        </div>
        <div className="sect-2 lets-talk-sect">
          <h3>Let’s Shape Your Reputation Together</h3>
          <p>Whether you are entering a new market, managing reputation risk, strengthening ESG communications, or redefining your narrative, our team is ready to support your next phase of growth.</p>
          {/* <a href="mailto:info@mwungano.com">Book a discovery call</a> */}
        </div>      
      </div>
    </SecondaryFooter>

    <FooterWrapper>
      <div className="footer-top">
        <div className="sect-1">
          <h2>Shaping Reputations Across Africa</h2>
          <TransitionLink href="/" className="footer-logo">
            <svg viewBox="0 0 658.2 488.45">
              <polygon points="437.93 0 409.89 0 381.85 53.34 381.85 332.2 437.93 332.2 437.93 0"/>
              <polygon points="217.69 0 217.69 332.2 273.76 332.2 273.76 53.34 245.72 0 217.69 0"/>
              <path d="M357.65,233.5v-113.28c-14.54,23.48-27.79,47.3-27.79,47.3,0,0-17.02-27.79-28.03-47.3v114.27l28.03,50.62,27.79-51.62Z"/>
              <polygon points="44.57 461.1 25.51 411.8 0 411.8 0 487.7 21.1 487.7 21.1 445.5 35.53 487.7 53.18 487.7 67.5 445.82 67.5 487.7 88.6 487.7 88.6 411.8 63.19 411.8 44.57 461.1"/>
              <polygon points="170.52 463.26 158.9 411.8 135.75 411.8 123.8 463.69 114.97 411.8 92.15 411.8 110.56 487.7 136.51 487.7 147.16 441.19 157.61 487.7 183.55 487.7 202.17 411.8 179.35 411.8 170.52 463.26"/>
              <path d="M249.65,455.83c0,4.02-.99,7.16-2.96,9.42-1.97,2.26-4.9,3.39-8.77,3.39s-6.77-1.11-8.67-3.34c-1.9-2.22-2.85-5.38-2.85-9.47v-44.03h-20.99v44.03c0,7.04,1.38,12.99,4.15,17.87,2.76,4.88,6.57,8.56,11.41,11.03,4.84,2.48,10.35,3.71,16.52,3.71s11.79-1.24,16.85-3.71c5.06-2.48,9.06-6.17,12-11.09,2.94-4.92,4.41-10.85,4.41-17.82v-44.03h-21.1v44.03Z"/>
              <polygon points="326.19 454.75 298.09 411.8 276.99 411.8 276.99 487.7 298.09 487.7 298.09 445.28 326.19 487.7 347.29 487.7 347.29 411.8 326.19 411.8 326.19 454.75"/>
              <path d="M425.99,444.42h-39.4v15.18h21.21c-3.16,6.67-8.43,10.01-15.83,10.01-6.24,0-11-1.7-14.26-5.11-3.27-3.41-4.9-8.38-4.9-14.91,0-5.81,1.52-10.44,4.58-13.89,3.05-3.45,7.23-5.17,12.54-5.17,2.87,0,5.36.54,7.48,1.62,2.12,1.08,3.78,2.62,5.01,4.63h22.71c-1.51-7.97-5.38-14.25-11.63-18.84-6.24-4.59-14.14-6.89-23.68-6.89-7.61,0-14.32,1.63-20.13,4.9-5.81,3.27-10.32,7.82-13.51,13.67-3.19,5.85-4.79,12.51-4.79,19.97s1.6,14.23,4.79,20.08c3.19,5.85,7.71,10.41,13.56,13.67,5.85,3.27,12.58,4.9,20.19,4.9,6.24,0,11.8-1.13,16.69-3.39,4.88-2.26,8.92-5.15,12.11-8.67,3.19-3.51,5.61-7.28,7.27-11.3v-20.45Z"/>
              <path d="M452.58,411.8l-27.67,75.9h22.18l4.09-12.38h26.91l4.09,12.38h22.28l-27.56-75.9h-24.33ZM456.56,459.17l8.07-24.55,8.18,24.55h-16.26Z"/>
              <polygon points="555.17 454.75 527.07 411.8 505.97 411.8 505.97 487.7 527.07 487.7 527.07 445.28 555.17 487.7 576.27 487.7 576.27 411.8 555.17 411.8 555.17 454.75"/>
              <path d="M653.03,429.4c-3.45-5.92-8.13-10.53-14.05-13.83-5.92-3.3-12.47-4.95-19.65-4.95s-13.64,1.65-19.59,4.95c-5.96,3.3-10.68,7.91-14.16,13.83-3.48,5.92-5.22,12.61-5.22,20.08s1.74,14.16,5.22,20.08c3.48,5.92,8.2,10.55,14.16,13.89,5.96,3.34,12.49,5.01,19.59,5.01s13.63-1.67,19.59-5.01c5.96-3.34,10.66-7.97,14.1-13.89,3.44-5.92,5.17-12.61,5.17-20.08s-1.72-14.16-5.17-20.08ZM632.09,463.58c-3.12,3.52-7.37,5.27-12.76,5.27s-9.73-1.74-12.81-5.22c-3.09-3.48-4.63-8.2-4.63-14.16s1.54-10.78,4.63-14.26c3.08-3.48,7.36-5.22,12.81-5.22s9.63,1.74,12.76,5.22c3.12,3.48,4.68,8.24,4.68,14.26s-1.56,10.59-4.68,14.1Z"/>
            </svg>
          </TransitionLink>
        </div>
        <div className="sect-2">
          
          <div className="sub-sect">
            <h3>Menu</h3>
            <ul>
              <li><TransitionLink href="/">Home</TransitionLink></li>    
              <li><TransitionLink href="/about">About</TransitionLink></li>    
              <li><TransitionLink href="/services">Services</TransitionLink></li>    
              <li><TransitionLink href="/teams">Teams</TransitionLink></li>    
              <li><TransitionLink href="/contact">Contact</TransitionLink></li>    
            </ul> 
          </div>          
          <div className="sub-sect">
            <h3>Social</h3>
            <ul>
              <li><TransitionLink href="https://linkedin.com" target='_blank' title="Follow us on LinkedIn">LinkedIn</TransitionLink></li>    
              <li><TransitionLink href="https://instagram.com" target='_blank' title="Follow us on Instagram">Instagram</TransitionLink></li>    
              <li><TransitionLink href="https://youtube.com" target='_blank' title="Follow us on Youtube">Youtube</TransitionLink></li>    
            </ul> 
          </div>
          <div className="sub-sect">
            <h3>Legal</h3>
            <ul>
              <li><TransitionLink href="/privacy-policy">Privacy</TransitionLink></li>    
              <li><TransitionLink href="/cookie-policy">Cookie</TransitionLink></li>    
              <li><TransitionLink href="/terms-of-use">Terms</TransitionLink></li>    
            </ul> 
          </div>    
          <div className="sub-sect">
            <h3>Contact us</h3>
            <ul>
              <li>
                <span>61 Katherine Street, Sandton, 2146, Johannesburg, South Africa</span>
              </li>    
              <li>United Kingdom (Satellite Outreach)</li>    
              <li>Email: info@mwunganoesg.com</li>    
              <li>Phone: +27 10 300 6000 | +27 76 090 8496</li>    
            </ul>
            <p>Pan-African Communications • ESG & Sustainability • Strategy • Reputation</p>
          </div>      
        </div>   
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; { dt.getFullYear() }. MWUNGANO. All rights reserved.</p>
        <TransitionLink className="minimal-link" href="https://www.bodilum.com" target="_blank">Made by Bodilum</TransitionLink>
      </div>
    </FooterWrapper>
    </>
  )
}

export default Footer;


const SecondaryFooter = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 60vh;
  padding: 20px;
  background: #fff;
  display: flex;
  position: relative;
  justify-content: center;
  margin: 20vh 0;

  .content {
    width: 95%;
    height: auto;
    display: flex;
    position: relative;
    flex-direction: column;

    background: #eee;
    padding: 2rem;

    gap: 1rem;

    @media all and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }


    [class^="sect-"] {
      flex: 1;  
      width: 100%;
      position: relative; 
      gap: 0.5rem;
    }

    .sect-1 {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;

      a {
        width: 100%;
        height: auto;
        position: relative;
        flex-direction: column;
        position: relative;
        display: flex;

        justify-content: flex-start;
        align-items: center;

        color: #000;
        text-decoration: none;

        // background: pink;

        .link-text {
          flex: 2;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: clamp(80px, 15vw, 160px);
          line-height: 1;
          letter-spacing: -0.02em;
          font-weight: 600;
          // background: yellow;          
        }
        .link-arrow {
          flex: 1;
          display: flex;
          // background: palegreen;
          position: relative;

          overflow: hidden;
          .arrow-wrapper {
            width: 300% !important;
            height: auto;
            display: block;
            position: relative;
            // border: 1px solid red;
            svg {
              width: 100%;
              height: auto;
              // max-width: 200px;
            }
          }

        }
      }

      a:hover {
        color: #333;

      }


      @media all and (min-width: 768px) {
        flex-direction: row;
        justify-content: flex-start;
        a {
          flex-direction: row;
          justify-content: flex-start;

          .link-text {
          }
        .link-arrow {
          svg {
            width: 100%;
            height: auto;
          }
        }

        }
      }
    }
    .sect-2 {}

    .lets-talk-sect {
      gap: 2rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h3 {
        width: min(600px, 100%);
        font-weight: 600;
        font-size: clamp(2.5rem, 3vw, 5.5rem);
        line-height: 1.1;
        letter-spacing: -0.05em;
      }

      p {
        width: min(1000px, 100%);
        font-size: clamp(1rem, 2vw, 1.4rem);
      }
    
    }


  }
`;


const FooterWrapper = styled.footer`
  width: 100%;
  height: 60vh;
  padding: 20px;
  background: #010101;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  color: #eee;

  [class^="footer-"] {
    width: 95%;
    height: auto;
    position: relative;
    display: flex;
  }

  .footer-top {
    flex: 5;
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 1rem;

    color: #aaa;

    padding: 2rem 0;

    @media all and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }


    [class^="sect-"] {
      flex: 2;   
    }

    .sect-1 {      
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1rem;

      

      .footer-logo {

        width: 150px;
        height: auto;
        display: flex;

        svg { fill: #aaa; width: 100%; height: auto; }

      }

    }

    .sect-1:before {
      content: "■";
      width: auto;
      position: absolute;
      top: 0; left: 0;
    }
    .sect-1 {
      width: 100%;
      position: relative;
      
      h2 {
        margin-left: 2rem;
        position: relative;
      }
    }

    .sect-2 {
      flex: 3;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 1rem;

      font-size: clamp(0.6rem, 1vw, 0.9rem);

      .sub-sect {
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
        width: 100%;
        position: relative;

        h3 {
          text-transform: uppercase;
          font-weight: 600;
          color: #fff;
        }
        ul {
          width: 100%;
          heght: auto; 
          display: flex;
          flex-direction: column;
          list-style: none;
          gap: 0.6rem;
          
          li {
            width: 100%;
            margin: 0 auto;
            position: relative;
            display: block;
            
            a {
              width: max-content;
              position: relative;
              color: #aaa;
              text-decoration: none;

              -webkit-transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
              -moz-transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
              -ms-transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
              transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

              &:hover {
                color: #fff;
              }
            }
            a:before {
              content: "";
              width: 100%;
              height: 1px;
              background: #aaa;
              position: absolute;
              bottom: -2px; left: 0;

              -webkit-transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
              -moz-transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
              -ms-transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
              transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);

              transform: scaleX(0);
              transform-origin: right;
            }

            a:hover:before {
              transform-origin: left;
              transform: scaleX(1);
            }
              
          }
        }
      }
    }
  }
  .footer-bottom {
    flex: 1;
    border-top: 0.5px solid #333;
    justify-content: space-between;
    // text-transform: uppercase;
    display: flex;
    gap: 1rem;

    padding: 1rem 0;
    font-size: clamp(0.5rem, 1vw, 0.8rem);
    color: #aaa;

    a {
      color: #555;
      text-decoration: none;

      &.minimal-link {
        font-size: clamp(0.3rem, 1vw, 0.5rem);
        opacity: 0.6;
      }
    }
  }
`;


