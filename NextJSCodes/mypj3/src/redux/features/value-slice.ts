import { createSlice , PayloadAction } from "@reduxjs/toolkit";



interface ValueState{
    value: number;
}


const initialState: ValueState={
    value : 0
}


export const value = createSlice({
    name : 'value',
    initialState : initialState,
    reducers:{
        increment: (state)=>{
            state.value  += 1;
        },
        decrement: (state)=>{
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>)=>{
            state.value += action.payload;
        }
    }
})


export const {increment, decrement, incrementByAmount} = value.actions;
export default value.reducer