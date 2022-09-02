import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import usePersistedState from '../utils/usePersistedState'
import { PlayerContextProvider } from '../contexts/PlayerContext'
import { Header } from '../components/Header'
import { Player } from '../components/Player'

import { GlobalStyle } from '../styles/global'
import { Wrapper } from '../styles/app'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState('theme', dark)

  const ToggleTheme = () =>{
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ThemeProvider  theme={theme}>
        <PlayerContextProvider>
          <GlobalStyle />
          
          <Wrapper>
            <main>
              <Header toggleTheme={ToggleTheme}/>

              <Component {...pageProps} />
            </main>

            <Player />
          </Wrapper>
        </PlayerContextProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
