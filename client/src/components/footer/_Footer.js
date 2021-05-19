import React from 'react'
import styled from 'styled-components'

const _Footer = () => {
  return (
    <>
      <Wrapper>
        <Container>footer</Container>
      </Wrapper>
    </>
  )
}

export default _Footer

const Wrapper = styled.footer`
  padding: 0rem 1rem;
`
const Container = styled.div`
  padding: 1rem 0rem;
  border-top: 1px solid ${({ theme }) => theme.darkhover};
`
