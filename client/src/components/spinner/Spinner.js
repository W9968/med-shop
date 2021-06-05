import React from 'react'
import styled from 'styled-components'
import { motion as m } from 'framer-motion'
import { ImSpinner10 } from 'react-icons/im'
const Spinner = () => {
  return (
    <>
      <m.div
        animate={{ rotate: 359 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          type: 'tween',
        }}>
        <Loader />
      </m.div>
    </>
  )
}

export default Spinner

const Loader = styled(ImSpinner10)`
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.body};
`
