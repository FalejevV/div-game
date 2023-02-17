import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shop:false,
    settings:false,
}

const menuSlice = createSlice({
    name: "menuSlice",
    initialState,
    reducers: {
        toggleShop(state){
            state.shop = !state.shop;
        },

        toggleSettings(state){
            state.settings = !state.settings;
        }
    }
})

export const { toggleShop, toggleSettings } = menuSlice.actions;
export default menuSlice.reducer