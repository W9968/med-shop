import React from 'react'
import { useCrud } from '../../services/context/CrudContext'
import {
  Wrapper,
  DeleteIcon,
  EditIcon,
  PreviousPageArrow,
  NextPageArrow,
  NextArrow,
  PrevArrow,
} from '../../styles/Table.element'
import { useTable, usePagination, useRowSelect } from 'react-table'

const DataTable = ({ columns, data, path }) => {
  const { deleteData } = useCrud()
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    // pagination
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    // page filter
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        ...columns,

        {
          id: 'destroy',

          Header: 'action',

          Cell: ({ row }) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <DeleteIcon onClick={() => deleteData(path, row.values.id)} />
              <EditIcon />
            </div>
          ),
        },
      ])
    }
  )

  return (
    <>
      <Wrapper>
        <div className='tableWrap'>
          {' '}
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row)
                return (
                  <tr key={i} {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className='pagination'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              className='arrows'>
              {' '}
              <PreviousPageArrow />
            </button>
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className='arrows'>
              <PrevArrow />
            </button>
            <p style={{ margin: '0rem 0.3rem', fontWeight: '900' }}>
              {pageIndex + 1} - {pageOptions.length}
            </p>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className='arrows'>
              <NextArrow />
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              className='arrows'>
              <NextPageArrow />
            </button>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            showing
            <select
              className='selection'
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value))
              }}>
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            out of {data.length}
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default DataTable
