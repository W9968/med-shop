import React, { useMemo, useEffect } from 'react'
import { useCrud } from '../../global/exports'
import { DataTable, ContentHeader } from '../../components/imports'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { AddBlog, EditBlog } from '../../components/imports'

const _Blogs = () => {
  const { socket, loadData } = useCrud()
  const { path } = useRouteMatch()

  const column = useMemo(
    () => [
      { Header: 'id', accessor: 'id' },
      { Header: 'title', accessor: 'title' },
      { Header: 'content', accessor: 'content' },
    ],
    []
  )

  useEffect(() => {
    loadData('blogs')
  }, []) // eslint-disable-line

  return (
    <>
      <ContentHeader header='Blogs list' boolState={true} path='blogs' />
      <Switch>
        <Route exact path={path}>
          <DataTable
            columns={column}
            data={socket}
            filename='blogs csv'
            path='blogs'
          />
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

export default _Blogs
