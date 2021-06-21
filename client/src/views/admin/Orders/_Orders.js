import React, { useEffect, useMemo } from 'react'
import { useCrud } from '../../../global/exports'
import {
  ContentHeader,
  ContentLoader,
  FactureTable,
} from '../../../components/imports'

const _Orders = () => {
  const { loadData, socket, loading } = useCrud()

  const column = useMemo(
    () => [
      { Header: 'id', accessor: 'id' },
      { Header: 'transaction', accessor: 'transaction_id' },
      { Header: 'payment methode', accessor: 'payment_methode' },
      { Header: 'amount', accessor: 'amount_to_pay' },
      { Header: 'payer', accessor: 'user.name' },
    ],
    []
  )

  useEffect(() => {
    loadData('factures')
  }, []) // eslint-disable-line

  return (
    <>
      <ContentHeader header='Orders list' boolState={false} />
      {loading ? (
        <ContentLoader />
      ) : (
        socket.length !== 0 && (
          <FactureTable
            columns={column}
            data={socket}
            filename='facture'
            path='factures'
          />
        )
      )}
    </>
  )
}

export default _Orders
