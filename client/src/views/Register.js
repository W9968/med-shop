import React from 'react'

// components
import SignUp from '../auth/SignUp'
// styles
import styled from 'styled-components'

const Register = () => {
  return (
    <>
      <Wrapper>
        <SignUp />
      </Wrapper>
    </>
  )
}

export default Register

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  background-color: var(--wht);
`
