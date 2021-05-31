import React, { useEffect, useState } from 'react'
import { useCrud, CartContext } from '../../global/exports.js'
import ContentLoader from '../spinner/ContentLoader'
import { motion as m } from 'framer-motion'
import axios from 'axios'
import {
  Row,
  Col,
  Images,
  Title,
  Price,
  Description,
  Discount,
  Category,
  Attribute,
  Tag,
  AddToCart,
  IconBtn,
  Wishing,
} from '../../styles/SingleProduct.element'

const PreviewProduct = () => {
  // set states
  const [thumbnail, setThumbnail] = useState(0)
  const [returnState, setReturnState] = useState({})
  //define product that will be saved into storage
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: null,
    category: '',
    attribute: '',
    image: '',
    returnpolicy: '',
  })
  // grab context value and functions
  const { showOneData, oneResponse } = useCrud()
  const { addProduct, cartItems, increase } = React.useContext(CartContext)

  // fetch return policy and one product
  useEffect(() => {
    axios.defaults.withCredentials = true
    axios.get('http://localhost:8000/api/returnpolicy').then((response) => {
      if (response.status === 200) {
        setReturnState(...response.data)
      }
    })

    showOneData('products', 6)
    /* set prodyct for the storage since ShowoOneData in run in the context value will be present first after the component render so we test if it not empty by transforming it's keys to array so we don't encounter the {`could not found 0`} */
    Object.keys(oneResponse).length !== 0 &&
      setProduct({
        id: oneResponse.id,
        name: oneResponse.name,
        price: oneResponse.price,
        category: oneResponse.category,
        attribute: oneResponse.attribute,
        image: `http://localhost:8000/storage/products/${oneResponse.images[0].file_path}`,
        returnpolicy: returnState.return_policy,
      })
  }, [oneResponse]) // eslint-disable-line

  // check if product is in cart
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id)
  }

  return (
    <>
      {Object.keys(oneResponse).length === 0 ? ( // this line converts an object key into array
        <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
          <ContentLoader />
        </Row>
      ) : (
        <Row>
          <Col className='col1'>
            <div>
              <span
                style={{
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}>
                <Title>{oneResponse.name}</Title>
                <Price>{oneResponse.price} Dt</Price>
              </span>

              <IconBtn>
                <m.span initial={{ display: 'flex' }} whileTap={{ scale: 0.7 }}>
                  <Wishing />
                </m.span>
              </IconBtn>

              <m.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='image'
                src={`http://localhost:8000/storage/products/${oneResponse.images[thumbnail].file_path}`}
                alt='thumbnail'
              />
              <div className='thumbs'>
                {oneResponse.images.map((value, key) => {
                  return (
                    <Images
                      key={key}
                      alt='list of images'
                      onClick={() => setThumbnail(key)}
                      src={`http://localhost:8000/storage/products/${value.file_path}`}
                    />
                  )
                })}
              </div>
            </div>
          </Col>
          <Col className='col2'>
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Category>{oneResponse.category}</Category>
                <Attribute>{oneResponse.attribute}</Attribute>
              </div>
              <Description>{oneResponse.description}</Description>
              {oneResponse.discounts.discount !== null && (
                <Discount>
                  Get {oneResponse.discounts.discount}% discounts for the
                  product
                </Discount>
              )}
              <Tag>{oneResponse.tag}</Tag>
              {JSON.stringify(returnState)}
            </div>

            {isInCart(product) && (
              <AddToCart onClick={() => increase(product)} />
            )}
            {!isInCart(product) && (
              <AddToCart onClick={() => addProduct(product)} />
            )}
          </Col>
        </Row>
      )}
    </>
  )
}

export default PreviewProduct
