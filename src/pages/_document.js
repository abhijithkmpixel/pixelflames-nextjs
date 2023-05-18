import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="author" content="Pixelflames" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e74847" />
        <meta name="author" content="Pixelflames" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon144x144.png" />
        <meta name="robots" content="all" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon57x57.png" />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon114x114.png"
        />
        <meta name="msapplication-TileImage" content="/favicon.ico"></meta>
        <link rel="icon" type="image/png" href="/favicon.png" />

        <link rel="icon" href="/favicon.ico" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          name="keywords"
          content="wordpress, concrete5, umbraco, sitecore, sitefinity, web design &amp; development, ux design, react development, nuxt.js, opencart, woocommerce, website maintenance, seo optimisation, kentico development, cms consultancy"
        />
        <meta
          property="og:site_name"
          content="Pixelflames - Great experiences build great brands."
        />
      </Head>
      <body className={"page-template-page-home-new_"}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
