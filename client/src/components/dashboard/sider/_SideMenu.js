import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { motion as animate } from 'framer-motion'

import DashMenu from './DashMenu'

const _SideMenu = () => {
  const [size, setSizing] = useState(false)

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
        type: 'just',
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
          animate={size ? `open` : `closed`}
          onMouseEnter={() => setSizing(true)}
          onMouseLeave={() => setSizing(false)}>
          <Brand style={{ justifyContent: size ? 'space-between' : 'center' }}>
            {size ? (
              <Link to='/dash'>MedEspoir</Link>
            ) : (
              <Image src='/logos/logo_small.png' />
            )}
          </Brand>
          <DashMenu size={size} />
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
  padding: 1.125rem;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
`

const Link = styled(NavLink)`
  font-size: 1.5rem;
  text-transform: uppercase;
`

const Image = styled.img`
  width: 42px;
`
