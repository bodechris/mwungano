
import { MainHeaderMenu, NavMenuList } from './HeaderClient';
import styled from 'styled-components';

function Header() {
  return (
    <>
        <SiteNavMenu>
            <NavMenuList />
        </SiteNavMenu>
        <MainSiteHeader>
            <MainHeaderMenu />
        </MainSiteHeader>
    </>
  )
}

export default Header;




export const SiteNavMenu = styled.nav`
margin: 0 auto;
width: 100%;
height: 100vh;
position: fixed;
top: 0;
left: 0;
padding: 4rem;
z-index: 100000;
overflow: hidden;
pointer-events: none;
display: flex;
// background: blue;


.nav-menu-holder {
    width: 100%;
    height: 100%;
    background: #111;
    pointer-events: all;
    color: #eee;
    display: none;
    position: absolute;
    top: 0;
    left: 0;

    align-items: center;
    justify-content: flex-end;

     padding: 2rem 4rem;


     -webkit-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
     -moz-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
     -ms-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
    ul {
        width: 100%;
        height: max-content;
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        // background: pink;
        
        position: relative;
    
        align-items: flex-end;
        justify-content: center;
    
        text-align: right;
    
        gap: 0.1rem;
    
        // background: blue;
    
        li {
            display: block;
            position: relative;
            // border: 1px solid red;
            font-size: clamp(5rem, 6vw, 10rem);
            line-height: 0.8;
            clip-path: inset(0 0 0 0);
            -webkit-transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
            -moz-transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
            -ms-transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        li a {
            display: block;
            font-weight: 900;
            position: relative;
        }
    }


    .close-menu-btn {
        width: 70px;
        height: auto;
        position: absolute;
        top: 14px; right: 39px;
            svg {
                fill: #ccc;
                stroke-width: 1;
                stroke: #ccc;
            }
    }
}



`;


export const MainSiteHeader = styled.header`
   margin: 0 auto;
   width: 95%;
   height: auto;
   position: fixed;
   top: 0; left: 0;
   margin-left: 2.5%;
//    background: blue;
   display: flex;
   justify-content: space-between;
   z-index: 99999;
   

    .main-logo {
        width: 200px;
        height: auto;
        position: relative;
        padding: 1rem;
        svg {
            width: 100%;
            height: auto;
        }
    }


    [class$="-btn"] {
        width: 60px;
        height: auto;
        position: relative;
        // background: pink;
        padding: 0.3rem;
        margin-top: 10px;
        cursor: pointer;

        -webkit-transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        -moz-transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        -ms-transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);

        svg {
            width: 100%;
            height: auto;
            position: relative;

            rect {
                transform-origin: right center;
                transform: scaleX(0.5);
                -webkit-transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
                -moz-transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
                -ms-transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
                transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
            }
            rect:nth-child(1) {
                transform: scaleX(1);
            }
        }

        &:hover svg rect {
            transform: scaleX(1);
        }
        &:hover svg rect:nth-child(1) {
            transform: scaleX(0.5);
        }
    }
   
`;



