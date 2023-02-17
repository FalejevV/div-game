import { IToggle } from "interface";
import styled, { css } from "styled-components";



export const SettingsWindowContainer = styled.div<IToggle>`
    max-width: 370px;
    width:100%;
    overflow-y: hidden;
    padding:15px;
    background-color: #babeb1;
    z-index: 100;
    position: absolute;
    right:15px;
    top:calc(-50vh - 500px);
    transition: top 0.5s, opacity 0.7s;
    opacity:0;
    border:5px solid #929789;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    ${({ istoggled }) => istoggled && css`
        top:95px;
        opacity:1;
        pointer-events: auto;
    `}
    display:flex;
    flex-direction: column;
    gap:25px;
    box-shadow: 10px 25px 0px 4px rgba(0,0,0,0.3);
    @media(max-width:500px){
        left:0px;
        right:0px;
        width:100%;
        max-width:unset;
        box-shadow: 0px 25px 0px 4px rgba(0,0,0,0.3);
    }
`


export const SettingsLoadContainer = styled.div`
    display:flex;
    align-items: center;
    gap:15px;
    justify-content: space-between;
`

export const SettingsLoadButton = styled.button`
    font-size: 20px;
    border:4px solid #929789;
    background-color: #babeb1;
    width:60px;
    height:40px;
    align-self: flex-end;

    cursor: pointer;

    &:hover{
        filter: brightness(1.1);
    }
`

export const SettingsResetProgress = styled.button`
    font-size: 20px;
    border:4px solid #793023;
    background-color: #babeb1;
    padding:5px 10px;
    width:100%;
    align-self: flex-end;
    color:#793023;
    cursor: pointer;

    &:hover{
        filter: brightness(1.1);
    }
`

export const SettingsButtonsContainer = styled.div`
    display:flex;
    align-items: center;
    width:100%;
    gap:15px;
    flex-direction: column;
    justify-content: space-between;
`

export const SettingsGetSaveButton = styled.button`
    font-size: 20px;
    border:4px solid #929789;
    background-color: #babeb1;
    width:100%;
    padding:5px 10px;
    cursor: pointer;
    
    &:hover{
        filter: brightness(1.1);
    }
`