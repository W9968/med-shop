import React, { useContext, useState, useLayoutEffect } from 'react'
import useApi from '../../hooks/useApi'
import { ThreeDotSpinner } from '../../components/imports'
import { _storeKeys, _loadKeys } from '../../hooks/useAsyncStorage'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export default function _AuthProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [authStateChange, setOnAuthStateChange] = useState(false)
  const [currentUser, setCurrentUser] = useState()
  const [logged, setLogged] = useState(
    _loadKeys('loggedIn') === 'true' || false
  )

  const [message, setMessage] = useState({
    type: '',
    content: '',
  })

  // login
  const login = async (userEmail, userPassword, rememberToken) => {
    setLoading(true)
    return await useApi
      .get('/sanctum/csrf-cookie')
      .then(() => {
        useApi
          .post('/login', {
            email: userEmail,
            password: userPassword,
            remember: rememberToken,
          })
          .then((response) => {
            if (response.status === 204) {
              getCurrnetUser()
              setLoading(false)
            }
          })
          .catch(() => {
            setLoading(false)
            setMessage({
              type: 'error',
              content: 'Please verify your Email/Password',
            })
          })
      })
      .catch(() => {
        setMessage({
          type: 'error',
          content: 'It seems ther was an error with our servers',
        })
      })
  }

  // logout
  const logout = async () => {
    return await useApi
      .get('/sanctum/csrf-cookie')
      .then(() => {
        useApi.post('/logout').then((response) => {
          if (response.status === 204) {
            setLogged(false)
            _storeKeys('loggedIn', false)
          }
        })
      })
      .catch(() => {
        console.log('there was error with your coockies')
      })
  }

  // register
  const register = async (userName, userEmail, userPassword) => {
    setLoading(true)
    return await useApi
      .get('/sanctum/csrf-cookie')
      .then(() => {
        useApi
          .post('/register', {
            name: userName,
            email: userEmail,
            password: userPassword,
          })
          .then((response) => {
            if (response.status === 201) {
              getCurrnetUser()
              setLoading(false)
            }
          })
          .catch(() => {
            setLoading(false)
            setMessage({
              type: 'error',
              content: 'Please enter valid information',
            })
          })
      })
      .catch(() => {
        setMessage({
          type: 'error',
          content: 'It seems there was an error with our servers',
        })
      })
  }

  // resend verification email
  const resentVerificationMail = async () => {
    return await useApi
      .get('/sanctum/csrf-cookie')
      .then((response) => {
        if (response.status === 204) {
          useApi
            .post('api/email/resend', {
              email: currentUser.email,
            })
            .then((response) => {
              if (response.status === 202) {
                setMessage({
                  type: 'success',
                  content: 'message sent',
                })
              } else {
                setMessage({
                  type: '',
                  content: '',
                })
              }
            })
        }
      })
      .catch(() => {
        setMessage({
          type: 'error',
          content: 'it seems there was an error wiht our serves',
        })
      })
  }

  // sent email for reset
  const emailReset = async (userEmail) => {
    setLoading(true)
    return await useApi
      .get('/sanctum/csrf-cookie')
      .then(() => {
        useApi
          .post('/password/email', {
            email: userEmail,
          })
          .then((response) => {
            if (response.status === 200) {
              setLoading(false)
              setMessage({
                type: 'success',
                content: 'Email sent, check inbox',
              })
            }
          })
          .catch(() => {
            setLoading(false)
            setMessage({
              type: 'error',
              content: 'Email not sent, try again',
            })
          })
      })
      .catch(() => {
        console.log('there was error with your coockies')
      })
  }

  // reset password thro email
  const passwordReset = async (token, email, password) => {
    setLoading(true)
    return await useApi
      .get('/sanctum/csrf-cookie')
      .then(() => {
        useApi
          .post('/password/reset', {
            token: token,
            email: email,
            password: password,
          })
          .then(() => {
            getCurrnetUser()
            setLoading(false)
          })
          .catch(() => {
            setLoading(false)
            setMessage({
              type: 'error',
              content: 'we could not reset you password',
            })
          })
      })
      .catch(() => {
        setMessage({
          type: 'error',
          content: 'It seems ther was an error with our servers',
        })
      })
  }

  // get current user
  const getCurrnetUser = () => {
    useApi
      .get('/api/user')
      .then((response) => {
        if (response.status === 200) {
          setCurrentUser(response.data)
          setLogged(true)
          _storeKeys('loggedIn', true)
          _storeKeys('Auth_User', response.data)
          setOnAuthStateChange(true)
          setMessage({
            type: '',
            content: '',
          })
        }
      })
      .catch(() => {
        _storeKeys('loggedIn', false)
        setLogged(false)
        setOnAuthStateChange(true)
        setMessage({
          type: '',
          content: '',
        })
        console.clear()
      })
  }

  useLayoutEffect(() => {
    getCurrnetUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        logged,
        message,
        login,
        logout,
        register,
        emailReset,
        passwordReset,
        resentVerificationMail,
        setMessage,
      }}>
      {authStateChange ? children : <ThreeDotSpinner />}
    </AuthContext.Provider>
  )
}
