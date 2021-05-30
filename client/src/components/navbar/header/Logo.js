import React from 'react'
import { NavLink } from 'react-router-dom'
import { IconLogo } from '../../imports'

const Logo = ({ goTo }) => {
  return (
    <>
      <NavLink to={goTo}>
        <IconLogo />
      </NavLink>
    </>
  )
}

export default Logo
