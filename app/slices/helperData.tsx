import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IHelpers } from "interface";


let initialState:IHelpers = {
    bug:0,
    mouse:0,
    bugHorde:0,
    cat:0,
    juniorDeveloper:0,
    seniorDeveloper:0,
    AI:0,
    unknownGem:0,
    mystic:0,
}


const helperSlice = createSlice({
    name: "helperSlice",
    initialState,
    reducers:{
        addHelper(state, action:PayloadAction<keyof IHelpers>){
            state[action.payload] += 1;
        },
        loadHelperSlice(state, action:PayloadAction<IHelpers>){
            (Object.keys(state) as (keyof typeof state)[]).forEach((key, index) => {
                state[key] = action.payload[key];
              });
        }
    }
})

export const { addHelper, loadHelperSlice } = helperSlice.actions;

export default helperSlice.reducer;