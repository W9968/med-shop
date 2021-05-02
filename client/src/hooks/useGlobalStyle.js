import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html,
  body {  
    display:flex;
    max-width: 100%;
    min-height: 100vh;
    flex-direction: column;
    backface-visibility:hidden;
    text-rendering: optimizeLegibility;
    color: ${({ theme }) => theme.secondary};
    background-color: ${({ theme }) => theme.primary};
    font-family: proxima-nova, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a {
    font-weight: 600;
    text-decoration: none;
    text-transform: capitalize;
    :hover {
      color: ${({ theme }) => theme.hover};
    }
  }

  p{
    font-size: 1.122rem;
  }

  ::selection {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.secondary}
  }
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.secondary}
  }
 
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    filter: contrast(0.75);
    background: ${({ theme }) => theme.fourth};
  }
`

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: none;
`

export const Main = styled.main`
  width: 100%;
  display: flex;
  min-height: 100vh;
  margin: 0px auto;
  flex-direction: column;
  background-color: none;
`
