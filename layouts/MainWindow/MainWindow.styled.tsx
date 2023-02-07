import { Container } from "@/styles/Styles.stytled";
import styled from "styled-components";


export const MainContainer = styled(Container)`
    position: relative;
    width:100%;
    max-width:1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
    flex: 1 auto;
`

export const MainWrapped = styled.div`
    width:100%;
    max-width:100vw;
    height:100vh;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap:20px;
    align-items: center;
`