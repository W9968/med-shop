import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { BiChevronsLeft } from 'react-icons/bi'
import { motion as animate } from 'framer-motion'
import Sider from './Sider'

const _SideMenu = () => {
  const [size, setSizing] = useState(true)
  const [rotation, setRotation] = useState(0)

  const parentVarient = {
    open: {
      width: 256,
      transition: {
        type: 'tween',
        staggerChildren: 0.1,
      },
    },
    closed: {
      width: 68,
      transition: {
        type: 'tween',
        staggerChildren: 0.1,
        stagerDirection: -1,
        when: `afterChildren`,
      },
    },
  }

  return (
    <>
      <Container>
        <animate.div
          variants={parentVarient}
          initial={`open`}
          animate={size ? `open` : `closed`}>
          <Brand style={{ justifyContent: size ? 'space-between' : 'center' }}>
            {size && <Link to='/dash'>MedEspoir</Link>}
            <animate.span
              initial={{ rotate: rotation }}
              animate={{ rotate: rotation }}
              transition={{ type: 'tween' }}
              onClick={() => setSizing(!size)}>
              <LeftArrow onClick={() => setRotation(rotation + 180)} />
            </animate.span>
          </Brand>

          <Sider size={size} />
        </animate.div>
      </Container>
    </>
  )
}

export default _SideMenu

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Brand = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.lighthover};
`

const Link = styled(NavLink)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
`

const LeftArrow = styled(BiChevronsLeft)`
  flex: 1;
  display: flex;
  font-size: 1.5rem;
  align-self: center;
  justify-self: center;
  cursor: pointer;
`
