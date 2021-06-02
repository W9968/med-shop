import React from 'react'
import styled from 'styled-components'
import { CSVLink } from 'react-csv'

import {
  BiChevronDown,
  BiChevronUp,
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
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

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
          Cell: ({ row }) => (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Edit to={`/dash/${path}/edit/${row.values.id}`}>
                <AiOutlineEdit />
              </Edit>
              <Delete onClick={() => deleteData(path, row.values.id)}>
                <AiOutlineDelete />
              </Delete>
            </div>
          ),
        },
      ])
    }
  )

  return (
    <>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <div
          style={{
            flex: 1,
          }}>
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </div>
        {/* file name make the file unreadable */}
        <LinkerExcel data={data} filename={filename} target={'_blank'}>
          {!useMediaQuery(500) && (
            <span style={{ marginRight: '5px' }}>Export</span>
          )}

          <File />
        </LinkerExcel>
      </div>

      <TableContainer>
        <Table className='table' {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, key) => (
                  <TableCell
                    key={`tabc-${key}`}
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
                        ''
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
                <TableRow key={`tabb-${key}`} {...row.getRowProps()}>
                  {row.cells.map((cell, key) => {
                    return (
                      <TableCell key={`tabcc-${key}`} {...cell.getCellProps()}>
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
              {[3, 5, 10, 15].map((pageSize) => (
                <option key={`tab-Page-${pageSize}`} value={pageSize}>
                  {pageSize}
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
  overflow-x: auto;
  flex-direction: column;
`

const Input = styled.input`
  width: 95%;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 1rem;
  margin: 1rem 0rem;
  letter-spacing: 0.78px;
  background: transparent;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.hover};
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: inherit;
`
const TableHead = styled.thead`
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: capitalize;
`
const TableBody = styled.tbody``

const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.hover};
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
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.sameHover};
`

const Select = styled.select`
  border: none;
  padding: 5px;
  background-color: ${({ theme }) => theme.body};

  .option {
    background-color: ${({ theme }) => theme.body};
  }
`

const Up = styled(BiChevronUp)`
  font-size: 1.125rem;
`
const Down = styled(BiChevronDown)`
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
  padding: 10px 12px;
  border-radius: 5px;
  font-size: 0.825rem;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.text};

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.hover};
  }
`

const File = styled(BiFileBlank)`
  font-size: 1.125rem;
`

const Delete = styled.button`
  margin: 0;

  padding: 5px;
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  color: ${({ theme }) => theme.error};
  background-color: ${({ theme }) => theme.hover};

  &:hover {
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.error};
  }
`

const Edit = styled(NavLink)`
  margin: 0 5px;
  padding: 5px;
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.hover};

  &:hover {
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.text};
  }
`
