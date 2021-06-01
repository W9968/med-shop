import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const _ContentHeader = ({ path, header, boolState }) => {
  const state = boolState

  return (
    <>
      <Wrapper>
        <Text>{header}</Text>
        {state && <Link to={`/dash/${path}/add`}>add new</Link>}
      </Wrapper>
    </>
  )
}

export default _ContentHeader

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Text = styled.h2`
  padding: 8px 0px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};
`
const Link = styled(NavLink)`
  font-size: 1rem;
  padding: 10px 12px;
  border-radius: 5px;
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.text};

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.hover};
  }
`
