import React, { useState, useContext, useEffect } from 'react'
import useApi from '../../hooks/useApi'

const ProdContext = React.createContext()

export function useProducts() {
  return useContext(ProdContext)
}

export default function _ProdContext({ children }) {
  const [fetched, setFetched] = useState([])
  const [loading, setLoading] = useState(false)

  const setSimilarProdcut = async () => {
    setLoading(true)
    return await useApi
      .get('/api/products')
      .then((response) => {
        if (response.status === 200) {
          setFetched(response.data)
        }
      })
      .then(() => setLoading(false))
  }

  useEffect(() => {
    setSimilarProdcut()
  }, [])

  return (
    <ProdContext.Provider
      value={{
        fetched,
        loading,
      }}>
      {children}
    </ProdContext.Provider>
  )
}
