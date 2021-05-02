import React, { useState, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useAuth } from '../../global/exports'
import { Loader } from '../../components/imports'
import {
  Container,
  Wrapper,
  Text,
  InputGroup,
  Input,
  Button,
  Correct,
  Error,
} from '../../styles/Form.element'

const _PasswordReset = () => {
  const history = useHistory()
  const { loading, logged, passwordReset } = useAuth()
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')
  const url = JSON.stringify(window.location.href)

  const [validationEmail, setValidationEmail] = useState({
    validate1: false,
    validate2: false,
  })
  const [validationPassword, setValidationPassword] = useState({
    validate1: false,
    validate2: false,
  })
  useEffect(() => {
    const regex = url.split('?')[1].split('&')
    setToken(regex[0].split('=')[1])
    setEmail(regex[1].split('=')[1].slice(0, -1))
    setValidationEmail({
      validate1: false,
      validate2: true,
    })
  }, [url, setToken, setEmail])

  const handleEmailValdiation = (e) => {
    setEmail(e.target.value)
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

  const handleSubmission = () => {
    if (validationEmail.validate2 && validationPassword.validate2) {
      passwordReset(token, email, password)
      if (logged) {
        history.push('/')
      }
    } else {
      alert(`false,email: ${email}, password: ${password}`)
    }
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Text to='/'>medEspoir</Text>

          <InputGroup className='fieldgroup'>
            <Input
              type='text'
              autoComplete='no'
              placeholder='E-mail'
              defaultValue={email}
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

          <InputGroup>
            <Button disabled={loading} onClick={handleSubmission}>
              {loading ? <Loader /> : 'Set New Password'}
            </Button>
          </InputGroup>

          <InputGroup style={{ flexDirection: 'column', alignItems: 'center' }}>
            <p>
              Already have an accound ? <NavLink to='/login'>Login</NavLink>{' '}
              here
            </p>
          </InputGroup>
        </Wrapper>
      </Container>
    </>
  )
}

export default _PasswordReset
