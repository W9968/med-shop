import React from 'react'
import { StyledRow, Text } from '../../styles/content.element'

const CardHeader = ({ title }) => {
  return (
    <>
      <StyledRow
        style={{
          justifyContent: 'flex-start',
          borderBottom: '1px solid #e1e1e1',
        }}>
        <Text level={3}>{title}</Text>
      </StyledRow>
    </>
  )
}

export default CardHeader
