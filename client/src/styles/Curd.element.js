import styled from 'styled-components'

export const Div = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* editor */
  .w-md-editor {
    width: 90%;
  }

  .w-md-editor-toolbar {
    background-color: var(--wht);
    ul > li > button > svg {
      padding: 5px;
      width: 24px;
      height: 24px;
    }

    ul > li > button {
      display: flex;
      padding: 15px 5px;
      align-items: center;
      justify-content: center;
    }
  }
`

export const AddButton = styled.button`
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

export const Input = styled.input`
  width: 90%;
  outline: none;
  padding: 10px;
  font-size: 1rem;
  border-radius: 10px;
  border: 2px solid var(--bgd);
`

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem 0rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  display: flex;
  border: none;
  outline: none;
  color: var(--wht);
  border-radius: 5px;
  padding: 8px 1rem;
  align-items: center;
  justify-content: center;
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

export const CancelButton = styled.button`
  display: flex;
  border: none;
  outline: none;
  color: var(--txt);
  border-radius: 5px;
  padding: 8px 1rem;
  margin-right: 1rem;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  background-color: var(--bgd);
  text-transform: capitalize;
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    color: var(--wht);
    background-color: #f64e60;
  }
`
