import React from 'react'

//imports
import useApi from '../../hooks/useApi'
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
      <span> | </span>
      <button
        onClick={async () => {
          await useApi.post('/logout')
        }}>
        log out
      </button>
    </div>
  )
}

export default Header
