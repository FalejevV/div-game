import { useAppDispatch, useAppSelector } from "app/hooks";
import { toggleShop } from "app/slices/menuData";
import { RootState } from "app/store";
import ImageButton from "components/ImageButton/ImageButton";
import MoneyIndicator from "components/MoneyIndicator/MoneyIndicator";
import ToggleAnimations from "components/ToggleAnimations/ToggleAnimations";
import styled from "styled-components";

const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
`

const CartButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
`

function MenuButtons(){
    let dispatch = useAppDispatch();
    let menuDataSelector = useAppSelector((state:RootState) => state.menuData);
    return(
        <ButtonsContainer>
            <CartButtonContainer>
                <ImageButton title={"Shop"} alt={"Toggle shop"} offImage={"/img/shop/cart.png"} onImage={"/img/shop/cart-press.png"} istoggled={menuDataSelector.shop} function={() => dispatch(toggleShop())} />
                <MoneyIndicator />
            </CartButtonContainer>
            <ToggleAnimations />
        </ButtonsContainer>
    )
}

export default MenuButtons;