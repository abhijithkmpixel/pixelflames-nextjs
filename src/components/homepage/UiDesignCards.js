import Image from "next/image";
import React from "react";

const UiDesignCards = ({ title, description, cards }) => {
  return (
    <div className="page-template-page-uidesign">
      <section className="ui-design">
        <div className="container">
          <div className="section-title">
            {title && <h2 className="title-text titles">{title}</h2>}
            {description && (
              <div className="inner-text">
                <p>{description}</p>
              </div>
            )}
          </div>
          <div className="row">
            {cards?.map((card, index) => {
              return (
                <div className="col-12 col-md-6 col-lg-4" key={index}>
                  <div className="card card-body">
                    <Image
                      className="card-img-top"
                      src={card?.icon?.data?.attributes?.url}
                      alt="Card image cap"
                      width={93}
                      height={93}
                    />
                    <div className="card-body card-wrapper">
                      <h3 className="title_sec">{card?.title}</h3>
                      <p className="card-text">{card?.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UiDesignCards;
