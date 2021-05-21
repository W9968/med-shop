import React from 'react'
import styled from 'styled-components'
import { BiMenu } from 'react-icons/bi'
import { useMediaQuery } from '../../hooks/useMediaQuery'

import Logo from './header/Logo'
import IconHeader from './header/IconHeader'
import Icon from './mobile/Icon'
import Drawable from '../Drawer.js/_Drawable'
import Logout from '../logout/Logout'
import MobileDrawer from './mobile/MobileDrawer'
import Toggle from './header/Toggle'

const Navbar = ({ mode, modeFunc }) => {
  return (
    <>
      <Container>
        {useMediaQuery(768) ? (
          <>
            <Drawable
              icon={<BiMenu />}
              children={<MobileDrawer />}
              footer={<Logout />}
              themed={mode}
            />
            <Logo brand='MedEpoir' goTo='/' />
            <Icon />
          </>
        ) : (
          <>
            <Logo brand='MedEpoir' goTo='/' />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Toggle theme={mode} toggleTheme={modeFunc} />
              <IconHeader />
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
