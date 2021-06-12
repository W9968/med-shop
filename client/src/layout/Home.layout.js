import React from 'react'
import {
  Carousel,
  FirstSection,
  ProductTabs,
  SecondSection,
  ThirdSection,
  LastSection,
  CarouselNews,
} from '../components/imports'
import { Wrapper } from '../styles/HomeLayout.element'

const Homelayout = () => {
  return (
    <>
      <Wrapper>
        <Carousel />
        <FirstSection />
        <ProductTabs />
        <SecondSection />
        <ThirdSection />
        <LastSection />
        <CarouselNews />
      </Wrapper>
    </>
  )
}

export default Homelayout
