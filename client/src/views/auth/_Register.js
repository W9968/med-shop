import React, { useState } from 'react'
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
  Message,
} from '../../styles/Form.element'

const _Register = () => {
  const history = useHistory()
  const { register, loading, logged, message, setMessage } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validationEmail, setValidationEmail] = useState({
    validate1: false,
    validate2: false,
  })
  const [validationPassword, setValidationPassword] = useState({
    validate1: false,
    validate2: false,
  })

  const [validationName, setValidationName] = useState({
    validate1: false,
    validate2: false,
  })

  const handleNameValidation = (e) => {
    setName(e.target.value)
    setMessage({
      type: '',
      content: '',
    })
    name.length <= 2 &&
      setValidationName({
        validate1: true,
        validate2: false,
      })

    name.length >= 2 &&
      setValidationName({
        validate1: false,
        validate2: true,
      })
  }

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

  const handleSubmission = () => {
    if (
      validationName.validate2 &&
      validationEmail.validate2 &&
      validationPassword.validate2
    ) {
      register(name, email, password)
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
              placeholder='Name'
              onChange={handleNameValidation}
            />
            {validationName.validate1 && <Error />}
            {validationName.validate2 && <Correct />}
          </InputGroup>

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

          <InputGroup>
            <Button disabled={loading} onClick={handleSubmission}>
              {loading ? <Loader /> : 'Register'}
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

export default _Register
