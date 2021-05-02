import styled from 'styled-components'
import { Flex, Box } from '@chakra-ui/react'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Carousel = styled.div`
  width: 100%;
  height: 700px;

  @media (max-width: 768px) {
    height: 300px;
  }
`

export const StyledFlex = styled(Flex)`
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;

  justify-content: center;
`

export const Container = styled.div`
  width: 1104px;
  display: flex;
  margin: 96px 0px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1104px) {
    width: 100%;
  }
`
