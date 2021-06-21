import React from 'react'
import styled from 'styled-components'
import { RevenueStat, UserStat, ContentHeader } from '../../components/imports'

const _Stats = () => {
  return (
    <>
      <Wrapper>
        <ContentHeader header='Dashboard' boolState={false} />
        <UserStat />
        <RevenueStat />
      </Wrapper>
    </>
  )
}

export default _Stats

const Wrapper = styled.div`
  padding: 1rem;
`
