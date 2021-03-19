import React from 'react'

// components
import SignIn from '../../auth/SignIn'
// styles
import styled from 'styled-components'

const Login = () => {
  return (
    <>
      <Wrapper>
        <SignIn />
      </Wrapper>
    </>
  )
}

export default Login

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  background-color: var(--wht);
`
