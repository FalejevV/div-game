import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IDiv, IPosition } from "interface";

const initialState:IDiv= {
    left:30,
    top:30,
    fails:0,
    smoothMove:true,
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
        },
        toggleSmooth(state){
            state.smoothMove = !state.smoothMove;
        },
    }
})

export const { setPosition, setFails, toggleSmooth } = divSlice.actions;
export default divSlice.reducer