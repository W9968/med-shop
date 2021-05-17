import React, { useMemo, useEffect } from 'react'
import { useCrud } from '../../../global/exports'
import {
  ContentLoader,
  DataTable,
  ContentHeader,
} from '../../../components/imports'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

const _Stocks = () => {
  const { path } = useRouteMatch()
  const { socket, loadData, loading } = useCrud()

  const column = useMemo(
    () => [
      { Header: 'id', accessor: 'id' },
      { Header: 'name', accessor: 'name' },
      { Header: 'left on stocks', accessor: 'stocks.quantity' },
    ],
    []
  )

  useEffect(() => {
    loadData('stocks')
  }, []) // eslint-disable-line

  return (
    <>
      <ContentHeader header='Stocks list' path={'stocks'} boolState={false} />
      <Switch>
        <Route exact path={path}>
          {loading ? (
            <ContentLoader />
          ) : (
            <DataTable
              columns={column}
              data={socket}
              filename='BrandCSV'
              path='stocks'
            />
          )}
        </Route>
        <Route path={`${path}/edit/:id`}>sdfgd</Route>
      </Switch>
    </>
  )
}

export default _Stocks
