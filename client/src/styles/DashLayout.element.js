import styled from 'styled-components'

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  position: absolute;
  background-color: ${({ theme }) => theme.body};
`

export const Sider = styled.aside`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.hover};
`

export const SubSide = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    align-items: initial;
    flex-direction: column-reverse;
  }
`

export const SubHeader = styled.header`
  padding: 0.5rem 1.5rem;
`
export const Content = styled.main`
  flex: 1;
  display: flex;
  padding: 2rem 0rem;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.body};
`
