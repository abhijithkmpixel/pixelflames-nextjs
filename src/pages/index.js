import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import AboutUs from "@/components/homepage/AboutUs";
import PortfolioListing from "@/components/homepage/PortfolioListing";
import Testimonials from "@/components/homepage/Testimonials";
import Offgrid from "@/components/homepage/Offgrid";
import ReadyToBegin from "@/components/ReadyToBegin";
import axios from "axios";
import Banner from "@/components/homepage/Banner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, headerData, readyToBegin, footerData }) {
  console.log(data);
  return (
    <>
    <Head>
      <title>Web Development Services Company Dubai | Ecommerce Site Developer Dubai</title>
    </Head>
      {headerData !== null && (
        <StickyHeader
          logo={headerData?.header_image?.data?.attributes?.url}
          logoWhite={headerData?.header_logo_white?.data?.attributes?.url}
          headerNumber={headerData?.header_contact_number}
          headerLinks={headerData?.header_links}
          popupImage={headerData?.header_popup_image?.data?.attributes?.url}
          headerPopupTitle={headerData?.header_popup_title}
          headerPopupDesc={headerData?.header_popup_description}
          mapLink={headerData?.map_link}
          getInTouch={headerData?.get_in_touch_button}
        />
      )}
      {data !== null && (
        <>
          <Banner
            title={data?.attributes?.banner_title}
            subtitle={data?.attributes?.banner_subtitle}
            bg={data?.attributes?.banner_backgound_image}
            bgOverlay={data?.attributes?.banner_background_image_overlay}
            button={data?.attributes?.banner_cta}
            sideImage={data?.attributes?.side_image}
            sideImageLink={data?.attributes?.side_image_link}
          />
          <AboutUs
            title={data?.attributes?.about_us_title}
            description={data?.attributes?.about_us_description}
            image={data?.attributes?.about_us_side_image?.data?.attributes?.url}
            button={data?.attributes?.about_get_in_touch_button}
          />
          <PortfolioListing
            title={data?.attributes?.our_portfolio_title}
            button={data?.attributes?.our_portfolio_see_all_button}
            portfolios={data?.attributes?.portfolios?.data}
          />
          <Testimonials
            title={data?.attributes?.testimonials_title}
            subtitle={data?.attributes?.testimonials_subtitle}
            testimonials={data?.attributes?.testimonial}
          />
          <Offgrid
            title1={data?.attributes?.digitally_empowered_title}
            subtitle1={data?.attributes?.digitally_empowered_subtitle}
            description1={data?.attributes?.digitally_empower_description}
            image1={
              data?.attributes?.digitally_empowered_side_image?.data?.attributes
                ?.url
            }
            title2={data?.attributes?.marketing_title}
            description2={data?.attributes?.marketing_short_title}
            slides={data?.attributes?.marketing_slider}
          />
          {data?.attributes?.show_get_in_touch && (
            <ReadyToBegin readyToBegin={readyToBegin} />
          )}
        </>
      )}
      {footerData !== null && <Footer footerData={footerData} />}
    </>
  );
}

export async function getServerSideProps(context) {
  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/homepage`)
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
