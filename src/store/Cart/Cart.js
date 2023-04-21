import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  products: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addProduct(state, action) {
      state.products = [...state.products, action.payload]
    },

  },
});

export const { addProduct } = cartSlice.actions;
export const products = (state) => state.cart.products;
export const total = (state) => state.cart.total;
export const cartReducer = cartSlice.reducer;
