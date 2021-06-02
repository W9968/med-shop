import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Skeleton = () => {
  return (
    <>
      <Skelety />
      <Skelety />
      <Skelety />
    </>
  )
}

export default Skeleton

const Skelety = styled(motion.div)`
  padding: 10px;
  margin: 5px 0;
  background-color: ${({ theme }) => theme.hover};

  &:first-child {
    width: 50%;
  }

  &:last-child {
    width: 80%;
  }
`
