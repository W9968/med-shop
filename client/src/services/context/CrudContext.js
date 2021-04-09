import React, { useContext, useState } from 'react'
import useApi from '../../hooks/useApi'

const CrudContext = React.createContext()

export function useCrud() {
  return useContext(CrudContext)
}

export default function CrudProvider({ children }) {
  const [data, setData] = useState([])

  const getData = async (route) => {
    return await useApi.get(`/api/${route}`).then((res) => {
      if (res.status === 200) {
        setData(res.data)
      }
    })
  }

  const storeData = async (route, req) => {
    return await useApi.post(`/api/${route}`, req)
    // .then((res) => {
    //   getData(`${route}`)
    // })
  }

  const editData = () => {}

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
    destroy,
    data,
  }

  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>
}
