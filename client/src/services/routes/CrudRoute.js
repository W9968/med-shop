import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ListData from '../../shared/data/ListData'
import Add from '../../shared/data/Add'
import Edit from '../../shared/data/Edit'

const CrudRoute = ({ action, api }) => {
  return (
    <>
      <Switch>
        <Route exact path={action}>
          <ListData route={api} />
        </Route>
        <Route path={`${action}/add`}>
          <Add />
        </Route>
        <Route path={`${action}/edit/:id`}>
          <Edit />
        </Route>
      </Switch>
    </>
  )
}

export default CrudRoute
