import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
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
import { Loader } from '../../components/imports'
import { useAuth } from '../../global/exports'

const _MailReset = () => {
  const { loading, emailReset, message, setMessage } = useAuth()
  const [email, setEmail] = useState('')
  const [validationEmail, setValidationEmail] = useState({
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

  const handleSubmission = () => {
    if (validationEmail.validate2) {
      emailReset(email)
    } else {
      setMessage({
        type: 'error',
        content: 'Please Enter your Infos',
      })
    }
  }

  const CorrectStyled = {
    background: ({ theme }) => theme.correct,
  }

  const WrongStyled = {
    background: ({ theme }) => theme.error,
  }

  return (
    <>
      {' '}
      <Container>
        <Wrapper>
          <Text to='/'>medEspoir</Text>
          {message.type === 'error' && (
            <Message style={WrongStyled}>{message.content}</Message>
          )}
          {message.type === 'success' && (
            <Message style={CorrectStyled}>{message.content}</Message>
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

          <InputGroup>
            <Button disabled={loading} onClick={handleSubmission}>
              {loading ? <Loader /> : 'Send Mail'}
            </Button>
          </InputGroup>

          <InputGroup style={{ flexDirection: 'column', alignItems: 'center' }}>
            <p>
              To access you account? <NavLink to='/login'>Login</NavLink> here
            </p>
          </InputGroup>
        </Wrapper>
      </Container>
    </>
  )
}

export default _MailReset
