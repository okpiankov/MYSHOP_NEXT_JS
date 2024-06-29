"use client";
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setCart: (state, action) => {
      return state = action.payload;
      // return [...action.payload];
    },
  },
  selectors: {
    getCart: state => state,
  },
});

export const productActions = cartSlice.actions;

export const { getCart } = cartSlice.selectors;
// console.log(getCart)


// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState: { products: [] },
//   reducers: {
//     setCart: (state, action) => {
//       state.products = action.payload;
//     },
//   },
//   selectors: {
//     getCart: state => state.products,
//   },
// });

// export const productActions = cartSlice.actions;
// export const { getCart } = cartSlice.selectors;
