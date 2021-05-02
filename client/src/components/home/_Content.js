import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const _Content = ({ imgsrc, alt, path, title, parag, direction }) => {
  return (
    <>
      <Wrapper>
        <Image src={imgsrc} alt={alt} />

        <Overlay style={{ alignItems: `${direction}` }}>
          <Title to={path}>{title}</Title>
          <Parag>{parag}</Parag>
        </Overlay>
      </Wrapper>
    </>
  )
}

export default _Content

const Wrapper = styled.div`
  position: relative;
`

const Image = styled.img`
  width: 100%;

  object-fit: fill;
`
const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  padding: 1rem;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  transform: translate(0%, 0%);
  background: rgba(0, 0, 0, 0.5);
`

const Title = styled(NavLink)`
  font-weight: 600;
  font-size: 3vh;
  text-transform: capitalize;
  color: ${({ theme }) => theme.primary};
`

const Parag = styled.p`
  width: 60%;
  margin: 3vh 0rem;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.primary};
`
