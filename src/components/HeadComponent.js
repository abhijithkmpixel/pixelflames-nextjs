import Head from "next/head";
import React from "react";

const HeadComponent = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data?.seo_title}</title>
        <meta name="description" content={data?.seo_description}></meta>
        <meta
          name="image"
          content={data?.seo_image?.data?.attributes?.url}
        ></meta>
        <meta name="og:title" content={data?.seo_title}></meta>
        <meta name="og:description" content={data?.seo_description}></meta>
        <meta
          name="og:image"
          content={data?.seo_image?.data?.attributes?.url}
        ></meta>
        <meta name="twitter:title" content={data?.seo_title}></meta>
        <meta name="twitter:description" content={data?.seo_description}></meta>
        <meta
          name="twitter:image"
          content={data?.seo_image?.data?.attributes?.url}
        ></meta>
        <meta
          property="og:url"
          content={
            typeof window !== "undefined"
              ? window.location.href
              : process.env.DOMAIN_URL
          }
        />
        <link
          rel="canonical"
          href={
            typeof window !== "undefined"
              ? window.location.href
              : process.env.DOMAIN_URL
          }
        />
      </Head>
    </>
  );
};

export default HeadComponent;
