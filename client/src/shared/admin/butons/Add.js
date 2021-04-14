import React from 'react'
import { useHistory } from 'react-router-dom'
import { useCrud } from '../../../services/context/CrudContext'
import { Spin } from '../../../styles/content.element'
import { InputGroup, Button, CancelButton } from '../../../styles/Curd.element'

const Add = ({ path, req }) => {
  const history = useHistory()
  const { storeData, loading } = useCrud()

  const handleStore = () => {
    storeData(path, req)
    if (loading === false) {
      history.push('/dashboard/post')
    }
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
          {loading ? <Spin /> : <span>Post this</span>}
        </Button>
      </InputGroup>
    </>
  )
}

export default Add
