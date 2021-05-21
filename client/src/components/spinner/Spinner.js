import React from 'react'
import styled from 'styled-components'
import { motion as m } from 'framer-motion'
import { ImSpinner10 } from 'react-icons/im'
const Spinner = () => {
  return (
    <>
      <m.div
        initial={{ strokeDasharray: 0 }}
        animate={{ rotate: 360, strokeDasharray: 1 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          type: 'spring',
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
