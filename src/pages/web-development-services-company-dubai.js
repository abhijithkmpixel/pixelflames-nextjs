// import Footer from "@/components/Footer";
import HeadComponent from "@/components/HeadComponent";
// import PageHeader from "@/components/PageHeader";
// import ReadyToBegin from "@/components/ReadyToBegin";
// import StickyHeader from "@/components/StickyHeader";
import { AboutIntro } from "@/components/homepage/AboutIntro";
// import HowWeWork from "@/components/homepage/HowWeWork";
// import TeamListing from "@/components/homepage/TeamListing";
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
const PageHeader = dynamic(() => import('@/components/PageHeader'), {
  loading: () => <p>Loading...</p>,
});
const ReadyToBegin = dynamic(() => import('@/components/ReadyToBegin'), {
  loading: () => <p>Loading...</p>,
});

const HowWeWork = dynamic(() => import('@/components/homepage/HowWeWork'), {
  loading: () => <p>Loading...</p>,
});
const TeamListing = dynamic(() => import('@/components/homepage/TeamListing'), {
  loading: () => <p>Loading...</p>,
});
const AboutUsPage = ({ headerData, footerData, readyToBegin, aboutus }) => {
  return (
    <>
      {aboutus?.attributes?.seo && (
        <HeadComponent data={aboutus?.attributes?.seo} />
      )}

      {!aboutus?.attributes?.seo && (
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
          pageTitle={aboutus?.attributes?.about_us_title}
          pageDescription={aboutus?.attributes?.about_us_description}
        />
      )}
      {aboutus !== null && (
        <>
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
          {aboutus?.attributes?.show_team_grid && (
            <TeamListing
              title={aboutus?.attributes?.team_title}
              description={aboutus?.attributes?.team_description}
              team={aboutus?.attributes?.team_members}
            />
          )}
          {aboutus?.attributes?.show_get_in_touch && (
            <ReadyToBegin readyToBegin={readyToBegin} />
          )}
        </>
      )}
      {footerData !== null && <Footer footerData={footerData} />}
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
      aboutus:
        Object.keys(data).length > 0
          ? data?.aboutus && data?.aboutus !== null
            ? data?.aboutus
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
