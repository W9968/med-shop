import React, { useContext, useState } from 'react'
import useApi from '../../hooks/useApi'
import { message } from 'antd'

const CrudContext = React.createContext()

export function useCrud() {
  return useContext(CrudContext)
}

export default function CrudProvider({ children }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async (route) => {
    return await useApi.get(`/api/${route}`).then((res) => {
      if (res.status === 200) {
        setData(res.data)
        setLoading(false)
      }
    })
  }

  const storeData = async (route, req) => {
    return await useApi
      .post(`/api/${route}`, req)
      .then((res) => {
        setLoading(false)
        getData(`${route}`)
      })
      .catch((err) => {
        message.error('data did not submitted', 2)
      })
  }

  const editData = async (route, key, req) => {
    return await useApi.put(`/api/${route}/${key}`, req).then((res) => {
      getData(`${route}`)
    })
  }

  const showData = async (route, key) => {
    return await useApi.get(`/api/${route}/${key}`)
  }

  const deleteData = async (route, key) => {
    return await useApi.delete(`/api/${route}/${key}`).then((res) => {
      getData(`${route}`)
    })
  }

  const destroy = async (route) => {
    return await useApi.delete(`/api/${route}`).then((res) => {
      getData(`${route}`)
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
    loading,
  }

  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>
}
