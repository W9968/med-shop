import React, { useRef } from 'react'

//components
import useApi from '../../hooks/useApi'
import { NavLink } from 'react-router-dom'
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
  const email = useRef()

  const handleReset = async () => {
    await useApi.get('/sanctum/csrf-cookie')
    await useApi
      .post('/password/email', {
        email: email.current.value,
      })
      .then((res) => {
        console.log(res.data, res.status, res.headers)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <Wrapper>
        <NavLink to='/'>
          <TextHero text='medespoir shop' />
        </NavLink>
        <Form>
          <InputGroup>
            <Parag level={5}>
              type your email in order to recieve the reset password link
            </Parag>
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
            <Button onClick={handleReset}>reset password</Button>
          </InputGroup>
        </Form>
      </Wrapper>
    </>
  )
}

export default ResetPass
