import React, { useRef, useState } from 'react'

//components
import { useAuth } from '../context/AuthContext'
import { NavLink, useHistory } from 'react-router-dom'
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
//chakra ui component
//import { Alert, AlertIcon } from '@chakra-ui/alert'

const SignIn = () => {
  const email = useRef()
  const pass = useRef()
  const history = useHistory()

  const [loading, setLoading] = useState(false)
  const { Login, logged } = useAuth()

  const handleLogin = async (e) => {
    e.preventDefault()

    setLoading(true)
    await Login(email.current.value, pass.current.value)

    if (logged) {
      history.push('/')
    }

    setLoading(false)
  }

  return (
    <>
      <Wrapper>
        <NavLink to='/'>
          <TextHero text='medespoir shop' />
        </NavLink>
        <Form onSubmit={handleLogin}>
          <InputGroup>
            <Input
              type='email'
              autoComplete='no'
              placeholder='email'
              ref={email}
              required
            />
          </InputGroup>
          <InputGroup>
            <Input type='password' placeholder='password' ref={pass} />
          </InputGroup>
          <InputGroup>
            <Button disabled={loading}>sign in</Button>
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
