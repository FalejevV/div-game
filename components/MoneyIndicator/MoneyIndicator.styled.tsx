import styled from "styled-components";


export const MoneyIndicatorContainer = styled.div`
    align-items: center;
    display: flex;
    gap:10px;
`



export const MoneyIndicatorText = styled.p`
    font-size: 25px;
    color:#282535;

    @media(max-width:600px){
        position: absolute;
        left:10px;
        bottom:-8px;
        font-size: 20px;
    }
`