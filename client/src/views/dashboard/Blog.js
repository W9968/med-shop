import React from 'react'
import { Wrapper, StyledRow } from '../../styles/content.element'
import CardHeader from '../../shared/hero/CardHeader'
import CrudRoute from '../../services/routes/CrudRoute'
import { useRouteMatch } from 'react-router-dom'

const Blog = () => {
  const { path, url } = useRouteMatch()

  return (
    <>
      <Wrapper>
        <CardHeader
          title='POST'
          buttonUri='Add new post'
          pathname={`${url}/add`}
        />
        <StyledRow>
          <CrudRoute action={path} api='post' />
        </StyledRow>
      </Wrapper>
    </>
  )
}

export default Blog
