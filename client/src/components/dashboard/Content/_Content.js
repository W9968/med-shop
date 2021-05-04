import React from 'react'
import styled from 'styled-components'
import { Switch } from 'react-router-dom'
import ProtectedRoute from '../../../routes/ProtectedRoute'
import {
  Stats,
  Blogs,
  Users,
  // catalog
  Products,
  Stocks,
  Discount,
  Brands,
  // orders
  Orders,
  Inovices,
} from '../../../views/imports'

const _Content = ({ route }) => {
  return (
    <>
      <Container>
        <Switch>
          <ProtectedRoute path={`${route}/orders`} component={Orders} />
          <ProtectedRoute path={`${route}/inovices`} component={Inovices} />
          <ProtectedRoute path={`${route}/products`} component={Products} />
          <ProtectedRoute path={`${route}/stocks`} component={Stocks} />
          <ProtectedRoute path={`${route}/brands`} component={Brands} />
          <ProtectedRoute path={`${route}/discount`} component={Discount} />
          <ProtectedRoute path={`${route}/blogs`} component={Blogs} />
          <ProtectedRoute path={`${route}/users`} component={Users} />
          <ProtectedRoute exact path={route} component={Stats} />
        </Switch>
      </Container>
    </>
  )
}

export default _Content

const Container = styled.div`
  padding: 1rem;
  width: 1104px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.primary};

  @media (max-width: 1104px) {
    width: 95%;
  }
`
