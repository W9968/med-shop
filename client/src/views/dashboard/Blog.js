import React, { useEffect, useMemo } from 'react'
import { useCrud } from '../../services/context/CrudContext'
import DataTable from '../../shared/admin/DataTable'
import CardHeader from '../../shared/hero/CardHeader'
import BlogForm from '../../shared/admin/BlogForm'
import { Wrapper, StyledRow } from '../../styles/content.element'

const Blog = () => {
  const { getData, data, destroy } = useCrud()

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
        <CardHeader
          title='Blog list'
          buttonUri='new blog'
          children={<BlogForm />}
        />
        <StyledRow>
          <DataTable path='blogs' columns={column} data={data} />
        </StyledRow>
        <StyledRow>
          <button
            onClick={() => {
              destroy('blogs')
            }}>
            {' '}
            destroy{' '}
          </button>
        </StyledRow>
      </Wrapper>
    </>
  )
}

export default Blog
