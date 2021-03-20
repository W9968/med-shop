import React from 'react'

//components
import ResetPass from '../../services/auth/ResetPass'
//styles
import { Wrapper } from '../../styles/Auth.element'

const ForgotPassword = () => {
  return (
    <>
      <Wrapper>
        <ResetPass />
      </Wrapper>
    </>
  )
}

export default ForgotPassword
