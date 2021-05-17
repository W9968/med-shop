import React from 'react'
import styled from 'styled-components'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { BiLogIn, BiCart, BiSearch, BiHeart, BiUser } from 'react-icons/bi'
import { useAuth } from '../../../global/exports'
import Drawable from '../../Drawer.js/_Drawable'
import MobileDrawer from '../mobile/MobileDrawer'
import Logout from '../../logout/Logout'

const IconHeader = () => {
  const { logged } = useAuth()
  const path = useRouteMatch()
  const loginIcon = { icon: <BiLogIn />, path: '/login' }
  const loggedIcon = {
    icon: (
      <Drawable
        icon={<BiUser />}
        children={<MobileDrawer />}
        footer={<Logout />}
      />
    ),
    path: path,
  }

  const arrayIcon = [
    { icon: <BiSearch />, path: '/' },
    { icon: <BiHeart />, path: '/' },
    logged ? { ...loggedIcon } : { ...loginIcon },
    { icon: <BiCart />, path: '/checkout' },
  ]

  return (
    <>
      <List>
        {arrayIcon.map((icon, i) => {
          return (
            <Item key={i}>
              <Link to={icon.path}>{icon.icon}</Link>
            </Item>
          )
        })}
      </List>
    </>
  )
}

export default IconHeader

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
  }
`

const Item = styled.li`
  display: flex;
`

const Link = styled(NavLink)`
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0rem 0rem 0rem 0.5rem;
  color: ${({ theme }) => theme.primary};

  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`
