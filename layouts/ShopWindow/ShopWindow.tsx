import { useAppDispatch, useAppSelector } from "app/hooks";
import { toggleShop } from "app/slices/menuData";
import { RootState } from "app/store";
import ImageButton from "components/ImageButton/ImageButton";
import { useState } from "react";
import { ShopWindowContainer, ShopWindowHeaderContainer, ShopWindowHeaderTabs } from "./ShopWindow.styled";
import UpgradesTab from "./UpgradesTab";




function ShopWindow(){
    let [currentTab,setCurrentTab] = useState(1);
    let menuDataSelector = useAppSelector((state:RootState) => state.menuData);
    let dispatch = useAppDispatch();
    function toggleTab(value:number){
        setCurrentTab(prev => {
            if(prev === value){
                return 0;
            }else{
                return value;
            }
        })
    }
    return(
        <ShopWindowContainer istoggled={menuDataSelector.shop ? 1 : undefined }>
            <ShopWindowHeaderContainer>
                <ShopWindowHeaderTabs>
                    <ImageButton istoggled={currentTab === 1} function={() => toggleTab(1)} title="Upgrades" alt="upgrades tab" offImage="/img/shop/UpdrageTabButton.png" onImage="/img/shop/UpdrageTabButton-press.png"/>
                    <ImageButton istoggled={currentTab === 2} function={() => toggleTab(2)} title="Hire" alt="hire staff tab" offImage="/img/shop/HireTabButton.png" onImage="/img/shop/HireTabButton-press.png"/>
                </ShopWindowHeaderTabs>
                <ImageButton istoggled={currentTab === 99} function={() => dispatch(toggleShop())} title="Close" alt="close shop" offImage="/img/shop/CloseShopButton.png" onImage="/img/shop/CloseShopButton.png"/>
            </ShopWindowHeaderContainer>

            {currentTab === 1 && <UpgradesTab />}
        </ShopWindowContainer>
    )
}

export default ShopWindow;