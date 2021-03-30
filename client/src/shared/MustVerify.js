import React from 'react'

//importys
import { useAuth } from '../services/context/AuthContext'
//slyled

import {
  StyledAlert,
  StlyedIcon,
  StyledTitle,
  Button,
} from '../styles/MustVerify.element'

const MustVerify = () => {
  const { logged, currentUser, ResendEmail } = useAuth()

  return (
    <>
      {logged && currentUser.email_verified_at === null && (
        <StyledAlert status='warning'>
          <StlyedIcon />
          <StyledTitle>
            please verify your email, if you did not recieve a link within 60
            minutes, click <Button onClick={ResendEmail}>here</Button> to
            recieve a new Link
          </StyledTitle>
        </StyledAlert>
      )}
    </>
  )
}

export default MustVerify
