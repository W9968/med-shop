import React, { useState } from 'react'
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
import { useCrud } from '../../../../global/exports'

// file pond for file upload
// import { FilePond, registerPlugin } from 'react-filepond'
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
// import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
// import 'filepond/dist/filepond.min.css'

// registerPlugin(FilePondPluginImagePreview, FilePondPluginImageCrop)

const AddProduct = () => {
  const { storeData } = useCrud()
  const [form, setform] = useState({
    name: '',
    price: null,
    description: '',
    stocks: null,
  })
  const [upload, setUpload] = useState()

  const handleImage = (e) => {
    setUpload(e.target.files[0])
    console.log(upload)
  }

  return (
    <>
      <Wrapper>
        <InputGroup>
          <Label htmlFor='product-name'>product name</Label>
          <Input
            name='product-name'
            placeholder='name...'
            type='text'
            onChange={(e) =>
              setform({
                name: e.target.value,
                price: form.price,
                description: form.description,
                stocks: form.stocks,
              })
            }
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor='product-price'>product price</Label>
          <Input
            name='product-price'
            placeholder='price...'
            type='number'
            onChange={(e) =>
              setform({
                name: form.name,
                price: e.target.value,
                description: form.description,
                stocks: form.stocks,
              })
            }
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor='product-price'>product description</Label>
          <TextArea
            name='product-description'
            placeholder='description...'
            onChange={(e) =>
              setform({
                name: form.name,
                price: form.price,
                description: e.target.value,
                stocks: form.stocks,
              })
            }
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor='product-price'>product stocks</Label>
          <Input
            name='product-stocks'
            placeholder='quantity...'
            type='number'
            onChange={(e) =>
              setform({
                name: form.name,
                price: form.price,
                description: form.description,
                stocks: e.target.value,
              })
            }
          />
        </InputGroup>
        <InputGroup>
          <Label>file upload</Label>

          {/* <FilePond
            name='images'
            files={upload}
            onupdatefiles={setUpload}
            maxFiles={4}
            allowImageCrop
            allowMultiple={true}
            imageCropAspectRatio='3:4'
            server='http://127.0.0.1:8000/api/products'
            labelIdle={'you can upload up to 4 files'}
          /> */}

          <Input type='file' onChange={handleImage} multiple />
          <p></p>
          <p>images will be croped to 3:4 ration</p>
        </InputGroup>
        <Div>
          <Linker to='/dash/products'>cancel</Linker>
          <Button
            onClick={() =>
              storeData('products', {
                name: form.name,
                price: form.price,
                description: form.description,
                tag: 'hih',
                images: upload,
                stocks: form.stocks,
              })
            }>
            add product
          </Button>
        </Div>

        <br />
        <code>
          <pre>{JSON.stringify(form.name)}</pre>
          <pre>{JSON.stringify(form.price)}</pre>
          <pre>{JSON.stringify(form.description)}</pre>
          <pre>{JSON.stringify(form.stocks)}</pre>
        </code>
      </Wrapper>
    </>
  )
}

export default AddProduct
