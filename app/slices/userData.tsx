import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "interface";


let initialState:IUser = {
    money:0,
    failLevel:1,
    keyLevel:1
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers:{
        setMoney(state, action:PayloadAction<number>){
            state.money += action.payload;
        },
        setFailLevel(state, action:PayloadAction<number>){
            state.failLevel += action.payload;
        },
        setKeyLevel(state, action:PayloadAction<number>){
            state.keyLevel += action.payload;
        }
    }
})

export const { setMoney, setFailLevel, setKeyLevel } = userSlice.actions;

export default userSlice.reducer;