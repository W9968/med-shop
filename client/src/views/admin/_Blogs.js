import React, { useMemo, useEffect } from 'react'
import { useCrud } from '../../global/exports'
import { DataTable } from '../../components/imports'
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
      <Switch>
        <Route exact path={path}>
          <DataTable columns={column} data={socket} filename='blogs csv' />
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
