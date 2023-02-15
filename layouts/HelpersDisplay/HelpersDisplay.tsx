import { useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import HelperAction from "components/HelperAction/HelperAction";
import { HelperInfoText } from "components/HelperItem/HelperItem.styled";
import { HelpersDisplayContainer, HelpersDisplayTotalContainer, HelpersDisplayTotalItem, HelpersPayIndicator } from "./HelpersDisplay.styled";
import helpers, {helperActionGifs} from "helpers";
import { IHelper } from "interface";
import { nanoid } from "@reduxjs/toolkit";


function HelpersDisplay(){
    let helperDataSelector = useAppSelector((state:RootState) => state.helperData);
    const userDataSelector = useAppSelector((state: RootState) => state.userData);

    function getHelpers(){
        let helpersArray = [];
        let index = 0;
        for (const [key, value] of Object.entries(helperDataSelector)) {
            if(value > 0){
                helpersArray.push(
                    <HelpersDisplayTotalItem key={nanoid()}>
                        <HelperAction image={helperActionGifs[index]}  />
                        <HelperInfoText>{value}</HelperInfoText>
                    </HelpersDisplayTotalItem>
                )
            }
            index += 1;
        }
        return helpersArray;
    }

    
    function getPayWorkers(){
        let totalPay = 0;
        for (const [key, value] of Object.entries(helperDataSelector)) {
            let foundHelper:IHelper | undefined = helpers.find(helper => helper.helper === key) || undefined;
            if(foundHelper !== undefined){
                totalPay += foundHelper.DPS * value;
            }
        }
        return Math.floor(totalPay + (totalPay * userDataSelector.helperLevel * 0.15)).toLocaleString(['ban', 'id']);
        };


    return(
        <>
        {getHelpers().length > 0 && 
            <HelpersDisplayContainer>
                <HelpersDisplayTotalContainer>
                    <HelpersPayIndicator>{getPayWorkers() + `$ / sec`}</HelpersPayIndicator>
                    {getHelpers()}
                </HelpersDisplayTotalContainer>
            </HelpersDisplayContainer>
        }
        
        </>
    )
}

export default HelpersDisplay;