import React from 'react'
import styled from 'styled-components'
import { FiShoppingBag } from 'react-icons/fi'

const EmptyCart = () => {
  return (
    <>
      <Div>
        <Rounded>
          <FiShoppingBag style={{ fontSize: '2rem' }} />
        </Rounded>
        <h2 style={{ marginTop: '1rem' }}>Your cart is empty</h2>
      </Div>
    </>
  )
}

export default EmptyCart

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Rounded = styled.div`
  display: flex;
  padding: 42px;
  border-radius: 50%;
  border: 2px dashed ${({ theme }) => theme.text};
`
