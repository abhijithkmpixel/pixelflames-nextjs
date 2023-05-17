import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ErrorPage = () => {
  const [headerData, setheaderData] = useState(null);
  const [footerData, setfooterData] = useState(null);
  useEffect(() => {
    getData();

    return () => {};
  }, []);
  const getData = async () => {
    const data = await axios
      .get(`api/homepage`)
      .then(function (response) {
        setheaderData(response?.data?.headerData);
        setfooterData(response?.data?.footerData);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <>
      <Head>
        <title>Error 500</title>
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
        />
      )}
      <section className="page-404 ">
        <div className="container">
          <div className="d-flex justofl-content-center align-items-center flex-column">
            <h1>500</h1>
            <center>
              <h3>Oops! Internal server error.</h3>
            </center>
          </div>
        </div>
      </section>
      {footerData !== null && <Footer footerData={footerData} />}
    </>
  );
};

export default ErrorPage;
