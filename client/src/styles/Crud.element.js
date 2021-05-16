import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1rem;

  .filepond--drop-label {
    border-radius: 12px;
    color: ${({ theme }) => theme.secondary};
    background-color: ${({ theme }) => theme.fourth};
  }
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
  border-radius: 12px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  background-color: ${({ theme }) => theme.fourth};
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
  background-color: ${({ theme }) => theme.fourth};
`

export const Label = styled.p`
  font-size: 1rem;
  padding-top: 0.625rem;
  padding-left: 0.625rem;
  text-transform: capitalize;
`

export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.third};

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.hover};
  }
`
export const Linker = styled(NavLink)`
  padding: 8px 12px;
  margin-right: 1rem;
  border-radius: 5px;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.third};
  background-color: ${({ theme }) => theme.fourth};
`
