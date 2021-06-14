import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFF;

    --gray-50: #F7F8FA;
    --gray-100: #E6E8EB;
    --gray-200: #AFB2B1;
    --gray-500: #808080;
    --gray-800: #494D4B;

    --green-500: #04D361;

    --purple-300: #9F75FF;
    --purple-400: #9164FA; 
    --purple-500: #8257E5;
    --purple-800: #6F48C9;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; //15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: ${({theme}) => theme.colors.background};
  }

  body, input, textarea, button {
    font: 500 1rem Inter, sans-serif;
    color: ${({theme}) => theme.colors.subText};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: Lexend, sans-serif;
    color: ${({theme}) => theme.colors.text};
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(13deg, #ADADAD 14%,#adadad 64%);
    border-radius: 0px;
  }

  ::-webkit-scrollbar-thumb:hover{
    background: linear-gradient(13deg, #8c8c8c 14%,#8C8C8C 64%);
  }

  ::-webkit-scrollbar-track{
    background: #ffffff;
    border-radius: 0px;
    box-shadow: inset 7px 10px 12px #f0f0f0;
  }
`