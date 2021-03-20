import React from 'react'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// views
import Home from './views/Home'
import Login from './views/auth/Login'
import Register from './views/auth/Register'
import ForgotPassword from './views/auth/ForgotPassword'
import NotFound from './views/NotFound'
import Dashboard from './views/Dashboard'

// components
import Header from './shared/header/Header'
import { GlobalStyle } from './hooks/useGlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/reset' component={ForgotPassword} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}

export default App
