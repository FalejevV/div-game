import { useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import { IUser } from "interface";
import { UpgradeContainer, UpgradeImage, UpgradePurchaseImage, UpgradePurchaseImageContainer, UpgradePurchaseIndicator, UpgradeText } from "./UpgradeItem.styled";



function UpgradeItem(props:{
    imageAlt:string,
    imageSrc:string,
    text:string,
    level:keyof IUser,
    price:number,
    priceMultiplier:number,
}){
    let userDataSelector = useAppSelector((state:RootState) => state.userData);

    return(
        <UpgradeContainer>
            <UpgradeImage width="70" height="70" alt={props.imageAlt} src={props.imageSrc}/>
            <UpgradeText>{props.text}</UpgradeText>
            <UpgradePurchaseImageContainer >
                <UpgradePurchaseIndicator>{userDataSelector[props.level] || 0}</UpgradePurchaseIndicator>
                <UpgradePurchaseImage istoggled={userDataSelector.money < (userDataSelector[props.level] * props.price * props.priceMultiplier)} width="50" height="50" alt="purchase upgrade" src="/img/shop/UpgradePurchaseButtonIcon.png"/>
            </UpgradePurchaseImageContainer>

        </UpgradeContainer>
    )
}

export default UpgradeItem;