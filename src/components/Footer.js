import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = ({ footerData }) => {
  function scrolltotop() {
    if (typeof window != undefined) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
  return (
    <footer className="footer">
      <div className="scroll_to_top" onClick={scrolltotop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-up"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
          />
        </svg>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 ">
            <figure className="logo">
              <Image
                src={footerData?.footer_logo?.data?.attributes?.url}
                alt={
                  footerData?.footer_logo?.data?.attributes?.alternativeText
                    ? footerData?.footer_logo?.data?.attributes?.alternativeText
                    : "image"
                }
                width={160}
                height={42}
              />
            </figure>
          </div>
          {/* <!-- end col-5 -->  */}
          <div className="col-lg-4 col-md-6 ">
            <h5>{footerData?.locations?.title}</h5>
            <div
              dangerouslySetInnerHTML={{
                __html: footerData?.locations?.description,
              }}
            ></div>
          </div>
          {/* <!-- end col-4 --> */}
          <div className="col-lg-3 offset-lg-1 col-md-6 ">
            <h5>{footerData?.say_hello?.title}</h5>
            <div
              dangerouslySetInnerHTML={{
                __html: footerData?.say_hello?.description,
              }}
            ></div>
            <div className="mr-5 mt-5 pt-5">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.goodfirms.co/"
              >
                <Image
                  style={{ width: 243 }}
                  src="https://assets.goodfirms.co/badges/normal-badge/view-profile.svg"
                  title="View Our Profile on GoodFirms"
                  alt="View Our Profile on GoodFirms"
                  width={243}
                  height={190}
                />
              </a>
            </div>
          </div>

          <div className="col-12 ">
            <div className="sub-footer mt-4">
              <h5>{footerData?.quick_links_title}</h5>

              <ul className="quicK_links">
                {footerData?.links?.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link href={link?.href !== null ? link?.href : "#"}>
                        {link?.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="col-12 ">
            <div className="sub-footer">
              <ul>
                {footerData?.footer_links?.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link href={link?.href !== null ? link?.href : "#"}>
                        {link?.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <span>
                {new Date().getFullYear()} {footerData?.copy_right_text}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
