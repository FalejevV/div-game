import styled from "styled-components"

export const WWWrapper = styled.div`
    width:100vw;
    height:100%;
    background-color: #000000ce;
    position:absolute;
    left:0px;
    top:0px;
    z-index:100000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:20px;
    backdrop-filter: blur(6px);
`

export const WWContainer = styled.div`
    width:100%;
    height:100%;
    max-width:700px;
    max-height:500px;
    background-color: #babeb1;
    border:5px solid #929789;
    display: flex;
    flex-direction:column;
    gap:25px;
    padding:15px;
`

export const WWTitle = styled.h1`
    width:100%;
    text-align: center;
    font-size:35px;
    color:black;
`

export const WWText = styled.p`
    width:100%;
    text-align: center;
    font-size:30px;
    color:black;
    flex:1 auto;
`

export const WWButtonText = styled.p`
    padding:10px 20px;
    text-align: center;
    font-size:35px;
    color:black;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
        font-weight: bold;
    }
`