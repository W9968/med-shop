import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { StyledRow, Text } from '../../styles/content.element'
import { AddButton } from '../../styles/Curd.element'

const CardHeader = ({ title }) => {
  const { path } = useRouteMatch()
  return (
    <>
      <StyledRow
        style={{
          justifyContent: 'space-between',
          borderBottom: '1px solid #e1e1e1',
        }}>
        <Text level={3}>{title} List</Text>
        <AddButton to={`${path}/add`}>new {title}</AddButton>
      </StyledRow>
    </>
  )
}

export default CardHeader
