import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IDiv, IPosition } from "interface";

const initialState:IDiv= {
    left:50,
    top:50,
    fails:0,
}

const divSlice = createSlice({
    name: "divSlice",
    initialState,
    reducers: {
        setPosition(state, action:PayloadAction<IPosition>){
            state.left = action.payload.left;
            state.top = action.payload.top;
        },
        setFails(state, action:PayloadAction<number>){
            state.fails = action.payload;
        }
    }
})

export const { setPosition } = divSlice.actions;
export default divSlice.reducer