import React from 'react'

//imports
import Logo from './Logo'
import UserIcon from './UserIcon'
//styles
import { Wrapper } from '../../styles/Header.element'

const Header = () => {
  return (
    <Wrapper>
      <Logo logo='Med Shop' />

      <UserIcon />
    </Wrapper>
  )
}

export default Header
