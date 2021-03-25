import React from 'react'

//imports
import Logo from './Logo'
import UserIcon from './UserIcon'
//styles
import { Wrapper } from '../../styles/Header.element'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Wrapper>
      <Logo logo='Med Shop' />
      <NavLink to='/dashboard'>ff</NavLink>
      <UserIcon />
    </Wrapper>
  )
}

export default Header
