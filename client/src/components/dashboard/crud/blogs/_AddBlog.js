import React, { useState } from 'react'
import styled from 'styled-components'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useHistory } from 'react-router'
import { useCrud } from '../../../../global/exports'
import {
  InputGroup,
  Input,
  Label,
  Div,
  Button,
  Linker,
} from '../../../../styles/Crud.element'

const _AddBlog = () => {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { storeData, loading } = useCrud()

  return (
    <>
      <InputGroup>
        <Label>title</Label>
        <Input
          type='text'
          placeholder='blog title'
          onChange={(e) => setTitle(e.target.value)}
        />
      </InputGroup>
      <TextEditor>
        <Label>content</Label>
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

      <Div>
        <Linker to='/dash/blogs'>cancel</Linker>
        <Button
          onClick={() => {
            storeData('blogs', {
              title: title,
              content: content,
            })
            if (!loading) {
              history.push('/dash/blogs')
            }
          }}>
          post new
        </Button>
      </Div>
    </>
  )
}

export default _AddBlog

const TextEditor = styled.div`
  .ck {
    z-index: 1;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.hover};
  }

  .ck-content {
    z-index: 1;
    height: 450px;
    color: ${({ theme }) => theme.text} !important;
    background-color: ${({ theme }) => theme.body} !important;
  }
`
