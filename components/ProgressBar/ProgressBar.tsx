import { useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import { useEffect, useState } from "react";
import { ActionStats, ActionText, ProgressBarContainer, ProgressBarIndicator, ProgressBarText } from "./PrograssBar.styled";
import {progressPhrases} from "../../text";
import { IHelper } from "interface";
import helpers from "helpers";

function ProgressBar(){
    const [counter,setCounter] = useState(0);
    const userDataSelector = useAppSelector((state: RootState) => state.userData);
    const divDataSelector = useAppSelector((state:RootState) => state.divData);
    const [progressText, setProgressText] = useState<string>("Need to center it!");

    useEffect(() => {
        let divisor = userDataSelector.failLevel > 5 ? 5 : 7;

        setCounter(prev => prev + 1);
        if(counter % divisor === 0 && divDataSelector.fails > 1 && divDataSelector.fails < 25){
            setProgressText(() => {
                let randomPhrase = progressPhrases[Math.floor(Math.random() * progressPhrases.length)];
                return randomPhrase;
            });
        }else{
            if(divDataSelector.fails >= 25){
                setProgressText("CENTERED");
                return;
            }
            if(divDataSelector.fails === 0){
                setProgressText("Need to center it!");
            }
        }
    },[divDataSelector.fails]);

    return(
        <ProgressBarContainer>
            <ActionStats>
                <ActionText>{Math.floor(((userDataSelector.keyLevel*(userDataSelector.keyLevel+1.5))+1) * 5)}$ / DIV</ActionText>
            </ActionStats>

            <ProgressBarText>{progressText}</ProgressBarText>
            <ProgressBarIndicator count={divDataSelector.fails}></ProgressBarIndicator>
        </ProgressBarContainer>
    )
}


export default ProgressBar;