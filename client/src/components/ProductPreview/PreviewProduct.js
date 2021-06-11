import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import useApi from '../../hooks/useApi.js'

import { Card } from '@geist-ui/react'
import { BiHeart } from 'react-icons/bi'
import { motion as m } from 'framer-motion'
import ContentLoader from '../spinner/ContentLoader'
import { CartContext, useProducts } from '../../global/exports.js'
import { useParams, useHistory } from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const PreviewProduct = () => {
  const history = useHistory()
  const { id } = useParams()
  const { fetched, loading } = useProducts()
  const [loader, setLoader] = useState(false)
  const { addProduct, cartItems, increase } = useContext(CartContext)
  const [product, setProduct] = useState({})

  const getProduct = async (id) => {
    setLoader(true)
    return await useApi.get(`api/products/${id}`).then((response) => {
      if (response.status === 200) {
        const data = response.data
        setProduct({
          id: data.product.id,
          name: data.product.name,
          price: data.product.price,
          discount: data.product.discounts.discount,
          category: data.product.category,
          attribute: data.product.attribute,
          images: data.product.images,
          returnpolicy: data.returnpolicy.return_policy,
          returnDuration: data.returnpolicy.duration,
        })
      }
      setLoader(false)
    })
  }

  // const isInCart = (product) => {
  //   return !!cartItems.find((item) => item.id === product.id)
  // }

  useEffect(() => {
    getProduct(id)
  }, []) // eslint-disable-line

  const CardStyle = {
    margin: '1.5rem 0',
    color: localStorage.getItem('mode') === 'dark' ? '#fff' : '#222',
    background: localStorage.getItem('mode') === 'light' ? '#fff' : '#333',
    border: 'none',
  }

  return (
    <>
      {loading ? (
        <Wrapper style={{ alignContent: 'center', justifyContent: 'center' }}>
          <ContentLoader />
        </Wrapper>
      ) : (
        <Wrapper>
          {/* product */}
          <Div>
            <SimilarText>Product information</SimilarText>
            {Object.keys(product).length !== 0 && (
              <ProductView>
                <Col>
                  <Carousel showArrows={true} showThumbs={false}>
                    {product.images.map((el) => {
                      return (
                        <Image
                          key={el.id}
                          src={`http://localhost:8000/storage/products/${el.file_path}`}
                          alt={el.file_path}
                        />
                      )
                    })}
                  </Carousel>
                  {/* */}
                </Col>
                <Col>
                  {product.name}
                  <br />
                  {product.category}
                </Col>
              </ProductView>
            )}
          </Div>
          {/* card */}
          <Div>
            <SimilarText>Similar Product</SimilarText>
            {fetched
              .filter(
                (el) => el.category === product.category && el.id !== product.id
              )
              .map((val) => {
                return (
                  <Card shadow style={CardStyle} key={val.id}>
                    <Card.Content className='cardTitle'>
                      {val.name}
                      <m.button
                        className='heartButton'
                        whileTap={{ scale: 0.8 }}>
                        <BiHeart style={{ fontSize: '1.7rem' }} />
                      </m.button>
                    </Card.Content>
                    <Card.Body className='cardBody'>
                      <img
                        className='image'
                        alt={val.images[0].file_path}
                        src={`http://localhost:8000/storage/products/${val.images[0].file_path}`}
                      />

                      {val.description.length < 85 ? (
                        <p>{val.description}</p>
                      ) : (
                        <p>{val.description.substring(0, 85)}...</p>
                      )}
                    </Card.Body>
                    <Card.Footer className='cardFooter'>
                      <p>{val.price}Dt</p>
                      <span
                        className='cardlink'
                        onClick={() => {
                          getProduct(val.id)
                          history.push(
                            `/product/${val.id}/${val.category}/${val.name}`
                          )
                        }}>
                        see product
                      </span>
                    </Card.Footer>
                  </Card>
                )
              })}
          </Div>
        </Wrapper>
      )}
    </>
  )
}

export default PreviewProduct

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  padding-top: 150px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
const Div = styled.div`
  &:first-child {
    flex: 1;
    padding: 0 1rem;

    @media (max-width: 768px) {
      padding: 0;
      width: 100%;
    }
  }

  &:last-child {
    padding: 0 1rem;
    width: 500px;

    @media (max-width: 768px) {
      padding: 0;
      width: 100%;
    }
  }

  .cardTitle {
    display: flex;
    font-size: 1.25rem;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0 !important;
    text-transform: capitalize;
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
    width: 100px !important;
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
`
const SimilarText = styled.h2`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.sameHover};
`
const ProductView = styled.div`
  display: flex;
  flex-direction: row;
`
const Col = styled.div`
  &:last-child {
    flex: 1;
  }

  &:last-child {
    padding: 0 1rem;
    width: 500px;

    @media (max-width: 768px) {
      padding: 0;
      width: 100%;
    }
  }
  .carousel,
  .slide,
  .selected,
  .slider-wrapper,
  .slider-wrapper {
    width: 420px;
  }
`

const Image = styled.img`
  display: flex;
  width: 420px;
  height: 600px;
`
