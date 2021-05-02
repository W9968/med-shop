import React from 'react'
import Homelayout from '../../layout/Home.layout'
import { HomeContent } from '../../components/imports'

const _Home = () => {
  return (
    <>
      <Homelayout
        children='hello'
        grid11={
          <HomeContent
            imgsrc='/asset/homeprod/pro1.png'
            alt='product1'
            path='/login'
            title='beauty product'
            parag='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          />
        }
        grid12={
          <HomeContent
            imgsrc='/asset/homeprod/pro2.png'
            alt='product1'
            path='/login'
            title='alimentry'
            parag='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          />
        }
        container='hello'
        p1={
          <HomeContent
            imgsrc='/asset/homeprod/pro3.png'
            alt='product1'
            path='/login'
            title='alimentry'
            parag='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            direction='flex-start'
          />
        }
        p2={
          <HomeContent
            imgsrc='/asset/homeprod/pro4.png'
            alt='product1'
            path='/login'
            title='books'
            direction='flex-end'
          />
        }
        p3={
          <HomeContent
            imgsrc='/asset/homeprod/pro5.png'
            alt='product1'
            path='/login'
            title='shooting'
            direction='flex-end'
          />
        }
        p4={
          <HomeContent
            imgsrc='/asset/homeprod/pro6.png'
            alt='product1'
            path='/login'
            title='artisans'
            direction='flex-end'
          />
        }
        grid13={
          <HomeContent
            imgsrc='/asset/homeprod/pro7.png'
            alt='product1'
            path='/login'
            title='massage'
            direction='flex-start'
          />
        }
        grid14={
          <HomeContent
            imgsrc='/asset/homeprod/pro8.png'
            alt='product1'
            path='/login'
            title={`Book your Flight`}
            direction='flex-start'
          />
        }
      />
    </>
  )
}

export default _Home
