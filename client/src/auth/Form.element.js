import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Form = styled.div`
  width: 500px;
  display: flex;
  padding: 15px;
  border-radius: 10px;
  flex-direction: column;
  background-color: var(--wht);
  box-shadow: 0px 15px 15px 00px #e1e1e1;

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 0rem;
`

export const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  background-color: var(--bgd);
`

export const Button = styled.button`
  width: 100%;
  border: none;
  outline: none;
  color: var(--bgd);
  letter-spacing: 1px;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  text-transform: capitalize;
  background-color: var(--txt);
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: var(--hov);
  }
`

export const Parag = styled.p`
  margin: 0;
  font-weight: 500;
  text-align: center;
`
