import styled from "styled-components";

export const HelpersDisplayContainer = styled.div`
    width:100%;
    max-width: 100vw;
    padding:15px;
    display: flex;
    flex-direction: column;
    gap:20px;
    padding-bottom: 15px;
`

export const HelpersDisplayTotalContainer = styled.div`
    max-width: 970px;
    padding:15px;
    width:100%;
    display: grid;
    grid-template-columns: repeat( auto-fit, 70px);
    grid-template-rows: 1fr;
    align-items: center;
    gap:37px;
    justify-content: flex-start;
    margin: 0 auto;
    border:4px solid #92978969;
    position: relative;
    @media(max-width:995px){
        gap:20px;
        justify-content: space-between;
    }
`


export const HelpersDisplayTotalItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HelpersPayIndicator = styled.p`
    position: absolute;
    top:0px;
    right:0px;
    padding:5px 10px;
`