import React, { useState } from 'react'

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
import { Alert, AlertIcon } from '@chakra-ui/alert'

const ResetPass = () => {
  const [email, setEmail] = useState()
  const [loading, setLoading] = useState(false)
  const { EmailReset, message } = useAuth()

  const handleResetEmail = async (e) => {
    e.preventDefault()

    setLoading(true)
    await EmailReset(email)
    setLoading(false)
  }

  return (
    <>
      <Wrapper>
        <NavLink to='/'>
          <TextHero text='medespoir shop' />
        </NavLink>
        <Form>
          <InputGroup>
            {message !== null ? (
              <Alert status={message[1]}>
                <AlertIcon />
                {message[0]}
              </Alert>
            ) : (
              <Parag level={5}>
                type your email in order to recieve the reset password link
              </Parag>
            )}
          </InputGroup>
          <InputGroup>
            <Input
              type='email'
              autoComplete='no'
              placeholder='email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Button onClick={handleResetEmail} disabled={loading}>
              Send Link
            </Button>
          </InputGroup>
        </Form>
      </Wrapper>
    </>
  )
}

export default ResetPass
