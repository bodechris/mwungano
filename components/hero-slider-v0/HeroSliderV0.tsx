
import styled from 'styled-components';
import HeroSliderV0Client from "./HeroSliderV0Client";


function HeroSliderV0() {
  const slides = [
    {
      title: "Shaping Reputations That <b>Move Africa Forward</b>",
      description: "We help organisations build trust, credibility, and influence across Africa through strategic communications, ESG storytelling, and purpose-led reputation management.",
      cta: "Discover How We Work",
      ctaurl: "/get-started",
      mediasrc: "/images/skylines-1.webp"
    },
    {
      title: "<b>Deep African Insight.</b> Global Standards.",
      description: "With operations across Anglophone, Francophone, and Lusophone markets, Mwungano helps organisations navigate complexity and succeed across diverse African landscapes.",
      cta: "Explore Our Footprint",
      ctaurl: "/work",
      mediasrc: "/images/slide-2.webp"
    },
    {
      title: "Purpose-Led <b>Communications That Deliver</b> Impact",
      description: "We align strategy, storytelling, and sustainability to help organisations communicate their purpose with clarity, credibility, and measurable outcomes.",
      cta: "Our ESG & Sustainability Work",
      ctaurl: "/get-started",
      mediasrc: "/images/slide-3.webp"
    },
    {
      title: "<b>More Than Advisors.</b> Trusted Partners.",
      description: "We work as an extension of your team — building long-term partnerships that strengthen reputation, stakeholder trust, and organisational resilience.",
      cta: "Partner With Mwungano",
      ctaurl: "/work",
      mediasrc: "/images/slide-4.webp"
    },
    {
      title: "Where <b>Strategy</b> Meets <b>Influence</b>",
      description: "From crisis communications to thought leadership and investor relations, we help leaders shape narratives that inspire confidence and drive action.",
      cta: "See What We Do",
      ctaurl: "/work",
      mediasrc: "/images/slide-5.webp"
    }
  ];

  return (
    <HeroSliderV0Wrapper>
      <HeroSliderV0Client slides={ slides } />
    </HeroSliderV0Wrapper>
  )
}

export default HeroSliderV0;


const HeroSliderV0Wrapper = styled.div`
 margin: 0 auto;
  width: 95%;
  height: 800px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  position: relative;

  margin-top: 80px;

  -webkit-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
  -moz-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
  -ms-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
  transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);


  .all-slides {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    z-index: 0;

    .slider-item {
      margin: 0 auto;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0; left: 0;
      // display: none;
      display: flex;
      inset: 0;
      opacity: 0;
      pointer-events: none;

      .info-box {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;


        padding: 1rem;
        filter: drop-shadow(#fff 5px 10px 25px);
        position: absolute;
        top: 0; left: 0;
        z-index: 10;

        h2 {
          margin-top: 8vw;
          font-size: clamp(2rem, 10vw, 7rem);
          line-height: 1.0;
          letter-spacing: 0;
          font-weight: 300;
          position: relative;

          b {
            font-weight: 600;
          }
        }

        p {
          font-size: var(--mw-font-size-x-large);
          line-height: 1.2;
          letter-spacing: 0;
          position: relative;
        }

        a {
          margin-top: 2rem;
          position: relative;
          width: max-content;
          height: auto;
          padding: 10px 20px;
          border: 2px solid #222;
          background: #fff;
          color: #222;

          font-size: var(--mw-font-size-large);
          font-weight: 800;

          -webkit-box-shadow: 0px 0px 0px 2px rgba(0,0,0,0);
          -moz-box-shadow:    0px 0px 0px 2px rgba(0,0,0,0);
          box-shadow:         0px 0px 0px 2px rgba(0,0,0,0); 

          -webkit-transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          -moz-transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          -ms-transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

          &:hover {
            background: #222;
            color: #f7f7f7;

            -webkit-box-shadow: 20px 20px 5px 2px rgba(0,0,0,0.08);
            -moz-box-shadow:    20px 20px 5px 2px rgba(0,0,0,0.08);
            box-shadow:         20px 20px 5px 2px rgba(0,0,0,0.08); 
          }
        }
      }
      .media-box {
        height: 100%;
        overflow: hidden;

        background: var( --mw-color-primary );
        z-index: 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          // filter: grayscale(40%) brightness(120%) contrast(60%);
          // mix-blend-mode: overlay;
        }
      }

    }

    .slider-item.active {
      display: flex;
      opacity: 1;
      pointer-events: auto;
    }

    @media all and (min-width: 768px) {
      .slider-item {

        .info-box {
          flex: 3;
          position: relative;

          h2 {
            // width: min(800px, 100%);
            }
            
          p {
              width: min(1000px, 100%);          
          }
        }
        .media-box {
          flex: 1;
          
        }

      }

    .slider-item.active {
      .info-box {}
      .media-box {}
    }


    }
  }

  .slide-controls {
    margin: 0 auto;
    width: max-content;
    min-width: 200px;
    height: auto;
    min-height: 20px;
    border-radius: 30px;
    background: #fff3;

    backdrop-filter: blur(30px);
    -moz-backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);

    z-index: 10;

    position: absolute;
    bottom: 50px;

    
    @media all and (min-width: 768px) {
      bottom: 50px; right: 50px;
    }

    display: flex;
    padding: 0.5rem 1rem;
    justify-content: space-evenly;
    gap: 0.5rem;

    button {
      width: 15px;
      height: 15px;
      position: relative;
      border-radius: 30px;
      background: #fff5;
      cursor: pointer;

      -webkit-transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      -moz-transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      -ms-transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    button:hover {
      background: #fff;
    }
  }

`;


