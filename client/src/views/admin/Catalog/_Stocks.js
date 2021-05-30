import React, { useEffect, useState } from 'react'

import { useCrud } from '../../../global/exports'
import { InputGroup, Wrapper, Input } from '../../../styles/Crud.element'
import { ContentLoader, ContentHeader } from '../../../components/imports'

import axios from 'axios'
import qs from 'qs' // query string form encoded
import message from 'antd/lib/message'
import 'antd/lib/message/style/index.css'

const _Stocks = () => {
  const [newStock, setNewStock] = useState()
  const { socket, loadData, loading } = useCrud()

  useEffect(() => {
    loadData('products')
  }, []) // eslint-disable-line

  return (
    <>
      <ContentHeader header='Stocks list' boolState={false} />
      {loading ? (
        <ContentLoader />
      ) : (
        <Wrapper>
          {socket.map((value) => {
            return (
              <InputGroup key={value.id}>
                <p>
                  <span style={{ fontWeight: 600 }}>{value.name}</span> have in
                  stock
                </p>
                <div
                  key={value.stocks.quantity}
                  style={{ width: '100%', display: 'flex' }}>
                  <Input
                    type='number'
                    defaultValue={value.stocks.quantity}
                    onChange={(e) => setNewStock(e.target.value)}
                  />
                  <button
                    style={{
                      cursor: 'pointer',
                      padding: '0px 10px',
                      background: 'none',
                      border: 'none',
                      outline: 'none',
                      color:
                        sessionStorage.getItem('mode') === 'light'
                          ? '#232323'
                          : '#efefef',
                      backgroundColor:
                        sessionStorage.getItem('mode') === 'light'
                          ? '#efefef'
                          : '#232323',
                    }}
                    onClick={() => {
                      axios.defaults.withCredentials = true
                      axios({
                        method: 'put',
                        url: `http://localhost:8000/api/stocks/${value.id}`,
                        data: qs.stringify({
                          quantity: newStock,
                        }),
                        headers: {
                          'content-type':
                            'application/x-www-form-urlencoded;charset=utf-8',
                        },
                      })
                      message.success(`${value.name} stock has been updated`, 1)
                    }}>
                    update
                  </button>
                </div>
              </InputGroup>
            )
          })}
        </Wrapper>
      )}
    </>
  )
}

export default _Stocks
