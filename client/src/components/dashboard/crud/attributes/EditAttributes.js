import React, { useEffect, useState } from 'react'
import {
  Wrapper,
  InputGroup,
  Input,
  Label,
  Div,
  Button,
  Linker,
} from '../../../../styles/Crud.element'
import { useCrud } from '../../../../global/exports'
import { useHistory } from 'react-router-dom'

const EditAttributes = () => {
  const history = useHistory()
  const [attribute, setAttribute] = useState()
  const { showOneData, oneResponse, updateData } = useCrud()
  const ides = parseInt(window.location.pathname.split('/')[4])

  useEffect(() => {
    showOneData('attributes', ides)
  }, [oneResponse, showOneData]) // eslint-disable-line

  return (
    <>
      <Wrapper>
        <InputGroup key={oneResponse.attributes}>
          <Label>Edit Attribute</Label>
          <Input
            type='text'
            defaultValue={oneResponse.attributes}
            onChange={(e) => setAttribute(e.target.value)}
          />
        </InputGroup>
        <Div>
          <Linker to='/dash/attributes'>cancel</Linker>
          <Button
            onClick={() => {
              updateData('attributes', oneResponse.id, {
                category: oneResponse.category,
                attributes: attribute,
              })
              history.push('/dash/attributes')
            }}>
            Add
          </Button>
        </Div>
      </Wrapper>
    </>
  )
}

export default EditAttributes
