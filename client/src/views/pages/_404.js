import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { motion } from 'framer-motion'

const _404 = () => {
  const [rotation, setRotation] = useState(180)

  return (
    <>
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: '-30%' }}
          animate={{ opacity: 1, y: '0%' }}
          transition={{ type: 'spring' }}>
          <Div>
            <Image src='/asset/carts.svg' />
            <Text>Oh no!</Text>
            <Parag>
              We'are usually trying to provide you with everything, but we could
              not find what are you looking for.
            </Parag>
            <Button
              onMouseEnter={() => setRotation(rotation + 180)}
              onMouseLeave={() => setRotation(rotation + 180)}
              to='/'>
              <Parag>go home &#160;</Parag>
              <motion.span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                initial={{ rotate: rotation }}
                animate={{ rotate: rotation }}
                transition={{ type: 'spring' }}>
                <Icon />
              </motion.span>
            </Button>
          </Div>
        </motion.div>
      </Wrapper>
    </>
  )
}

export default _404

const Wrapper = styled.div`
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.body};

  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`

const Div = styled.div`
  width: 600px;
  display: flex;
  padding: 2rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    width: 90%;
  }
`

const Image = styled.img`
  width: 200px;
  margin-bottom: 1.5rem;
`

const Text = styled.h1`
  margin-bottom: 1rem;
  font-size: 2.225rem;
  text-transform: capitalize;
`
const Parag = styled.p`
  font-size: 1.225rem;
`

const Button = styled(NavLink)`
  display: flex;
  margin: 1rem 0rem;
  border-radius: 4.95px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 0.8225rem 3rem;
  transition: 300ms ease-in-out;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};

  &:hover {
    color: ${({ theme }) => theme.body};
    border: 1px solid ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.text};
  }
`
const Icon = styled(BiArrowBack)`
  font-size: 1.225rem;
`
