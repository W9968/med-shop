import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { func, string } from 'prop-types'
import { BiSun, BiMoon } from 'react-icons/bi'
import { motion, AnimatePresence } from 'framer-motion'

const Toggle = ({ theme, toggleTheme }) => {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    setRotation(0)
  }, [])

  return (
    <>
      <AnimatePresence>
        {theme === 'dark' ? (
          <motion.div
            //initial={{ rotate: 0 }}
            animate={{ rotate: rotation }}
            onClick={() => setRotation(rotation + 360)}
            transition={{ type: 'spring' }}>
            <Btn>
              <Moon onClick={toggleTheme} />
            </Btn>
          </motion.div>
        ) : (
          <motion.div
            //initial={{ rotate: 0 }}
            animate={{ rotate: rotation }}
            onClick={() => setRotation(rotation - 360)}
            transition={{ type: 'spring' }}>
            <Btn>
              <Sun onClick={toggleTheme} />
            </Btn>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

Toggle.prototype = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle

const Btn = styled.button`
  border: none;
  outline: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
`

const Sun = styled(BiSun)`
  cursor: pointer;
  font-size: 1.5rem;
`

const Moon = styled(BiMoon)`
  cursor: pointer;
  font-size: 1.5rem;
`
