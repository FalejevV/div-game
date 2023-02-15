import { useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import { MoneyIndicatorContainer, MoneyIndicatorText } from "./MoneyIndicator.styled";



function MoneyIndicator(){
    let userDataSelector = useAppSelector((state:RootState) => state.userData);

    function localeMoney(){
        return (userDataSelector.money.toLocaleString(['ban', 'id']))
    }
    return(
        <MoneyIndicatorContainer>
            <MoneyIndicatorText>{localeMoney()}$</MoneyIndicatorText>
        </MoneyIndicatorContainer>
    )
}


export default MoneyIndicator;