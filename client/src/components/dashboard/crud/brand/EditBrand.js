import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useCrud } from '../../../../global/exports'
import { InputLeftedUp } from '../../../imports'

const EditBrand = () => {
  const history = useHistory()
  const ides = parseInt(window.location.pathname.split('/')[4])
  const [text, setText] = useState('')
  const { showOneData, oneResponse, updateData, loading } = useCrud()

  useEffect(() => {
    showOneData('brands', ides)
  }, [oneResponse, showOneData]) // eslint-disable-line

  const handleClick = () => {
    updateData('brands', oneResponse.id, {
      tag: text,
    })
    !loading && history.push('/dash/brands')
  }

  return (
    <>
      <Wrapper>
        <div key={oneResponse.tag}>
          <InputLeftedUp
            defaultValue={oneResponse.tag}
            state={{ text: [text, setText] }}
          />
        </div>

        <Div>
          <Linker to='/dash/brands'>cancel</Linker>
          <Button onClick={handleClick}>Edit this</Button>
        </Div>
      </Wrapper>
    </>
  )
}

export default EditBrand

const Wrapper = styled.div`
  padding: 1rem;
`

const Div = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 400px) {
    justify-content: space-between;
  }
`
const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.third};

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.hover};
  }
`
const Linker = styled(NavLink)`
  padding: 8px 12px;
  margin-right: 1rem;
  border-radius: 5px;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.third};
  background-color: ${({ theme }) => theme.fourth};
`
