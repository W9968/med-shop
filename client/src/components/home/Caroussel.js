import React from 'react'
import styled from 'styled-components'

const Caroussel = () => {
  return (
    <>
      <Carousel></Carousel>
    </>
  )
}

export default Caroussel

const Carousel = styled.div`
  width: 100%;
  height: 50vh;
  margin: 96px 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.text};
`
