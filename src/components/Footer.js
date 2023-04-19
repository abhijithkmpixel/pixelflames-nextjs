import React from "react";

const Footer = ({ footerData }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 ">
            <figure className="logo">
              <img
                src={footerData?.footer_logo?.data?.attributes?.url}
                alt="image"
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
                <img
                  style={{ width: 243 }}
                  src="https://assets.goodfirms.co/badges/normal-badge/view-profile.svg"
                  title="View Our Profile on GoodFirms"
                  alt="View Our Profile on GoodFirms"
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
                      <a href={link?.href}>{link?.text}</a>
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
                      <a href={link?.href}>{link?.text}</a>
                    </li>
                  );
                })}
              </ul>
              <span>
                {" "}
                2023 Pixelflames Technologies Pvt Ltd - All rights Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
