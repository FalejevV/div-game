import styled, { css, keyframes } from "styled-components";


const fadeIn = (opacity:string) => keyframes`
    from{
        pointer-events: none;
        opacity:0;
    }to{
        pointer-events: auto;
        opacity:${opacity};
    }
`

const glueFloat = keyframes`
    from{
        opacity:0;
        bottom: -150px;
    }to{
        opacity:0.9;
        bottom: 35vh;
    }
`

export const fadeInOut = keyframes`
    0%{
        opacity:0;
    }10%{
        opacity:1;
    }20%{
        opacity:1;
    }30%{
        opacity:1;
    }40%{
        opacity:1;
    }50%{
        opacity:1;
    }60%{
        opacity:1;
    }70%{
        opacity:1;
    }80%{
        opacity:1;
    }80%{
        opacity:0;
    }100%{
        opacity:0;
    }
`


export const SaviorContainer = styled.div`
    width:100vw;
    height:100vh;
    background-color:black;
    overflow: hidden;
    position:fixed;
    
    z-index:2000;
    animation: ${fadeIn("100%")} 2s forwards;
    user-select:none;
`


export const ShineImage = styled.img`
    height:70vh;
    opacity:0;

    transform: translateX(-50%) rotate(180deg);
    animation: ${fadeIn("75%")} 8s 3s forwards;
    position: absolute;
    bottom: -10%;
    left:50%;
    z-index: 10;
`

export const GlueImage = styled.img`
    width:96px;
    height:144px;
    position:absolute;
    left:50%;
    transform: translateX(-50%);
    bottom: -150px;
    z-index: 5;

    animation: ${glueFloat} 8s 6s forwards;
`

export const TextSaviorContainer = styled.div`
    position:absolute;
    width:100%;
    max-width: 400px;
    padding:30px;
    bottom: 60vh;
    left:50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;

    align-items: center;
    gap:30px;
`

export const WhiteSaviorText = styled.p`
    font-size:50px;
    color:#ccc19f;
    font-weight: bold;
    letter-spacing: 5px;
    width:100%;
    text-align: center;
    opacity: 0;
    animation: ${fadeIn("100%")} 3s 10s forwards;
`


export const BrightBackgroundContainer = styled.div`
    width:100vw;
    height:100vh;
    opacity:0;
    background-color: #ccc19f;
    animation: ${fadeIn("100%")} 3s 12.5s forwards;
    position: absolute;
    z-index: 9999;
    left:0px;
    top:0px;
`

export const DarkSaviorText = styled.p<{
    delay:string
}>`
    font-size:50px;
    color:black;
    font-weight: bold;
    letter-spacing: 5px;
    width:100%;
    text-align: center;
    opacity: 0;


    animation: ${fadeInOut} 8s ${({ delay }) => delay || "20s"} forwards;
`

export const ReturnButton = styled.div`
    font-size:50px;
    color:gray;
    font-weight: bold;
    letter-spacing: 5px;
    cursor: pointer;
    opacity:0;
    pointer-events: none;
    &:hover{
        color:black;
    }

    animation: ${fadeIn("75%")} 0.1s 25s forwards;
`