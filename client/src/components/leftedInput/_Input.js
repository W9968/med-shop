import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, Error, Correct } from '../../styles/Form.element'

const _Input = ({ defaultValue, state }) => {
  const {
    text: [text, setText],
  } = { text: useState(''), ...(state || {}) }

  const [validationInput, setValidationInput] = useState({
    validate1: false,
    validate2: false,
  })

  const handlePassValidation = (e) => {
    setText(e.target.value)

    text.length <= 1 &&
      setValidationInput({
        validate1: true,
        validate2: false,
      })
    text.length > 1 &&
      setValidationInput({
        validate1: false,
        validate2: true,
      })
  }

  return (
    <>
      <InputGroup>
        <Input
          type='text'
          placeholder='text'
          defaultValue={defaultValue}
          onChange={handlePassValidation}
        />
        {validationInput.validate1 && <Error />}
        {validationInput.validate2 && <Correct />}
      </InputGroup>
    </>
  )
}

export default _Input

export const InputGroup = styled.div`
  width: 400px;
  display: flex;
  padding: 0px 15px;
  margin-bottom: 1rem;
  align-items: center;
  flex-direction: row;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.fourth};

  @media (max-width: 400px) {
    width: 100%;
  }
`
