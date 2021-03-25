import React from 'react'

//imports
import Logo from './Logo'
//styles
import { Wrapper } from '../../styles/Header.element'
import IconSection from './IconSection'

const Header = () => {
  return (
    <Wrapper>
      <Logo logo='Med Shop' />
      <IconSection />
    </Wrapper>
  )
}

export default Header
