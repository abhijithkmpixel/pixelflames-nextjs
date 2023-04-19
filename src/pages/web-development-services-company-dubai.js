import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ReadyToBegin from "@/components/ReadyToBegin";
import StickyHeader from "@/components/StickyHeader";
import { AboutIntro } from "@/components/homepage/AboutIntro";
import HowWeWork from "@/components/homepage/HowWeWork";
import axios from "axios";
import React from "react";

const AboutUsPage = ({ headerData, footerData, readyToBegin, aboutus }) => {
  console.log(aboutus);
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
        pageTitle={aboutus?.attributes?.about_us_title}
        pageDescription={aboutus?.attributes?.about_us_description}
      />
      <PageHeader
        image={
          aboutus?.attributes?.about_us_banner_image?.data?.attributes?.url
        }
      />
      <AboutIntro
        title={aboutus?.attributes?.section_two_title}
        description={aboutus?.attributes?.section_two_description}
        columns={[
          aboutus?.attributes?.section_two_column_one,
          aboutus?.attributes?.section_two_column_two,
        ]}
      />
      <HowWeWork
        title={aboutus?.attributes?.how_we_work_title}
        description={aboutus?.attributes?.how_we_work_description}
        works={aboutus?.attributes?.how_we_work_row}
      />
      {aboutus?.attributes?.show_get_in_touch && (
        <ReadyToBegin readyToBegin={readyToBegin} />
      )}
      <Footer footerData={footerData} />
    </>
  );
};

export default AboutUsPage;

export async function getServerSideProps(context) {
  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/aboutus?populate=*`)
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
      aboutus: data?.aboutus,
      headerData: data?.headerData,
      footerData: data?.footerData,
      readyToBegin: data?.readyToBegin,
    },
  };
}
