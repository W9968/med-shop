import React from 'react'
import { useProducts } from '../../global/state/_ProdContext'
import Pagelayout from '../../layout/Page.layout'

const _BeautyProduct = () => {
  const { fetched } = useProducts()

  console.log(
    fetched.filter((el) => el.category.toLowerCase() === 'product beauty')
  )

  return (
    <>
      <Pagelayout></Pagelayout>
    </>
  )
}

export default _BeautyProduct
