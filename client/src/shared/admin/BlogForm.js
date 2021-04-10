import React, { useState } from 'react'
import MDEditor from '@uiw/react-md-editor'
import { InputGroup, Input } from '../../styles/Form.element'
import { AddButton } from '../../styles/Curd.element'
import { StyledRow } from '../../styles/content.element'
import { useCrud } from '../../services/context/CrudContext'

const BlogForm = () => {
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')
  const { storeData } = useCrud()

  const handleSubmit = (e) => {
    e.preventDefault()
    storeData('blogs', {
      title: title,
      content: value,
    })
  }

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
      <StyledRow style={{ justifyContent: 'flex-end' }}>
        <AddButton onClick={handleSubmit}>upload</AddButton>
      </StyledRow>
    </>
  )
}

export default BlogForm
