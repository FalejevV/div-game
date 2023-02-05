import { useAppDispatch, useAppSelector } from "app/hooks";
import { setMoney, upgradeLevel } from "app/slices/userData";
import { RootState } from "app/store";
import { IUser } from "interface";
import { UpgradeContainer, UpgradeImage, UpgradeInfoContainer, UpgradeLevelText, UpgradePriceText, UpgradePurchaseImage, UpgradePurchaseImageContainer, UpgradeText } from "./UpgradeItem.styled";



function UpgradeItem(props:{
    imageAlt:string,
    imageSrc:string,
    text:string,
    level:keyof IUser,
    price:number,
    priceMultiplier:number,
}){
    let userDataSelector = useAppSelector((state:RootState) => state.userData);
    let dispatch = useAppDispatch();

    function purchaseUpgrade(){
        if(userDataSelector.money >= getPrice()){
            dispatch(setMoney(-1 * getPrice()));
            dispatch(upgradeLevel(props.level));
        }  
    }

    function getPrice(){
        return Math.floor((userDataSelector[props.level] * (props.price * props.priceMultiplier * (userDataSelector[props.level]/1.65)) + props.price));
    }

    return(
        <UpgradeContainer>
            <UpgradeImage  alt={props.imageAlt} src={props.imageSrc}/>
            <UpgradeText>{props.text}</UpgradeText>
            <UpgradePurchaseImageContainer >
                <UpgradeInfoContainer>
                    <UpgradeLevelText>{userDataSelector[props.level]} lvl.</UpgradeLevelText>
                    <UpgradePriceText>{getPrice()} $</UpgradePriceText>
                </UpgradeInfoContainer>
                <UpgradePurchaseImage onClick={purchaseUpgrade} istoggled={userDataSelector.money >= getPrice() ? 1 : undefined } alt="purchase upgrade" src="/img/shop/UpgradePurchaseButtonIcon.png"/>
            </UpgradePurchaseImageContainer>

        </UpgradeContainer>
    )
}

export default UpgradeItem;