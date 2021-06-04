import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCrud } from '../../global/exports'
import {
  Wrapper,
  Container,
  Heading,
  Time,
  Button,
  Likes,
} from '../../styles/SingleNews.element'

const SingleNewPreview = () => {
  const { id } = useParams()
  const { oneResponse, showOneData } = useCrud()

  useEffect(() => {
    showOneData('blogs', id)
  }, [id, showOneData])

  return (
    <>
      <Wrapper>
        <Container>
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Heading>{oneResponse.title}</Heading>
              <Button whileTap={{ scale: 0.7 }}>
                <Likes />
              </Button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Time />
              <p style={{ fontSize: '1rem', margin: '0px 5px' }}>
                {new Date(oneResponse.created_at)
                  .toLocaleDateString()
                  .replaceAll('/', '-')}
                .
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: '4rem',
              marginBottom: '1rem',
              lineHeight: '2rem',
            }}>
            <div dangerouslySetInnerHTML={{ __html: oneResponse.content }} />
          </div>
        </Container>
      </Wrapper>
    </>
  )
}

export default SingleNewPreview
