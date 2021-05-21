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
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
    font-family: proxima-nova, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a {
    font-weight: 600;
    text-decoration: none;
    text-transform: capitalize;
    color: ${({ theme }) => theme.text};

    :hover {
      color: ${({ theme }) => theme.sameHover};
    }
  }

  p{
    font-size: 1.122rem;
    color: ${({ theme }) => theme.text};
  }

  ::selection {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.select}
  }
  /* width */
  /* ::-webkit-scrollbar {
    width: 2px;
    scrollbar-width: thin
  } */
  /* Track */
  /* ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.secondary}
  } */
 
  /* Handle */
  /* ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    filter: contrast(0.75);
    background: ${({ theme }) => theme.third};
  } */
`

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: none;
`

export const Main = styled.main`
  width: 1304px;
  display: flex;
  min-height: 100vh;
  margin: 0px auto;
  flex-direction: column;
  background: none;

  @media (max-width: 1304px) {
    width: 100%;
  }
`
