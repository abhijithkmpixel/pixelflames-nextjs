import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Pixelflames" />
        <meta
          name="keywords"
          content="wordpress, concrete5, umbraco, sitecore, sitefinity, web design &amp; development, ux design, react development, nuxt.js, opencart, woocommerce, website maintenance, seo optimisation, kentico development, cms consultancy"
        />
        <meta
          property="og:site_name"
          content="Pixelflames - Great experiences build great brands."
        />
        <meta name="robots" content="all" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta name="msapplication-TileImage" content="/favicon.ico"></meta>
        <link rel="icon" href="/favicon.ico" />

        {/* styles from site public  */}
        {/* <link rel="stylesheet" href="/styles/styles.min.css" />
        <link rel="stylesheet" href="/styles/maintenance.css" />
        <link rel="stylesheet" href="/styles/custom-styles.css" />
        <link rel="stylesheet" href="/styles/custom_wp.css" />
        <link rel="stylesheet" href="/styles/custom.css" />
        <link rel="stylesheet" href="/styles/revamp.css" /> */}
        {/* styles from site public  end*/}
      </Head>
      <body className={"page-template-page-home-new_"}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
