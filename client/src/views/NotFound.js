import React from 'react'
import { NavLink } from 'react-router-dom'

//styled
import styled from 'styled-components'

const NotFound = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <div>not found</div>
          <div>
            <NavLink to='/'>go home</NavLink>
          </div>
        </Container>
      </Wrapper>
    </>
  )
}

export default NotFound

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  background-color: var(--wht);
`

const Container = styled.div`
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--wht);
`
