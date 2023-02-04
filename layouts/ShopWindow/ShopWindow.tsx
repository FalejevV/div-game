import { useAppDispatch, useAppSelector } from "app/hooks";
import { toggleShop } from "app/slices/menuData";
import { RootState } from "app/store";
import ImageButton from "components/ImageButton/ImageButton";
import { useState } from "react";
import { ShopWindowContainer, ShopWindowHeaderContainer, ShopWindowHeaderTabs } from "./ShopWindow.styled";




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
        <ShopWindowContainer toggle={menuDataSelector.shop}>
            <ShopWindowHeaderContainer>
                <ShopWindowHeaderTabs>
                    <ImageButton toggle={currentTab === 1} function={() => toggleTab(1)} title="Upgrades" alt="upgrades tab" offImage="/img/UpdrageTabButton.png" onImage="/img/UpdrageTabButton-press.png"/>
                    <ImageButton toggle={currentTab === 2} function={() => toggleTab(2)} title="Hire" alt="hire staff tab" offImage="/img/HireTabButton.png" onImage="/img/HireTabButton-press.png"/>
                </ShopWindowHeaderTabs>
                <ImageButton toggle={currentTab === 99} function={() => dispatch(toggleShop())} title="Close" alt="close shop" offImage="/img/CloseShopButton.png" onImage="/img/CloseShopButton.png"/>
            </ShopWindowHeaderContainer>
        </ShopWindowContainer>
    )
}

export default ShopWindow;