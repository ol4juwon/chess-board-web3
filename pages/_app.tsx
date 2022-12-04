import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../src/redux/store";

function App({ Component, pageProps }: AppProps) {
  
  return <Component
  {...pageProps} />;
}

export default wrapper.withRedux(App);
