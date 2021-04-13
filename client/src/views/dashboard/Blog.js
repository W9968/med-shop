import React, { useMemo, useEffect } from 'react'
import { useCrud } from '../../services/context/CrudContext'
import DataTable from '../../shared/admin/DataTable'
import CardHeader from '../../shared/hero/CardHeader'
import { Wrapper, Spin } from '../../styles/content.element'

const Blog = () => {
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
      <Wrapper>
        <CardHeader title='Post List' />
        {loading ? (
          <Spin />
        ) : (
          <DataTable path='post' columns={column} data={data} />
        )}
      </Wrapper>
    </>
  )
}

export default Blog
