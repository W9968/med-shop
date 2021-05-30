import React, { useEffect, useState } from 'react'
import { useCrud, useCart } from '../../global/exports.js'
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
  const [thumbnail, setThumbnail] = useState(0)
  const [returnState, setReturnState] = useState({})
  const { showOneData, oneResponse } = useCrud()
  const { subscribe } = useCart()

  useEffect(() => {
    axios.defaults.withCredentials = true
    axios.get('http://localhost:8000/api/returnpolicy').then((response) => {
      if (response.status === 200) {
        setReturnState(...response.data)
      }
    })

    showOneData('products', 6)
  }, []) // eslint-disable-line

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
              {oneResponse.discounts.discount !== 0 && (
                <Discount>
                  Get {oneResponse.discounts.discount}% discounts for the
                  product
                </Discount>
              )}
              <Tag>{oneResponse.tag}</Tag>
              {JSON.stringify(returnState)}
            </div>
            <AddToCart
              onClick={() =>
                subscribe(
                  oneResponse.name,
                  oneResponse.price,
                  oneResponse.category,
                  oneResponse.attribute,
                  returnState.return_policy
                )
              }
            />
          </Col>
        </Row>
      )}
    </>
  )
}

export default PreviewProduct
