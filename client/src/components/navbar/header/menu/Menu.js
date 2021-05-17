import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <Container>
        <List>
          <Item>
            <Linker activeStyle={{ color: '#00C9A7' }} to='/profile'>
              billets avions
            </Linker>
          </Item>
          <Item>
            <Linker activeStyle={{ color: '#00C9A7' }} to='/profile'>
              Alimentaires
            </Linker>
          </Item>
          <Item>
            <Linker activeStyle={{ color: '#00C9A7' }} to='/profile'>
              produit beauté
            </Linker>
          </Item>
          <Item>
            <Linker activeStyle={{ color: '#00C9A7' }} to='/profile'>
              médecine esthétique
            </Linker>
          </Item>
          <Item>
            <Linker activeStyle={{ color: '#00C9A7' }} to='/profile'>
              autre domaines
            </Linker>
          </Item>
        </List>
      </Container>
    </>
  )
}

export default Menu

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const List = styled.ul`
  width: 750px;
  display: flex;
  list-style: none;
  justify-content: space-around;
`
const Item = styled.li``

const Linker = styled(NavLink)`
  font-weight: 400;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.darkhover};

  &:hover {
    color: ${({ theme }) => theme.correct};
  }
`
