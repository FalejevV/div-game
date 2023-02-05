import styled, { css } from "styled-components";
import Image from "next/image";
import { IToggle } from "interface";


export const ImageButtonOFF = styled.img`
    width:70px;
    height:70px;
    object-fit: contain;
    position: absolute;
    top:0px;
    left:0px;
    opacity:1;
`

export const ImageButtonON = styled.img`
    width:70px;
    height:70px;
    object-fit: contain;
    position: absolute;
    top:0px;
    left:0px;
    opacity:0;
`


export const ImageButtonContainer = styled.div<IToggle>`
    width:70px;
    height:70px;
    image-rendering: crisp-edges;
    position: relative;
    cursor: pointer;

    &:hover{
        filter: brightness(1.1);
    }
    
    ${({ istoggled }) => istoggled && css`
        ${ImageButtonOFF}{
            opacity:0;
        }

        ${ImageButtonON}{
            opacity:1;
        }
    `}
`
