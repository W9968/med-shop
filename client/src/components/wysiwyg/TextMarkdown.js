import React, { useRef, useState } from 'react'
import EditorJs from 'react-editor-js'
import { EDITOR_JS_TOOLS } from './Constant'
import styled from 'styled-components'

const TextMarkdown = (props) => {
  const instanceRef = useRef(null)

  const {
    value: [value, setValue], // eslint-disable-line
  } = {
    value: useState(null),
    ...(props.state || {}),
  }

  const handleSave = async () => {
    return await instanceRef.current.save().then((outputData) => {
      setValue(outputData.blocks)
      console.log('value', outputData.blocks)
    })
  }

  return (
    <>
      <Container>
        <EditorJs
          data={props.data}
          readOnly={true}
          onChange={handleSave}
          placeholder='start writing here'
          instanceRef={(instance) => (instanceRef.current = instance)}
          tools={EDITOR_JS_TOOLS}
        />
        {/* {JSON.stringify(value)} */}
        <Div />
      </Container>
    </>
  )
}

export default TextMarkdown

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.darkhover};
`

const Div = styled.div`
  width: 50px;
  background-color: red;
`
