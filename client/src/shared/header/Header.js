import React from 'react'

//imports
import { useAuth } from '../../services/context/AuthContext'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import UserIcon from './UserIcon'

const Header = () => {
  const { Logout } = useAuth()

  return (
    <div>
      <Logo logo='Med Shop' />
      <span> | </span>
      <UserIcon />
      <span> | </span>
      <NavLink to='/dashboard'>dash</NavLink>
      <span> | </span>
      <button onClick={Logout}>log out</button>
    </div>
  )
}

export default Header
