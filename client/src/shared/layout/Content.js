import React from 'react'
import { Switch } from 'react-router-dom'
import PrivateRoute from '../../services/routes/PrivateRoute'
import { StyledContent } from '../../styles/Dashboard.element'

//component
import DashParent from '../../views/dashboard/DashParent'
import Order from '../../views/dashboard/Order'
import Blog from '../../views/dashboard/Blog'
import Customer from '../../views/dashboard/Customer'

const Content = ({ route }) => {
  return (
    <>
      <StyledContent>
        <Switch>
          <PrivateRoute exact path={route} component={DashParent} />
          <PrivateRoute path={`${route}/order`} component={Order} />
          <PrivateRoute path={`${route}/post`} component={Blog} />
          <PrivateRoute path={`${route}/customer`} component={Customer} />
        </Switch>
      </StyledContent>
    </>
  )
}

export default Content
