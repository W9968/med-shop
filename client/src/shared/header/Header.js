import React from 'react'

//imports
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <NavLink to='/'>home</NavLink>
      <spanp> | </spanp>
      <NavLink to='/login'>login</NavLink>
      <spanp> | </spanp>
      <NavLink to='/register'>register</NavLink>
      <spanp> | </spanp>
      <NavLink to='/dashboard'>dash</NavLink>
    </div>
  )
}

export default Header
