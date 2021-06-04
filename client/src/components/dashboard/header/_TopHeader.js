import React from 'react'
import styled from 'styled-components'

import Droper from './Droper'
import Drawable from '../../Drawer.js/_Drawable'
import { BiMenuAltRight } from 'react-icons/bi'
import { useMediaQuery } from '../../../hooks/useMediaQuery' // eslint-disable-line

import LanguageDroper from './LanguageDroper'
import DashMenu from '../sider/DashMenu'

const _TopHeader = () => {
  return (
    <>
      <Container>
        {useMediaQuery(1366) && (
          <Drawable
            width={300}
            direction='left'
            children={<DashMenu size={true} />}
            icon={<BiMenuAltRight className='iconSider' />}
          />
        )}
        <LanguageDroper />
        <Droper />
      </Container>
    </>
  )
}

export default _TopHeader

const Container = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};

  .iconSider {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
  }
`
