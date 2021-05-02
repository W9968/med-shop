import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../../global/exports'

const Logout = ({ fn }) => {
  const { logged, logout } = useAuth()

  return (
    <>
      {logged ? (
        <Button onClick={logout}>logout</Button>
      ) : (
        <Link to='/login' onClick={fn}>
          login
        </Link>
      )}
    </>
  )
}

export default Logout

const Button = styled.button`
  width: 100%;
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
`
const Link = styled(NavLink)`
  width: 100%;
  border: none;
  outline: none;
  display: flex;
  font-weight: 400;
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
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.hover};
  }
`
