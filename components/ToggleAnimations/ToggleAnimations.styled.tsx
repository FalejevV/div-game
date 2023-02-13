import { IToggle } from "interface";
import styled, { css } from "styled-components";


export const ToggleAnimContainer = styled.div`
    display: flex;
    align-items: center;
    gap:15px;
    cursor: pointer;
`

export const ToggleAnimText = styled.p`
    font-size: 16px;
`

export const ToggleAnimCheckbox = styled.div<IToggle>`
    cursor: pointer;
    width:40px;
    height:25px;
    background-color: gray;
    position: relative;
    
    transition: all 0.3s;

    &:after{
        position: absolute;
        content:"";
        width:15px;
        height:15px;
        top:50%;
        left:5px;
        transform: translateY(-50%);
        background-color: #929789;
    }

    ${({ istoggled }) => istoggled && css`
        &:after{
            left:unset;
            right:5px;
            background-color: #9acd7a;
        }
    `}
`