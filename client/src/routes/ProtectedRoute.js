import React from 'react'
import { useAuth } from '../global/exports'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currentUser, logged } = useAuth()

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if (logged) {
            return currentUser.role === 1 ? (
              <Component {...props} />
            ) : (
              <Redirect to='/*' />
            )
          } else {
            return <Redirect to='/login' />
          }
        }}
      />
    </>
  )
}

export default ProtectedRoute
