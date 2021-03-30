import React, { useRef, useState, useEffect } from 'react'

//components
import { NavLink, useHistory } from 'react-router-dom'
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
  //get strigified url
  const url = JSON.stringify(window.location.href)
  //pull credentials from url
  const [token, setToken] = useState('')
  const [email, setEmail] = useState('')
  useEffect(() => {
    const regex = url.split('?')[1].split('&')
    setToken(regex[0].split('=')[1])
    setEmail(regex[1].split('=')[1].slice(0, -1))
  }, []) // eslint-disable-line
  const { PasswordReset, logged } = useAuth()
  const history = useHistory()
  const pass = useRef()
  const confirmPass = useRef()

  const handleResetPassword = async () => {
    console.log(typeof token)
    console.log(typeof email)
    await PasswordReset(token, email, pass.current.value)

    if (logged) {
      history.push('/')
    }
  }

  return (
    <>
      <Wrapper>
        <NavLink to='/'>
          <TextHero text='medespoir shop' />
        </NavLink>
        <Form>
          <InputGroup>
            <Parag level={5}>make sure to type your new password</Parag>
          </InputGroup>
          <InputGroup>
            <Input
              type='email'
              autoComplete='no'
              placeholder='your email'
              defaultValue={email}
            />
          </InputGroup>
          <InputGroup>
            <Input
              type='password'
              autoComplete='no'
              placeholder='new password'
              ref={pass}
            />
          </InputGroup>
          <InputGroup>
            <Input
              type='password'
              autoComplete='no'
              placeholder='confirm password'
              ref={confirmPass}
            />
          </InputGroup>
          <InputGroup>
            <Button onClick={handleResetPassword}>reset password</Button>
          </InputGroup>
        </Form>
      </Wrapper>
    </>
  )
}

export default ResetPass
