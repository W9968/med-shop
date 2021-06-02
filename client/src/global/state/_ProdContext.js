import React, { useState, useContext, useEffect } from 'react'
import useApi from '../../hooks/useApi'

const ProdContext = React.createContext()

export function useProducts() {
  return useContext(ProdContext)
}

export default function _ProdContext({ children }) {
  const [fetched, setFetched] = useState([])
  const [loading, setLoading] = useState(false)
  const [productPreview, setProductPreview] = useState()

  const subscribeToProductRoute = async () => {
    setLoading(true)
    return await useApi.get('/api/products').then((response) => {
      if (response.status === 200) {
        setFetched(response.data)
        setLoading(false)
      }
    })
  }

  const getPreviewetProduct = async (id) => {
    return await useApi.get(`/api/products/${id}`).then((response) => {
      if (response.status === 200) {
        setProductPreview(response.data)
      }
    })
  }

  useEffect(() => {
    subscribeToProductRoute()
  }, [])

  return (
    <ProdContext.Provider
      value={{
        fetched,
        loading,
        productPreview,
        getPreviewetProduct,
      }}>
      {children}
    </ProdContext.Provider>
  )
}
