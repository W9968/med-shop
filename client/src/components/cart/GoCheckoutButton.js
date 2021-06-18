import React from 'react'
import styled from 'styled-components'
import { motion as m } from 'framer-motion'
import { useHistory } from 'react-router-dom'
import { BiChevronRight } from 'react-icons/bi'
import { CartContext } from '../../global/exports'

const GoCheckoutButton = () => {
  const history = useHistory()
  const { total } = React.useContext(CartContext)
  return (
    <>
      <Button onClick={() => history.push('/checkout')}>
        <Side1>
          <p style={{ fontSize: '15px', color: '#adcaff' }}>amount to pay</p>
          <p style={{ fontSize: '1.125rem', marginTop: '5px' }}>{total}$</p>
        </Side1>
        <Side2 whileTap={{ scale: 0.7 }}>
          <BiChevronRight style={{ fontSize: '1.5rem' }} />
        </Side2>
      </Button>
    </>
  )
}

export default GoCheckoutButton

const Button = styled.button`
  width: 100%;
  border: none;
  display: flex;
  padding: 1rem;
  outline: none;
  color: #ffffff;
  cursor: pointer;
  margin: 1rem 0rem;
  font-size: 1.125rem;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.optional};
`
const Side1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Side2 = styled(m.div)`
  padding: 5px;
  display: flex;
  border-radius: 50%;
  border: 1px solid #ffffff;
`
