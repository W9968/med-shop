import React from 'react'
import { StyledContent } from '../../styles/Dashboard.element'
import { Typography } from 'antd'
const { Title } = Typography

const Content = () => {
  return (
    <>
      <StyledContent>
        <Title level={1}>hello</Title>
        <Title level={2}>hello</Title>
        <Title level={3}>hello</Title>
        <Title level={4}>hello</Title>
        <Title level={5}>hello</Title>
      </StyledContent>
    </>
  )
}

export default Content
