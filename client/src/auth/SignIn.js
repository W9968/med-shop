import React, { useRef } from 'react'

//components
import useApi from '../hooks/useApi'
import { NavLink } from 'react-router-dom'
import TextHero from '../shared/hero/TextHero'
// styles
import { Wrapper, Form, InputGroup, Input, Button } from './Form.element'

const SignIn = () => {
  const email = useRef()
  const pass = useRef()

  let handleLogin = async () => {
    await useApi.get('/sanctum/csrf-cookie')
    await useApi
      .post('/login', {
        email: email.current.value,
        password: pass.current.value,
      })
      .then((response) => {
        console.log(response.data)
      })

    useApi.get('/api/user').then((res) => console.log(res.data))
  }

  return (
    <>
      <Wrapper>
        <NavLink to='/'>
          <TextHero text='medespoir shop' />
        </NavLink>
        <Form>
          <InputGroup>
            <Input autoComplete='no' placeholder='email' ref={email} />
          </InputGroup>
          <InputGroup>
            <Input placeholder='password' ref={pass} />
          </InputGroup>
          <InputGroup>
            <Button onClick={handleLogin}>sign in</Button>
          </InputGroup>
        </Form>
      </Wrapper>
    </>
  )
}

export default SignIn
