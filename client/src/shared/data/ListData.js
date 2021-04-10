import React, { useMemo, useEffect } from 'react'
import DataTable from '../admin/DataTable'
import { useCrud } from '../../services/context/CrudContext'

const ListData = ({ route }) => {
  const { getData, data } = useCrud()

  useEffect(() => {
    getData(route)
  }, []) // eslint-disable-line

  const column = useMemo(
    () => [
      { Header: 'id', accessor: 'id' },
      { Header: 'title', accessor: 'title' },
      { Header: 'content', accessor: 'content' },
    ],
    []
  )

  return (
    <>
      <DataTable path={route} columns={column} data={data} />
    </>
  )
}

export default ListData
