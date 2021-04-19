import React, { useMemo, useEffect } from 'react'
import { useCrud } from '../../services/context/CrudContext'
import { Wrapper, Spin } from '../../styles/content.element'

import DataTable from '../../shared/admin/DataTable'
import CardHeader from '../../shared/admin/CardHeader'
import BlogModal from '../../shared/admin/Modals/blog/BlogModal'

const Blog = () => {
  const { getData, data, loading } = useCrud()

  const column = useMemo(
    () => [
      { Header: 'id', accessor: 'id' },
      { Header: 'title', accessor: 'title' },
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
          <CardHeader
            title='Post'
            children={<BlogModal titleButton='Post' />}
          />
          <DataTable path='post' columns={column} data={data} />
        </Wrapper>
      )}
    </>
  )
}

export default Blog
