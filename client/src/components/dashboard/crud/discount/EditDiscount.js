import React, { useEffect, useState } from 'react'
import axios from 'axios'
import qs from 'qs' // query string form encoded
import { useCrud } from '../../../../global/exports'
import { useHistory } from 'react-router-dom'
import {
  ProductContainer,
  Wrapper,
  InputGroup,
  Input,
  Div,
  Button,
  Linker,
} from '../../../../styles/Crud.element'

const EditDiscount = () => {
  const history = useHistory()
  const [discount, setDiscount] = useState()
  const { showOneData, oneResponse, loadData } = useCrud()
  const ides = parseInt(window.location.pathname.split('/')[4])

  useEffect(() => {
    showOneData('discount', ides)
  }, []) // eslint-disable-line

  return (
    <>
      {Object.keys(oneResponse).length !== 0 && (
        <Wrapper>
          <ProductContainer>
            <img
              height='200px'
              src={`http://localhost:8000/storage/products/${oneResponse.images[0].file_path}`}
              alt={oneResponse.images[0].file_path}
            />

            <div style={{ margin: '0rem 1rem', flex: 1 }}>
              <h3>{oneResponse.name}</h3>
              <p>{oneResponse.price}</p>
              <p>{oneResponse.description}</p>
            </div>
          </ProductContainer>
          <InputGroup key={oneResponse.discounts.discount}>
            <Input
              type='number'
              onChange={(e) => setDiscount(e.target.value)}
              defaultValue={
                oneResponse.discounts.discount === null
                  ? '0'
                  : oneResponse.discounts.discount
              }
            />
          </InputGroup>
          <Div>
            <Linker to='/dash/discount'>cancel</Linker>
            <Button
              onClick={() => {
                axios.defaults.withCredentials = true
                axios({
                  method: 'put',
                  url: `http://localhost:8000/api/discount/${oneResponse.id}`,
                  data: qs.stringify({
                    discount: discount,
                  }),
                  headers: {
                    'content-type':
                      'application/x-www-form-urlencoded;charset=utf-8',
                  },
                }).then((response) => {
                  if (response.status === 200) {
                    loadData('discount')
                    history.push('/dash/discount')
                  }
                })
              }}>
              Add
            </Button>
          </Div>
        </Wrapper>
      )}
    </>
  )
}

export default EditDiscount
