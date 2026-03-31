import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "../types";

interface CartSlice {
    items: CartItem[]
}

const initialState: CartSlice = {
    items: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers : {
        addItem(state, action: PayloadAction<CartItem>){
            const itemExist = state.items.find(prod => prod.id === action.payload.id)
            if(itemExist) {
                itemExist.quantity += 1
            } else {
                state.items.push({...action.payload, quantity: 1})
            }
        },
        removeItem(state, action: PayloadAction<string>){
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        increaseQuantity(state, action: PayloadAction<string>){
            const item = state.items.find(prod => prod.id === action.payload)
            if(item) item.quantity += 1
        },
        decreaseQuantity(state, action: PayloadAction<string>){
            const item = state.items.find(prod => prod.id === action.payload)
            if(item && item.quantity > 1) item.quantity -= 1
        }
    }
})

export const {addItem, removeItem, increaseQuantity, decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer