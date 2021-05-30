import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Wrapper,
  InputGroup,
  Input,
  TextArea,
  Label,
  Div,
  Button,
  Linker,
  StyledSelect,
} from '../../../../styles/Crud.element'

const AddProduct = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState()
  const [description, setDescription] = useState('')
  const [tag, setTag] = useState('')
  const [stocks, setStocks] = useState()
  const [images, setImages] = useState([])
  const [fetchedBrand, setFetchedBrand] = useState([])

  const [categories, setCategories] = useState('')
  const [att, setAtti] = useState('')
  const [attributes, setAttributes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/brands').then((res) => {
      const option = res.data.map((val) => ({ value: val.tag, label: val.tag }))
      setFetchedBrand(option)
    })
  }, []) // eslint-disable-line

  // cordinate selection
  const category = [
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

  const handleFormSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('tag', tag)
    formData.append('stocks', stocks)
    formData.append('category', categories)
    formData.append('attribute', att)
    formData.append('discounts', 0)

    for (let i = 0; i < images.length; i++) {
      formData.append('images[]', images[i])
    }
    axios.defaults.withCredentials = true
    axios.post('http://localhost:8000/api/products', formData, {
      headers: {
        'CouseApintent-Type': 'multipart/form-data',
      },
    })
  }
  return (
    <>
      <Wrapper>
        <form encType='multipart/form-data' onSubmit={handleFormSubmit}>
          <InputGroup>
            <Label>name</Label>
            <Input
              type='text'
              name='name'
              placeholder='product name'
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label>price</Label>
            <Input
              type='number'
              name='price'
              placeholder='product price'
              onChange={(e) => setPrice(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label>description</Label>
            <TextArea
              name='description'
              placeholder='product description'
              onChange={(e) => setDescription(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label>tag</Label>
            <StyledSelect
              name='tag'
              styles={CustemStyles}
              placeholder='select my brand'
              options={fetchedBrand}
              onChange={(e) => setTag(e.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label>stocks</Label>
            <Input
              type='number'
              name='stocks'
              placeholder='product stokcs'
              onChange={(e) => setStocks(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label>category</Label>
            <StyledSelect
              name='category'
              styles={CustemStyles}
              placeholder='select my brand'
              options={category}
              onChange={(e) => {
                setCategories(e.value)

                axios
                  .get('http://localhost:8000/api/attributes')
                  .then((res) => {
                    const option = res.data
                      .filter((el) => el.category === e.value)
                      .map((val) => ({
                        value: val.attributes,
                        label: val.attributes,
                      }))
                    setAttributes(option)
                  })
              }}
            />

            {attributes.length !== 0 ? (
              <>
                <Label>Attributes</Label>
                <StyledSelect
                  name='attribute'
                  styles={CustemStyles}
                  placeholder='select my brand'
                  options={attributes}
                  onChange={(e) => {
                    setAtti(e.value)
                  }}
                />
              </>
            ) : (
              <Label>
                no data present, head to attributes and add more to this
                category
              </Label>
            )}
          </InputGroup>
          <InputGroup>
            <Label>images</Label>
            <Input
              multiple
              type='file'
              name='images[]'
              onChange={(e) => setImages(e.target.files)}
            />
          </InputGroup>

          <Div>
            <Linker to='/dash/products'>cancel</Linker>
            <Button type='submit'>Add</Button>
          </Div>
        </form>

        {categories}
        {att}
      </Wrapper>
    </>
  )
}

export default AddProduct
