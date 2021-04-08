import React from 'react'
import { AddButton } from '../../styles/Curd.element'
import { StyledRow, Text } from '../../styles/content.element'

const CardHeader = ({ title, buttonUri }) => {
  return (
    <>
      <StyledRow>
        <Text level={4}>{title}</Text>
        <AddButton>{buttonUri}</AddButton>
      </StyledRow>
      <hr />
    </>
  )
}

export default CardHeader
