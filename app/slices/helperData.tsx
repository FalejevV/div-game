import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IHelpers } from "interface";


let initialState:IHelpers = {
    bug:0,
    rat:0,
    bugHorde:0,
    cat:0,
    juniorDeveloper:0,
    seniorDeveloper:0,
    AI:0,
}


const helperSlice = createSlice({
    name: "helperSlice",
    initialState,
    reducers:{
        addHelper(state, action:PayloadAction<keyof IHelpers>){
            state[action.payload] += 1;
        }
    }
})

export const { addHelper } = helperSlice.actions;

export default helperSlice.reducer;