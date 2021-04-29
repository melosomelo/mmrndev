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
        <title>Mateus Nascimento</title>
        <meta name="description" content="Brazilian web developer" />
        <meta name="author" content="Mateus Nascimento" />
        <meta name="keywords" content="Web, developer, brazilian" />
        <meta
          name="robots"
          content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta property="og:title" content="Mateus Nascimento"></meta>
        <meta
          property="og:description"
          content="Brazilian web developer"
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://mmrn.dev"></meta>
        <meta property="og:image" content="/logo.png"></meta>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
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
