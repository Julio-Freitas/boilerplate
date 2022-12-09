import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from 'styles/reset';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>React Avançado </title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092b" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
