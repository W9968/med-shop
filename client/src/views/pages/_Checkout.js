import React from 'react'
import { Redirect } from 'react-router-dom'
import Pagelayout from '../../layout/Page.layout'
import { BillingDetails, CartInfo } from '../../components/imports'
import { CartContext } from '../../global/exports'

const _Checkout = () => {
  const { itemCount } = React.useContext(CartContext)

  if (itemCount === 0) {
    return <Redirect to='/' />
  } else {
    return (
      <>
        <Pagelayout>
          <BillingDetails />
          <CartInfo />
        </Pagelayout>
      </>
    )
  }
}

export default _Checkout
