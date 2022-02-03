import {createSlice} from '@reduxjs/toolkit';
import { iteratorSymbol } from 'immer/dist/internal';

createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity:0,
        totalAmount:1,
    },
    reducers:{
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.item.find(item=>item.id === newItem.id);

            if(!existingItem){
                state.items.push({itemId: newItem.id, price=newItem.price, quantity: newItem.quantity, totalPrice= (newItem.price * newItem.quantity), name = newItem.title});
            } else{
                existingItem.quantity = existingItem.quantity + newItem.quantity;
                existingItem.totalPrice = existingItem.totalPrice + newItem.totalPrice;
            }
        },
        removeItemFromCart(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item=> item.id == id);
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice =  existingItem.totalPrice - existingItem.price;
            }

        }
    }
});

export const cartActions = cartSlice.actions;

export default createSlice;
