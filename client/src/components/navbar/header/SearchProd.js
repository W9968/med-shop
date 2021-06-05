import React, { useEffect, useState } from 'react'
import useApi from '../../../hooks/useApi'
import styled from 'styled-components'

import { Modal } from '@geist-ui/react'
import { BiSearch } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { motion as m } from 'framer-motion'
import Skeleton from '../../spinner/Skeleton'
import { useHistory } from 'react-router-dom'

const SearchProd = ({ searchTitle }) => {
  const history = useHistory()
  const [searchInput, setSearchInput] = useState('')
  const [payload, setPayload] = useState([])
  const [state, setState] = useState(false)
  const stateHandler = () => setState(true)
  const closeHandler = () => setState(false)

  useEffect(() => {
    useApi.get('/api/products').then((response) => {
      response.status && setPayload(response.data)
    })
  }, [])

  return (
    <>
      <Icon onClick={stateHandler}>
        {searchTitle}
        <FiSearch className='icon' />
      </Icon>
      <Modal open={state} onClose={closeHandler}>
        <Modal.Title>Search for products</Modal.Title>
        <Modal.Content>
          <Wrapper>
            <Div>
              <Input
                type='text'
                autoComplete='no'
                placeholder='search for products...'
                onBlur={() => setSearchInput('')}
                onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
              />
              <BiSearch style={{ fontSize: '1.2rem' }} />
            </Div>
            {searchInput.length !== 0 && (
              <SearchContainer
                initial={{ height: '0px' }}
                animate={{ height: 'auto' }}
                transition={{ type: 'just' }}>
                {payload.filter((el) => {
                  if (searchInput.length === 0 || searchInput === ' ') {
                    return 0
                  } else {
                    return (
                      el.name.toLowerCase().includes(searchInput) ||
                      el.price.toString().includes(searchInput) ||
                      el.category.toLowerCase().includes(searchInput)
                    )
                  }
                }).length === 0 ? (
                  <Skeleton />
                ) : (
                  payload
                    .filter((el) => {
                      if (searchInput.length === 0 || searchInput === ' ') {
                        return 0
                      } else {
                        return (
                          el.name.toLowerCase().includes(searchInput) ||
                          el.price.toString().includes(searchInput) ||
                          el.category.toLowerCase().includes(searchInput)
                        )
                      }
                    })
                    .map((val) => {
                      return (
                        <ProductView
                          key={val.id}
                          initial={{ opacity: 0, y: '-30%' }}
                          animate={{ opacity: 1, y: '0%' }}
                          onClick={() =>
                            history.push(
                              `/product/${val.id}/${val.category}/${val.name}`
                            )
                          }>
                          <div>
                            <img
                              width='100px'
                              height='86px'
                              src={`http://localhost:8000/storage/products/${val.images[0].file_path}`}
                              alt={`search-${val.images[0].file_path}`}
                            />
                          </div>
                          <div style={{ padding: '0 15px' }}>
                            <p style={{ fontWeight: 600 }}>{val.name}</p>
                            <p style={{ fontFamily: 'consolas' }}>
                              {val.price}
                            </p>
                          </div>
                        </ProductView>
                      )
                    })
                )}
              </SearchContainer>
            )}
          </Wrapper>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default SearchProd

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Div = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 10px;
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.hover};
`

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 12px 0px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.hover};
`

const SearchContainer = styled(m.div)`
  z-index: 10px;
  padding: 10px;
  display: flex;
  width: inherit;
  max-height: 300px;
  overflow-y: auto;
  flex-direction: column;
  background-color: ${({ theme }) => theme.body};
`

const ProductView = styled(m.div)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const Icon = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  background: none;
  font-size: 1.7rem;
  align-items: center;
  color: ${({ theme }) => theme.text};
`
