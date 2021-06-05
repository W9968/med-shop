import React from 'react'
import { Cart } from '../imports'
import styled from 'styled-components'
import { BiMenu, BiCart } from 'react-icons/bi'
import { useMediaQuery } from '../../hooks/useMediaQuery'

import Logo from './header/Logo'
import IconHeader from './header/IconHeader'
import Drawable from '../Drawer.js/_Drawable'
import Logout from '../logout/Logout'
import MobileDrawer from './mobile/MobileDrawer'
import Toggle from './header/Toggle'
import FullWidhMenu from './header/menu/FullWidhMenu'
import GoCheckoutButton from '../cart/GoCheckoutButton'

const Navbar = ({ mode, modeFunc }) => {
  return (
    <>
      <Container>
        {useMediaQuery(768) ? (
          <>
            <Drawable
              width={300}
              icon={<BiMenu />}
              direction='left'
              children={<MobileDrawer />}
              footer={<Logout />}
              themed={mode}
            />
            <Logo goTo='/' />
            <Drawable
              width={'100%'}
              icon={<BiCart />}
              direction='right'
              children={<Cart />}
              footer={<GoCheckoutButton />}
              themed={mode}
            />
          </>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Logo goTo='/' />
            </div>
            <FullWidhMenu />
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
`
