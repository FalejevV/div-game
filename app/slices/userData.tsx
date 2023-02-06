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
        }
    }
})

export const { setMoney, upgradeLevel} = userSlice.actions;

export default userSlice.reducer;