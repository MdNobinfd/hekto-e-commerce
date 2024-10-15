import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    add: (state,action)=>{
      let findeProduct = state.items.findIndex((item)=> item.id == action.payload.id)
      if (findeProduct !== -1) {
        state.items[findeProduct].qun +=1
      } else{
        state.items = [...state.items,action.payload]
      }
    },
    prodcutIncrement:(state,action)=>{
      state.items[action.payload].qun +=1
    },
    prodcutDecrement:(state,action)=>{
      if (state.items[action.payload].qun > 1) {
        state.items[action.payload].qun -=1
      }
    },
    removeProduct:(state,action)=>{
      state.items.splice(action.payload, 1)
    },
    clrearCart:(state)=>{
      state.items=[]
    }
  },
})

export const { add,prodcutIncrement,prodcutDecrement,removeProduct,clrearCart } = cartSlice.actions

export default cartSlice.reducer