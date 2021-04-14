import styled from 'styled-components'
import { Row, Typography } from 'antd'
import { Spinner } from '@chakra-ui/spinner'

const { Title } = Typography

export const Wrapper = styled.div`
  display: flex;
  width: 1366px;
  margin: 0rem auto;
  padding: 0rem 1rem;
  border-radius: 15px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: var(--wht);
  filter: drop-shadow(0px 10px 10px 00px #e1e1e1);

  @media (max-width: 1200px) {
    width: 992px;
  }
  @media (max-width: 992px) {
    width: 720px;
  }
  @media (max-width: 768px) {
    width: 95%;
  }
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

export const Spin = styled(Spinner)`
  margin: auto auto;
`
