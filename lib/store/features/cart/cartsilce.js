import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    add: (state,action)=>{
      state.items.push(action.payload)
    }
  },
})

export const { add } = cartSlice.actions

export default cartSlice.reducer