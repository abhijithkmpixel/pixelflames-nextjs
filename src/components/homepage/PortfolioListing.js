import Image from "next/image";
import Link from "next/link";
import React from "react";

const PortfolioListing = ({ title, button, portfolios }) => {
  return (
    <section className="portfolio_listing">
      <div className="container">
        <div className="titles d-flex flex-row align-items-end justify-content-between p-0">
          {title && <h2>{title}</h2>}

          {button && (
            <Link
              href={button?.href !== null ? button?.href : "#"}
              className="goto_inner min_990"
            >
              {button?.text}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </Link>
          )}
        </div>
        <div className="row porfolio_list_row">
          {portfolios?.map((portfolio, index) => {
            return (
              <div
                className="col-12 col-md-6 col-lg-4 portfolio_list_cards"
                key={index}
              >
                <Link href={`/project/${portfolio?.attributes?.slug}`}>
                  <figure>
                    <Image
                      src={
                        portfolio?.attributes?.listing_image?.data?.attributes
                          ?.url
                      }
                      alt={portfolio?.attributes?.name}
                      width={363}
                      height={525}
                    />
                  </figure>
                  <h5>{portfolio?.attributes?.name}</h5>
                  <span>Client: {portfolio?.attributes?.client_info}</span>

                  <small>{portfolio?.attributes?.description}</small>
                </Link>
              </div>
            );
          })}
        </div>
        {button && (
          <Link
            href={button?.href !== null ? button?.href : "#"}
            className="goto_inner max_990"
          >
            {button?.text}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Link>
        )}
      </div>
    </section>
  );
};

export default PortfolioListing;
