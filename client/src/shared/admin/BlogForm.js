import React, { useState } from 'react'
import MDEditor from '@uiw/react-md-editor'
import { InputGroup, Input } from '../../styles/Form.element'

const BlogForm = () => {
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')

  console.log(value, title)

  return (
    <>
      <InputGroup>
        <Input
          type='text'
          placeholder='title goes here'
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <MDEditor
          height={300}
          value={value}
          onChange={setValue}
          defaultValue={value}
        />
      </InputGroup>
    </>
  )
}

export default BlogForm
