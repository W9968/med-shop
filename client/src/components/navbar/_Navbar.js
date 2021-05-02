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

const Navbar = () => {
  return (
    <>
      <Container>
        {useMediaQuery(768) ? (
          <>
            <Drawable
              icon={<BiMenu />}
              children={<MobileDrawer />}
              footer={<Logout />}
            />
            <Logo brand='MedEpoir' goTo='/' />
            <Icon />
          </>
        ) : (
          <>
            <Logo brand='MedEpoir' goTo='/' />
            <IconHeader />
          </>
        )}
      </Container>
    </>
  )
}

export default Navbar

const Container = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.fifth};
`
