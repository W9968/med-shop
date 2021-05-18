import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const ThirdSection = () => {
  const history = useHistory()

  return (
    <>
      <Row>
        <Col onClick={() => history.push('/others')}>
          <Image src='/asset/homeprod/pro7.png' />
          <Text>Soins et Massage</Text>
        </Col>

        <Col onClick={() => history.push('/planticket')}>
          <Image src='/asset/homeprod/pro8.png' />
          <Text>Ticket Avion</Text>
        </Col>
      </Row>
    </>
  )
}

export default ThirdSection

const Row = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 96px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`
const Col = styled.div`
  cursor: pointer;
  position: relative;
`

const Image = styled.img`
  height: 500px;
  border-radius: 25px;

  @media (max-width: 1200px) {
    height: 450px;
  }

  @media (max-width: 1100px) {
    height: 400px;
  }

  @media (max-width: 980px) {
    height: 35vw;
  }

  @media (max-width: 550px) {
    width: 100%;
    height: 100%;
  }
`

const Text = styled.h1`
  top: 85%;
  left: 5%;
  z-index: 2;
  position: absolute;
  transform: translate(-0%, -85%);

  @media (max-width: 768px) {
    font-size: 150%;
  }
`
