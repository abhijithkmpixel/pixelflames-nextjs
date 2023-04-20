import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PortfolioPageBuilder from "@/components/PortfolioPageBuilder";
import ReadyToBegin from "@/components/ReadyToBegin";
import StickyHeader from "@/components/StickyHeader";
import axios from "axios";
import Head from "next/head";
import React from "react";

const ProjectDetailPage = ({ headerData, footerData, readyToBegin, data }) => {
  // console.log(data);
  return (
    <>
      <Head>
        <title>
          Web Development Services Company Dubai | Ecommerce Site Developer
          Dubai
        </title>
      </Head>
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
          pageTitle={data?.attributes?.name}
          pageDescription={data?.attributes?.title_description}
          extLink={data?.attributes?.external_site_link}
        />
      )}
      {data !== null && (
        <>
          <PageHeader
            image={
              data?.attributes?.portfolio_banner_image?.data?.attributes?.url
            }
          />
          <PortfolioPageBuilder pageBuilder={data?.attributes?.page_builder} />
        </>
      )}

      {data?.attributes?.show_get_in_touch && (
        <ReadyToBegin readyToBegin={readyToBegin} />
      )}
      {footerData !== null && <Footer footerData={footerData} />}
    </>
  );
};

export default ProjectDetailPage;

export async function getServerSideProps(context) {
  const { params } = context;
  console.log(params.slug);
  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/project?slug=${params.slug}`)
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
            ? data?.data[0]
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
