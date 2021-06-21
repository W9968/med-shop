import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useApi from '../../hooks/useApi'
// import { BiHeart } from 'react-icons/bi'
// import { motion as m } from 'framer-motion'
import Pagelayout from '../../layout/Page.layout'
import { useProducts } from '../../global/state/_ProdContext'
import { ContentLoader } from '../../components/imports'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const _Artisan = () => {
  const { fetched } = useProducts()
  const history = useHistory()
  const [data, setData] = useState([])
  const [Brand, setBrands] = useState([])
  const [subCateg, setSubCateg] = useState([])

  useEffect(() => {
    useApi.get('/api/attributes').then((res) => {
      setSubCateg(res.data.filter((el) => el.category === 'artisans'))
    })

    useApi.get('/api/brands').then((res) => {
      setBrands(res.data)
    })
    setData(fetched)
  }, [setData, fetched])

  return (
    <>
      <Pagelayout>
        <Banner>
          <Heading>artisan</Heading>
          <Image
            src='./asset/banners/banner_artisanat.jpg'
            alt='artisan banner'
          />
        </Banner>
        {useMediaQuery(900) && (
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  sdfsdfs
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Checker>
                  <input
                    name='r'
                    type='Checkbox'
                    className='Checkbox-input'
                    onChange={(e) => e.target.checked && setData(fetched)}
                  />
                  <p className='checker'>all product</p>
                </Checker>
                {subCateg.map((el, key) => {
                  return (
                    <Checker key={key}>
                      <input
                        name='r'
                        type='radio'
                        className='Checkbox-input'
                        onChange={(e) =>
                          e.target.checked &&
                          setData(
                            fetched.filter(
                              (elem) => elem.pivot[0].sub_categ === el.sub_categ
                            )
                          )
                        }
                      />
                      <p className='checker'>{el.sub_categ}</p>
                    </Checker>
                  )
                })}

                {Brand.map((el, key) => {
                  return (
                    <Checker key={key}>
                      <input
                        name='rs'
                        type='Checkbox'
                        className='Checkbox-input'
                        onChange={(e) =>
                          e.target.checked &&
                          setData(
                            fetched.filter((elem) => elem.tag.tag === el.tag)
                          )
                        }
                      />
                      <p className='checker'>{el.tag}</p>
                    </Checker>
                  )
                })}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        )}

        {fetched.length === 0 ? (
          <ContentLoader />
        ) : (
          <Wrapper>
            <Container>
              <h1>Filter By</h1>
              <Checker>
                <input
                  name='r'
                  type='radio'
                  className='Checkbox-input'
                  onChange={(e) => e.target.checked && setData(fetched)}
                />
                <p className='checker'>all product</p>
              </Checker>
              {subCateg.map((el, key) => {
                return (
                  <Checker key={key}>
                    <input
                      name='r'
                      type='radio'
                      className='Checkbox-input'
                      onChange={(e) =>
                        e.target.checked &&
                        setData(
                          fetched.filter(
                            (elem) => elem.pivot[0].sub_categ === el.sub_categ
                          )
                        )
                      }
                    />
                    <p className='checker'>{el.sub_categ}</p>
                  </Checker>
                )
              })}

              {Brand.map((el, key) => {
                return (
                  <Checker key={key}>
                    <input
                      name='rs'
                      type='radio'
                      className='Checkbox-input'
                      onChange={(e) =>
                        e.target.checked &&
                        setData(data.filter((elem) => elem.tag.tag === el.tag))
                      }
                    />
                    <p className='checker'>{el.tag}</p>
                  </Checker>
                )
              })}
            </Container>
            <Container style={{ flex: 1 }}>
              {data.length === 0
                ? 'no data '
                : data
                    .filter((el) => el.pivot[0].category === 'artisans')
                    .map((elem) => {
                      return (
                        <Card>
                          <ProductImage>
                            <img
                              className='imageproduct'
                              alt={elem.images[0].file_path}
                              src={`http://localhost:8000/storage/products/${elem.images[0].file_path}`}
                            />
                          </ProductImage>
                          <Inofs>
                            <div style={{ width: '100%' }}>
                              <h3>{elem.name}</h3>
                              <p>{elem.price}$</p>

                              {elem.description.length > 140 ? (
                                <p className='descripton'>
                                  {elem.description.substring(0, 140)}...
                                </p>
                              ) : (
                                <p className='descripton'>{elem.description}</p>
                              )}
                            </div>
                            <Button
                              onClick={() =>
                                history.push(
                                  `/product/${elem.id}/${elem.pivot[0].category}/${elem.name}`
                                )
                              }>
                              view product
                            </Button>
                          </Inofs>
                        </Card>
                      )
                    })}
            </Container>
          </Wrapper>
        )}
      </Pagelayout>
    </>
  )
}

export default _Artisan

const Banner = styled.div`
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

  @media (max-width: 768px) {
    font-size: 2rem;
    position: static;
    padding-left: 0;
    color: ${({ theme }) => theme.text};
  }
`

const Image = styled.img`
  width: 100%;
  height: 350px;

  @media (max-width: 768px) {
    display: none;
  }
`

const Wrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:first-child {
    width: 350px;

    @media (max-width: 900px) {
      width: 100%;
      display: none;
    }
  }
`

const Checker = styled.div`
  display: flex;
  margin: 5px 0px;
  flex-direction: row;

  .checker {
    margin: 0 1rem;
  }

  .Checkbox {
    font-size: 18px;
    display: grid;
    grid-auto-flow: column;
    column-gap: 0.5em;
    align-items: center;

    &-input {
      margin: 0;
      cursor: pointer;
      appearance: none;
      display: block;
      width: 18px;
      height: 18px;
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.sameHover};
      border-radius: 4px;
      outline: none;

      &:checked {
        position: relative;
        background-color: ${({ theme }) => theme.text};
        border-color: transparent;

        /* The checkmark */
        &::after {
          box-sizing: border-box;
          content: '';
          position: absolute;
          width: 6px;
          height: 10px;
          border: 2px solid ${({ theme }) => theme.body};
          border-top: none;
          border-left: none;
          transform-origin: bottom right;
          transform: translateX(0) translateY(1px) rotate(45deg);
        }
      }
    }
  }
`

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`

const ProductImage = styled.div`
  display: flex;

  .imageproduct {
    width: 290px;
    height: 350px;
    @media (max-width: 900px) {
      width: 150px;
      height: 190px;
    }
  }
`
const Inofs = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .descripton {
    @media (max-width: 500px) {
      display: none;
    }
  }
`

const Button = styled.button`
  width: 250px;
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
