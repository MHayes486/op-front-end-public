import {createSlice} from '@reduxjs/toolkit';

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
        }
    }
})