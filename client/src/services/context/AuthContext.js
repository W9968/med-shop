import React, { useContext, useLayoutEffect, useState } from 'react'
import { _storeKeys, _loadKeys } from '../../hooks/useAsyncStorage'
import { useToast } from '@chakra-ui/react'
import useApi from '../../hooks/useApi'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
  /* * set states * */
  const toast = useToast()
  const [message, setMessage] = useState(null)
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
            if (response.status === 201) {
              getLoggedInfo()
              showToast(
                'Account Created',
                'your account has been created',
                'success'
              )
              showToast(
                'Verify Account',
                'an email will be sent to you to verify your account',
                'warning'
              )
            }
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
              showToast(
                'Sign In',
                'you are logged in to you account successfully',
                'success'
              )
            }
          })
          .catch((e) =>
            showToast('Sign In', 'please verfiy your email/password', 'error')
          )
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
          .then((response) => {
            if (response.status === 200) {
              setMessage(['Email was sent to you', 'success'])
            }
          })
          .catch((err) => {
            setMessage(['please verfy your email', 'error'])
          })
      })
      .catch((err) => {
        console.log('there was error with your coockies')
      })
  }

  /* * resent email * */
  const ResendEmail = async () => {
    return await useApi
      .get('/sanctum/csrf-cookie')
      .then((res) => {
        useApi
          .post('api/email/resend', {
            email: currentUser.email,
          })
          .then((response) => {
            console.log(response.statusText)
          })
      })
      .catch((err) => {
        console.log('there was error with your coockies')
      })
  }

  /* * send reset pass * */
  const PasswordReset = async (token, email, password) => {
    return await useApi
      .get('/sanctum/csrf-cookie')
      .then((res) => {
        useApi
          .post('/password/reset', {
            email: email,
            password: password,
            token: token,
          })
          .then((res) => {
            getLoggedInfo()
          })
          .catch((res) => {
            console.log(res)
          })
      })
      .catch((err) => {
        console.log('there was an error with your coockies')
      })
  }

  /* * logout * */
  const Logout = async () => {
    return await useApi
      .get('/sanctum/csrf-cookie')
      .then((res) => {
        useApi.post('/logout').then((response) => {
          if (response.status === 204) {
            setLogged(false)
            _storeKeys('loggedIn', false)
            showToast('Log out', 'your are no longer connected', 'info')
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
        }
        setLoading(false)
      })
      .catch(() => {
        _storeKeys('loggedIn', false)
        setLoading(false)
        setLogged(false)
        console.clear()
      })
  }

  const showToast = (title, content, status) => {
    return toast({
      title: title,
      description: content,
      status: status,
      duration: 3000,
      position: 'bottom-right',
      isClosable: true,
    })
  }

  useLayoutEffect(() => {
    getLoggedInfo()
  }, []) // eslint-disable-line

  const value = {
    Register,
    Login,
    EmailReset,
    ResendEmail,
    PasswordReset,
    currentUser,
    setCurrentUser,
    Logout,
    logged,
    message,
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
