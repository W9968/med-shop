import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import qs from 'qs' // query string form encoded
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

const _EditBlog = () => {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { loadData, showOneData, oneResponse } = useCrud()
  const ides = parseInt(window.location.pathname.split('/')[4])

  useEffect(() => {
    showOneData('blogs', ides)
  }, [oneResponse, showOneData]) // eslint-disable-line

  console.log(oneResponse)

  return (
    <>
      {Object.key(oneResponse).length !== 0 && (
        <>
          <InputGroup key={oneResponse.title}>
            <Label>title</Label>
            <Input
              type='text'
              placeholder='blog title'
              defaultValue={oneResponse.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputGroup>
          <TextEditor keky={oneResponse.content}>
            <Label>content</Label>
            <CKEditor
              editor={ClassicEditor}
              data={oneResponse.content}
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
        </>
      )}

      <Div>
        <Linker to='/dash/blogs'>cancel</Linker>
        <Button
          onClick={() => {
            axios.defaults.withCredentials = true
            axios({
              method: 'put',
              url: `http://localhost:8000/api/blogs/${oneResponse.id}`,
              data: qs.stringify({
                title: title,
                content: content,
              }),
              headers: {
                'content-type':
                  'application/x-www-form-urlencoded;charset=utf-8',
              },
            }).then((response) => {
              if (response.status === 200) {
                loadData('blogs').then(() => history.push('/dash/blogs'))
              }
            })
          }}>
          update
        </Button>
      </Div>
    </>
  )
}

export default _EditBlog

const TextEditor = styled.div`
  .ck {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.hover};
  }

  .ck-content {
    height: 450px;
    color: ${({ theme }) => theme.text} !important;
    background-color: ${({ theme }) => theme.body} !important;
  }
`
