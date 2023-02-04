import { IToggle } from "interface";
import styled, { css } from "styled-components";


export const ShopWindowContainer = styled.div<IToggle>`
    max-width: 400px;
    width:100%;
    height:500px;
    overflow-y: hidden;
    padding:15px;
    background-color: #babeb1;
    z-index: 100;
    position: absolute;
    left:-100vw;
    top:95px;
    transition: left 0.3s;
    border:5px solid #69412ece;
    ${({ istoggled }) => istoggled && css`
        left:15px;
    `}
    display:flex;
    flex-direction: column;
    gap:25px;
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

