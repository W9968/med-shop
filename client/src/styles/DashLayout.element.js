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
  background-color: ${({ theme }) => theme.primary};
`

export const MobileWrapper = styled.div`
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primary};
`

export const Sider = styled.aside`
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.fifth};
`

export const SubSide = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.darkhover};
`

export const SubHeader = styled.header`
  padding: 0.5rem 1rem;
`
export const Content = styled.main`
  flex: 1;
  display: flex;
  padding: 2rem 0rem;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.fourth};
`

export const Footer = styled.footer`
  padding: 1rem;
  background-color: darkslategray;
`
