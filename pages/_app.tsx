import "../styles/globals.scss";
import "tippy.js/dist/tippy.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps, session) {
  return <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>;
}
export default MyApp;
