import React from 'react'
import styled from 'styled-components'

const _Paypal = () => {
  const paypal = React.useRef()

  React.useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'cool looking table',
                amount: {
                  currency_code: 'GBP',
                  value: 10.0,
                },
              },
            ],
          })
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture()
          console.log(order)
        },
        onError: (err) => {
          console.log(err)
        },
      })
      .render(paypal.current)
  }, [])

  return (
    <>
      <Wrapper>
        <div ref={paypal} />
      </Wrapper>
    </>
  )
}

export default _Paypal

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
