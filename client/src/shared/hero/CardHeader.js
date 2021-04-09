import React, { useState } from 'react'
import { AddButton, StyledModal } from '../../styles/Curd.element'

import { StyledRow, Text } from '../../styles/content.element'

const CardHeader = ({ title, buttonUri, children }) => {
  const [visible, setVisible] = useState(false)

  function showModel() {
    setVisible(true)
  }
  function closeModel() {
    setVisible(false)
  }

  return (
    <>
      <StyledRow>
        <Text level={3}>{title}</Text>
        <AddButton onClick={showModel}> {buttonUri}</AddButton>
        <StyledModal
          title={buttonUri}
          okText='Confirm'
          visible={visible}
          onCancel={closeModel}>
          {children}
        </StyledModal>
      </StyledRow>
      <hr />
    </>
  )
}

export default CardHeader
