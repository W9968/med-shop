import React from 'react'
import 'antd/dist/antd.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// views
import Home from './views/Home'
import Login from './views/auth/Login'
import Register from './views/auth/Register'
import ResetPassword from './views/auth/ResetPassword'
import ForgotPassword from './views/auth/ForgotPassword'
import NotFound from './views/NotFound'
import Dashboard from './views/Dashboard'
import Profile from './views/profile/Profile'

// components
import Header from './shared/header/Header'
import { GlobalStyle } from './hooks/useGlobalStyle'
import AuthProvider from './services/context/AuthContext'
import CrudProvider from './services/context/CrudContext'
import PrivateRoute from './services/routes/PrivateRoute'
import ProtectedRoute from './services/routes/ProtectedRoute'
import ControlledRoute from './services/routes/ControlledRoute'

function App() {
  return (
    <>
      <GlobalStyle />
      <ChakraProvider>
        <AuthProvider>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <ProtectedRoute path='/login' component={Login} />
              <ProtectedRoute path='/register' component={Register} />
              <ControlledRoute path='/profile' component={Profile} />
              <Route path='/reset' component={ForgotPassword} />
              <Route path='/resetpassword' component={ResetPassword} />
              <CrudProvider>
                <PrivateRoute path='/dashboard' component={Dashboard} />
              </CrudProvider>
              <Route path='*' component={NotFound} />
            </Switch>
          </Router>
        </AuthProvider>
      </ChakraProvider>
    </>
  )
}

export default App
