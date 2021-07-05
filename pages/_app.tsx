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
        <meta name="title" content="SET.Hacks() - Code the Future" />
        <meta
          name="description"
          content="SET.Hacks() is a beginner-focused, high school hackathon that empowers every student to start coding the future. With 6 guided learning tracks, 40+ mentors and university panels, we want to help kickstart students' journeys into tech."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sethacks.ca/" />
        <meta property="og:title" content="SET.Hacks() - Code the Future" />
        <meta
          property="og:description"
          content="SET.Hacks() is a beginner-focused, high school hackathon that empowers every student to start coding the future. With 6 guided learning tracks, 40+ mentors and university panels, we want to help kickstart students' journeys into tech."
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/65046640/124401230-27a32180-dcf6-11eb-8b0b-4ffb524dbbaf.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.sethacks.ca/" />
        <meta
          property="twitter:title"
          content="SET.Hacks() - Code the Future"
        />
        <meta
          property="twitter:description"
          content="SET.Hacks() is a beginner-focused, high school hackathon that empowers every student to start coding the future. With 6 guided learning tracks, 40+ mentors and university panels, we want to help kickstart students' journeys into tech."
        />
        <meta
          property="twitter:image"
          content="https://user-images.githubusercontent.com/65046640/124401230-27a32180-dcf6-11eb-8b0b-4ffb524dbbaf.png"
        />

        <link rel="icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="logo192.png" />
        <link rel="manifest" href="manifest.json" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        ></link>
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
