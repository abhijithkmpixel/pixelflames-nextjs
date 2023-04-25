import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ReadyToBegin from "@/components/ReadyToBegin";
import StickyHeader from "@/components/StickyHeader";
import OurWorksList from "@/components/homepage/OurWorksList";
import axios from "axios";
import Head from "next/head";
import React from "react";

const OurWorksPage = ({ headerData, footerData, readyToBegin, data }) => {
  return (
    <>
      {data?.attributes?.seo && (
        <Head>
          <title>{data?.attributes?.seo?.seo_title}</title>
          <meta
            name="description"
            content={data?.attributes?.seo?.seo_description}
          ></meta>
          <meta
            name="image"
            content={data?.attributes?.seo?.seo_image?.data?.attributes?.url}
          ></meta>
          <meta
            name="og:title"
            content={data?.attributes?.seo?.seo_title}
          ></meta>
          <meta
            name="og:description"
            content={data?.attributes?.seo?.seo_description}
          ></meta>
          <meta
            name="og:image"
            content={data?.attributes?.seo?.seo_image?.data?.attributes?.url}
          ></meta>
        </Head>
      )}
      {!data?.attributes?.seo && (
        <Head>
          <title>
            Web Development Services Company Dubai | Ecommerce Site Developer
            Dubai
          </title>
        </Head>
      )}
      {headerData !== null && (
        <StickyHeader
          innerPage={true}
          logo={headerData?.header_image?.data?.attributes?.url}
          logoWhite={headerData?.header_logo_white?.data?.attributes?.url}
          headerNumber={headerData?.header_contact_number}
          headerLinks={headerData?.header_links}
          popupImage={headerData?.header_popup_image?.data?.attributes?.url}
          headerPopupTitle={headerData?.header_popup_title}
          headerPopupDesc={headerData?.header_popup_description}
          mapLink={headerData?.map_link}
          getInTouch={headerData?.get_in_touch_button}
          pageTitle={data?.attributes?.portfolio_title}
          pageDescription={data?.attributes?.portfolio_description}
        />
      )}
      {data !== null && (
        <>
          <PageHeader
            image={
              data?.attributes?.portfolio_banner_image?.data?.attributes?.url
            }
          />

          <div className="color-white">
            <OurWorksList
              title={data?.attributes?.recent_works_title}
              description={data?.attributes?.our_works_description}
              button={data?.attributes?.get_in_touch_button}
              portfolios={data?.attributes?.portfolio_list?.data}
            />
          </div>
        </>
      )}
      {data?.attributes?.show_get_in_touch && (
        <ReadyToBegin readyToBegin={readyToBegin} />
      )}
      {footerData !== null && <Footer footerData={footerData} />}
    </>
  );
};

export default OurWorksPage;

export async function getServerSideProps(context) {
  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/ourworks`)
    .then(function (response) {
      // handle success
      return response?.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  return {
    props: {
      data:
        Object.keys(data).length > 0
          ? data?.data && data?.data !== null
            ? data?.data
            : null
          : null,
      headerData:
        Object.keys(data).length > 0
          ? data?.headerData && data?.headerData !== null
            ? data?.headerData
            : null
          : null,
      footerData:
        Object.keys(data).length > 0
          ? data?.footerData && data?.footerData !== null
            ? data?.footerData
            : null
          : null,
      readyToBegin:
        Object.keys(data).length > 0
          ? data?.readyToBegin && data?.readyToBegin !== null
            ? data?.readyToBegin
            : null
          : null,
    },
  };
}
