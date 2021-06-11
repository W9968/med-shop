import React from 'react'
import styled, { keyframes } from 'styled-components'

const ContentLoader = () => {
  return (
    <>
      <Container>
        <Loading />
      </Container>
    </>
  )
}

export default ContentLoader

const Container = styled.div`
  display: flex;
  padding: 4rem 1rem;
  align-items: center;
  justify-content: center;
`

const load = keyframes`
  to {
    background-size: 90% 3px
  }
`

const Loading = styled.div`
  &::before {
    content: 'Loading...';
  }

  font-size: 1rem;
  font-weight: 600;
  padding-bottom: 5px;
  font-family: proxima-nova, sans-serif;
  animation: ${load} 2s linear infinite;
  background: linear-gradient(currentColor 0 0) bottom left/0% 3px no-repeat;
`
