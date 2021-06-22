import React, { useLayoutEffect } from 'react'
import useApi from '../../../hooks/useApi'
import styled from 'styled-components'

const ProductStats = () => {
  const [products, setproducts] = React.useState([])

  useLayoutEffect(() => {
    useApi.get('api/products').then((response) => {
      setproducts(response.data)
      console.log(response.data)
    })
  }, [setproducts])

  return (
    <>
      <Table>
        <TableRow>
          <TableHeader>id</TableHeader>
          <TableHeader>Image</TableHeader>
          <TableHeader>name</TableHeader>
          <TableHeader>price</TableHeader>
          <TableHeader>stocks</TableHeader>
          <TableHeader>category</TableHeader>
        </TableRow>

        {products.map((el) => {
          return (
            <TableRow>
              <TableDearc>{el.id}</TableDearc>
              <TableDearc>
                <img
                  className='imagesTable'
                  alt={el.images[0].file_path}
                  src={`http://localhost:8000/storage/products/${el.images[0].file_path}`}
                />
              </TableDearc>
              <TableDearc>{el.name}</TableDearc>
              <TableDearc>{el.price}$</TableDearc>
              <TableDearc>{el.stocks.quantity}</TableDearc>
              <TableDearc>{el.pivot[0].category}</TableDearc>
            </TableRow>
          )
        })}
      </Table>
    </>
  )
}

export default ProductStats

const Table = styled.table`
  width: 100%;
`

const TableRow = styled.tr`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const TableHeader = styled.th`
  width: 100%;
  padding: 15px 10px;
  text-align: start;
  font-size: 1.125rem;
  text-transform: capitalize;
  background-color: ${({ theme }) => theme.hover};
`
const TableDearc = styled.td`
  width: 100%;
  padding: 10px;
  text-align: start;
  font-size: 1.125rem;
  border-bottom: 2px solid ${({ theme }) => theme.hover};

  .imagesTable {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
`
