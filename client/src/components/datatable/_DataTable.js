import React from 'react'
import styled from 'styled-components'
import { CSVLink } from 'react-csv'

import {
  BiChevronDown,
  BiChevronUp,
  BiSort,
  BiChevronLeft,
  BiChevronsLeft,
  BiChevronRight,
  BiChevronsRight,
  BiFileBlank,
} from 'react-icons/bi'
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
  useAsyncDebounce,
} from 'react-table'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useCrud } from '../../global/exports'

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      <Input
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder={`search ${count} records...`}
      />
    </span>
  )
}

const _DataTable = ({ columns, data, filename, path }) => {
  const { deleteData } = useCrud()
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, sortBy: [{ id: 'id', desc: true }] },
      autoResetPage: false,
    },
    useGlobalFilter, // useGlobalFilter!
    useSortBy, // sorting
    usePagination, // usePagination
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        //let's make a col for delete
        ...columns,
        {
          id: 'Action',
          Header: 'Action',
          Cell: ({ row }) => (
            <button onClick={() => deleteData(path, row.values.id)}>
              delete
            </button>
          ),
        },
      ])
    }
  )

  return (
    <>
      <TableContainer>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
          {/* file name make the file unreadable */}
          <LinkerExcel data={data} filename={filename} target={'_blank'}>
            {!useMediaQuery(500) && (
              <span style={{ marginRight: '5px' }}>Export</span>
            )}

            <File />
          </LinkerExcel>
        </div>

        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, key) => (
                  <TableCell
                    key={`tab-${key}`}
                    {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                      }}>
                      {column.render('Header')}
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <Down />
                        ) : (
                          <Up />
                        )
                      ) : (
                        <SortIcon />
                      )}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row, key) => {
              prepareRow(row)
              return (
                <TableRow key={`tab-${key}`} {...row.getRowProps()}>
                  {row.cells.map((cell, key) => {
                    return (
                      <TableCell key={`tab-${key}`} {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        {/* 
          Pagination can be built however you'd like. 
          This is just a very basic UI implementation:
        */}
        <Pagination>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '150px',
            }}>
            <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              <First />
            </Button>
            <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
              <Left />
            </Button>
            <span>
              {pageIndex + 1}/{pageOptions.length}
            </span>
            <Button onClick={() => nextPage()} disabled={!canNextPage}>
              <Right />
            </Button>
            <Button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}>
              <Last />
            </Button>
          </div>
          <div>
            Show{' '}
            <Select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value))
              }}>
              {[5, 10, 15, data.length].map((pageSize, key) => (
                <option key={`tab-Page-${key}`} value={pageSize}>
                  {data.length === pageSize ? 'All' : pageSize}
                </option>
              ))}
            </Select>
          </div>
        </Pagination>
      </TableContainer>
    </>
  )
}

export default _DataTable

const TableContainer = styled.div`
  display: flex;
  margin: 0rem 1rem;
  flex-direction: column;
`

const Input = styled.input`
  width: 200px;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 1rem;
  margin: 1rem 0rem;
  border-radius: 5px;
  letter-spacing: 0.78px;
  background: transparent;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.fourth};
`

const Table = styled.table`
  border-collapse: collapse;
  overflow-x: auto;
  table-layout: inherit;
`
const TableHead = styled.thead`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`
const TableBody = styled.tbody``

const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.fourth};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.fourth};
  }
`

const TableCell = styled.td`
  padding: 10px;
`

const Pagination = styled.div`
  display: flex;
  padding: 15px 0px;
  align-items: center;
  justify-content: space-between;
`

const Button = styled.button`
  border: none;
  display: flex;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.third};
`

const Select = styled.select`
  border: none;
  padding: 5px;
  background-color: ${({ theme }) => theme.button};

  .option {
    background-color: ${({ theme }) => theme.darkhover};
  }
`

const Up = styled(BiChevronUp)`
  font-size: 1.125rem;
`
const Down = styled(BiChevronDown)`
  font-size: 1.125rem;
`
const SortIcon = styled(BiSort)`
  font-size: 1.125rem;
`
const Left = styled(BiChevronLeft)`
  font-size: 1.5rem;
`
const Right = styled(BiChevronRight)`
  font-size: 1.5rem;
`
const First = styled(BiChevronsLeft)`
  font-size: 1.5rem;
`
const Last = styled(BiChevronsRight)`
  font-size: 1.5rem;
`

const LinkerExcel = styled(CSVLink)`
  border: none;
  display: flex;
  padding: 10px;
  border-radius: 5px;
  margin: 0rem 0.5rem;
  font-size: 0.825rem;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.third};

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.hover};
  }
`

const File = styled(BiFileBlank)`
  font-size: 1.125rem;
`
