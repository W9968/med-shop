import React, { useEffect, useMemo } from 'react'
import { useCrud } from '../../services/context/CrudContext'
import DataTable from '../../shared/admin/DataTable'
import CardHeader from '../../shared/hero/CardHeader'
import { Wrapper, StyledRow } from '../../styles/content.element'

const Blog = () => {
  const { getData, data } = useCrud()

  useEffect(() => {
    getData('blogs')
  }, []) // eslint-disable-line

  const column = useMemo(
    () => [
      { Header: 'id', accessor: 'id' },
      { Header: 'title', accessor: 'title' },
      { Header: 'content', accessor: 'content' },
    ],
    []
  )

  return (
    <>
      <Wrapper>
        <CardHeader title='blog list' buttonUri='new blog' />
        <StyledRow>
          <DataTable path='blogs' columns={column} data={data} />
        </StyledRow>
      </Wrapper>
    </>
  )
}

export default Blog
