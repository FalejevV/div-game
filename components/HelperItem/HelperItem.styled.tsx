import styled, { css } from "styled-components";
import Image from "next/image";
import { IToggle } from "interface";

export const HelperItemContainer = styled.div`
    width:100%;
    height:70px;
    display:flex;
    gap:15px;
    align-items: center;
    user-select: none;

`


export const HelperItemIcon = styled.img`
    width:70px;
    height:70px;
`
export const HelperTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex:1 auto;
`
export const HelperText = styled.p`
    font-size: 20px;
    font-weight: bold;
    color:#69362E;
    padding: 5px 0px;
    user-select: none;
`

export const HelperInfoTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:5px;
    align-items: flex-end;
`

export const HelperPurchaseContainer = styled.div`
    display: flex;
    height:100%;
    align-items: center;
    gap:5px;
`

export const HelperInfoText = styled.p`
    font-size: 18px;
    white-space: nowrap;
`
export const HelperBuyImageButton = styled.img<IToggle>`
    width:50px;
    height:50px;
    grid-row: 1 / span 2;
    cursor: pointer;
    opacity: 0.5;
    
    ${({ istoggled }) => istoggled && css`
        opacity: 1;
        
        &:hover{
            filter:brightness(1.2);
        }
    `}

    
`