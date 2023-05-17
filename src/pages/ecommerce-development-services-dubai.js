import DevelopmentProcess from "@/components/DevelopmentProcess";
import FeaturedServiceStatic from "@/components/FeaturedServiceStatic";
import Footer from "@/components/Footer";
import HeadComponent from "@/components/HeadComponent";
import StickyHeader from "@/components/StickyHeader";
import ContactUsModule from "@/components/homepage/ContactUsModule";
import PortfolioListing from "@/components/homepage/PortfolioListing";
import axios from "axios";
import Head from "next/head";
import React from "react";

const EcommerceDevelopmentServicesDubaiPage = ({
  headerData,
  footerData,
  data,
}) => {
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
          pageTitle={data?.attributes?.title}
          pageDescription={data?.attributes?.description}
          button={data?.attributes?.banner_cta}
        />
      )}
      <DevelopmentProcess
        title={data?.attributes?.development_process_title}
        description={data?.attributes?.development_process_description}
        list={data?.attributes?.development_process_list}
      />
      <FeaturedServiceStatic
        title={data?.attributes?.technologies_title}
        services={data?.attributes?.technologies_list}
      />
      <PortfolioListing
        title={data?.attributes?.case_studies_title}
        portfolios={data?.attributes?.case_studies?.data}
      />
      {data?.attributes?.show_or_hide_form && (
        <ContactUsModule title={data?.attributes?.contact_form_title} />
      )}
      {footerData !== null && <Footer footerData={footerData} />}
    </>
  );
};

export default EcommerceDevelopmentServicesDubaiPage;

export async function getServerSideProps(context) {
  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/ecommerce`)
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
      // readyToBegin:
      //   Object.keys(data).length > 0
      //     ? data?.readyToBegin && data?.readyToBegin !== null
      //       ? data?.readyToBegin
      //       : null
      //     : null,
    },
  };
}
