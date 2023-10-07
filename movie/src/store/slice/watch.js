import { createSlice } from "@reduxjs/toolkit";

const value={
    items : [],
    initial : 8
}

const watch = createSlice(
   {
    name: "watch",
    initialState: value,
    reducers:{
        increaseCounter : (state)=>{
            state.initial = state.inital + 1;
        },
        addCard :  (state, action)=>{
            state.items.push(action.payload);
        }
    }
   }

);
export const {increaseCounter, addCard} = watch.actions;
export default watch.reducer;