import React from 'react'

//styles
import { LogoLink } from '../../styles/Header.element'

const Logo = ({ logo }) => {
  return (
    <>
      <LogoLink to='/'>{logo}</LogoLink>
    </>
  )
}

export default Logo
