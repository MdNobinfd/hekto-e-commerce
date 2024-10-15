import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  },
  reducers: {
    add: (state,action)=>{
      let findeProduct = state.items.findIndex((item)=> item.id == action.payload.id)
      if (findeProduct !== -1) {
        state.items[findeProduct].qun +=1
      } else{
        state.items = [...state.items,action.payload]
      }
      localStorage.setItem("cart",JSON.stringify(state.items))
    },
    prodcutIncrement:(state,action)=>{
      state.items[action.payload].qun +=1
      localStorage.setItem("cart",JSON.stringify(state.items))
    },
    prodcutDecrement:(state,action)=>{
      if (state.items[action.payload].qun > 1) {
        state.items[action.payload].qun -=1
      }
    },
    removeProduct:(state,action)=>{
      state.items.splice(action.payload, 1)
      localStorage.setItem("cart",JSON.stringify(state.items))
    },
    clrearCart:(state)=>{
      state.items=[]
      localStorage.setItem("cart",JSON.stringify(state.items))
    }
  },
})

export const { add,prodcutIncrement,prodcutDecrement,removeProduct,clrearCart } = cartSlice.actions

export default cartSlice.reducer


// import { createSlice } from '@reduxjs/toolkit';

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
//   },
//   reducers: {
//     add: (state, action) => {
//       const foundProductIndex = state.items.findIndex((item) => item.id === action.payload.id);
//       if (foundProductIndex !== -1) {
//         state.items[foundProductIndex].qun += 1;
//       } else {
//         state.items.push({ ...action.payload, qun: 1 }); // Initialize quantity
//       }
//       localStorage.setItem("cart", JSON.stringify(state.items));
//     },
//     productIncrement: (state, action) => {
//       state.items[action.payload].qun += 1;
//       localStorage.setItem("cart", JSON.stringify(state.items)); // Update local storage
//     },
//     productDecrement: (state, action) => {
//       if (state.items[action.payload].qun > 1) {
//         state.items[action.payload].qun -= 1;
//         localStorage.setItem("cart", JSON.stringify(state.items)); // Update local storage
//       }
//     },
//     removeProduct: (state, action) => {
//       state.items.splice(action.payload, 1);
//       localStorage.setItem("cart", JSON.stringify(state.items)); // Update local storage
//     },
//     clearCart: (state) => {
//       state.items = [];
//       localStorage.setItem("cart", JSON.stringify(state.items)); // Clear local storage
//     },
//   },
// });

// export const { add, productIncrement, productDecrement, removeProduct, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;
