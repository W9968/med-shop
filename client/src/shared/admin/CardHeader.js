import React from 'react'
import { StyledRow, Text } from '../../styles/content.element'

const CardHeader = ({ title, children }) => {
  return (
    <>
      <StyledRow
        style={{
          justifyContent: 'space-between',
          borderBottom: '1px solid #e1e1e1',
        }}>
        <Text level={3}>{title} List</Text>
        {children}
      </StyledRow>
    </>
  )
}

export default CardHeader
