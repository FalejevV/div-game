import { useAppDispatch, useAppSelector } from "app/hooks";
import { addHelper } from "app/slices/helperData";
import { setMoney } from "app/slices/userData";
import { RootState } from "app/store";
import { IHelper } from "interface";
import { HelperBuyImageButton, HelperInfoText, HelperInfoTextContainer, HelperItemContainer, HelperItemIcon, HelperPurchaseContainer, HelperText, HelperTextContainer } from "./HelperItem.styled";
import { unknownHelperImage } from "helpers";


function HelperItem(props:{
    helper:IHelper,
    unknown?:boolean
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
    
    function shortenPrice(){
        let kilos = getPrice() / 1000;
        if(Math.round(kilos) > 0){
            let mills = kilos / 1000;
            if(Math.round(mills) > 0){
                let bil = mills / 1000;
                if(Math.round(bil) > 0){
                    return Math.round(bil) + "B";
                }else{ 
                    return Math.round(mills) + "M";
                }
            }else{
                return Math.round(kilos) + "K";
            }
        }else{
            return getPrice();
        }
    }

    return(
        <HelperItemContainer>
            <HelperItemIcon src={props.unknown ? unknownHelperImage : props.helper.imageSrc} alt={props.unknown ? "unknown helper" : props.helper.imageAlt}/>
            <HelperTextContainer>
                <HelperText>{props.unknown ? "???" : props.helper.text}</HelperText>
                <HelperInfoText>{props.unknown ? "???" : props.helper.DPS.toLocaleString(['ban', 'id'])} $/s</HelperInfoText>
            </HelperTextContainer>
            {!props.unknown &&
            <HelperPurchaseContainer>
                    <HelperInfoTextContainer>
                        <HelperInfoText>{helperDataSelector[props.helper.helper]} qty.</HelperInfoText>
                        <HelperInfoText>{shortenPrice()} $</HelperInfoText>
                    </HelperInfoTextContainer>
                <HelperBuyImageButton onClick={hireHelper} istoggled={userDataSelector.money >= getPrice() ? 1 : undefined} src="/img/helpers/HireButton.png"/>
            </HelperPurchaseContainer>
            }
        </HelperItemContainer>
    )
}


export default HelperItem;