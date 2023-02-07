import styled from "styled-components";
import helpers from "helpers";
import { IHelper, IHelpers } from "interface";
import HelperItem from "components/HelperItem/HelperItem";
import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import { ReactElement } from "react";

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

    let helperDataSelector = useAppSelector((state:RootState) => state.helperData);
    let userDataSelector = useAppSelector((state:RootState) => state.userData);
    function getHelperBefore(helper: keyof IHelpers){
        let prevHelper = undefined;
        for (const [key, value] of Object.entries(helperDataSelector)) {
            if(key === helper){
                return prevHelper;
            }else{
                prevHelper = {key,value};
            }
        }
    }

    function displayHelpers(){
        let helpersArray:ReactElement[] = [];
        let stop = false;
        helpers.forEach((helper:IHelper, index:number) => {
            if(stop){
                return;
            }
            if(index === 0){
                helpersArray.push(<HelperItem helper={helper} key={nanoid()}/>)
            }else{
                let getPrevHelper = getHelperBefore(helper.helper);
                if(getPrevHelper !== undefined){
                    if(getPrevHelper.value > 0){
                        helpersArray.push(<HelperItem helper={helper} key={nanoid()} />);
                    }else{
                        helpersArray.push(<HelperItem helper={helper} unknown={true}  key={nanoid()} />);
                        stop = true;
                    }
                }

            }
        })
        return helpersArray;
    }
    return (
        <HelpersContainer>
            {displayHelpers()}
        </HelpersContainer>
    )
}

export default HelpersTab;