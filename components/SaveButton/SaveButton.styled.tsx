import { IToggle } from "interface";
import styled from "styled-components";


export const SaveButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap:15px;

    position: relative;
`


export const SaveStatusText = styled.p`
    font-size: 20px;
    color:#3a9502;
    position: absolute;
    width:65%;
    height:55%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C5CCB8;
    top:38%;
    left:52%;
    transform: translate(-50%,-50%);
`