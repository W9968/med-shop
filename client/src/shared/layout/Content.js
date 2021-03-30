import React from 'react'
import { Switch } from 'react-router-dom'
import PrivateRoute from '../../services/routes/PrivateRoute'
import { StyledContent } from '../../styles/Dashboard.element'
//component
import DashParent from '../admin/DashParent'
import Order from '../admin/Order'

const Content = ({ route }) => {
  return (
    <>
      <StyledContent>
        <Switch>
          <PrivateRoute exact path={route} component={DashParent} />
          <PrivateRoute path={`${route}/order`} component={Order} />
        </Switch>
      </StyledContent>
    </>
  )
}

export default Content
