import React, { useRef } from 'react'

//components
import useApi from '../../hooks/useApi'
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

const SignIn = () => {
  const pass = useRef()
  const email = useRef()
  const history = useHistory()

  let handleLogin = async () => {
    await useApi.get('/sanctum/csrf-cookie')
    await useApi
      .post('/login', {
        email: email.current.value,
        password: pass.current.value,
        //remember_token: 'sfkhsdkfhjd'
      })
      .then((response) => {
        console.log(response.data)
      })
    //get user
    useApi
      .get('/api/user')
      .then((res) =>
        res.data.role === 1 ? history.push('/dashboard') : history.push('/')
      )

    //user.role === 1 ? history.push('/dashboard') : history.push('/')
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
