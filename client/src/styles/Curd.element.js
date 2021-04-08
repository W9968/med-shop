import styled from 'styled-components'

export const AddButton = styled.button`
  border: none;
  outline: none;
  color: var(--wht);
  border-radius: 5px;
  padding: 10px 1rem;
  letter-spacing: 1px;
  background-color: #5868f0;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: var(--hov);
  }
`
