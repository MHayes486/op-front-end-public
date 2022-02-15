import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalFullPrice: 0.0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.itemId === newItem.id
      );

      state.totalQuantity++;
      state.totalFullPrice = parseFloat(state.totalFullPrice) + parseFloat(newItem.price);
      console.log("Total " + state.totalFullPrice);

      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: parseFloat(newItem.price),
          quantity: parseInt(newItem.quantity, 10),
          totalPrice: parseFloat(newItem.price),
          name: newItem.title,
          tag: newItem.tagline,
        });
      } else {
        existingItem.quantity = parseInt(existingItem.quantity, 10) + 1;
        existingItem.totalPrice =
          parseFloat(existingItem.totalPrice) + parseFloat(newItem.price);
      }
    },
    resetCart(state, action){
    state.items= [];
    state.totalQuantity= 0;
    state.totalFullPrice= 0.0;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.itemId === id);
      state.totalQuantity--;
      state.totalFullPrice =
        parseFloat(state.totalFullPrice) - parseFloat(existingItem.price);
      console.log(existingItem);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.itemId !== id);
      } else {
        existingItem.quantity = parseInt(existingItem.quantity, 10) - 1;
        existingItem.totalPrice =
          existingItem.totalPrice - parseFloat(existingItem.price);
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
