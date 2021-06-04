import styled from 'styled-components'
import { motion as m } from 'framer-motion'
import { BiTime, BiHeart, BiLike } from 'react-icons/bi'

export const Wrapper = styled.div`
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
export const Container = styled.div`
  width: 1104px;
  padding: 1rem;
  margin-top: 125px;
`

export const Heading = styled.h1`
  font-size: 4rem;
  letter-spacing: 1px;

  &::first-letter {
    text-transform: capitalize;
  }
`

export const Time = styled(BiTime)`
  font-size: 1.5rem;
`

export const ThumbsUp = styled(BiLike)``

export const Likes = styled(BiHeart)`
  font-size: 2rem;
  stroke-dasharray: 111;
`

export const Button = styled(m.button)`
  border: none;
  display: flex;
  outline: none;
  background: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`
