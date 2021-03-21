import React, { useRef } from 'react'

//components
import { NavLink } from 'react-router-dom'
//import { useAuth } from '../context/AuthContext'
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
  const pass = useRef()

  return (
    <>
      <Wrapper>
        <NavLink to='/'>
          <TextHero text='medespoir shop' />
        </NavLink>
        <Form>
          <InputGroup>
            <Parag level={5}>type your new password</Parag>
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
            <Button>reset password</Button>
          </InputGroup>
        </Form>
      </Wrapper>
    </>
  )
}

export default ResetPass
