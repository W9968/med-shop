import React from 'react'
import { useHistory } from 'react-router-dom'
import { useCrud } from '../../../services/context/CrudContext'
import { Spin } from '../../../styles/content.element'
import { InputGroup, Button, CancelButton } from '../../../styles/Curd.element'

const Add = ({ push, path, req }) => {
  const history = useHistory()
  const { storeData } = useCrud()

  const handleStore = () => {
    storeData(push, path, req)
  }

  return (
    <>
      <InputGroup
        style={{
          width: '90%',
          alignItems: 'flex-end',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <CancelButton onClick={() => history.push('/dashboard/post')}>
          cancel
        </CancelButton>
        <Button onClick={handleStore}>
          {process ? <span>Post this</span> : <Spin />}
        </Button>
      </InputGroup>
    </>
  )
}

export default Add
