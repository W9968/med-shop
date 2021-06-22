import React, { useLayoutEffect } from 'react'
import useApi from '../../../hooks/useApi'
import styled from 'styled-components'
import _ from 'lodash'

const BestBuyer = () => {
  const [users, setUsers] = React.useState([])

  useLayoutEffect(() => {
    useApi.get('api/customer/buys').then((response) => {
      setUsers(response.data)
      console.log(response.data)
    })
  }, [setUsers])

  return (
    <>
      <Table>
        <TableRow>
          <TableHeader>id</TableHeader>
          <TableHeader>name</TableHeader>
          <TableHeader>email</TableHeader>
          <TableHeader>facture</TableHeader>
          <TableHeader>paid</TableHeader>
        </TableRow>

        {users.map((el) => {
          return (
            <TableRow>
              <TableDearc>{el.id}</TableDearc>
              <TableDearc>{el.name}</TableDearc>
              <TableDearc>{el.email}</TableDearc>
              <TableDearc>{el.factures.length}</TableDearc>
              <TableDearc>
                {Math.ceil(
                  _.sum(el.factures.map((el) => el.amount_to_pay)) *
                    1.3904083 *
                    100
                ) / 100}
                $
              </TableDearc>
            </TableRow>
          )
        })}
      </Table>
    </>
  )
}

export default BestBuyer

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
`
