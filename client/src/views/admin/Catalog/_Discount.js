import React, { useEffect, useMemo } from 'react'
import { useCrud } from '../../../global/exports'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import {
  ContentLoader,
  ContentHeader,
  OnlyEditTable,
  EditDiscount,
} from '../../../components/imports'

const _Discount = () => {
  const { path } = useRouteMatch()
  const { loadData, socket, loading } = useCrud()

  const column = useMemo(
    () => [
      { Header: 'id', accessor: 'id' },
      { Header: 'name', accessor: 'name' },
      { Header: 'price', accessor: 'price' },
      { Header: 'discount', accessor: 'discounts.discount' },
    ],
    []
  )

  useEffect(() => {
    loadData('discount')
  }, []) // eslint-disable-line

  return (
    <>
      <ContentHeader header='discounts' boolState={false} />
      <Switch>
        <Route exact path={path}>
          {loading ? (
            <ContentLoader />
          ) : (
            <OnlyEditTable columns={column} data={socket} path='discount' />
          )}
        </Route>
        <Route path={`${path}/edit/:id`}>
          <EditDiscount />
        </Route>
      </Switch>
    </>
  )
}

export default _Discount
