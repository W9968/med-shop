import React from 'react'
import styled, { keyframes } from 'styled-components'

const ScreenLoading = () => {
  return (
    <>
      <Container>
        <Pulse />
      </Container>
    </>
  )
}

export default ScreenLoading

const Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const pls = keyframes`
  to {
   box-shadow: 0 0 0 40px #0000
  }
`

const Pulse = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  border-radius: 50%;
  animation: ${pls} 1.5s infinite linear;
  background: ${({ theme }) => theme.third};
  box-shadow: 0 0 0 0 ${({ theme }) => theme.hover};

  &::after,
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: 0 0 0 0 #0004;
    animation: inherit;
    animation-delay: -0.5s;
  }

  &::after {
    animation-delay: -1s;
  }
`
