import React from 'react'

// styles
import styled from 'styled-components'
import { Typography } from 'antd'
const { Title } = Typography

const TextHero = ({ text }) => {
  return (
    <>
      <StyledText level={2}>{text}</StyledText>
    </>
  )
}

export default TextHero

const StyledText = styled(Title)`
  margin: 0px;
  letter-spacing: 1px;
  text-transform: capitalize;
`
