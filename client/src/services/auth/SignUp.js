import React, { useRef } from 'react'

//components
import useApi from '../../hooks/useApi'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
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

const SignUp = () => {
  const name = useRef()
  const email = useRef()
  const pass = useRef()

  const { Register, currentUser, setCurrentUser } = useAuth()

  const handleRegister = async (e) => {
    e.preventDefault()
    await Register(name.current.value, email.current.value, pass.current.value)
    await useApi
      .get('/api/user')
      .then((response) => {
        setCurrentUser(response.data)
      })
      .catch(() => {
        console.log('no register')
      })

    console.log('up', currentUser)
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
