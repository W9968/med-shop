import React from 'react'
import { BiCart } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Icon = () => {
  return (
    <>
      <Link to='/checkout'>
        <BiCart />
      </Link>
    </>
  )
}

export default Icon

const Link = styled(NavLink)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
`
