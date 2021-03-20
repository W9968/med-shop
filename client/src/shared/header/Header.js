import React from 'react'

//imports
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <NavLink to='/'>home</NavLink>
      <span> | </span>
      <NavLink to='/login'>login</NavLink>
      <span> | </span>
      <NavLink to='/register'>register</NavLink>
      <span> | </span>
      <NavLink to='/dashboard'>dash</NavLink>
    </div>
  )
}

export default Header
