import React from 'react'
import {
  Wrapper,
  Carousel,
  StyledFlex,
  StyledBox,
  Container,
} from '../styles/HomeLayout.element'

const Homelayout = (props) => {
  return (
    <>
      <Wrapper>
        <Carousel>{props.children}</Carousel>
        <StyledFlex>
          <StyledBox flex='1'>{props.grid11}</StyledBox>
          <StyledBox flex='1'>{props.grid12}</StyledBox>
        </StyledFlex>

        <Container>{props.container}</Container>

        <StyledFlex>
          <StyledBox flex='1'>{props.p1}</StyledBox>
          <StyledBox flex='1'>
            <StyledFlex direction='column'>
              <StyledBox flex='1'>
                <StyledFlex direction='row'>
                  <StyledBox flex='1'>{props.p2}</StyledBox>
                  <StyledBox flex='1'>{props.p3}</StyledBox>
                </StyledFlex>
              </StyledBox>
              <StyledBox flex='1'>{props.p4}</StyledBox>
            </StyledFlex>
          </StyledBox>
        </StyledFlex>

        <Container>
          <StyledFlex>
            <StyledBox flex='1'>{props.grid13}</StyledBox>
            <StyledBox flex='1'>{props.grid14}</StyledBox>
          </StyledFlex>
        </Container>
      </Wrapper>
    </>
  )
}

export default Homelayout
