import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { logged, currentUser } = useAuth()

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if (!logged) {
            return <Redirect to='/login' />
          } else {
            return currentUser.role === 1 ? (
              <Component {...props} />
            ) : (
              <Redirect to='/*' />
            )
          }
        }}></Route>
    </>
  )
}

export default PrivateRoute
