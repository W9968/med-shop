import React, { useState } from 'react'
import MDEditor from '@uiw/react-md-editor'
import '@uiw/react-md-editor/dist/markdown-editor.css'
import { useCrud } from '../../../../services/context/CrudContext'
import {
  Div,
  Input,
  InputGroup,
  Button,
  CancelButton,
  AddButton,
} from '../../../../styles/Curd.element'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalFooter,
} from '@chakra-ui/react'

const BlogModal = ({ titleButton }) => {
  const { storeData } = useCrud()
  const [Header, setHeader] = useState('')
  const [markDown, setMarDown] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleStore = () => {
    storeData('post', {
      title: Header,
      content: markDown,
    })
    onClose()
    setHeader('')
    setMarDown('')
  }

  return (
    <>
      <AddButton onClick={onOpen}>new {titleButton}</AddButton>

      <Modal size='3xl' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New {titleButton}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Div>
              <InputGroup>
                <Input
                  type='text'
                  placeholder='title'
                  onChange={(e) => setHeader(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <MDEditor
                  height={450}
                  value={markDown}
                  preview={false}
                  onChange={setMarDown}
                  placeholder={'select your screen'}
                  style={{ resize: 'none' }}
                />
              </InputGroup>
            </Div>
          </ModalBody>
          <ModalFooter>
            <InputGroup
              style={{
                width: '90%',
                alignItems: 'flex-end',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <CancelButton onClick={onClose}>Close</CancelButton>
              <Button onClick={handleStore}>Post this</Button>
            </InputGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default BlogModal
