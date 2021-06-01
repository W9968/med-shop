import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'
import { motion as m } from 'framer-motion'
import axios from 'axios'

const SearchProd = () => {
  const [searchInput, setSearchInput] = useState()
  const [payload, setPayload] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/products').then((response) => {
      response.status && setPayload(response.data)
    })
  }, [])

  console.log(
    payload,
    searchInput,
    payload.filter((el) => {
      return el.name.toLowerCase().includes(searchInput)
    })
  )

  return (
    <>
      <Div>
        <Input
          type='text'
          placeholder='search for products...'
          autoComplete='no'
          onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
        />
        <BiSearch style={{ fontSize: '1.2rem' }} />
        <div style={{ display: 'flex', height: '1rem' }}></div>
      </Div>
    </>
  )
}

export default SearchProd

const Div = styled.div`
  display: flex;
  padding: 0px 10px;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.hover};
`

const Input = styled.input`
  width: 500px;
  border: none;
  outline: none;
  padding: 12px 0px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.hover};
`
