import styled, { css } from "styled-components";
import Image from "next/image";
import { IToggle } from "interface";

export const UpgradeContainer = styled.div`
    width:100%;
    height:70px;
    display:flex;
    align-items: center;
    gap:15px;
    user-select: none;
`

export const UpgradeImage = styled.img`
    image-rendering: crisp-edges;
    width:70px;
    height:70px;
`

export const UpgradeText = styled.p`
    font-size: 20px;
    font-weight: bold;
    color:#69362E;
    padding: 5px 0px;
    flex:1 auto;

    @media(max-width:410px){
        font-size: 16px;
    }
`

export const UpgradePurchaseImage = styled.img<IToggle>`
    image-rendering: crisp-edges;
    cursor: pointer;
    width:50px;
    height:50px;
    
    &:hover{
            filter:brightness(1);
        }
    opacity: 0.4;


    ${({ istoggled }) => istoggled && css`

        &:hover{
            filter:brightness(1.2);
        }
        opacity: 1;
    `}
    
`

export const UpgradePurchaseImageContainer = styled.div`
    display: flex;
    align-items: center;
    gap:5px;
    padding-left:10px;
`

export const UpgradeInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:5px;
    align-items: flex-end;
`

export const UpgradeLevelText = styled.div`
    white-space: nowrap;
    font-size: 18px;
`

export const UpgradePriceText = styled.div`
    white-space: nowrap;
    font-size: 18px;
`