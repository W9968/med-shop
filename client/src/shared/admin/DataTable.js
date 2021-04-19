import React, { useState } from 'react'
import { useCrud } from '../../services/context/CrudContext'
import { useHistory } from 'react-router-dom'
import {
  Wrapper,
  DeleteIcon,
  EditIcon,
  PreviousPageArrow,
  NextPageArrow,
  NextArrow,
  PrevArrow,
  Input,
  UpArrow,
  DownArrow,
  SortIcon,
} from '../../styles/Table.element'
import {
  useTable,
  usePagination,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
  useAsyncDebounce,
} from 'react-table'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'

// global filter
function GlobalFilter({ globalFilter, setGlobalFilter, field }) {
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
      placeholder={`Search All ${field} fields`}
    />
  )
}

const DataTable = ({ columns, data, path }) => {
  const { deleteData } = useCrud()
  const histroy = useHistory()
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
    // filtering
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, sortBy: [{ id: 'id', desc: true }] },
      autoResetPage: false,
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
          id: 'action',

          Header: 'Action',

          Cell: ({ row }) => (
            <span
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <EditIcon
                onClick={() => histroy.push(`${path}/edit/${row.values.id}`)}
              />
              <DeleteIcon onClick={() => deleteData(path, row.values.id)} />
            </span>
          ),
        },
      ])
    }
  )

  return (
    <>
      <Wrapper>
        <GlobalFilter
          field={data.length}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <div className='tableWrap'>
          <Table size='md' variant='simple' {...getTableProps()}>
            <Thead>
              {headerGroups.map((headerGroup) => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <Th
                      padding='12px 0px'
                      {...column.getHeaderProps(column.getSortByToggleProps())}>
                      <pre
                        style={{
                          display: 'flex',
                          flexDirection: 'row ',
                          alignItems: 'center',
                          justifyContent: 'stretch',
                        }}>
                        <span>{column.render('Header')}</span>
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <UpArrow />
                            ) : (
                              <DownArrow />
                            )
                          ) : (
                            <SortIcon />
                          )}
                        </span>
                      </pre>
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
                          style={{ padding: '9.75px 0px' }}
                          {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </Td>
                      )
                    })}
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
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
              {[8, 10, 12, 20].map((pageSize) => (
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
