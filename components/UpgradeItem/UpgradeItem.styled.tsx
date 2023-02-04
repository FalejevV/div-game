import styled, { css } from "styled-components";
import Image from "next/image";
import { IToggle } from "interface";

export const UpgradeContainer = styled.div`
    width:100%;
    height:70px;
    display:flex;
    align-items: center;
    gap:15px;
`

export const UpgradeImage = styled(Image)`
    image-rendering: crisp-edges;
`

export const UpgradeText = styled.p`
    font-size: 20px;
    font-weight: bold;
    color:#69362E;
    padding: 5px 0px;
`

export const UpgradePurchaseImage = styled(Image)<IToggle>`
    image-rendering: crisp-edges;
    cursor: pointer;

    &:hover{
        filter:brightness(1.2);
    }


    ${({ istoggled }) => !istoggled && css`

        &:hover{
            filter:brightness(1);
        }
        opacity: 0.4;
    `}
`

export const UpgradePurchaseImageContainer = styled.div`
    display: flex;
    align-items: center;
`

export const UpgradePurchaseIndicator = styled.p`
    font-weight: bold;
    color:#4B203C;
    padding:3px 8px;
    font-size: 20px;
    user-select: none;
`