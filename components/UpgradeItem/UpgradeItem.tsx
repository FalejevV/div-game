import { useAppDispatch, useAppSelector } from "app/hooks";
import { toggleScene } from "app/slices/divData";
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
    priceText?:string,
    oneTimer?:boolean
}){
    let userDataSelector = useAppSelector((state:RootState) => state.userData);
    let dispatch = useAppDispatch();

    function purchaseUpgrade(){
        if(userDataSelector.money >= getPrice()){
            dispatch(setMoney(-1 * getPrice()));
            dispatch(upgradeLevel(props.level));
            if(props.level === "savior"){
                dispatch(toggleScene(true));
            }
        }  
    }

    function shortenPrice(){
        let kilos = getPrice() / 1000;
        if(Math.floor(kilos) > 0){
            let mills = kilos / 1000;
            if(Math.floor(mills) > 0){
                let bil = mills / 1000;
                if(Math.floor(bil) > 0){
                    return "~" + Math.floor(bil) + "B";
                }else{ 
                    return "~" + Math.floor(mills) + "M";
                }
            }else{
                return "~" + Math.floor(kilos) + "K";
            }
        }else{
            return getPrice();
        }
    }

    function getPrice(){
        return Math.floor((userDataSelector[props.level] * (props.price * props.priceMultiplier * (userDataSelector[props.level]/1.65)) + props.price));
    }

    function displayCheck(){
        if(props.oneTimer){
            if(userDataSelector[props.level] > 0){
                return false;
            }else{
                return true;
            }
        }else{
            return true;
        }
    }

    function toggleSavior(){
        if(userDataSelector.savior > 0){
            dispatch(toggleScene(true));
        }
    }

    return(
        <UpgradeContainer onClick={toggleSavior}>
            <UpgradeImage  alt={props.imageAlt} src={props.imageSrc}/>
            <UpgradeText>{props.text}</UpgradeText>
            
            {displayCheck() && 
            <UpgradePurchaseImageContainer>
                <UpgradeInfoContainer>
                    <UpgradeLevelText>{userDataSelector[props.level]} lvl.</UpgradeLevelText>
                    <UpgradePriceText>{props.priceText !== undefined ? props.priceText : shortenPrice()} $</UpgradePriceText>
                </UpgradeInfoContainer>
                <UpgradePurchaseImage onClick={purchaseUpgrade} istoggled={userDataSelector.money >= getPrice() ? 1 : undefined } alt="purchase upgrade" src="/img/shop/UpgradePurchaseButtonIcon.png"/>
            </UpgradePurchaseImageContainer>
            }
            

        </UpgradeContainer>
    )
}

export default UpgradeItem;