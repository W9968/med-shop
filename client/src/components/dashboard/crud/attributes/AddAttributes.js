import React, { useState } from 'react'
import {
  Wrapper,
  InputGroup,
  Input,
  Label,
  Div,
  Button,
  Linker,
  StyledSelect,
} from '../../../../styles/Crud.element'
import { useCrud } from '../../../../global/exports'

const AddAttributes = () => {
  const { storeData } = useCrud()
  const [category, setCategory] = useState()
  const [attribute, setAttribute] = useState()

  const option = [
    { label: 'Product Beauty', value: 'product beauty' },
    { label: 'Books', value: 'book' },
    { label: 'Cosmetic', value: 'cosmetic' },
    { label: 'Organic', value: 'organic' },
  ]

  const CustemStyles = {
    singleValue: () => ({
      color: sessionStorage.getItem('mode') === 'light' ? '#232323' : '#efefef',
    }),

    container: (provided) => ({
      ...provided,
      width: '100%',
    }),

    control: () => ({
      display: 'flex',
      padding: '5px',
      background:
        sessionStorage.getItem('mode') === 'light' ? '#efefef' : '#232323',
    }),

    menu: (provided, state) => ({
      ...provided,
      color: state.isSelected && 'red',
      background:
        sessionStorage.getItem('mode') === 'light' ? '#efefef' : '#232323',
    }),

    option: (provided, state) => ({
      ...provided,
      color: sessionStorage.getItem('mode') === 'light' ? '#232323' : '#efefef',
      background:
        state.isSelected &&
        (sessionStorage.getItem('mode') === 'light' ? '#ffffff' : '#111111'),
      '&:hover': {
        background:
          sessionStorage.getItem('mode') === 'light' ? '#ffffff' : '#111111',
      },
    }),
  }

  return (
    <>
      <Wrapper>
        <InputGroup>
          <StyledSelect
            placeholder='select category...'
            styles={CustemStyles}
            options={option}
            onChange={(e) => setCategory(e.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label>Attributes</Label>
          <Input
            type='text'
            placeholder='add new attributes'
            onChange={(e) => setAttribute(e.target.value)}
          />
        </InputGroup>
        <Div>
          <Linker to='/dash/attributes'>cancel</Linker>
          <Button
            onClick={() =>
              storeData('attributes', {
                category: category,
                attributes: attribute,
              })
            }>
            Add
          </Button>
        </Div>
      </Wrapper>
    </>
  )
}

export default AddAttributes
