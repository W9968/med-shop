import React from 'react'

// components
import SignUp from '../../services/auth/SignUp'
// styles
import { Wrapper } from '../../styles/Auth.element'

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
