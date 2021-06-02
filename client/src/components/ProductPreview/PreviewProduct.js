import React, { useEffect, useState } from 'react'
import { useProducts, CartContext } from '../../global/exports.js'
import ContentLoader from '../spinner/ContentLoader'
import { useParams } from 'react-router-dom'
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
  const { id } = useParams()
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
  const { productPreview, getPreviewetProduct } = useProducts()
  const { addProduct, cartItems, increase } = React.useContext(CartContext)

  // fetch return policy and one product
  useEffect(() => {
    axios.defaults.withCredentials = true
    axios.get('http://localhost:8000/api/returnpolicy').then((response) => {
      if (response.status === 200) {
        setReturnState(...response.data)
      }
    })
    getPreviewetProduct(id)

    productPreview !== undefined &&
      setProduct({
        id: productPreview.id,
        name: productPreview.name,
        price: productPreview.price,
        category: productPreview.category,
        attribute: productPreview.attribute,
        image: `http://localhost:8000/storage/products/${productPreview.images[0].file_path}`,
        returnpolicy: returnState.return_policy,
      })
  }, [getPreviewetProduct]) // eslint-disable-line

  // check if product is in cart
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id)
  }

  return (
    <>
      {productPreview === undefined ? (
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
                <Title>{productPreview.name}</Title>
                <Price>{productPreview.price} Dt</Price>
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
                src={`http://localhost:8000/storage/products/${productPreview.images[thumbnail].file_path}`}
                alt='thumbnail'
              />
              <div className='thumbs'>
                {productPreview.images.map((value, key) => {
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
                <Category>{productPreview.category}</Category>
                <Attribute>{productPreview.attribute}</Attribute>
              </div>
              <Description>{productPreview.description}</Description>
              {productPreview.discounts.discount !== null && (
                <Discount>
                  Get {productPreview.discounts.discount}% discounts for the
                  product
                </Discount>
              )}
              <Tag>{productPreview.tag}</Tag>
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
