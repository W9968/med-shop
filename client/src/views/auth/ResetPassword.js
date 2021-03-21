import React from 'react'

//components
import NewPass from '../../services/auth/NewPass'
//styles
import { Wrapper } from '../../styles/Auth.element'

const ResetPassword = () => {
  return (
    <>
      <Wrapper>
        <NewPass />
      </Wrapper>
    </>
  )
}

export default ResetPassword
