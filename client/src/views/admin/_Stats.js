import React from 'react'
import styled from 'styled-components'
import {
  MoneyRevenue,
  OrderCount,
  UserStat,
  ContentHeader,
  Buyers,
  ProductsStats,
} from '../../components/imports'

const _Stats = () => {
  return (
    <>
      <Wrapper>
        <ContentHeader header='Dashboard' boolState={false} />
        <UserStat />
        <OrderCount />
        <MoneyRevenue />
        <div style={{ margin: '1rem 0' }}>
          <h1>Buyers</h1>
          <Buyers />
        </div>
        <div style={{ margin: '2rem 0' }}>
          <h1>Products</h1>
          <ProductsStats />
        </div>
      </Wrapper>
    </>
  )
}

export default _Stats

const Wrapper = styled.div`
  padding: 1rem;
`
