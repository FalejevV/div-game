import { useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import { ProgressBarContainer, ProgressBarIndicator, ProgressBarText } from "./PrograssBar.styled";



function ProgressBar(){
    const divDataSelector = useAppSelector((state:RootState) => state.divData);

    return(
        <ProgressBarContainer>
            <ProgressBarText>ALMOST DONE</ProgressBarText>
            <ProgressBarIndicator count={divDataSelector.fails}></ProgressBarIndicator>
        </ProgressBarContainer>
    )
}


export default ProgressBar;