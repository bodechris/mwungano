import styled from "styled-components";
import { ReactNode } from 'react';

type PageLayoutV0Type = {
    children: ReactNode
}
function PageLayoutV0( { children }: PageLayoutV0Type ) {
  return (
    <PageLayoutV0Wrapper>
        {
            children
        }
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
    gap: 0.5rem;

    margin-top: 20vh;

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

`;