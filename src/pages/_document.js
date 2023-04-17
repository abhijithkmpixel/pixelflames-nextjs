import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>pixelflames</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/styles.min.css" />
        <link rel="stylesheet" href="/styles/maintenance.css" />
        <link rel="stylesheet" href="/styles/custom-styles.css" />
        <link rel="stylesheet" href="/styles/custom_wp.css" />
        <link rel="stylesheet" href="/styles/custom.css" />
        <link rel="stylesheet" href="/styles/revamp.css" />
      </Head>
      <body className={"page-template-page-home-new"}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
