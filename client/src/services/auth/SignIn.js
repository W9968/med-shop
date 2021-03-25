import React, { useRef } from 'react'

//components
import { useAuth } from '../context/AuthContext'
import { NavLink } from 'react-router-dom'
import TextHero from '../../shared/hero/TextHero'
// styles
import {
  Wrapper,
  Form,
  InputGroup,
  Input,
  Button,
  Parag,
} from '../../styles/Form.element'

const SignIn = () => {
  const email = useRef()
  const pass = useRef()

  const { Login } = useAuth()

  let handleLogin = async (e) => {
    e.preventDefault()
    await Login(email.current.value, pass.current.value)
  }

  return (
    <>
      <Wrapper>
        <NavLink to='/'>
          <TextHero text='medespoir shop' />
        </NavLink>
        <Form>
          <InputGroup>
            <Input
              type='email'
              autoComplete='no'
              placeholder='email'
              ref={email}
            />
          </InputGroup>
          <InputGroup>
            <Input type='password' placeholder='password' ref={pass} />
          </InputGroup>
          <InputGroup>keep me signed in</InputGroup>
          <InputGroup>
            <Button onClick={handleLogin}>sign in</Button>
          </InputGroup>

          <InputGroup>
            <Parag level={5}>
              forgot your password ? <NavLink to='/reset'>reset here</NavLink>
            </Parag>
            <Parag level={5}>
              you don't have account ?{' '}
              <NavLink to='/register'>create here</NavLink>
            </Parag>
          </InputGroup>
        </Form>
      </Wrapper>
    </>
  )
}

export default SignIn
