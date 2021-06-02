import React, { useEffect, useMemo } from 'react'
import { useCrud } from '../../../global/exports'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import {
  ContentLoader,
  ContentHeader,
  OnlyEditTable,
  EditStocks,
} from '../../../components/imports'

const _Stocks = () => {
  const { path } = useRouteMatch()
  const { loadData, socket, loading } = useCrud()

  const column = useMemo(
    () => [
      { Header: 'id', accessor: 'id' },
      { Header: 'name', accessor: 'name' },
      { Header: 'price', accessor: 'price' },
      { Header: 'stocks', accessor: 'stocks.quantity' },
    ],
    []
  )

  useEffect(() => {
    loadData('stocks')
  }, []) // eslint-disable-line

  return (
    <>
      <>
        <ContentHeader header='stocks' boolState={false} />
        <Switch>
          <Route exact path={path}>
            {loading ? (
              <ContentLoader />
            ) : (
              <OnlyEditTable columns={column} data={socket} path='stocks' />
            )}
          </Route>
          <Route path={`${path}/edit/:id`}>
            <EditStocks />
          </Route>
        </Switch>
      </>
    </>
  )
}

export default _Stocks
