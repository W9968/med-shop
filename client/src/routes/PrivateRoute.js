import React from 'react'
import { useAuth } from '../global/exports'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { logged } = useAuth()

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if (!logged) {
            return <Component {...props} />
          } else {
            return <Redirect to='/' />
          }
        }}
      />
    </>
  )
}

export default PrivateRoute
