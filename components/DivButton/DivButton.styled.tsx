import styled, { css } from "styled-components";
import Image from "next/image";
import { IToggle } from "interface";


export const DivButtonImage = styled.img`
    width:100%;
    height:100%;
    max-width: 180px;
    max-height: 198px;
    object-fit: contain;
    image-rendering: pixelated;
    position: absolute;
    left:0px;
    top:0px;
    opacity:1;
    
`

export const DivButtonImagePress = styled.img`
    width:100%;
    height:100%;
    object-fit: contain;
    image-rendering: pixelated;
    position: absolute;
    left:0px;
    top:0px;
    opacity:0;
    max-width: 180px;
    max-height: 198px;
`


export const DivBittonContainer = styled.div<IToggle>`
    width:100%;
    max-width:180px;
    aspect-ratio: 1 / 1.1;
    cursor: pointer;
    margin: 0 auto;
    position: relative;
    &:hover{
        filter:brightness(1.1);
    }

    &:active{
        ${DivButtonImage}{
            opacity:0;
        }

        ${DivButtonImagePress}{
            opacity:1;
        }
    }

    ${({ istoggled }) => istoggled && css`
        ${DivButtonImage}{
            opacity:0;
        }

        ${DivButtonImagePress}{
            opacity:1;
        }
    `}
    
`