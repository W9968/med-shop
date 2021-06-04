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
  padding: 0.7rem 2rem;
  text-decoration: none;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;
  justify-content: space-around;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.hover};

  &:hover {
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.sameHover};
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
  padding: 0.7rem 2rem;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  justify-content: space-around;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.hover};

  &:hover {
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.sameHover};
  }
`
