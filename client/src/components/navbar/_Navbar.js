import React from 'react'
import { Cart } from '../imports'
import styled from 'styled-components'
import { BiMenu } from 'react-icons/bi'
import { Badge } from '@geist-ui/react'
import { FiShoppingBag } from 'react-icons/fi'
import { useMediaQuery } from '../../hooks/useMediaQuery'

import Logo from './header/Logo'
import IconHeader from './header/IconHeader'
import Drawable from '../Drawer.js/_Drawable'
import Logout from '../logout/Logout'
import MobileDrawer from './mobile/MobileDrawer'
import Toggle from './header/Toggle'
import FullWidhMenu from './header/menu/FullWidhMenu'
import GoCheckoutButton from '../cart/GoCheckoutButton'
import { CartContext } from '../../global/exports'

const Navbar = ({ mode, modeFunc }) => {
  const { itemCount } = React.useContext(CartContext)

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
              icon={
                <Badge.Anchor placement='bottomLeft'>
                  <Badge
                    size='mini'
                    type='default'
                    style={{
                      color: localStorage.getItem('mode') === 'dark' && '#111',
                      background:
                        localStorage.getItem('mode') === 'dark' && '#fff',
                    }}>
                    {itemCount}
                  </Badge>
                  <FiShoppingBag />
                </Badge.Anchor>
              }
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
