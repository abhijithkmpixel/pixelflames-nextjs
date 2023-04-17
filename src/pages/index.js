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

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <Banner
        title={data?.attributes?.banner_title}
        subtitle={data?.attributes?.banner_subtitle}
        bg={data?.attributes?.banner_backgound_image}
        bgOverlay={data?.attributes?.banner_background_image_overlay}
        button={data?.attributes?.banner_cta}
        sideImage={data?.attributes?.side_image}
      />
      <AboutUs />
      <PortfolioListing />
      <Testimonials />
      <Offgrid />
      <ReadyToBegin />
    </>
  );
}

export async function getServerSideProps(context) {
  const data = await axios
    .get(
      `${process.env.API_URL}/api/homepage?populate[0]=banner_backgound_image&populate[1]=banner_background_image_overlay&populate[2]=banner_cta&populate[3]=banner_cta.href&populate[4]=banner_cta.text&populate[5]=side_image`
    )
    .then(function (response) {
      // handle success
      return response?.data?.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  return {
    props: {
      data: data,
    },
  };
}
