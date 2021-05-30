import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './MenuBar'

const TextMarkdown = () => {
  const [content, setContent] = useState(null)
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>write your blog here🌎️</p>',
    onUpdate() {
      setContent(JSON.stringify(this.getJSON()))
    },
  })

  useEffect(() => {
    console.log(content)
  }, [content, editor])

  return (
    <>
      <Container>
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </Container>
    </>
  )
}

export default TextMarkdown

const Container = styled.div`
  /* Basic editor styles */
  .ProseMirror {
    height: 200px;
    padding: 10px;
    border-radius: 5px;
    border: 2px solid #0d0d0d;
    background-color: ${({ theme }) => theme.fourth};
    > * + * {
      margin-top: 0.75em;
    }

    ul,
    ol {
      padding: 0 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    blockquote {
      padding-left: 1rem;
      border-left: 2px solid ${({ theme }) => theme.text};
    }

    hr {
      border: none;
      border-top: 2px solid rgba(#0d0d0d, 0.1);
      margin: 2rem 0;
    }
  }
`
