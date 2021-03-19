import React, { useRef } from 'react'

//components
import useApi from '../hooks/useApi'
import { NavLink } from 'react-router-dom'
import TextHero from '../shared/hero/TextHero'
// styles
import { Wrapper, Form, InputGroup, Input, Button, Parag } from './Form.element'

const SignUp = () => {
  const name = useRef()
  const email = useRef()
  const pass = useRef()

  let handleRegister = async () => {
    await useApi.get('/sanctum/csrf-cookie')
    await useApi
      .post('/register', {
        name: name.current.value,
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
            <Input
              type='text'
              autoComplete='no'
              placeholder='name'
              ref={name}
            />
          </InputGroup>
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
          <InputGroup>
            <Button onClick={handleRegister}>sign Up</Button>
          </InputGroup>
          <InputGroup>
            <Parag level={5}>
              you already have account ?{' '}
              <NavLink to='/login'>login here</NavLink>
            </Parag>
          </InputGroup>
        </Form>
      </Wrapper>
    </>
  )
}

export default SignUp
