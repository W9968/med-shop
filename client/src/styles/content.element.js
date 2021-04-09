import styled from 'styled-components'
import { Row, Typography } from 'antd'

const { Title } = Typography

export const Wrapper = styled.div`
  width: 70%;
  min-height: 100%;
  margin: 0rem auto;
  padding: 0rem 1rem;
  border-radius: 15px;
  background-color: var(--wht);
  filter: drop-shadow(0px 10px 10px 00px #e1e1e1);
`

export const StyledRow = styled(Row)`
  width: 100%;
  display: flex;
  padding: 1rem 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Text = styled(Title)`
  padding: 0px;
  letter-spacing: 1px;
  margin: 0px !important;
  font-weight: 600 !important;
`
