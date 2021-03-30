import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: var(--bgd);
`

export const Container = styled.div`
  width: 70%;
  margin: 1rem 1rem;
  @media (max-width: 768px) {
    width: 95%;
  }
`
