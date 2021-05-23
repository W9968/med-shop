import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const FirstSection = () => {
  const history = useHistory()

  return (
    <>
      <Row>
        <Col onClick={() => history.push('/beautyproduct')}>
          <Image src='/asset/homeprod/pro1.png' />
          <Text>Produits de beauté</Text>
        </Col>

        <Col onClick={() => history.push('/organic')}>
          <Image src='/asset/homeprod/pro2.png' />
          <Text>Alimentaires</Text>
        </Col>
      </Row>
    </>
  )
}

export default FirstSection

const Row = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 96px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`
const Col = styled.div`
  cursor: pointer;
  position: relative;
`

const Image = styled.img`
  height: 400px;
  border-radius: 25px;

  @media (max-width: 1304px) {
    height: 350px;
  }

  @media (max-width: 1100px) {
    width: 100%;
    height: 100%;
  }
`

const Text = styled.h1`
  top: 15%;
  left: 5%;
  z-index: 2;
  position: absolute;
  transform: translate(0%, 0%);
  color: ${({ theme }) => theme.same};

  @media (max-width: 550px) {
    font-size: 7vw;
  }
`
