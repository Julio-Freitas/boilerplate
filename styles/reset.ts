import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
      font-size: 62.5%;
      margin: 0 auto;
    }

    body {
      font-family: --apple-system, 'Segoe UI', Ubuntu, Cantarell, "Open Sans"
    }

    #__next main {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
    }

    a{
      text-decoration: none;
    }

    input {
        all: unset;
    }

    button {
        cursor: pointer
    }
    img{
      display: inline-block;
      max-width:100%;
      margin:0;
    }
`;
