import { PlayerContextProvider } from '../contexts/PlayerContext'
import { Header } from '../components/Header'
import { Player } from '../components/Player'

import { GlobalStyle } from '../styles/global'
import styles from '../styles/app.module.scss'

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <GlobalStyle />
      
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  );
}

export default MyApp
