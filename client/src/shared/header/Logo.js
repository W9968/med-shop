import React from 'react'

//styles
import { Links } from '../../styles/Header.element'

const Logo = ({ logo }) => {
  return (
    <>
      <Links to='/'>{logo}</Links>
    </>
  )
}

export default Logo
