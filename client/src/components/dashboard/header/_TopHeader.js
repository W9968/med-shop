import React from 'react'
import styled from 'styled-components'

import Droper from './Droper'
import Drawable from '../../Drawer.js/_Drawable'
import { BiMenuAltRight } from 'react-icons/bi'
import { useMediaQuery } from '../../../hooks/useMediaQuery' // eslint-disable-line
import Sider from '../sider/Sider'

const _TopHeader = () => {
  return (
    <>
      <Container>
        {useMediaQuery(1366) && (
          <Drawable
            children={<Sider size={true} />}
            icon={<BiMenuAltRight />}
          />
        )}
        <Droper />
      </Container>
    </>
  )
}

export default _TopHeader

const Container = styled.div`
  display: flex;
  padding: 0.5rem;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};

  @media (max-width: 1366px) {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.fifth};
  }
`
