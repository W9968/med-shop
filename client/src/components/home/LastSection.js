import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const LastSection = () => {
  const history = useHistory()

  return (
    <>
      <Row>
        <Col onClick={() => history.push('/others')}>
          <Image src='/asset/homeprod/pro7.png' />
          <Text>
            Soins
            <br />
            et Massage
          </Text>
        </Col>

        <Col onClick={() => history.push('/planticket')}>
          <Image src='/asset/homeprod/pro8.png' />
          <Text>
            Ticket
            <br />
            d'avion
          </Text>
        </Col>
      </Row>
    </>
  )
}

export default LastSection

const Row = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 96px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 630px) {
    flex-direction: column;
  }
`
const Col = styled.div`
  cursor: pointer;
  position: relative;
`

const Image = styled.img`
  width: 500px;
  border-radius: 25px;

  @media (max-width: 1100px) {
    width: 400px;
  }

  @media (max-width: 900px) {
    width: 350px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Text = styled.h1`
  top: 50%;
  left: 5%;
  z-index: 2;
  line-height: 2rem;
  position: absolute;
  transform: translate(-0%, -50%);

  @media (max-width: 768px) {
    font-size: 150%;
  }
`
