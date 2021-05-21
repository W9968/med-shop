import React, { useState } from 'react'
import styled from 'styled-components'
import { motion as animate } from 'framer-motion'

import DashMenu from './DashMenu'
import SmallLogo from './SmallLogo'

const _SideMenu = () => {
  const [size, setSizing] = useState(true)

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
          animate={size ? `open` : `closed`}>
          <Brand style={{ justifyContent: 'center' }}>
            {size ? (
              <Link onClick={() => setSizing(false)}>MedEspoir</Link>
            ) : (
              <span onClick={() => setSizing(true)}>
                <SmallLogo />
              </span>
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
  background-color: ${({ theme }) => theme.hover};
`

const Link = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
`
