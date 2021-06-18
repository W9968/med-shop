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
} from '../../../../styles/Crud.element'
import { useHistory, useParams } from 'react-router'
import { useCrud } from '../../../../global/exports'
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
import ContentLoader from '../../../spinner/ContentLoader'

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginImageResize
)

const EditProduct = () => {
  const history = useHistory()
  const { id } = useParams()
  const { loadData } = useCrud()

  const [name, setName] = useState('')
  const [price, setPrice] = useState()
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [images, setImages] = useState([])

  const { showOneData, oneResponse, loading } = useCrud()

  console.log(id)

  useEffect(() => {
    showOneData('products', id)
  }, []) // eslint-disable-line

  const handleFormSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('details', content)

    for (let i = 0; i < images.length; i++) {
      formData.append('images[]', images[i].file)
    }

    axios.defaults.withCredentials = true
    axios
      .put(`http://localhost:8000/api/products/${id}`, formData, {
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
      {loading ? (
        <ContentLoader />
      ) : (
        <Wrapper>
          <form encType='multipart/form-data' onSubmit={handleFormSubmit}>
            <InputGroup key={oneResponse.name}>
              <Label>name</Label>
              <Input
                type='text'
                name='name'
                placeholder='product name'
                defaultValue={oneResponse.name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
            <InputGroup key={oneResponse.price}>
              <Label>price</Label>
              <Input
                type='number'
                name='price'
                defaultValue={oneResponse.price}
                placeholder='product price'
                onChange={(e) => setPrice(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label>description</Label>
              <TextArea
                name='description'
                style={{ height: '200px' }}
                defaultValue={oneResponse.description}
                placeholder='product description'
                onChange={(e) => setDescription(e.target.value)}
              />
            </InputGroup>
            <TextEditor>
              <Label>details</Label>
              <CKEditor
                editor={ClassicEditor}
                data={oneResponse.details}
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
              // allowImageResize
              // imageResizeTargetWidth='420'
              // imageResizeTargetHeight='600'
              // imageResizeMode='contain'
              imageCropAspectRatio='3:4'
            />
            <Div>
              <Linker to='/dash/products'>cancel</Linker>
              <Button type='submit'>update</Button>
            </Div>
          </form>
        </Wrapper>
      )}
    </>
  )
}

export default EditProduct

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
