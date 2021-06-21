import React from 'react'
import styled from 'styled-components'
import {
  MoneyRevenue,
  OrderCount,
  UserStat,
  ContentHeader,
} from '../../components/imports'

const _Stats = () => {
  return (
    <>
      <Wrapper>
        <ContentHeader header='Dashboard' boolState={false} />
        <UserStat />
        <OrderCount />
        <MoneyRevenue />
      </Wrapper>
    </>
  )
}

export default _Stats

const Wrapper = styled.div`
  padding: 1rem;
`
