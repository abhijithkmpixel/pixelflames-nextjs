import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import ContactUsModule from "@/components/homepage/ContactUsModule";
import PortfolioListing from "@/components/homepage/PortfolioListing";
import Testimonials from "@/components/homepage/Testimonials";
import UiDesignCards from "@/components/homepage/UiDesignCards";
import axios from "axios";
import Head from "next/head";
import React from "react";

const UiDesignServicesDubai = ({
  headerData,
  footerData,
  // readyToBegin,
  data,
}) => {
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
          pageTitle={data?.attributes?.title}
          pageDescription={data?.attributes?.description}
          button={data?.attributes?.our_portfolio_button}
        />
      )}
      {data !== null && (
        <>
          <PortfolioListing
            title={data?.attributes?.portfolio_title}
            button={data?.attributes?.our_portfolio_button}
            portfolios={data?.attributes?.portfolio_list?.data}
          />
          <UiDesignCards
            title={data?.attributes?.ui_design_title}
            description={data?.attributes?.ui_design_desciption}
            cards={data?.attributes?.design_process_card}
          />
          <Testimonials
            title={data?.attributes?.testimony_title}
            subtitle={data?.attributes?.testimony_subtitle}
            testimonials={data?.attributes?.testimony_row}
          />
        </>
      )}
      {data?.attributes?.contact_form?.show_or_hide && (
        <ContactUsModule title={data?.attributes?.contact_form?.form_title} />
      )}
      {footerData !== null && <Footer footerData={footerData} />}
    </>
  );
};

export default UiDesignServicesDubai;

export async function getServerSideProps(context) {
  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/uidesignnservices`)
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
