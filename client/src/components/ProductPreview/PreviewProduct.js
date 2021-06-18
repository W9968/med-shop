import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import useApi from '../../hooks/useApi.js'

import { Card, Tag, useToasts } from '@geist-ui/react'
import { BiHeart } from 'react-icons/bi'
import { motion as m } from 'framer-motion'
import ContentLoader from '../spinner/ContentLoader'
import { CartContext } from '../../global/exports.js'
import { useParams, useHistory } from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import OneProducttabs from './OneProducttabs.js'

const PreviewProduct = () => {
  const { id } = useParams()
  const history = useHistory()
  const [, setToast] = useToasts()
  const [items, setITem] = useState({})
  const [allProd, setAllProd] = useState([])
  const [loading, setLoading] = useState(false)
  const [cartProd, setCartProd] = useState({})
  const { addProduct, cartItems, increase } = useContext(CartContext)

  const getProduct = async (id) => {
    return await useApi.get(`api/products/${id}`).then((response) => {
      if (response.status === 200) {
        setITem(response.data)
        setCartProd({
          id: response.data.id,
          name: response.data.name,
          price:
            response.data.discounts.discount === null
              ? response.data.price
              : response.data.price -
                (response.data.price * response.data.discounts.discount) / 100,
          category: response.data.pivot[0].category,
          sub_category: response.data.pivot[0].sub_categ,
          image: response.data.images[0].file_path,
        })
      }
    })
  }

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id)
  }
  useEffect(() => {
    getProduct(id)
  }, []) // eslint-disable-line

  useLayoutEffect(() => {
    setLoading(true)
    useApi
      .get('api/products')
      .then((response) => {
        setAllProd(response.data)
      })
      .then(() => setLoading(false))
  }, [])

  const CardStyle = {
    margin: '1.5rem 0',
    color: localStorage.getItem('mode') === 'dark' ? '#fff' : '#222',
    background: localStorage.getItem('mode') === 'light' ? '#fff' : '#333',
    border: 'none',
  }

  if (loading) {
    return (
      <Wrapper style={{ alignContent: 'center', justifyContent: 'center' }}>
        <ContentLoader />
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <Div>
          <SimilarText>Product information</SimilarText>
          {items !== {} && Object.keys(items).length !== 0 && (
            <>
              <ProductView>
                <Col>
                  <Carousel showArrows={true} showThumbs={false}>
                    {items.images.map((el) => {
                      return (
                        <Image
                          key={el.id}
                          src={`http://localhost:8000/storage/products/${el.file_path}`}
                          alt={el.file_path}
                        />
                      )
                    })}
                  </Carousel>
                </Col>
                <Col>
                  <Category>{items.pivot[0].category}</Category>
                  <h1 className='text'>{items.name}</h1>
                  <Price>
                    {items.discounts.discount === null || 0 ? (
                      <p style={{ fontSize: '130%' }}>{items.price}$</p>
                    ) : (
                      <p
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: '130%',
                        }}>
                        <span
                          style={{
                            textDecoration: 'line-through',
                          }}>
                          {items.price} $
                        </span>
                        <Tag style={{ margin: '0 10px', fontSize: '1rem' }}>
                          -{items.discounts.discount}%
                        </Tag>
                        {items.price -
                          (items.price * items.discounts.discount) / 100}
                        $
                      </p>
                    )}
                  </Price>

                  <Description>
                    <p style={{ fontSize: '120%' }}>Description :</p>
                    <p>{items.description}</p>
                  </Description>

                  <br />
                  <br />
                  {items.stocks.quantity === 0 ? (
                    <div className='note'>
                      <RedDot /> Out of Stocks
                    </div>
                  ) : (
                    <div className='note'>
                      <GreenDot /> Available in stocks
                    </div>
                  )}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      margin: '1rem 0',
                    }}>
                    {isInCart(cartProd) && (
                      <Button onClick={() => increase(cartProd)}>
                        Add more
                      </Button>
                    )}

                    {!isInCart(cartProd) && (
                      <Button onClick={() => addProduct(cartProd)}>
                        Add to cart
                      </Button>
                    )}
                    <m.button className='wishlistIcon'>
                      <m.span
                        onClick={() => {
                          useApi
                            .post('/api/wishlists', {
                              product_id: items.id,
                            })
                            .then((response) => {
                              if (response.status === 200) {
                                setToast({
                                  text: 'item already stored',
                                  type: 'secondary',
                                })
                              }
                              if (response.status === 201) {
                                setToast({
                                  text: 'item added to your wishlist',
                                  type: 'success',
                                })
                              }
                            })
                        }}
                        style={{ display: 'flex' }}
                        whileTap={{ scale: 0.7 }}>
                        <BiHeart style={{ fontSize: '1.7rem' }} />
                      </m.span>
                    </m.button>
                  </div>
                </Col>
              </ProductView>
              <OneProducttabs item={items} />
            </>
          )}
        </Div>
        <Div>
          <SimilarText>Similar Product</SimilarText>
          {Object.keys(items).length !== 0 &&
            allProd
              .filter(
                (el) =>
                  el.pivot[0].category === items.pivot[0].category &&
                  el.id !== items.id
              )
              .map((val) => {
                return (
                  <Card shadow style={CardStyle} key={val.id}>
                    <Card.Content className='cardTitle'>
                      {val.name}
                      <m.button
                        className='heartButton'
                        whileTap={{ scale: 0.8 }}>
                        <BiHeart
                          style={{ fontSize: '1.7rem' }}
                          onClick={() => {
                            useApi
                              .post('/api/wishlists', {
                                product_id: items.id,
                              })
                              .then((response) => {
                                if (response.status === 200) {
                                  setToast({
                                    text: 'item already stored',
                                    type: 'secondary',
                                  })
                                }
                                if (response.status === 201) {
                                  setToast({
                                    text: 'item added to your wishlist',
                                    type: 'success',
                                  })
                                }
                              })
                          }}
                        />
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
                      <p>{val.price}$</p>
                      <span
                        className='cardlink'
                        onClick={() => {
                          getProduct(val.id).then(() =>
                            history.push(
                              `/product/${val.id}/${val.category}/${val.name}`
                            )
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
    )
  }
}

export default PreviewProduct

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  padding-top: 100px;

  @media (max-width: 1400px) {
    width: 100%;
    flex-direction: column;
  }
`
const Div = styled.div`
  margin-bottom: 3rem;

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

  .text {
    letter-spacing: 1px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.text};
  }

  .note {
    display: flex;
    align-items: center;
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

  .comment-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`
const SimilarText = styled.h1`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.sameHover};
`
const ProductView = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
const Col = styled.div`
  &:last-child {
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 5rem;

    @media (max-width: 1000px) {
      padding: 0px 2rem;
    }

    @media (max-width: 768px) {
      padding: 1rem 0;
      width: 100%;
    }
  }
  .carousel,
  .slide,
  .selected,
  .slider-wrapper,
  .slider-wrapper {
    width: 420px;
    @media (max-width: 768px) {
      width: 100%;
    }
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

  .tabs {
    margin-top: 2rem;
  }
`

const Image = styled.img`
  display: flex;
  width: 420px;
  height: 600px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`

const Price = styled.div`
  margin: 10px 0;
`

const Description = styled.div`
  width: 100%;
  margin: 1rem 0;
`

const RedDot = styled.div`
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: 50%;
  background: ${({ theme }) => theme.error};
`
const GreenDot = styled.div`
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: 50%;
  background: ${({ theme }) => theme.correct};
`

const Button = styled.button`
  flex: 1;
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

const Category = styled.p`
  display: flex;
  font-size: 1rem;
  padding: 5px 10px;
  width: max-content;
  margin-bottom: 1rem;
  align-items: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.text};
`
