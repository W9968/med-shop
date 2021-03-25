import React, { useContext, useLayoutEffect, useState } from 'react'
import { _storeKeys, _loadKeys } from '../../hooks/useAsyncStorage'
import useApi from '../../hooks/useApi'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
  /* * set states * */
  const [loading, setLoading] = useState(true)
  const [logged, setLogged] = useState(
    _loadKeys('loggedIn') === 'true' || false
  )
  const [currentUser, setCurrentUser] = useState()

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
            if (response.status === 204) {
              getLoggedInfo()
            }
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
          if (response.status === 204) {
            setLogged(false)
            _storeKeys('loggedIn', false)
          }
        })
      })
      .catch((err) => {
        console.log('there was error with your coockies')
      })
  }

  const getLoggedInfo = () => {
    useApi
      .get('/api/user')
      .then((response) => {
        if (response.status === 200) {
          setCurrentUser(response.data)
          setLogged(true)
          _storeKeys('loggedIn', true)
          setLoading(false)
        }
      })
      .catch(() => {
        _storeKeys('loggedIn', false)
        setLoading(false)
        setLogged(false)
      })
  }

  useLayoutEffect(() => {
    getLoggedInfo()
  }, []) // eslint-disable-line

  const value = {
    Register,
    Login,
    EmailReset,
    currentUser,
    setCurrentUser,
    Logout,
    logged,
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
