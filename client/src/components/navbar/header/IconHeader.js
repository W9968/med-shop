import React from 'react'
import styled from 'styled-components'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { BiCart, BiMenu } from 'react-icons/bi'
import Drawable from '../../Drawer.js/_Drawable'
import MobileDrawer from '../mobile/MobileDrawer'
import Logout from '../../logout/Logout'

const IconHeader = () => {
  const path = useRouteMatch()

  return (
    <>
      <List>
        <Item>
          <Link to={path}>
            <Drawable direction='right' icon={<BiCart />} children={'sdfdf'} />
          </Link>
        </Item>

        <Item>
          <Link to={path}>
            <Drawable
              direction='left'
              icon={<BiMenu />}
              children={<MobileDrawer />}
              footer={<Logout />}
            />
          </Link>
        </Item>
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
  margin: 0rem 0.5rem;
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
  font-size: 1.7rem;
  align-items: center;
  justify-content: center;
  margin: 0rem 0rem 0rem 0.5rem;
  color: ${({ theme }) => theme.text};

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`
