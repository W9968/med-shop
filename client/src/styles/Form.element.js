import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { BiCheck, BiErrorCircle } from 'react-icons/bi'
import { CheckBox } from 'grommet'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primary};

  @media (max-width: 600px) {
    padding: 40px 0px;
    justify-content: flex-start;
    background: ${({ theme }) => theme.primary};
  }
`

export const Wrapper = styled.div`
  width: 600px;
  padding: 15px;
  display: flex;
  border-radius: 12px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;

  .fieldgroup {
    padding: 0px 15px;
    background-color: ${({ theme }) => theme.fourth};
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
  color: ${({ theme }) => theme.secondary};
`

export const InputGroup = styled.div`
  width: 400px;
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  flex-direction: row;
  border-radius: 12px;

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
  color: ${({ theme }) => theme.secondary};
`

export const Correct = styled(BiCheck)`
  font-size: 2rem;
  color: ${({ theme }) => theme.correct};
`
export const Error = styled(BiErrorCircle)`
  font-size: 1.775rem;
  color: ${({ theme }) => theme.error};
`

export const CheckButton = styled(CheckBox)``

export const Button = styled.button`
  width: 400px;
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  margin: 1rem 0rem;
  font-size: 1.125rem;
  align-items: center;
  flex-direction: row;
  border-radius: 12px;
  padding: 0.7rem 2rem;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  justify-content: space-around;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.third};

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }

  @media (max-width: 400px) {
    width: 100%;
  }

  &:disabled {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.fourth};
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
  color: ${({ theme }) => theme.primary};
`
