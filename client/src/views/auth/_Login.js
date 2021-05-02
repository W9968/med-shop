import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Loader } from '../../components/imports'
import { useAuth } from '../../global/exports'
import {
  Container,
  Wrapper,
  Text,
  InputGroup,
  Input,
  CheckButton,
  Button,
  Correct,
  Error,
  Message,
} from '../../styles/Form.element'

const _Login = () => {
  const history = useHistory()
  const { login, loading, logged, message, setMessage } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = useState(false)
  const [validationEmail, setValidationEmail] = useState({
    validate1: false,
    validate2: false,
  })
  const [validationPassword, setValidationPassword] = useState({
    validate1: false,
    validate2: false,
  })

  const handleEmailValdiation = (e) => {
    setEmail(e.target.value)
    setMessage({
      type: '',
      content: '',
    })
    email.length <= 1 &&
      setValidationEmail({
        validate1: true,
        validate2: false,
      })

    email.length > 1 &&
      setValidationEmail({
        validate1: false,
        validate2: true,
      })
  }

  const handlePassValidation = (e) => {
    setPassword(e.target.value)
    setMessage({
      type: '',
      content: '',
    })
    password.length < 8 &&
      setValidationPassword({
        validate1: true,
        validate2: false,
      })
    password.length >= 8 &&
      setValidationPassword({
        validate1: false,
        validate2: true,
      })
  }

  const handleChecks = (e) => {
    setChecked(e.target.checked)
  }

  const handleSubmission = () => {
    if (validationEmail.validate2 && validationPassword.validate2) {
      login(email, password, checked)
      if (logged) {
        history.push('/')
      }
    } else {
      setMessage({
        type: 'error',
        content: 'Please Enter your Infos',
      })
    }
  }

  const WrongStyled = {
    background: ({ theme }) => theme.error,
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Text to='/'>medEspoir</Text>
          {message.type === 'error' && (
            <Message style={WrongStyled}>{message.content}</Message>
          )}

          <InputGroup className='fieldgroup'>
            <Input
              type='text'
              autoComplete='no'
              placeholder='E-mail'
              onChange={handleEmailValdiation}
            />
            {validationEmail.validate1 && <Error />}
            {validationEmail.validate2 && <Correct />}
          </InputGroup>

          <InputGroup className='fieldgroup'>
            <Input
              type='password'
              placeholder='Password'
              onChange={handlePassValidation}
            />
            {validationPassword.validate1 && <Error />}
            {validationPassword.validate2 && <Correct />}
          </InputGroup>

          <InputGroup style={{ marginTop: '1rem' }}>
            <CheckButton
              checked={checked}
              label='Keep me Signed In'
              onChange={handleChecks}
            />
          </InputGroup>

          <InputGroup>
            <Button disabled={loading} onClick={handleSubmission}>
              {loading ? <Loader /> : 'Login'}
            </Button>
          </InputGroup>

          <InputGroup style={{ flexDirection: 'column', alignItems: 'center' }}>
            <p>
              Don't have an account? <NavLink to='/register'>Register</NavLink>{' '}
              here
            </p>
            <p>
              <NavLink to='/password/mail'>forgot password ?</NavLink>
            </p>
          </InputGroup>
        </Wrapper>
      </Container>
    </>
  )
}

export default _Login
