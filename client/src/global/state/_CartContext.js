import React, { useReducer } from 'react'
import { CartReducer, sumItems } from '../store/CartReducer'

export const CartContext = React.createContext()

export function useCart() {}

const storage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : []
const initialState = {
  cartItems: storage,
  ...sumItems(storage),
  checkout: false,
}

export default function _CartContext({ children }) {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  const increase = (payload) => {
    dispatch({ type: 'INCREASE', payload })
  }

  const decrease = (payload) => {
    dispatch({ type: 'DECREASE', payload })
  }

  const addProduct = (payload) => {
    dispatch({ type: 'ADD_ITEM', payload })
  }

  const removeProduct = (payload) => {
    dispatch({ type: 'REMOVE_ITEM', payload })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR' })
  }

  const handleCheckout = () => {
    console.log('CHECKOUT', state)
    dispatch({ type: 'CHECKOUT' })
  }

  return (
    <CartContext.Provider
      value={{
        removeProduct,
        addProduct,
        increase,
        decrease,
        clearCart,
        handleCheckout,
        ...state,
      }}>
      {children}
    </CartContext.Provider>
  )
}
