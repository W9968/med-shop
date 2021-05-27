import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useCrud } from '../../../../global/exports'
import {
  Wrapper,
  InputGroup,
  Input,
  Div,
  Label,
  Button,
  Linker,
} from '../../../../styles/Crud.element'

const EditBrand = () => {
  const history = useHistory()
  const ides = parseInt(window.location.pathname.split('/')[4])
  const [name, setName] = useState('')
  const { showOneData, oneResponse, updateData, loading } = useCrud()

  useEffect(() => {
    showOneData('brands', ides)
  }, [oneResponse, showOneData]) // eslint-disable-line

  const handleClick = () => {
    updateData('brands', oneResponse.id, {
      tag: name,
    })
    !loading && history.push('/dash/brands')
  }

  return (
    <>
      <Wrapper>
        <Label>tag</Label>
        <InputGroup key={oneResponse.tag}>
          <Input
            type='text'
            placeholder='text'
            defaultValue={oneResponse.tag}
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>

        <Div>
          <Linker to='/dash/brands'>cancel</Linker>
          <Button onClick={handleClick}>Edit this</Button>
        </Div>
      </Wrapper>
    </>
  )
}

export default EditBrand
