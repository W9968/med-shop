import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({ component: Component, ...rest }) => {
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
        }}></Route>
    </>
  )
}

export default ProtectedRoute
