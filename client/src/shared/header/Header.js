import React from 'react'

//imports
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <NavLink to='/'>home</NavLink>
      <NavLink to='/login'>login</NavLink>
    </div>
  )
}

export default Header
