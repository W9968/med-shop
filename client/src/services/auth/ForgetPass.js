import React, { useRef } from 'react'

//components
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import TextHero from '../../shared/hero/TextHero'

//styles
import {
  Wrapper,
  Form,
  InputGroup,
  Input,
  Button,
  Parag,
} from '../../styles/Form.element'

const ResetPass = () => {
  const email = useRef()
  const { EmailReset } = useAuth()

  const handleResetEmail = async (e) => {
    e.preventDefault()
    await EmailReset(email.current.value)
    // still no completed
    // we need to push to a new route where we can update password
  }

  return (
    <>
      <Wrapper>
        <NavLink to='/'>
          <TextHero text='medespoir shop' />
        </NavLink>
        <Form>
          <InputGroup>
            <Parag level={5}>
              type your email in order to recieve the reset password link
            </Parag>
          </InputGroup>
          <InputGroup>
            <Input
              type='email'
              autoComplete='no'
              placeholder='email'
              ref={email}
            />
          </InputGroup>
          <InputGroup>
            <Button onClick={handleResetEmail}>reset password</Button>
          </InputGroup>
        </Form>
      </Wrapper>
    </>
  )
}

export default ResetPass
