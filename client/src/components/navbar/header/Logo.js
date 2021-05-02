import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Logo = ({ brand, goTo }) => {
  return (
    <>
      <Brand to={goTo}>{brand}</Brand>
    </>
  )
}

export default Logo

const Brand = styled(NavLink)`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
`
