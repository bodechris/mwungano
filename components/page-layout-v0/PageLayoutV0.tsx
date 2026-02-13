import styled from "styled-components";
import { ReactNode } from 'react';

type PageLayoutV0Type = {
    children: ReactNode
}
function PageLayoutV0( { children }: PageLayoutV0Type ) {
  return (
    <PageLayoutV0Wrapper>
        {children}
    </PageLayoutV0Wrapper>
  )
}

export default PageLayoutV0;


const PageLayoutV0Wrapper = styled.div`
    margin: 0 auto;
    width: 95%;
    height: auto;
    min-height: 40vh;
    // background: blue;
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 5rem;

    margin-top: 20vh;

    @media all and (min-width: 768px) {
      // flex-direction: row;
      gap: 10rem;
    }

    h1 {
      width: max-content !important;
      color: #eee;
      background: #222;
      position: relative;
      font-weight: 600;
      font-size: var(--mw-font-size-small);
      padding: 10px;
      line-height: 0.9;
      letter-spacing: 0;
    }

    h2 {
      font-weight: 300;
      font-size: clamp(40px, 8vw, 120px);
      line-height: 0.9;
      letter-spacing: 0;
    }

    a.cta-with-shadow-1 {
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


    [class^="sect"] {
      display: flex;
      width: 100%;
      height: auto;
      flex-direction: column;
      gap: 2rem;
      position: relative;

      .sub-sect {
        display: flex;        
        height: max-content;
        flex-direction: column;
        position: relative;
        flex: 1;
        gap: 1rem;

        p {
          width: min(400px, 100%);
          height: auto;
          font-size: clamp(1.5rem, 2vw, 3rem);
          font-weight: 200;
          line-height: 1.2;
          letter-spacing: -0.02em;
          position: relative;
          // color: #aaa;

          display: flex;
          flex-direction: column;
          gap: 0.2rem;

          a {
            color: #111;
            }
          a:hover {
            color: #000;
            text-decoration: underline;
          }
        }

        .mini-heading-1 {
          font-size: var(--mw-font-size-small);
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: 0;
          text-transform: uppercase;
          position: relative;
          display: block;
          padding-left: 1.5rem;
        }
        .mini-heading-1:before {
          content: "◼";
          position: absolute;
          left: 0;
          top: 0;
          line-height: 1.0;
        }

        .sect-box {
          height: max-content;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex: 1;

          .office-map {
            width: 100%;
            height: 600px;
            background: #eee;
            position: relative;
            display: block;

            img {
              width: 100%;
              height: 100%;
              display: block;
              object-fit: cover;
              position: relative;
            }
          }
        }

        .img-box-1 {
          display: block;
          width: min(400px, 100%);
          height: 500px;
          position: relative;
          // border: 2px solid red;
          img {
            width: 100%;
            height: 100%;
            display: block;
            position: relative;
            object-fit: cover;
          }
        }
      } 
        
      @media all and (min-width: 768px) {
        flex-direction: row;
        .sub-sect {
          flex-direction: row;
        }
      }
    }

    .sect.reverse {
      // flex-direction: column-reverse;

      @media all and (min-width: 768px) {
        flex-direction: row-reverse;
      }
    }
    .sect {}

    .sect-page-header {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      position: relative;

      h2 {
        font-weight: 700;
        line-height: 1.0;
        letter-spacing: -4px;
        position: relative;
      }

      p {
        width: min(800px, 100%);
        font-weight: 300;
        font-size: var(--mw-font-size-xx-large);
        line-height: 1.2;
        letter-spacing: -0.02em;
        position: relative;
        display: block;
        padding-left: 14vw;
      }
      p:before {
        content: "";
        width: 10vw;
        height: 10px;
        background: #111;
        position: absolute;
        top: 10px; left: 0;
      }
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      min-height: 80vh;
      gap: 1rem;
      background: #111;
      position: relative;
      padding: 4rem;
      color: #eee;

      h2 {
        width: 100%;
        height: auto;
        display: block;
        font-size: var(--mw-font-size-xxx-large);
        font-weight: 200;
        line-height: 1.0;
        letter-spacing: -0.03em;
        color: #eee;
      }

      form {
        width: 100%;
        max-width: 100% !important;
        height: auto;
        display: block;
        flex-direction: column;
        gap: 1rem;

        label {
          display: flex;
          flex-direction: column;
          font-size: var(--mw-font-size-large);
          font-weight: 300;
          gap: 0.5rem;

          input, textarea
            {
              width: 100%;
              padding: 10px;
              font-size: var(--mw-font-size-large);
              font-weight: 300;
              border: 2px solid #eee;
              background: transparent;
              color: #eee;
              resize: none;
            }
        }

        button {
          width: 100%;
          cursor: pointer;
          padding: 10px 20px;
          font-size: var(--mw-font-size-large);
          font-weight: 600; 
          color: #777;
          background: #000;
          border: none;
          margin-top: 1rem;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;

          position: relative;
          font-size: var(--mw-font-size-xxx-large);
          font-weight: 300;

          transition: all 0.3s ease;
          svg {
            width: 40px;
            height: auto;
            position: relative;
            transition: all 0.3s ease;
            stroke: #999;
          }

          &:hover {
            background: #fff;
            color: #000;

            svg {
              width: 60px;
            }

          }
        }
      }
    }


  }

  .page-sect-1 {
    .sub-sect { 
      flex: 1;
      flex-direction: column;
      h3 {
        font-size: var(--mw-font-size-x-large);
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: -0.02em;
      }
      p {
        font-size: clamp(12px, 2vw, 20px);
        font-weight: 400;
        line-height: 1.4;
        letter-spacing: -0.02em;
        color: #555;
      }
    }
      
    .sub-sect:nth-child(1) { 
      flex: 3;
      background: skyblue;

    }
  }

  // media box
  .media-box {
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }

  .page-sect-2 {
    .sub-sect {
      flex: 1;
      flex-direction: column;

      h2 {
        font-size: clamp(40px, 5vw, 80px);
        font-weight: 300;
        line-height: 0.9;
        letter-spacing: 0;
      }

      p {
        width: min(800px, 100%);
        font-size: clamp(12px, 2vw, 20px);
        font-weight: 300;
        line-height: 1.4;
        letter-spacing: -0.01em;
      }
    }
  }

`;