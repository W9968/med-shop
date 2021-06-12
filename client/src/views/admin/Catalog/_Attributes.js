import React, { useEffect, useMemo } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import {
  ContentLoader,
  OnlyEditTable,
  ContentHeader,
  AddAttri,
  EditAttri,
} from '../../../components/imports'
import { useCrud } from '../../../global/exports'

const _Attributes = () => {
  const { path } = useRouteMatch()
  const { socket, loadData, loading } = useCrud()

  const column = useMemo(
    () => [
      { Header: 'id', accessor: 'id' },
      { Header: 'category', accessor: 'category' },
      { Header: 'attributes', accessor: 'sub_categ' },
    ],
    []
  )

  useEffect(() => {
    loadData('attributes')
  }, []) // eslint-disable-line

  return (
    <>
      <ContentHeader
        header='attributes list'
        path='attributes'
        boolState={true}
      />
      <Switch>
        <Route exact path={path}>
          {loading ? (
            <ContentLoader />
          ) : (
            <OnlyEditTable
              columns={column}
              data={socket}
              filename='attributeCSV'
              path='attributes'
            />
          )}
        </Route>
        <Route path={`${path}/add`}>
          <AddAttri />
        </Route>
        <Route path={`${path}/edit/:id`}>
          <EditAttri />
        </Route>
      </Switch>
    </>
  )
}

export default _Attributes
