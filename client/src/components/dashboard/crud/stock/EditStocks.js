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

const EditStocks = () => {
  const history = useHistory()
  const [stock, setStock] = useState()
  const { showOneData, oneResponse, loadData } = useCrud()
  const ides = parseInt(window.location.pathname.split('/')[4])

  useEffect(() => {
    showOneData('stocks', ides)
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
          <InputGroup key={oneResponse.stocks.quantity}>
            <Input
              type='number'
              onChange={(e) => setStock(e.target.value)}
              defaultValue={oneResponse.stocks.quantity}
            />
          </InputGroup>
          <Div>
            <Linker to='/dash/stocks'>cancel</Linker>
            <Button
              onClick={() => {
                axios.defaults.withCredentials = true
                axios({
                  method: 'put',
                  url: `http://localhost:8000/api/stocks/${oneResponse.id}`,
                  data: qs.stringify({
                    quantity: stock,
                  }),
                  headers: {
                    'content-type':
                      'application/x-www-form-urlencoded;charset=utf-8',
                  },
                }).then((response) => {
                  if (response.status === 200) {
                    loadData('stocks')
                    history.push('/dash/stocks')
                  }
                })
              }}>
              update
            </Button>
          </Div>
        </Wrapper>
      )}
    </>
  )
}

export default EditStocks
