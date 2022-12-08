import "../src/styles/globals.css";
// import "../src/styles/styles.css";
import type { AppProps } from "next/app";
import { wrapper } from "../src/redux/store";
import { Fragment } from "react";

function App({ Component, pageProps }: AppProps) {
  
  return <Fragment>
  <Component
  {...pageProps} />;
  </Fragment>

}

export default wrapper.withRedux(App);
