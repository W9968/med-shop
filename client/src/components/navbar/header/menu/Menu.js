import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  const paths = [
    { name: 'billets avions', path: '/planticket' },
    { name: 'Alimentaires', path: '/organic' },
    { name: 'produit beauté', path: '/beautyproduct' },
    { name: 'médecine esthétique', path: '/cosmetic' },
    { name: 'autre domaines', path: '/others' },
  ]

  return (
    <>
      <Container>
        {paths.map((value, key) => {
          return (
            <Linker
              key={key}
              activeStyle={{ color: '#5865f2' }}
              to={`${value.path}`}>
              {value.name}
            </Linker>
          )
        })}
      </Container>
    </>
  )
}

export default Menu

const Container = styled.div`
  flex: 1;
  display: flex;
  margin: 1rem 0rem;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

const Linker = styled(NavLink)`
  width: 100%;
  padding: 10px;
  font-weight: 600;
  font-size: 1.125rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.text};

  &:hover {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.hover};
  }
`
