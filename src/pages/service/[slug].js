import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ReadyToBegin from "@/components/ReadyToBegin";
import StickyHeader from "@/components/StickyHeader";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const ServiceDetailPage = ({ data, headerData, footerData, readyToBegin }) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>Services - Pixelflames</title>
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
          pageDescription={data?.attributes?.short_description}
        />
      )}
      <PageHeader image={data?.attributes?.main_image?.data?.attributes?.url} />

      <section className="about-intro service-section color-white color-dark">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {data?.attributes?.secondary_title && (
                <h3>{data?.attributes?.secondary_title}</h3>
              )}
              {data?.attributes?.secondary_subtitle && (
                <h4>{data?.attributes?.secondary_subtitle}</h4>
              )}
              {data?.attributes?.secondary_description && (
                <p>{data?.attributes?.secondary_description}</p>
              )}
            </div>

            <div className="col-md-4 col-sm-4 ">
              <div className="well">
                {data?.attributes?.features?.title && (
                  <h5 className="text-white">
                    {data?.attributes?.features?.title}
                  </h5>
                )}
                <ul className="mt-5 pl-3">
                  {data?.attributes?.features?.body?.map((list, index) => {
                    return <li key={index}>{list?.title}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="col-md-8 col-sm-8">
              {data?.attributes?.service_details && (
                <div
                  className="mb-5 text-dark"
                  dangerouslySetInnerHTML={{
                    __html: data?.attributes?.service_details,
                  }}
                ></div>
              )}
              {data?.attributes?.get_in_touch_button && (
                <div className="custom-btn dark get-in-touch-service">
                  <Link href={data?.attributes?.get_in_touch_button?.href}>
                    {data?.attributes?.get_in_touch_button?.text}
                    <span></span> <i></i>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="related-projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12 title recent">
              <h2>
                Recent Project
                {data?.attributes?.related_projects?.data?.length > 1
                  ? "s"
                  : null}{" "}
              </h2>
            </div>
            {data?.attributes?.related_projects?.data?.map((p, index) => {
              return (
                <div className="col-md-4 col-sm-4 col-xs-12 related-items">
                  <Link href={`/project/${p?.attributes?.slug}`}>
                    <picture>
                      <img
                        src={
                          p?.attributes?.listing_image?.data?.attributes?.url
                        }
                        alt={p?.attributes?.name}
                      />
                    </picture>
                  </Link>
                  <br />
                  <br />
                  <div className="fig-name title">
                    <Link href={`/project/${p?.attributes?.slug}`}>
                      <h5>{p?.attributes?.name}</h5>
                    </Link>{" "}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {data?.attributes?.show_get_in_touch && (
        <ReadyToBegin readyToBegin={readyToBegin} />
      )}
      {footerData !== null && <Footer footerData={footerData} />}
    </>
  );
};

export default ServiceDetailPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const data = await axios
    .get(`${process.env.DOMAIN_URL}/api/service?slug=${params.slug}`)
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
