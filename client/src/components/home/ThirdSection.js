import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const ThirdSection = () => {
  const history = useHistory()
  return (
    <>
      <Row onClick={() => history.push('/others')}>
        <Image src='/asset/homeprod/pro6.png' />
        <Text>Artisanat</Text>
      </Row>
    </>
  )
}

export default ThirdSection

const Row = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  margin-bottom: 96px;
`

const Image = styled.img`
  width: 100%;
  border-radius: 25px;
`

const Text = styled.h1`
  top: 50%;
  left: 90%;
  z-index: 2;
  line-height: 2rem;
  position: absolute;
  transform: translate(-90%, -50%);

  @media (max-width: 768px) {
    font-size: 150%;
  }
`
