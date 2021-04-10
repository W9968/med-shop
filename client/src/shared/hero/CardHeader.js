import React from 'react'
import { AddButton } from '../../styles/Curd.element'
import { StyledRow, Text } from '../../styles/content.element'

const CardHeader = ({ title, buttonUri, pathname }) => {
  return (
    <>
      <StyledRow>
        <Text level={3}>{title}</Text>
        <AddButton to={pathname}>{buttonUri}</AddButton>
      </StyledRow>
      <hr />
    </>
  )
}

export default CardHeader
