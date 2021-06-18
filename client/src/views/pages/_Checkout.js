import React from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import Pagelayout from '../../layout/Page.layout'
import { CartContext } from '../../global/exports'
import { Collapse, Card } from '@geist-ui/react'
import { Stripe, PayPal, OnDelivery } from '../../components/imports'

const _Checkout = () => {
  const { itemCount, cartItems } = React.useContext(CartContext)

  const CardStyle = {
    margin: '0',
    color: localStorage.getItem('mode') === 'dark' ? '#fff' : '#222',
    background: localStorage.getItem('mode') === 'light' ? '#fff' : '#333',
    border: 'none',
  }

  if (itemCount === 0) {
    return <Redirect to='/' />
  } else {
    return (
      <>
        <Pagelayout>
          <Wrapper>
            <CheckedItem>
              {cartItems.map((elem, key) => {
                return (
                  <Card key={key} style={CardStyle}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '100px', margin: '0 1rem' }}>
                        <img
                          src={`http://localhost:8000/storage/products/${elem.image}`}
                          alt={elem.image}
                        />
                      </div>

                      <div>
                        <p
                          style={{
                            fontSize: '1.125rem',
                            fontWeight: 600,
                            textTransform: 'capitalize',
                          }}>
                          {elem.name}
                        </p>
                        <p
                          style={{
                            fontSize: '1rem',
                            textTransform: 'capitalize',
                          }}>
                          Price: {elem.price}
                        </p>
                        <p
                          style={{
                            fontSize: '1rem',
                            textTransform: 'capitalize',
                          }}>
                          Qty: {elem.quantity}
                        </p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </CheckedItem>
            <Collapse.Group className='collapse'>
              <Collapse title='Stripe payment'>
                <Stripe />
              </Collapse>
              <Collapse title='Paypal Payment'>
                <PayPal />
              </Collapse>
              <Collapse title='On delivery'>
                <OnDelivery />
              </Collapse>
            </Collapse.Group>
          </Wrapper>
        </Pagelayout>
      </>
    )
  }
}

export default _Checkout

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .collapse {
    width: 700px;
  }
`

const CheckedItem = styled.div`
  display: flex;
  flex-direction: column;
`
