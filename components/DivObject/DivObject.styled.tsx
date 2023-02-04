import { IPosition } from "interface";
import styled, { css } from "styled-components";


export const DivObjectBoardContainer = styled.div`
    width:100%;
    max-width:1000px;
    aspect-ratio: 16 / 10;
    position: relative;

    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%2300000042' stroke-width='9' stroke-dasharray='5%2c20' stroke-dashoffset='35' stroke-linecap='square'/%3e%3c/svg%3e");
    
    &:after{
        content: "";
        position: absolute;
        top:50%;
        left:50%;
        width:50%;
        aspect-ratio: 2 / 1;
        background-color:green;
        transform: translate(-50%, -50%);
        opacity: 0.1;
    }
`

export const DivObjectItself = styled.div<IPosition>`
    width:50%;
    aspect-ratio: 2 / 1;
    background-color:#ffffff2c;
    border:2px solid black;
    position:absolute;
    transition: all 0.3s;
    left: ${({ left }) => left+"%" || '50%'};
    top: ${({ top }) => top+"%" || '50%'};
    transform: translate(-50%, -50%);
`