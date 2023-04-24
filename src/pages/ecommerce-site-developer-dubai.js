import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import StickyHeader from "@/components/StickyHeader";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const EcomerceSiteDeveloperDubaiPage = ({ data, headerData, footerData }) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>
          Ecommerce site developer Dubai | Web development company Dubai
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
          // getInTouch={headerData?.get_in_touch_button}
          titleDark={true}
          pageTitle={data?.attributes?.title}
          // pageDescription={data?.attributes?.portfolio_description}
        />
      )}
      <PageHeader image={data?.attributes?.image?.data?.attributes?.url} />
      {data?.attributes?.page_buider &&
        data?.attributes?.page_buider?.length > 0 && (
          <section className="about-intro service-section pb-0">
            <div className="container">
              <div className="row">
                {data?.attributes?.page_buider?.map((p, index) => {
                  if (p?.__component == "portfolio.editor") {
                    return (
                      <div
                        key={index}
                        className="col-12"
                        dangerouslySetInnerHTML={{ __html: p?.description }}
                      ></div>
                    );
                  } else if (p?.__component == "portfolio.image") {
                    return (
                      <div className="col-12" key={index}>
                        <img
                          src={p?.image?.data?.attributes?.url}
                          alt="image"
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </section>
        )}
      {data?.attributes?.footer_get_in_touch_title && (
        <section
          className="work-with-us color-dark color-white"
          data-color="dark"
        >
          <div className="container ">
            {data?.attributes?.footer_get_in_touch_subtitle && (
              <h6> {data?.attributes?.footer_get_in_touch_subtitle}</h6>
            )}
            {data?.attributes?.footer_get_in_touch_title && (
              <h2>{data?.attributes?.footer_get_in_touch_title}</h2>
            )}
            {data?.attributes?.footer_get_in_touch_mail_id && (
              <p>
                <a
                  href={`mailto:${data?.attributes?.footer_get_in_touch_mail_id}`}
                >
                  {data?.attributes?.footer_get_in_touch_mail_id}
                </a>
              </p>
            )}
            {data?.attributes?.get_in_touch_button && (
              <div className="custom-btn dark">
                <Link
                  href={data?.attributes?.get_in_touch_button?.href}
                  target="_self"
                >
                  {data?.attributes?.get_in_touch_button?.text}
                  <span></span> <i></i>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
      {footerData !== null && <Footer footerData={footerData} />}
    </>
  );
};

export default EcomerceSiteDeveloperDubaiPage;

export async function getServerSideProps(context) {
  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/ecommercesitedevelopment`)
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
