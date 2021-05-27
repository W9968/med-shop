import React, { useState } from 'react'
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

const AddBrand = () => {
  const history = useHistory()
  const [name, setName] = useState('')
  const [message, setMessage] = useState()
  const { storeData } = useCrud()

  const handleClick = () => {
    name.length === 0
      ? setMessage('Please enter some information')
      : storeData('brands', {
          tag: name,
        })
    history.push('/dash/brands')
  }

  return (
    <>
      <Wrapper>
        <p style={{ marginBottom: '1rem' }}>{message}</p>
        <InputGroup>
          <Label>Brand name</Label>
          <Input
            type='text'
            placeholder='text'
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>
        <Div>
          <Linker to='/dash/brands'>cancel</Linker>
          <Button onClick={handleClick}>Add</Button>
        </Div>
      </Wrapper>
    </>
  )
}

export default AddBrand
