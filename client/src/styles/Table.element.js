import styled from 'styled-components'
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai'
import {
  BiChevronRight,
  BiChevronLeft,
  BiChevronsLeft,
  BiChevronsRight,
} from 'react-icons/bi'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;

  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-spacing: 0;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    thead {
      color: var(--nab);
      letter-spacing: 1px;
      font-size: 1rem;
      text-transform: capitalize;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid var(--bgd);
      /* The secret sauce */
      /* Each cell should grow equally */
      width: 1%;
      /* But "collapsed" cells should be as small as possible */
      &.collapse {
        width: 0.0000000001%;

        :last-child {
          border-right: 0;
        }
      }
    }
  }
  .pagination {
    display: flex;
    align-items: center;
    padding: 0.5rem 0rem;
    flex-direction: row;
    justify-content: space-between;
  }

  .arrows {
    outline: none;
    border: none;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 2px;
    border-radius: 5px;
    color: #5868f0;
    background-color: var(--bgd);

    :disabled {
      color: var(--bgd);
      background-color: gray;
    }
  }

  .selection {
    cursor: pointer;
    outline: none;
    margin: 1rem 5px;
    padding: 0px 5px;
    font-size: 1rem;
    background-color: var(--bgd);
  }

  @media (max-width: 768px) {
    .pagination {
      display: flex;
      flex-direction: column;
    }
  }
`

export const DeleteIcon = styled(AiFillDelete)`
  padding: 10px;
  color: #f64e60;
  cursor: pointer;
  margin-right: 5px;
  border-radius: 5px;
  width: calc(1.35em + 1.1rem + 2px);
  height: calc(1.35em + 1.1rem + 2px);
  background-color: var(--bgd);
  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--bgd);
    background-color: #f64e60;
  }
`

export const EditIcon = styled(AiOutlineEdit)`
  margin-left: 5px;
  padding: 10px;
  color: #5868f0;
  cursor: pointer;
  border-radius: 5px;
  width: calc(1.35em + 1.1rem + 2px);
  height: calc(1.35em + 1.1rem + 2px);
  background-color: var(--bgd);
  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--bgd);
    background-color: #5868f0;
  }
`

export const PreviousPageArrow = styled(BiChevronsLeft)`
  font-size: 1.5rem;
`
export const NextPageArrow = styled(BiChevronsRight)`
  font-size: 1.5rem;
`
export const NextArrow = styled(BiChevronRight)`
  font-size: 1.5rem;
`
export const PrevArrow = styled(BiChevronLeft)`
  font-size: 1.5rem;
`
