import styled from "styled-components";
import helpers from "helpers";
import { IHelper } from "interface";
import HelperItem from "components/HelperItem/HelperItem";

export const HelpersContainer = styled.div`
    width:100%;
    height:100%;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    flex: 1 auto;
    display: flex;
    flex-direction: column;
    gap:15px;
`

function HelpersTab(){
    return (
        <HelpersContainer>
            {helpers.map((helper:IHelper) => <HelperItem helper={helper} />)}
        </HelpersContainer>
    )
}

export default HelpersTab;