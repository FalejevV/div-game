import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shop:false,
}

const menuSlice = createSlice({
    name: "menuSlice",
    initialState,
    reducers: {
        toggleShop(state){
            state.shop = !state.shop;
        }
    }
})

export const { toggleShop } = menuSlice.actions;
export default menuSlice.reducer