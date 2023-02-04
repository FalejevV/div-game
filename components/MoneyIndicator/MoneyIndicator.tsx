import { useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import { MoneyIndicatorContainer, MoneyIndicatorText } from "./MoneyIndicator.styled";



function MoneyIndicator(){
    let userDataSelector = useAppSelector((state:RootState) => state.userData);
    return(
        <MoneyIndicatorContainer>
            <MoneyIndicatorText>{userDataSelector.money}$</MoneyIndicatorText>
        </MoneyIndicatorContainer>
    )
}


export default MoneyIndicator;