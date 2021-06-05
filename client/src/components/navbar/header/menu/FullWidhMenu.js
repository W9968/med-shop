import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const FullWidhMenu = () => {
  const paths = [
    { name: 'billets avions', path: '/planticket' },
    { name: 'Alimentaires', path: '/organic' },
    { name: 'produit beauté', path: '/beautyproduct' },
    { name: 'médecine esthétique', path: '/cosmetic' },
    { name: 'autres', path: '/others' },
  ]

  return (
    <>
      <Container>
        <Row>
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
        </Row>
      </Container>
    </>
  )
}

export default FullWidhMenu

const Container = styled.div`
  flex: 1;
  display: flex;
  margin: 0 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const Row = styled.div``

const Linker = styled(NavLink)`
  width: 100%;
  padding: 0 7px;
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`
