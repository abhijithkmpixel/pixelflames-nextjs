import React, { useState } from "react";
import PortfolioListCard from "../cards/PortfolioListCard";
import PortfolioListing from "./PortfolioListing";
import PortfolioContactModule from "./PortfolioContactModule";
import Link from "next/link";

const OurWorksList = ({ title, description, button, portfolios }) => {
  const [contactFormOpen, setcontactFormOpen] = useState(false);
  function toggleContactForm() {
    setcontactFormOpen(contactFormOpen ? false : true);
  }
  return (
    <section className="works">
      <div className="container">
        <div className="titles">
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
          {button && (
            <div className="custom-btn">
              <a
                data-fancybox="contactFormPopup1"
                data-src="#contactFormPopup1"
                onClick={toggleContactForm}
              >
                {button?.text}
                <span></span> <i></i>
              </a>
            </div>
          )}
        </div>
        <PortfolioContactModule
          active={contactFormOpen}
          toggleState={toggleContactForm}
        />
        <ul>
          {portfolios?.map((portfolio, index) => {
            return (
              <li>
                <PortfolioListCard
                  title={portfolio?.attributes?.name}
                  description={portfolio?.attributes?.title_description}
                  image={
                    portfolio?.attributes?.listing_image?.data?.attributes?.url
                  }
                  client={portfolio?.attributes?.client_info}
                  slug={portfolio?.attributes?.slug}
                />
              </li>
            );
          })}
        </ul>
      </div>
      {/* <!-- end container -->  */}
    </section>
  );
};

export default OurWorksList;
