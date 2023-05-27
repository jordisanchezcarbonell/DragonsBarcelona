import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="See pictures from " />
          <meta
            property="og:description"
            content="See pictures from Dragons Barcelona "
          />
          <meta property="og:title" content="Dragons Barcelona Pictures" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Dragons Barcelona Pictures" />
          <meta
            name="twitter:description"
            content="See pictures from Dragons Barcelona"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
