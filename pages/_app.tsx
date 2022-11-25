import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/AuthContext'
import { GameProvider } from '../context/GameContext'

export default function App({ Component, pageProps }: AppProps) {
  return <AuthProvider>
    <GameProvider>
    <Component {...pageProps} />

    </GameProvider>

  </AuthProvider>
}
