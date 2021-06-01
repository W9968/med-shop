import React from 'react'
import { Wrapper } from '../styles/PageLayout.element'

const Pagelayout = ({ children }) => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  )
}

export default Pagelayout
