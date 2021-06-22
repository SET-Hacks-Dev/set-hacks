import "bootstrap/dist/css/bootstrap.min.css";
import "../theme/font.css";

import { GlobalStyle, theme } from "../theme";

import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <title>SET.Hacks() - Code the Future</title>
        <meta
        name="description"
        content="SET.Hacks() is a 24-hour virtual hackathon brought to you by the SET Foundation."
        />
        
        <meta property="og:title" content="SET.Hacks() - Code the Future" />
        <meta property="og:site_name" content="SET.Hacks()" />
        <meta property="og:url" content="https://sethacks.ca" />
        <meta
        property="og:image"
        content="/static/media/Hackathon_logo_dev_1.71f206e3.png"
        />
        <meta
        property="og:description"
        content="SET.Hacks() is a 24-hour virtual hackathon brought to you by the SET Foundation."
        />

        <link rel="icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="logo192.png" />
        <link rel="manifest" href="manifest.json" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossOrigin="anonymous"></link>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
