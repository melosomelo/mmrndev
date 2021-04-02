import Head from "next/head";

import { ModeProvider } from "../Context/ModeContext";
import { GifProvider } from "../Context/GifContext";

import Layout from "../components/Layout";

import "../scss/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ModeProvider>
        <GifProvider>
          <div className="red-gradient-container">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </div>
        </GifProvider>
      </ModeProvider>
    </>
  );
}

export default MyApp;
