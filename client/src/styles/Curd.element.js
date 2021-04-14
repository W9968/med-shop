import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const AddButton = styled(NavLink)`
  border: none;
  outline: none;
  color: var(--wht);
  border-radius: 5px;
  padding: 8px 1rem;
  letter-spacing: 1px;
  background-color: #3699ff;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    color: var(--wht);
    background-color: var(--hov);
  }
`
