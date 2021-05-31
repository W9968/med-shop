import React, { useEffect, useState } from 'react'
import { useCrud } from '../../../global/exports'
import { Wrapper, Table, ProductContainer } from '../../../styles/Crud.element'
import { ContentLoader, ContentHeader } from '../../../components/imports'

import axios from 'axios'
import qs from 'qs' // query string form encoded
import 'antd/lib/message/style/index.css'

const _Discount = () => {
  const [newStock, setNewStock] = useState()
  const { socket, loadData, loading } = useCrud()

  useEffect(() => {
    loadData('discount')
  }, []) // eslint-disable-line

  return (
    <>
      <ContentHeader header='discounts' boolState={false} />
      {loading ? (
        <ContentLoader />
      ) : (
        <Wrapper>
          <Table>
            {socket.map((value) => {
              return (
                <ProductContainer key={value.id}>
                  <div>
                    <img
                      src={`http://localhost:8000/storage/products/${value.images[0].file_path}`}
                      alt='click'
                    />
                  </div>
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                    }}>
                    <h2>{value.name}</h2>
                    <p>{value.price}</p>
                    <div>
                      <div
                        key={value.discounts.discount}
                        style={{ width: '100%', display: 'flex' }}>
                        <input
                          type='number'
                          defaultValue={value.discounts.discount}
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
                              localStorage.getItem('mode') === 'light'
                                ? '#232323'
                                : '#efefef',
                            backgroundColor:
                              localStorage.getItem('mode') === 'light'
                                ? '#efefef'
                                : '#232323',
                          }}
                          onClick={() => {
                            axios.defaults.withCredentials = true
                            axios({
                              method: 'put',
                              url: `http://localhost:8000/api/discount/${value.id}`,
                              data: qs.stringify({
                                discount: newStock,
                              }),
                              headers: {
                                'content-type':
                                  'application/x-www-form-urlencoded;charset=utf-8',
                              },
                            })
                          }}>
                          update
                        </button>
                      </div>
                    </div>
                  </div>
                </ProductContainer>
              )
            })}
          </Table>
        </Wrapper>
      )}
    </>
  )
}

export default _Discount
