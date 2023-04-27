import Footer from "@/components/Footer";
import HeadComponent from "@/components/HeadComponent";
import StickyHeader from "@/components/StickyHeader";
import axios from "axios";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";

const ContactUsPage = ({ headerData, footerData, data }) => {
  const [formLoading, setformLoading] = useState(false);
  const [firstNameError, setfirstNameError] = useState(false);
  const [lastNameError, setlastNameError] = useState(false);
  const [emailIdError, setemailIdError] = useState(false);
  const [subjectError, setsubjectError] = useState(false);
  const [messageError, setmessageError] = useState(false);

  const firstName = useRef();
  const lastName = useRef();
  const emailId = useRef();
  const subject = useRef();
  const message = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    let values = {
      firstName: firstName?.current?.value,
      lastName: lastName?.current?.value,
      email: emailId?.current?.value,
      subject: subject?.current?.value,
      message: message?.current?.value,
    };
    if (values.firstName == "") {
      setfirstNameError("Please fill this field!");
    } else if (values.firstName.length < 2) {
      setfirstNameError("Minimum character length is 2");
    } else {
      setfirstNameError(false);
    }

    if (values.lastName == "") {
      setlastNameError("Please fill this field!");
    } else if (values.lastName.length < 2) {
      setlastNameError("Minimum character length is 2");
    } else {
      setlastNameError(false);
    }
    if (values.email == "") {
      setemailIdError("Please fill this field!");
    } else if (
      !/^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63})$/i.test(
        values.email
      )
    ) {
      setemailIdError("Invalid email");
    } else {
      setemailIdError(false);
    }
    if (values.subject == "") {
      setsubjectError("Please fill this field!");
    } else {
      setsubjectError(false);
    }
    if (values.message == "") {
      setmessageError("Please fill this field!");
    } else {
      setmessageError(false);
    }
    // setTimeout(() => {
    if (
      firstNameError !== "" &&
      lastNameError !== "" &&
      emailIdError !== "" &&
      subjectError !== "" &&
      messageError !== ""
    ) {
      console.log(values);
      setformLoading(true);
    }
    // }, 1000);
  }
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
                  <form onSubmit={handleSubmit} noValidate>
                    <fieldset className="form_field">
                      <label htmlFor="name">
                        Name<span className="required-label">*</span>
                      </label>
                      <div className="row">
                        <div className="col-md-6 col-sm-12 ui-design-right">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            ref={firstName}
                            onChange={(e) =>
                              (firstName.current.value = e.target.value)
                            }
                          />
                          <label htmlFor="name" className="field-prefix">
                            First
                          </label>
                          {firstNameError && (
                            <span className="error">{firstNameError}</span>
                          )}
                        </div>
                        <div className="col-md-6 col-sm-12 ui-design-right">
                          <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            ref={lastName}
                            onChange={(e) =>
                              (lastName.current.value = e.target.value)
                            }
                          />
                          <label htmlFor="lastname" className="field-prefix">
                            Last
                          </label>
                          {lastNameError && (
                            <span className="error">{lastNameError}</span>
                          )}
                        </div>
                      </div>
                    </fieldset>
                    <fieldset className="form_field">
                      <label htmlFor="emailid">
                        Email<span className="required-label">*</span>
                      </label>
                      <input
                        type="email"
                        id="emailid"
                        name="emailid"
                        ref={emailId}
                        onChange={(e) =>
                          (emailId.current.value = e.target.value)
                        }
                      />
                      {emailIdError && (
                        <span className="error">{emailIdError}</span>
                      )}
                    </fieldset>
                    <fieldset className="form_field">
                      <label htmlFor="subject">
                        Subject<span className="required-label">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        ref={subject}
                        onChange={(e) =>
                          (subject.current.value = e.target.value)
                        }
                      />
                      {subjectError && (
                        <span className="error">{subjectError}</span>
                      )}
                    </fieldset>
                    <fieldset className="form_field">
                      <label htmlFor="message">
                        Comment or Message{" "}
                        <span className="required-label">*</span>
                      </label>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        ref={message}
                        onChange={(e) =>
                          (message.current.value = e.target.value)
                        }
                      />
                      {messageError && (
                        <span className="error">{messageError}</span>
                      )}
                    </fieldset>
                    <fieldset>
                      {/* <input type="submit" value={"Send Message"} /> */}
                      <button
                        type="submit"
                        disabled={formLoading}
                        className={formLoading && "btn"}
                      >
                        Send message
                        {formLoading && (
                          <div
                            className="spinner-border spinner-border-sm text-light"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        )}
                      </button>
                    </fieldset>
                  </form>
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
            <iframe src={data?.attributes?.map_address}></iframe>
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
