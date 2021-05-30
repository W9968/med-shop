import React, { useContext, useState, useEffect } from 'react'

const CartContext = React.createContext()

export function useCart() {
  return useContext(CartContext)
}

export default function _CartContext({ children }) {
  const [quantity, setQuantity] = useState(1)
  const [carts, setCarts] = useState(JSON.parse(localStorage.getItem('cart')))

  const subscribe = (name, price, category, attribute, returnpolicy) => {
    const item = {
      name: name,
      price: price,
      category: category,
      attribute: attribute,
      return: returnpolicy,
      quantity: quantity,
    }
    if (carts === null) {
      localStorage.setItem('cart', JSON.stringify([item]))
    } else {
      console.log(carts)
    }
  }

  return (
    <CartContext.Provider
      value={{
        subscribe,
      }}>
      {children}
    </CartContext.Provider>
  )
}
