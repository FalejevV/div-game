import { IToggle } from "interface";
import styled, { css } from "styled-components";

export const ShopWindowContainer = styled.div<IToggle>`
    max-width: 470px;
    width:100%;
    height:480px;
    overflow-y: hidden;
    padding:15px;
    background-color: #babeb1;
    z-index: 100;
    position: absolute;
    left:15px;
    top:calc(-50vh - 500px);
    transition: top 0.5s, opacity 0.7s;
    opacity:0;
    border:5px solid #929789;
    pointer-events: none;
    box-shadow: 10px 25px 0px 4px rgba(0,0,0,0.3);
    ${({ istoggled }) => istoggled && css`
        top:95px;
        opacity:1;
        pointer-events: auto;
    `}
    display:flex;
    flex-direction: column;
    gap:25px;


    @media(max-width:500px){
        box-shadow: 0px 25px 0px 4px rgba(0,0,0,0.3);
        left:0px;
        width:100%;
        max-width:unset;
    }
`

export const ShopWindowHeaderContainer = styled.div`
    width:100%;
    display:flex;
    height:45px;
    justify-content: space-between;
    align-items: center;
    gap:15px;
    user-select: none;
`

export const ShopWindowHeaderTabs = styled.div`
    display:flex;
    align-items: center;
    gap:15px;
`

