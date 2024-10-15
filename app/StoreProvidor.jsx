'use client'
import { add } from '@/lib/store/features/cart/cartsilce'
import {makeStore} from '@/lib/store/store'
import React, { useRef } from 'react'
import { Provider } from 'react-redux'

const StoreProvidor = ({children}) => {
  const storeRef = useRef()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    // storeRef.current.dispatch(add('testproduct id'))
  }
  
  return (
    <Provider store={storeRef.current}>{children}</Provider>
  )
}

export default StoreProvidor