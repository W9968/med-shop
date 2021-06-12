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
import { useHistory } from 'react-router'
import { useCrud } from '../../../../global/exports'
import CreatableSelect from 'react-select/creatable'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

// Import React FilePond
import 'filepond/dist/filepond.min.css'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import styled from 'styled-components'

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginImageResize
)

const AddProduct = () => {
  const history = useHistory()
  const { loadData } = useCrud()

  const [name, setName] = useState('')
  const [price, setPrice] = useState()
  const [description, setDescription] = useState('')
  //const [tag, setTag] = useState('')
  const [content, setContent] = useState('')
  const [stocks, setStocks] = useState()
  const [images, setImages] = useState([])
  //const [fetchedBrand, setFetchedBrand] = useState([])
  const [att, setAtti] = useState('')
  const [attributes, setAttributes] = useState([])

  useEffect(() => {
    // axios.get('http://localhost:8000/api/brands').then((res) => {
    //   const option = res.data.map((val) => ({ value: val.tag, label: val.tag }))
    //   setFetchedBrand(option)
    // })
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
      color: localStorage.getItem('mode') === 'light' ? '#232323' : '#efefef',
    }),

    container: (provided) => ({
      ...provided,
      width: '100%',
    }),

    control: () => ({
      display: 'flex',
      padding: '5px',
      background:
        localStorage.getItem('mode') === 'light' ? '#efefef' : '#232323',
    }),

    menu: (provided, state) => ({
      ...provided,
      color: state.isSelected && 'red',
      background:
        localStorage.getItem('mode') === 'light' ? '#efefef' : '#232323',
    }),

    option: (provided, state) => ({
      ...provided,
      color: localStorage.getItem('mode') === 'light' ? '#232323' : '#efefef',
      background:
        state.isSelected &&
        (localStorage.getItem('mode') === 'light' ? '#ffffff' : '#111111'),
      '&:hover': {
        background:
          localStorage.getItem('mode') === 'light' ? '#ffffff' : '#111111',
      },
    }),
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('details', content)
    formData.append('stocks', stocks)
    formData.append('category_id', att)

    for (let i = 0; i < images.length; i++) {
      formData.append('images[]', images[i].file)
    }

    axios.defaults.withCredentials = true
    axios
      .post('http://localhost:8000/api/products', formData, {
        headers: {
          'CouseApintent-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          loadData('products').then(() => history.push('/dash/products'))
        }
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
                axios
                  .get('http://localhost:8000/api/attributes')
                  .then((res) => {
                    const option = res.data
                      .filter((el) => el.category === e.value)
                      .map((val) => ({
                        label: val.sub_categ,
                        value: val.id,
                      }))
                    setAttributes(option)
                  })
              }}
            />
            <InputGroup>
              <Label>Attributes</Label>
              <CreatableSelect
                name='attribute'
                styles={CustemStyles}
                placeholder='select my brand'
                options={attributes}
                onChange={(e) => {
                  setAtti(e.value)
                }}
              />
            </InputGroup>
          </InputGroup>
          <InputGroup>
            <Label>description</Label>
            <TextArea
              name='description'
              style={{ height: '200px' }}
              placeholder='product description'
              onChange={(e) => setDescription(e.target.value)}
            />
          </InputGroup>
          <TextEditor>
            <Label>details</Label>
            <CKEditor
              editor={ClassicEditor}
              config={{
                cloudServices: {
                  tokenUrl:
                    'https://81119.cke-cs.com/token/dev/db322a409e24aacfbd7277f7b49a8dcc1a4423cb3600e75993345276823d',
                  uploadUrl: 'https://81119.cke-cs.com/easyimage/upload/',
                },
              }}
              onChange={(event, editor) => {
                const data = editor.getData()
                setContent(data)
              }}
            />
          </TextEditor>
          <Label>Images</Label>{' '}
          <FilePond
            allowMultiple={true}
            maxFiles={4}
            name='images[]'
            files={images}
            onupdatefiles={setImages}
            allowImagePreview
            allowImageCrop
            allowImageResize
            imageResizeTargetWidth='420'
            imageResizeTargetHeight='600'
            imageResizeMode='contain'
            imageCropAspectRatio='3:4'
          />
          <Div>
            <Linker to='/dash/products'>cancel</Linker>
            <Button type='submit'>Add</Button>
          </Div>
        </form>
      </Wrapper>
    </>
  )
}

export default AddProduct

const TextEditor = styled.div`
  .ck {
    z-index: 1;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.hover};
  }

  .ck-content {
    z-index: 1;
    height: 300px;
    color: ${({ theme }) => theme.text} !important;
    background-color: ${({ theme }) => theme.body} !important;
  }
`
