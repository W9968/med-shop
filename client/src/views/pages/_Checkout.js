import React from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import Pagelayout from '../../layout/Page.layout'
import { CartContext } from '../../global/exports'
import { Card } from '@geist-ui/react'
import { Stripe, PayPal, OnDelivery } from '../../components/imports'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

const _Checkout = () => {
  const { itemCount, cartItems } = React.useContext(CartContext)

  const CardStyle = {
    borderRadius: 0,
    color: localStorage.getItem('mode') === 'dark' ? '#fff' : '#222',
    background: localStorage.getItem('mode') === 'light' ? '#fff' : '#222',
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
                      <div style={{ width: '100px' }}>
                        <img
                          src={`http://localhost:8000/storage/products/${elem.image}`}
                          alt={elem.image}
                        />
                      </div>

                      <div style={{ margin: '0 1rem' }}>
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
          </Wrapper>

          <Accordion allowToggle>
            <Panel>
              <h2>
                <CollapsibleButton>
                  <h2>credit card</h2>
                  <AccordionIcon className='icons' />
                </CollapsibleButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stripe />
              </AccordionPanel>
            </Panel>

            <Panel>
              <h2>
                <CollapsibleButton>
                  <h2>Paypal</h2>
                  <AccordionIcon className='icons' />
                </CollapsibleButton>
              </h2>
              <AccordionPanel pb={4}>
                <PayPal />
              </AccordionPanel>
            </Panel>

            <Panel>
              <h2>
                <CollapsibleButton>
                  <h2>on delivery</h2>
                  <AccordionIcon className='icons' />
                </CollapsibleButton>
              </h2>
              <AccordionPanel pb={4}>
                <OnDelivery />
              </AccordionPanel>
            </Panel>
          </Accordion>
        </Pagelayout>
      </>
    )
  }
}

export default _Checkout

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Panel = styled(AccordionItem)`
  width: 700px;
  margin: 1rem auto;
  border-bottom: 1px solid ${({ theme }) => theme.hover};

  @media (max-width: 768px) {
    width: 100%;
  }
`

const CollapsibleButton = styled(AccordionButton)`
  display: flex;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 5px;
  background: none;
  border-radius: 0%;
  text-transform: capitalize;
  justify-content: space-between;
  color: ${({ theme }) => theme.sameHover};

  .icons {
    font-size: 1.5rem;
  }
`

const CheckedItem = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`
