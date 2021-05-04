import React, { useContext, useState } from 'react'
import useApi from '../../hooks/useApi'

const CrudContext = React.createContext()

export function useCrud() {
  return useContext(CrudContext)
}

export default function _CrudProvider({ children }) {
  const [socket, setSocket] = useState([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({
    type: '',
    content: '',
  })

  // get data from api
  const loadData = async (route) => {
    setLoading(true)
    return useApi
      .get(`/api/${route}`)
      .then((response) => {
        if (response.status === 200) {
          setSocket(response.data)
        }
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        setMessage({
          type: 'error',
          content: 'We could not load data from server',
        })
      })
  }

  const storeData = async (route, req) => {
    setLoading(true)
    return useApi
      .post(`/api/${route}`, req)
      .then((response) => {
        if (response.status === 201) {
          loadData(route)
        }
      })
      .catch(() => {
        setLoading(false)
        setMessage({
          type: 'error',
          content: 'We could not store data from server',
        })
      })
  }

  const deleteData = async (route, id) => {
    return useApi.delete(`/api/${route}/${id}`).then((response) => {
      if (response.status === 200) {
        loadData(route)
      }
    })
  }

  return (
    <CrudContext.Provider
      value={{
        socket,
        loading,
        message,
        setMessage,
        loadData,
        storeData,
        deleteData,
      }}>
      {children}
    </CrudContext.Provider>
  )
}
