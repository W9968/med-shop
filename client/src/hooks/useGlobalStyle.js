import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    html
    ,body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'proxima-nova', sans-serif;
    }

    :root{
        --txt: #232323;
        --bgd: #f5f5f5;
        --wht: #ffffff;
        --hov: #424242;
    }

`
