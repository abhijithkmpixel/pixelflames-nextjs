import Footer from "@/components/Footer";
import HeadComponent from "@/components/HeadComponent";
import StickyHeader from "@/components/StickyHeader";
import axios from "axios";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { message } from "antd";
import GetInTouchWithUsForm from "@/components/GetInTouchWithUsForm";

const ContactUsPage = ({ headerData, footerData, data }) => {
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
          pageTitle={data?.attributes?.title}
          getInTouch={headerData?.get_in_touch_button}
          pageBody={data?.attributes?.description}
          pageDescription={data?.attributes?.subtitle}
        />
      )}
      <div className="external_link page-template-page-contact mb-2">
        <div className="container">
          <p
            dangerouslySetInnerHTML={{ __html: data?.attributes?.description }}
          ></p>
          <div className="row">
            <div className="col-md-7">
              <div className="contact-form-wrapper contact-form-page">
                <div className="contact-form">
                  <GetInTouchWithUsForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data !== null && (
        <>
          <div className="contact">
            <div className="container">
              <div className="row">
                {data?.attributes?.addresses?.map((address, index) => {
                  return (
                    <div className="col-lg-4 col-md-6 " key={index}>
                      {address?.title !== null ? (
                        <h5>{address?.title}</h5>
                      ) : (
                        <h5 className="empty_add_title"></h5>
                      )}

                      <address
                        dangerouslySetInnerHTML={{
                          __html: address?.description,
                        }}
                      ></address>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <section className="page-header contact-map">
            <iframe src={data?.attributes?.map_address} loading="lazy"></iframe>
          </section>
        </>
      )}
      {footerData !== null && <Footer footerData={footerData} />}
    </>
  );
};

export default ContactUsPage;

export async function getServerSideProps(context) {
  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/contactpage`)
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
