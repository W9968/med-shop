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

  padding: 0rem 1rem;
  margin-bottom: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Text = styled.h2`
  padding: 8px 0px;
  text-transform: capitalize;
`
const Link = styled(NavLink)`
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.third};

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.hover};
  }
`
