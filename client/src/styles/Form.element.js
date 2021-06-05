import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { BiCheck, BiErrorCircle } from 'react-icons/bi'
import CheckBox from 'antd/lib/checkbox'
import 'antd/lib/checkbox/style/index.css'

export const Container = styled.div`
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.body};

  @media (max-width: 600px) {
    padding: 40px 0px;
    justify-content: flex-start;
  }
`

export const Wrapper = styled.div`
  width: 600px;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;

  .fieldgroup {
    padding: 0px 15px;
    background-color: ${({ theme }) => theme.hover};
  }

  @media (max-width: 600px) {
    width: 100%;
    box-shadow: none;
  }
`

export const Text = styled(NavLink)`
  margin-top: 1rem;
  font-weight: 600;
  text-align: center;
  font-size: 2.225rem;
  margin-bottom: 2rem;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};
`

export const InputGroup = styled.div`
  width: 400px;
  display: flex;
  border-radius: 5px;
  margin-bottom: 1rem;
  align-items: center;
  flex-direction: row;

  @media (max-width: 400px) {
    width: 100%;
  }
`

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 16px 0px;
  letter-spacing: 0.78px;
  background: transparent;
  color: ${({ theme }) => theme.text};
`

export const Correct = styled(BiCheck)`
  font-size: 2rem;
  color: ${({ theme }) => theme.correct};
`
export const Error = styled(BiErrorCircle)`
  font-size: 1.775rem;
  color: ${({ theme }) => theme.error};
`

export const CheckButton = styled(CheckBox)`
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

export const Button = styled.button`
  width: 400px;
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  margin: 1rem 0rem;
  border-radius: 5px;
  font-size: 1.125rem;
  align-items: center;
  flex-direction: row;
  padding: 0.7rem 2rem;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  justify-content: space-around;
  color: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.text};

  &:hover {
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
  }

  @media (max-width: 400px) {
    width: 100%;
  }

  &:disabled {
    color: ${({ theme }) => theme.select};
    background-color: ${({ theme }) => theme.sameHover};
  }
`

export const Message = styled.p`
  width: 400px;
  font-weight: 600;
  margin: 1rem 0rem;
  text-align: center;
  border-radius: 12px;
  padding: 0.7rem 2rem;
  background-color: red;
  color: ${({ theme }) => theme.text};
`
