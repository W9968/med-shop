import React, { useMemo, useEffect } from 'react'
import { useCrud } from '../../../global/exports'
import {
  ContentLoader,
  DataTable,
  ContentHeader,
} from '../../../components/imports'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { AddBrand, EditBrand } from '../../../components/imports'

const _Brands = () => {
  const { socket, loadData, loading } = useCrud()
  const { path } = useRouteMatch()

  const column = useMemo(
    () => [
      { Header: 'id', accessor: 'id' },
      { Header: 'tag', accessor: 'tag' },
    ],
    []
  )

  useEffect(() => {
    loadData('brands')
  }, []) // eslint-disable-line

  return (
    <>
      {loading ? (
        <ContentLoader />
      ) : (
        <>
          <ContentHeader header='brands list' path='brands' />
          <Switch>
            <Route exact path={path}>
              <DataTable
                columns={column}
                data={socket}
                filename='BrandCSV'
                path='brands'
              />
            </Route>
            <Route path={`${path}/add`}>
              <AddBrand />
            </Route>
            <Route path={`${path}/edit/:id`}>
              <EditBrand />
            </Route>
          </Switch>
        </>
      )}
    </>
  )
}

export default _Brands
