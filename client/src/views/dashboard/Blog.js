import React, { useMemo, useEffect } from 'react'
import { useCrud } from '../../services/context/CrudContext'
import { Wrapper, Spin } from '../../styles/content.element'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import DataTable from '../../shared/admin/DataTable'
import CardHeader from '../../shared/hero/CardHeader'
import BlogForm from '../../shared/admin/blog/BlogForm'

const Blog = () => {
  const { path } = useRouteMatch()
  const { getData, data, loading } = useCrud()

  const column = useMemo(
    () => [
      { Header: 'id', accessor: 'id' },
      { Header: 'title', accessor: 'title' },
      { Header: 'content', accessor: 'content' },
      { Header: 'Time', accessor: 'created_at' },
    ],
    []
  )

  useEffect(() => {
    getData('post')
  }, []) // eslint-disable-line

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <Wrapper>
          <CardHeader title='Post' />
          <Switch>
            <Route exact path={path}>
              <DataTable path='post' columns={column} data={data} />
            </Route>
            <Route path={`${path}/add`}>
              <BlogForm />
            </Route>
          </Switch>
        </Wrapper>
      )}
    </>
  )
}

export default Blog
