import React from 'react'

// components
import SignIn from '../../auth/SignIn'
// styles
import { Wrapper } from '../../styles/Auth.element'

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
