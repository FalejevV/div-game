import { useAppDispatch, useAppSelector } from "app/hooks";
import { toggleShop } from "app/slices/menuData";
import { RootState } from "app/store";
import ImageButton from "components/ImageButton/ImageButton";
import styled from "styled-components";

const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

function MenuButtons(){
    let dispatch = useAppDispatch();
    let menuDataSelector = useAppSelector((state:RootState) => state.menuData);
    return(
        <ButtonsContainer>
            <ImageButton title={"Shop"} alt={"Toggle shop"} offImage={"/img/cart.png"} onImage={"/img/cart-press.png"} toggle={menuDataSelector.shop} function={() => dispatch(toggleShop())} />
        </ButtonsContainer>
    )
}

export default MenuButtons;