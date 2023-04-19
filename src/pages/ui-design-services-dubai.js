import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import ContactUsModule from "@/components/homepage/ContactUsModule";
import PortfolioListing from "@/components/homepage/PortfolioListing";
import Testimonials from "@/components/homepage/Testimonials";
import UiDesignCards from "@/components/homepage/UiDesignCards";
import axios from "axios";
import React from "react";

const UiDesignServicesDubai = ({
  headerData,
  footerData,
  readyToBegin,
  data,
}) => {
  console.log(data);
  return (
    <>
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
        button={data?.attributes?.get_a_quote}
      />
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
      <ContactUsModule />
      <Footer footerData={footerData} />
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
      data: data?.data,
      headerData: data?.headerData,
      footerData: data?.footerData,
      readyToBegin: data?.readyToBegin,
    },
  };
}
