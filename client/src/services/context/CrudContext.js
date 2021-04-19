import React, { useContext, useState } from 'react'
import useApi from '../../hooks/useApi'
import { useToast } from '@chakra-ui/toast'

const CrudContext = React.createContext()

export function useCrud() {
  return useContext(CrudContext)
}

export default function CrudProvider({ children }) {
  const toast = useToast()
  const [data, setData] = useState([])
  const [onlyRes, setOnlyRes] = useState(null)
  const [loading, setLoading] = useState(true)

  const getData = async (route) => {
    await useApi.get(`/api/${route}`).then((res) => {
      if (res.status === 200) {
        setData(res.data)
      }
      setLoading(false)
    })
  }

  const storeData = async (route, req) => {
    await useApi
      .post(`/api/${route}`, req)
      .then((res) => {
        if (res.status === 201) {
          getData(route)
        }
      })
      .catch(() => {
        showToast('Error', 'Something went wrong with out server', 'error')
      })
  }

  const editData = async (route, key, req) => {
    await useApi
      .put(`/api/${route}/${key}`, req)
      .then((res) => {
        if (res.status === 201) {
          getData(`${route}`)
        }
      })
      .catch(() => {
        showToast('Error', 'Something went wrong with out server', 'error')
      })
  }

  const showData = async (route, key) => {
    await useApi.get(`/api/${route}/${key}`).then((res) => {
      setOnlyRes(res.data)
    })
  }

  const deleteData = async (route, key) => {
    await useApi.delete(`/api/${route}/${key}`).then((res) => {
      getData(route)
    })
  }

  const destroy = async (route) => {
    await useApi.delete(`/api/${route}`)
  }

  const showToast = (title, content, status) => {
    return toast({
      title: title,
      description: content,
      status: status,
      duration: 3000,
      position: 'bottom-right',
      isClosable: true,
    })
  }

  const value = {
    getData,
    storeData,
    editData,
    deleteData,
    showData,
    destroy,
    data,
    onlyRes,
    loading,
  }

  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>
}
