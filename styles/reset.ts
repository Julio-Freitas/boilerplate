import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
      font-size: 62.5%;
      margin: 0 auto;
    }

   body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

    html, body {
      height: 100%;
    }
    #__next {
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
