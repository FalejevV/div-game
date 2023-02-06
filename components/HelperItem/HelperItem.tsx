import { useAppDispatch, useAppSelector } from "app/hooks";
import { addHelper } from "app/slices/helperData";
import { setMoney } from "app/slices/userData";
import { RootState } from "app/store";
import { IHelper } from "interface";
import { HelperBuyImageButton, HelperInfoText, HelperInfoTextContainer, HelperItemContainer, HelperItemIcon, HelperPurchaseContainer, HelperText, HelperTextContainer } from "./HelperItem.styled";



function HelperItem(props:{
    helper:IHelper
}){

    let helperDataSelector = useAppSelector((state:RootState) => state.helperData);
    let userDataSelector = useAppSelector((state:RootState) => state.userData);
    let dispatch = useAppDispatch();
    function getPrice(){
        return Math.floor((helperDataSelector[props.helper.helper] * (props.helper.price * props.helper.priceMultiplier * (helperDataSelector[props.helper.helper] / 5)) + props.helper.price));
    }

    function hireHelper(){
        if(userDataSelector.money >= getPrice()){
            dispatch(setMoney(-1 * getPrice()));
            dispatch(addHelper(props.helper.helper));
        }  
    }
    return(
        <HelperItemContainer>
            <HelperItemIcon src={props.helper.imageSrc} alt={props.helper.imageAlt}/>
            <HelperTextContainer>
                <HelperText>{props.helper.text}</HelperText>
                <HelperInfoText>{props.helper.DPS} $/s</HelperInfoText>
            </HelperTextContainer>
            <HelperPurchaseContainer>
                <HelperInfoTextContainer>
                    <HelperInfoText>{helperDataSelector[props.helper.helper]} qty.</HelperInfoText>
                    <HelperInfoText>{getPrice()} $</HelperInfoText>
                </HelperInfoTextContainer>
                <HelperBuyImageButton onClick={hireHelper} istoggled={userDataSelector.money >= getPrice() ? 1 : undefined} src="/img/helpers/HireButton.png"/>
            </HelperPurchaseContainer>
        </HelperItemContainer>
    )
}


export default HelperItem;