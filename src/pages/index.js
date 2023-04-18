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
  console.log(headerData);
  return (
    <>
      <StickyHeader
        topHeader={false}
        additionalClass={"desktop_sticky_navbar"}
        logo={headerData?.header_image?.data?.attributes?.url}
        logoWhite={headerData?.header_logo_white?.data?.attributes?.url}
        headerNumber={headerData?.header_contact_number}
        headerLinks={headerData?.header_links}
        popupImage={headerData?.header_popup_image?.data?.attributes?.url}
      />
      <StickyHeader
        topHeader={true}
        setId={"top"}
        logo={headerData?.header_image?.data?.attributes?.url}
        logoWhite={headerData?.header_logo_white?.data?.attributes?.url}
        headerNumber={headerData?.header_contact_number}
        headerLinks={headerData?.header_links}
        popupImage={headerData?.header_popup_image?.data?.attributes?.url}

      />

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
      <ReadyToBegin readyToBegin={readyToBegin} />
      <Footer footerData={footerData} />
    </>
  );
}

export async function getServerSideProps(context) {
  const data = await axios
    .get(
      `${process.env.API_URL}/api/homepage?populate[0]=banner_backgound_image&populate[1]=banner_background_image_overlay&populate[2]=banner_cta&populate[3]=banner_cta.href&populate[4]=banner_cta.text&populate[5]=side_image&populate[6]=side_image_link&populate[7]=about_us_side_image&populate[8]=about_get_in_touch_button&populate[9]=our_portfolio_see_all_button&populate[10]=portfolios&populate[11]=portfolios.listing_image&populate[12]=testimonial&populate[13]=digitally_empowered_side_image&populate[14]=marketing_slider&populate[15]=marketing_slider.image`
    )
    .then(function (response) {
      // handle success
      return response?.data?.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  const readyToBegin = await axios
    .get(`${process.env.API_URL}/api/ready-to-begin?populate=*`)
    .then(function (response) {
      // handle success
      return response?.data?.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  const headerData = await axios
    .get(
      `${process.env.API_URL}/api/header?populate[0]=header_logo_white&populate[1]=header_links.link&populate[2]=header_image&populate[3]=header_contact_number&populate[4]=side_image_link&populate[5]=get_in_touch_button&populate[6]=header_popup_image`
    )
    .then(function (response) {
      // handle success
      return response?.data?.data?.attributes;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  const footerData = await axios
    .get(
      `${process.env.API_URL}/api/footer?populate[0]=footer_logo&populate[1]=locations&populate[2]=say_hello&populate[3]=footer_links&populate[4]=links`
    )
    .then(function (response) {
      // handle success
      return response?.data?.data?.attributes;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  return {
    props: {
      data: data,
      headerData: headerData,
      footerData: footerData,
      readyToBegin: readyToBegin,
    },
  };
}
