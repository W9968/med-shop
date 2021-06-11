import React, { useContext, useEffect } from 'react'
import EmptyCart from './EmptyCart'
import CartElements from './CartElements'
import styled from 'styled-components'
import { CartContext, useProducts } from '../../global/exports'

const _Cart = () => {
  const { fetched } = useProducts()
  const { cartItems, removeProduct } = useContext(CartContext)

  useEffect(() => {
    console.log(fetched)
    console.log(cartItems)

    fetched.product !== undefined &&
      cartItems.forEach(
        (el) =>
          fetched.product.filter((key) => key.id === el.id).length === 0 &&
          removeProduct(el)
      )
  }, []) // eslint-disable-line

  return (
    <>
      <Container>
        <HeadingTotal>your cart</HeadingTotal>
        <CartDiv>
          {cartItems.length === 0 ? <EmptyCart /> : <CartElements />}
        </CartDiv>
      </Container>
    </>
  )
}

export default _Cart

const Container = styled.div`
  height: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
`

const HeadingTotal = styled.h1`
  font-weight: 600;
  text-transform: capitalize;
`

const CartDiv = styled.div`
  flex: 1;
  padding: 1rem 0;
  overflow-y: auto;
`
