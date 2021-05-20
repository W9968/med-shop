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

  useEffect(() => {
    axios.get('http://localhost:8000/api/brands').then((res) => {
      const option = res.data.map((val) => ({ value: val.tag, label: val.tag }))
      setFetchedBrand(option)
    })
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('tag', tag)
    formData.append('stocks', stocks)
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
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label>price</Label>
            <Input
              type='number'
              name='price'
              onChange={(e) => setPrice(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label>description</Label>
            <TextArea
              name='description'
              onChange={(e) => setDescription(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label>tag</Label>
            <StyledSelect
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
              onChange={(e) => setStocks(e.target.value)}
            />
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

        <p>{name}</p>
        <p>{price}</p>
        <p>{description}</p>
        <p>{tag}</p>
        <p>{stocks}</p>
      </Wrapper>
    </>
  )
}

export default AddProduct
