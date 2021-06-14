import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --purple-400: #9164FA; 
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
    background: ${({theme}) => theme.colors.description};
    border-radius: 0px;
  }

  ::-webkit-scrollbar-track{
    background: ${({theme}) => theme.colors.subBackground};
    border-radius: 0px;
  }
`