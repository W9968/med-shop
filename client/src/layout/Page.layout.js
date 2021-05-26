import React from 'react'
import { Wrapper, Container } from '../styles/PageLayout.element'

const Pagelayout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </>
  )
}

export default Pagelayout
