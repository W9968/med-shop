import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { CartContext } from '../../../global/exports'
import OnlinePayment from './OnlinePayment'

const stripePromise = loadStripe(
  'pk_test_51I4STaBEBLmRHvyUsptzgZAmygVNvpLgkuRO7YCQimjzizz3QAymZBcXK8wOLMXuema537fB62dDZhSr6eBbAUwR00MwLhIltq'
)

const _Stripe = () => {
  const { total } = React.useContext(CartContext)

  return (
    <>
      <Elements stripe={stripePromise}>
        <OnlinePayment price={total} />
      </Elements>
    </>
  )
}

export default _Stripe
