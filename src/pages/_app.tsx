import { PlayerContextProvider } from '../contexts/PlayerContext'
import { Header } from '../components/Header'
import { Player } from '../components/Player'

import { GlobalStyle } from '../styles/global'
import { Wrapper } from '../styles/app'

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <GlobalStyle />
      
      <Wrapper>
        <main>
          <Header />

          <Component {...pageProps} />
        </main>

        <Player />
      </Wrapper>
    </PlayerContextProvider>
  );
}

export default MyApp
