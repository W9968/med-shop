import React, { useContext, useState } from 'react'
import useApi from '../../hooks/useApi'

const CrudContext = React.createContext()

export function useCrud() {
  return useContext(CrudContext)
}

export default function _CrudProvider({ children }) {
  const [socket, setSocket] = useState([])
  const [oneResponse, setOneResponse] = useState({})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({
    type: '',
    content: '',
  })

  // get data from api
  const loadData = async (route) => {
    setLoading(true)
    return await useApi
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
    return await useApi
      .post(`/api/${route}`, req)
      .then((response) => {
        if (response.status === 201) {
          loadData(route)
          setLoading(false)
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

  const showOneData = async (route, id) => {
    return await useApi.get(`/api/${route}/${id}`).then((response) => {
      if (response.status === 200) {
        setOneResponse(response.data)
      }
    })
  }

  const updateData = async (route, id, req) => {
    return await useApi
      .put(`/api/${route}/${id}`, req)
      .then((response) => {
        if (response.status === 200) {
          loadData(route)
        }
      })
      .catch(() => {
        setMessage({
          type: 'error',
          content: 'We could not store data from server',
        })
      })
  }

  const deleteData = async (route, id) => {
    return await useApi.delete(`/api/${route}/${id}`).then(() => {
      loadData(`${route}`)
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
        showOneData,
        oneResponse,
        updateData,
      }}>
      {children}
    </CrudContext.Provider>
  )
}
