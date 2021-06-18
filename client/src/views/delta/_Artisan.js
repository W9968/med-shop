import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Card } from '@geist-ui/react'
import { BiHeart } from 'react-icons/bi'
import { motion as m } from 'framer-motion'
import Pagelayout from '../../layout/Page.layout'
import { useProducts } from '../../global/state/_ProdContext'
import useApi from '../../hooks/useApi'

import Slider from 'antd/lib/slider'

import 'antd/lib/slider/style/index.css'

const _Artisan = () => {
  const { fetched } = useProducts()
  const [brand, setbrand] = React.useState([])
  const [artisan, setArtisan] = React.useState([])

  const CardStyle = {
    margin: '1.5rem 0',
    color: localStorage.getItem('mode') === 'dark' ? '#fff' : '#222',
    background: localStorage.getItem('mode') === 'light' ? '#fff' : '#333',
    border: 'none',
  }

  useEffect(() => {
    useApi.get('/api/attributes').then((res) => {
      setArtisan(res.data)
    })

    useApi.get('/api/brands').then((res) => {
      setbrand(res.data)
    })
  }, [])

  const mark = {
    0: '10$',
    100: '70$',
  }
  console.log(fetched)

  return (
    <>
      <Pagelayout>
        <Div>
          <Heading>artisan</Heading>
          <Image
            src='./asset/banners/banner_artisanat.jpg'
            alt='artisan banner'
          />
        </Div>

        <div style={{ display: 'flex', alignContent: 'flex-start' }}>
          <FiltringDiv>
            <h1>Filter by</h1>
            {artisan
              .filter((el) => el.category === 'artisans')
              .map((el) => {
                return (
                  <p className='down'>
                    <input type='checkbox' /> {el.sub_categ}
                  </p>
                )
              })}
            <br />
            <Slider
              marks={mark}
              range={{ draggableTrack: true }}
              defaultValue={[0, 100]}
            />
            <br />
            {brand.map((el) => {
              return (
                <p className='down'>
                  <input type='checkbox' /> {el.tag}
                </p>
              )
            })}
          </FiltringDiv>
          <Wrapper>
            {fetched.map((val) => {
              return (
                <Card style={CardStyle} key={val.id}>
                  <Card.Body className='cardBody'>
                    <img
                      className='image'
                      alt={val.images[0].file_path}
                      src={`http://localhost:8000/storage/products/${val.images[0].file_path}`}
                    />

                    <div className='left-side'>
                      <div>
                        <h1 className='cardTitle'>{val.name}</h1>
                        <p>{val.price}$</p>
                        <br />
                        <p>{val.description}</p>
                        <br />
                      </div>
                      <div style={{ display: 'flex' }}>
                        <Button>Add to cart</Button>
                        <m.button className='wishlistIcon'>
                          <m.span
                            style={{ display: 'flex' }}
                            whileTap={{ scale: 0.7 }}>
                            <BiHeart style={{ fontSize: '1.7rem' }} />
                          </m.span>
                        </m.button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              )
            })}
          </Wrapper>
        </div>
      </Pagelayout>
    </>
  )
}

export default _Artisan

const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const Heading = styled.h1`
  color: #fff;
  font-size: 4rem;
  padding-left: 2rem;
  position: absolute;
  text-transform: capitalize;
`

const Image = styled.img`
  width: 100%;
  height: 350px;
`

const Wrapper = styled.div`
  .cardTitle {
    display: flex;
    font-size: 1.25rem;
    align-items: center;
    justify-content: space-between;
    /* margin-bottom: 1rem; */
    text-transform: capitalize;
  }

  .left-side {
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .heartButton {
    border: none;
    outline: none;
    display: flex;
    cursor: pointer;
    background: none;
    color: ${({ theme }) => theme.text};
  }

  .image {
    display: flex;
    margin-right: 1rem;
    width: 300px !important;
  }

  .cardBody {
    display: flex;
    flex-direction: row;
  }

  .cardFooter {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cardlink {
    font-size: 110%;
    cursor: pointer;
    color: ${({ theme }) => theme.optional};
  }
  .wishlistIcon {
    display: flex;
    border: none;
    outline: none;
    padding: 10px;
    margin-left: 5px;
    cursor: pointer;
    color: ${({ theme }) => theme.body};
    background: ${({ theme }) => theme.text};
  }
`

const FiltringDiv = styled.div`
  margin-top: 3rem;
  width: 300px;
  margin-left: 1rem;

  .down {
    margin: 1rem 0;
  }

  .ant-slider-handle,
  .ant-slider-handle-2,
  .ant-slider-track,
  .ant-slider-track-1 {
    border-color: black;
    border-radius: 0;
    background-color: black;
  }
`
const Button = styled.button`
  width: 300px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 13px 2rem;
  font-size: 1.125rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.body};
  background: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    width: 100%;
  }
`
