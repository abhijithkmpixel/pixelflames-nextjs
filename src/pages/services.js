// import FeaturedServicesRow from "@/components/FeaturedServicesRow";
// import Footer from "@/components/Footer";
import HeadComponent from "@/components/HeadComponent";
// import ReadyToBegin from "@/components/ReadyToBegin";
// import StickyHeader from "@/components/StickyHeader";
import axios from "axios";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <p>Loading...</p>,
});
const StickyHeader = dynamic(() => import('@/components/StickyHeader'), {
  loading: () => <p>Loading...</p>,
});
const FeaturedServicesRow = dynamic(() => import('@/components/FeaturedServicesRow'), {
  loading: () => <p>Loading...</p>,
});
const ReadyToBegin = dynamic(() => import('@/components/ReadyToBegin'), {
  loading: () => <p>Loading...</p>,
});
const services = ({ headerData, footerData, readyToBegin, data }) => {
  return (
    <>
      {data?.attributes?.seo && <HeadComponent data={data?.attributes?.seo} />}

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
          pageTitle={data?.attributes?.services_title}
          pageDescription={data?.attributes?.services_description}
        />
      )}
      <FeaturedServicesRow services={data?.attributes?.services_list} />
      {data?.attributes?.show_get_in_touch && (
        <ReadyToBegin readyToBegin={readyToBegin} />
      )}
      {footerData !== null && <Footer footerData={footerData} />}
    </>
  );
};

export default services;

export async function getServerSideProps(context) {
  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/services`)
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
