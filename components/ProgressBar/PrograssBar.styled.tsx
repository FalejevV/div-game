import { ICount, IToggle } from "interface";
import styled, { css } from "styled-components";

export const ProgressBarContainer = styled.div`
    max-width: 450px;
    width:100%;
    height:40px;
    margin: 0 auto;
    margin-top:10px;
    border: 4px solid #8F8C8F;
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 20px;
`

export const ProgressBarText = styled.p`
    width:100%;
    font-size: 19px;
    color:black;
    text-align: center;
    z-index: 3;
`

export const ProgressBarIndicator = styled.div.attrs((props:ICount) => ({
    style:{
        width: `calc(${props.count} * 4%)`
    }
    }))<ICount & IToggle>`
    position: absolute;
    max-width: 100%;
    height:100%;
    left:0px;
    top:0px;
    background-color: #8cfe95;
    transition: width 0.2s;
    width:0%;

    transition: all 0s;

    ${({ istoggled }) => istoggled && css`
        transition: all 0.3s;
    `}

`

export const ActionStats = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:20px;
    position: absolute;
    top:-28px;
    gap:25px;
`

export const ActionText = styled.p`
    white-space: nowrap;
    font-size:17px;
`