import React from 'react'
import styled from 'styled-components'
import { Card } from '@geist-ui/react'

const NewsCard = ({ header, content, path }) => {
  const CardStyle = {
    margin: '1.5rem 0',
    color: localStorage.getItem('mode') === 'dark' ? '#fff' : '#222',
    background: localStorage.getItem('mode') === 'light' ? '#fff' : '#333',
    border: 'none',
  }

  return (
    <>
      <CardStyled>
        <Card shadow style={CardStyle}>
          <Card.Content className='cardTitle'>{header}</Card.Content>
          <Card.Body>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Card.Body>
          <Card.Footer className='cardFooter'>{path}</Card.Footer>
        </Card>
      </CardStyled>
    </>
  )
}

export default NewsCard

const CardStyled = styled.div`
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }

  .cardTitle {
    display: flex;
    font-weight: 600;
    font-size: 1.5rem;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0 !important;
    text-transform: capitalize;
  }
`
