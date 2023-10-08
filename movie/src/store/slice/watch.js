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
            state.initial = state.initial + 1;
        },
        addCard :  (state, action)=>{
            const isfound = state.items.find((item) => item.id === action.payload.id);
            if (!isfound){
                state.items.push(action.payload);
            }
        },
        deleteCard : (state , action) => {
            const index = state.items.findIndex((element)=>{
                if(element.id === action.payload.id){
                    return element;
                }
            }) ;
            
            state.items.splice(index,1);
        }
    }
   }

);
export const {increaseCounter, addCard, deleteCard} = watch.actions;
export default watch.reducer;