import React, { useMemo, useEffect } from 'react'
import { useCrud } from '../../../global/exports'
import { ContentLoader, DataTable } from '../../../components/imports'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { AddBlog, EditBlog } from '../../../components/imports'

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
    loadData('brand')
  }, []) // eslint-disable-line

  return (
    <>
      {loading ? (
        <ContentLoader />
      ) : (
        <Switch>
          <Route exact path={path}>
            <DataTable
              columns={column}
              data={socket}
              filename='blogs csv'
              path='brand'
            />
          </Route>
          <Route path={`${path}/add`}>
            <AddBlog />
          </Route>
          <Route>
            <EditBlog />
          </Route>
        </Switch>
      )}
    </>
  )
}

export default _Brands
