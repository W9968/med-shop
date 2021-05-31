import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import styled from 'styled-components'
import Select from 'react-select'
import CheckBox from 'antd/lib/checkbox'
import 'antd/lib/checkbox/style/index.css'

export const Wrapper = styled.div`
  padding: 1rem;
`

export const Div = styled.div`
  display: flex;
  padding-top: 1rem;
  justify-content: flex-end;

  @media (max-width: 400px) {
    justify-content: space-between;
  }
`

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 15px;
  display: flex;
  outline: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.hover};
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: none;
  padding: 15px;
  display: flex;
  outline: none;
  border-radius: 12px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.hover};
`

export const Label = styled.p`
  font-size: 1rem;
  padding-top: 1rem;
  text-transform: capitalize;
`

export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 12px;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.third};

  &:hover {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.hover};
  }
`
export const Linker = styled(NavLink)`
  padding: 8px 12px;
  margin-right: 1rem;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.third};
  background-color: ${({ theme }) => theme.fourth};
`

export const StyledSelect = styled(Select)``

export const Checkbox = styled(CheckBox)`
  color: ${({ theme }) => theme.text};

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border: 2px solid ${({ theme }) => theme.text} !important;
  }

  .ant-checkbox-checked .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-inner {
    border: 2px solid #1bba79;
    background-color: ${({ theme }) => theme.text};
  }

  .ant-checkbox {
    .ant-checkbox-inner {
      width: 18px;
      height: 18px;
      border: 2px solid ${({ theme }) => theme.text};
    }
  }
`

export const Table = styled.div``

export const ProductContainer = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
