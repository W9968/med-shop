import React from 'react'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// views
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'

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
        </Switch>
      </Router>
    </>
  )
}

export default App
