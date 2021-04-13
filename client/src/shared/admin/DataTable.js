import React, { useState } from 'react'
import { useCrud } from '../../services/context/CrudContext'
import {
  Wrapper,
  DeleteIcon,
  EditIcon,
  PreviousPageArrow,
  NextPageArrow,
  NextArrow,
  PrevArrow,
  ViewIcon,
  Input,
} from '../../styles/Table.element'
import {
  useTable,
  usePagination,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
  useAsyncDebounce,
} from 'react-table'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react'

// global filter
function GlobalFilter({ globalFilter, setGlobalFilter }) {
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <Input
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
        onChange(e.target.value)
      }}
      placeholder='search'
    />
  )
}

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
    state,
    setGlobalFilter,
    state: { pageIndex, pageSize },
    // page filter
  } = useTable(
    {
      columns,
      data,

      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        ...columns,
        {
          id: 'destroy',

          Header: 'Action',

          Cell: ({ row }) => (
            <span
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <ViewIcon />
              <DeleteIcon onClick={() => deleteData(path, row.values.id)} />
              <EditIcon />
            </span>
          ),
        },
      ])
    }
  )

  return (
    <>
      <Wrapper>
        {' '}
        <GlobalFilter
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <div className='tableWrap'>
          <Table size='md' variant='simple' {...getTableProps()}>
            <Thead>
              {headerGroups.map((headerGroup) => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <Th {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row)
                return (
                  <Tr key={i} {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <Td
                          style={{ padding: '10px' }}
                          {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </Td>
                      )
                    })}
                  </Tr>
                )
              })}
            </Tbody>
            <TableCaption>
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
            </TableCaption>
          </Table>
        </div>
      </Wrapper>
    </>
  )
}

export default DataTable
