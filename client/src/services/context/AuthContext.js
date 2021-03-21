import React, { useContext, useEffect, useState } from 'react'
import useApi from '../../hooks/useApi'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
  /* * set states * */
  const [currentUser, setCurrentUser] = useState({})
  /* * sign up * */
  const Register = async (userName, userEmail, userPassword) => {
    return await useApi
      .get('/sanctum/csrf-cookie')
      .then((res) => {
        useApi
          .post('/register', {
            name: userName,
            email: userEmail,
            password: userPassword,
          })
          .then((response) => {
            console.log(
              'signed',
              response.data,
              response.headers,
              response.status
            )
          })
      })
      .catch((err) => {
        console.log('there was error with your coockies')
      })
  }
  /* * login * */
  const Login = async (userEmail, userPassword) => {
    return await useApi
      .get('/sanctum/csrf-cookie')
      .then((res) => {
        useApi
          .post('/login', {
            email: userEmail,
            password: userPassword,
            //remember_token: 'sfkhsdkfhjd'
          })
          .then((response) => {
            console.log(
              'login',
              response.data,
              response.headers,
              response.status
            )
          })
      })
      .catch((err) => {
        console.log('there was error with your coockies')
      })
  }
  /* * send reset email * */
  const EmailReset = async (userEmail) => {
    return await useApi
      .get('/sanctum/csrf-cookie')
      .then((res) => {
        useApi
          .post('/password/email', {
            email: userEmail,
          })
          .then((res) => {
            console.log(res.data, res.status, res.headers)
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log('there was error with your coockies')
      })
  }
  /* * send reset pass * */
  /* * logout * */
  const Logout = async () => {
    return await useApi
      .get('/sanctum/csrf-cookie')
      .then((res) => {
        useApi.post('/logout').then((response) => {
          console.log(
            'logout',
            response.data,
            response.headers,
            response.status
          )
          setCurrentUser('')
        })
      })
      .catch((err) => {
        console.log('there was error with your coockies')
      })
  }

  /* * pull connected user * */
  useEffect(() => {
    if (currentUser !== '') {
      useApi.get('/api/user').then((res) => {
        setCurrentUser(res.data)
      })
    }
  }, []) // eslint-disable-line

  const value = {
    Register,
    Login,
    EmailReset,
    currentUser,
    setCurrentUser,
    Logout,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
