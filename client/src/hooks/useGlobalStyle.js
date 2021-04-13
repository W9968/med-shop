import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    html
    ,body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: var(--bgd);
        font-family: 'proxima-nova', sans-serif;
    }

    :root{
        --nab: #1e1e2d;
        --txt: #232323;
        --bgd: #f5f5f5;
        --wht: #ffffff;
        --hov: #495163;
    }

    ::-moz-selection {
    color: #fff;
    background: #FF4136;
  }
  ::selection {
    color: #fff;
    background: #FF4136;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }


  ::-webkit-scrollbar-track {
    background: rgba(0,0,0,1);
  }
  ::-webkit-scrollbar-thumb {
    background: #FF4136;

  }
  ::-webkit-scrollbar-thumb:hover {
    background: #CA0011;
  }

`
