import React from 'react'
import styled from 'styled-components'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { BiLogIn, BiCart, BiSearch, BiMenu } from 'react-icons/bi'
import { useAuth } from '../../../global/exports'
import Drawable from '../../Drawer.js/_Drawable'
import MobileDrawer from '../mobile/MobileDrawer'
import Logout from '../../logout/Logout'

const IconHeader = () => {
  const { logged } = useAuth()
  const path = useRouteMatch()

  const arrayIcon = [
    { icon: <BiSearch />, path: '/' },
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

        <Item>
          <Link to={path}>
            <Drawable
              icon={<BiMenu />}
              children={<MobileDrawer />}
              footer={<Logout />}
            />
          </Link>
        </Item>
        {!logged && (
          <Item>
            <Link to='/login'>
              <BiLogIn />
            </Link>
          </Item>
        )}
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
  align-items: center;
  justify-content: center;
`

const Link = styled(NavLink)`
  display: flex;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;

  margin: 0rem 0rem 0rem 0.5rem;
  color: ${({ theme }) => theme.secondary};

  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`
