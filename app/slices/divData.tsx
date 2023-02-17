import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IDiv, IPosition } from "interface";

const initialState:IDiv= {
    left:30,
    top:30,
    fails:0,
    smoothMove:true,
    showScene:false,
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
        loadDivSlice(state, action:PayloadAction<IDiv>){
            state.left = action.payload.left;
            state.top =action.payload.top;
            state.fails = action.payload.fails;
            state.smoothMove = action.payload.smoothMove;
        },
        toggleScene(state,action:PayloadAction<boolean>){
            state.showScene = action.payload;
        }
    }
})

export const { setPosition, setFails, toggleSmooth, loadDivSlice, toggleScene } = divSlice.actions;
export default divSlice.reducer