import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CartItemState {
    name: string;
    id: number;
    imagePath: string;
    price: number;
    description: string;
    quantity: number;
  }

const initialState: CartItemState[] = [];



export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart:(state,action:PayloadAction<CartItemState[]>)=>{
        return action.payload
    }
  }
})

export const { updateCart } = cart.actions;
export default cart.reducer;


