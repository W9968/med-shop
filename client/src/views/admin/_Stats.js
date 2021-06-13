import React from 'react'
import styled from 'styled-components'
import { UserStat } from '../../components/imports'

const _Stats = () => {
  return (
    <>
      <Wrapper>
        <UserStat />
      </Wrapper>
    </>
  )
}

export default _Stats

const Wrapper = styled.div`
  padding: 1rem;
`
