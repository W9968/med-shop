import React from 'react'

//import
import { useHistory } from 'react-router-dom'

//styled
import {
  Wrapper,
  Container,
  Div,
  Image,
  Heading,
  Parag,
  Button,
} from '../styles/NotFound.element'

const NotFound = () => {
  const history = useHistory()

  return (
    <>
      <Wrapper>
        <Container>
          <Div>
            <Image src='/assets/carts.svg' />
            <Heading level={1}>Oh no!</Heading>
            <Parag>
              We'are usually trying to provide you with everything, but we could
              not find what are you looking for.
            </Parag>
            <Button onClick={() => history.goBack()}>go back</Button>
          </Div>
        </Container>
      </Wrapper>
    </>
  )
}

export default NotFound
