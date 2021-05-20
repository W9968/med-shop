import React from 'react'
import { theme } from './Theme'
import { Grommet } from 'grommet'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Wrapper, Main } from './hooks/useGlobalStyle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Nav, Footer } from './components/imports'
import {
  P404,
  Home,
  Dash,
  Profile,
  Checkout,
  Login,
  Register,
  SendResetMAil,
  ResetPassword,
  PlanTicket,
  Organic,
  BeautyProduct,
  Cosmetic,
  OtherDomains,
} from './views/imports'

import { AuthProvider, CrudProvider } from './global/exports'

import PrivateRoute from './routes/PrivateRoute'
import ProtectedRoute from './routes/ProtectedRoute'
import ControlledRoute from './routes/ControlledRoute'

function App() {
  return (
    <>
      <Grommet>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Wrapper>
            <Main>
              <AuthProvider>
                <CrudProvider>
                  <Router>
                    <Nav />
                    <Switch>
                      <Route path='/others' component={OtherDomains} />
                      <Route path='/cosmetic' component={Cosmetic} />
                      <Route path='/beautyproduct' component={BeautyProduct} />
                      <Route path='/organic' component={Organic} />
                      <Route path='/planticket' component={PlanTicket} />
                      <Route path='/checkout' component={Checkout} />
                      <ProtectedRoute path='/dash' component={Dash} />
                      <ControlledRoute path='/profile' component={Profile} />
                      <PrivateRoute
                        path='/password/reset'
                        component={ResetPassword}
                      />
                      <PrivateRoute
                        path='/password/mail'
                        component={SendResetMAil}
                      />
                      <PrivateRoute path='/register' component={Register} />
                      <PrivateRoute path='/login' component={Login} />
                      <Route exact path='/' component={Home} />
                      <Route path='*' component={P404} />
                    </Switch>
                    {/* <Footer /> */}
                  </Router>
                </CrudProvider>
              </AuthProvider>
            </Main>
          </Wrapper>
        </ThemeProvider>
      </Grommet>
    </>
  )
}

export default App
