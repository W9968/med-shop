import React, { useState } from 'react'
import MDEditor from '@uiw/react-md-editor'
import '@uiw/react-md-editor/dist/markdown-editor.css'
import { Div, Input, InputGroup } from '../../../styles/Curd.element'

import Add from '../butons/Add'

const BlogForm = ({ initVal1, initVal2 }) => {
  const [title, setTitle] = useState('')
  const [markDown, setMarDown] = useState('')

  return (
    <>
      <Div>
        <InputGroup>
          <Input
            type='text'
            placeholder='title'
            defaultChecked={initVal1}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <MDEditor
            height={450}
            value={markDown}
            preview={false}
            defaultValue={initVal2}
            onChange={setMarDown}
            placeholder={'select your screen'}
            style={{ resize: 'none' }}
          />
        </InputGroup>
        <Add path='post' req={{ title: title, content: markDown }} />
      </Div>
    </>
  )
}

export default BlogForm
