import React from 'react'
import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'

const SearchProd = () => {
  return (
    <>
      <Div>
        <Input
          type='text'
          placeholder='search for products...'
          autoComplete='no'
        />
        <BiSearch style={{ fontSize: '1.2rem' }} />
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
