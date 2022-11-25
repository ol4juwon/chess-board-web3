import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/AuthContext'
import { GameProvider } from '../context/GameContext'
import { Web3ReactProvider } from '@web3-react/core'
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from "@ethersproject/providers";
import Web3 from 'web3';
import { provider } from 'web3-core'
function getLibrary(provider: provider) {

  return new Web3(provider);
  
  }
export default function App({ Component, pageProps }: AppProps) {
  return <Web3ReactProvider getLibrary={getLibrary}>
  <AuthProvider>
    <GameProvider>
    <Component {...pageProps} />

    </GameProvider>

  </AuthProvider>
  </Web3ReactProvider>

}
