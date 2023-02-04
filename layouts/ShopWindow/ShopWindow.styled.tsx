import { IToggle } from "interface";
import styled, { css } from "styled-components";


export const ShopWindowContainer = styled.div<IToggle>`
    max-width: 400px;
    width:100%;
    height:500px;
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    padding:15px;
    background-color: #babeb1;
    z-index: 100;
    position: absolute;
    left:-100vw;
    top:95px;
    transition: left 0.3s;
    border:5px solid black;
    ${({ toggle }) => toggle && css`
        left:15px;
    `}
`

export const ShopWindowHeaderContainer = styled.div`
    width:100%;
    display:flex;
    height:45px;
    justify-content: space-between;
    align-items: center;
    gap:15px;
`

export const ShopWindowHeaderTabs = styled.div`
    display:flex;
    align-items: center;
    gap:15px;
`

