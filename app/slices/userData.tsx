import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "interface";


let initialState:IUser = {
    money:0,
    failLevel:0,
    keyLevel:0,
    helperLevel: 0,
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers:{
        setMoney(state, action:PayloadAction<number>){
            state.money += action.payload;
        },
        upgradeLevel(state, action:PayloadAction<keyof IUser>){
            state[action.payload] += 1;
        },
        loadUserSlice(state, action:PayloadAction<IUser>){
            state.failLevel = action.payload.failLevel;
            state.money = action.payload.money;
            state.keyLevel = action.payload.keyLevel;
            state.helperLevel = action.payload.helperLevel;
        }
    }
})

export const { setMoney, upgradeLevel, loadUserSlice } = userSlice.actions;

export default userSlice.reducer;