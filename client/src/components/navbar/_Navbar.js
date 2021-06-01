import React from 'react'
import styled from 'styled-components'
import { BiMenu, BiCart } from 'react-icons/bi'
import { useMediaQuery } from '../../hooks/useMediaQuery'

import Logo from './header/Logo'
import IconHeader from './header/IconHeader'
import Drawable from '../Drawer.js/_Drawable'
import Logout from '../logout/Logout'
import MobileDrawer from './mobile/MobileDrawer'
import Toggle from './header/Toggle'
import SearchProd from './header/SearchProd'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../global/exports'

const Navbar = ({ mode, modeFunc }) => {
  const { logged } = useAuth()

  return (
    <>
      <Container>
        {useMediaQuery(768) ? (
          <>
            <Drawable
              icon={<BiMenu />}
              direction='left'
              children={<MobileDrawer />}
              footer={<Logout />}
              themed={mode}
            />
            <Logo goTo='/' />
            <Drawable
              icon={<BiCart />}
              direction='right'
              children={'dgf'}
              themed={mode}
            />
          </>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Logo goTo='/' />
              {!logged && (
                <NavLink style={{ margin: '0rem 1rem' }} to='login'>
                  login
                </NavLink>
              )}
            </div>
            <SearchProd />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconHeader />
              <Toggle theme={mode} toggleTheme={modeFunc} />
            </div>
          </>
        )}
      </Container>
    </>
  )
}

export default Navbar

const Container = styled.div`
  z-index: 10;
  display: flex;
  padding: 1rem;
  width: inherit;
  position: fixed;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
