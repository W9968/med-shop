import React, { useMemo, useEffect } from 'react'
import { useCrud } from '../../global/exports'
import { DataTable } from '../../components/imports'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { AddBlog, EditBlog } from '../../components/imports'

const _Users = () => {
  const { loadData, socket } = useCrud()
  const { path } = useRouteMatch()

  const column = useMemo(
    () => [
      { Haeder: 'id', accessor: 'id' },
      { Header: 'name', accessor: 'name' },
      { Header: 'email', accessor: 'email' },
    ],
    []
  )

  useEffect(() => {
    loadData('customer')
  }, []) // eslint-disable-line

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <DataTable columns={column} data={socket} filename='Users-csv' />
        </Route>
        <Route path={`${path}/add`}>
          <AddBlog />
        </Route>
        <Route>
          <EditBlog />
        </Route>
      </Switch>
    </>
  )
}

export default _Users
