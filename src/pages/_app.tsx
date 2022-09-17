import GlobalStyles from 'styles/global'
import { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next + TypeScript - Boilerplate</title>
        <link rel="shortcut-icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A boilerplate with everything configured to work with TypeScript, React, NextJS, Jest, Testing Library, Storybook and StyledComponents"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
