import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Brand = ({ name, link }) => {
  return (
    <>
      <BrandName to={link}>{name}</BrandName>
    </>
  )
}

export default Brand

const BrandName = styled(NavLink)`
  padding: 0px;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 1px;
`
