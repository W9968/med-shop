import React from 'react'
import styled from 'styled-components'
import { MdFormatQuote } from 'react-icons/md'
import { VscHorizontalRule } from 'react-icons/vsc'
import {
  BiBold,
  BiItalic,
  BiParagraph,
  BiHeading,
  BiReply,
  BiRedo,
  BiUndo,
  BiListUl,
  BiListOl,
} from 'react-icons/bi'

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;

  .is-active {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.secondary};
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  margin: 5px;
  padding: 5px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 1.125rem;
`

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <>
      <Div>
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}>
          <BiBold />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}>
          <BiItalic />
        </Button>

        <Button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}>
          <BiParagraph />
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
          }>
          <BiHeading />
          <p style={{ fontSize: '15px' }}>1</p>
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
          }>
          <BiHeading />
          <p style={{ fontSize: '15px' }}>2</p>
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
          }>
          <BiHeading />
          <p style={{ fontSize: '15px' }}>3</p>
        </Button>

        <Button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}>
          <BiListUl />
        </Button>

        <Button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}>
          <BiListOl />
        </Button>

        <Button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}>
          <MdFormatQuote />
        </Button>
        <Button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <VscHorizontalRule />
        </Button>
        <Button onClick={() => editor.chain().focus().setHardBreak().run()}>
          <BiReply />
        </Button>
        <Button onClick={() => editor.chain().focus().undo().run()}>
          <BiUndo />
        </Button>
        <Button onClick={() => editor.chain().focus().redo().run()}>
          <BiRedo />
        </Button>
      </Div>
    </>
  )
}
export default MenuBar
