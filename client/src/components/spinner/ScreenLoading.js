import React from 'react'
import styled from 'styled-components'
import { motion as m } from 'framer-motion'

const ScreenLoading = () => {
  const loadingContainer = {
    width: '2rem',
    height: '2rem',
    display: 'flex',
    justifyContent: 'space-around',
  }

  const loadingCircle = {
    display: 'block',
    width: '0.5rem',
    height: '0.5rem',
    backgroundColor: 'black',
    borderRadius: '0.25rem',
  }

  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const loadingCircleVariants = {
    start: {
      y: '0%',
    },
    end: {
      y: '100%',
    },
  }

  const loadingCircleTransition = {
    duration: 0.4,
    yoyo: Infinity,
    ease: 'easeInOut',
  }

  return (
    <>
      <Container>
        <m.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial='start'
          animate='end'>
          <m.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
          <m.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
          <m.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
        </m.div>
      </Container>
    </>
  )
}

export default ScreenLoading

const Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
