import React from "react";
import ServiceCard from "./cards/ServiceCard";

const FeaturedServiceStatic = ({ title, description, services }) => {
  return (
    <div className="color-dark pt-5 mt-5 page-template-page-ecommerce-development-services">
      <section className="featured-services pt-0" data-color="orange">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="titles">
                {title && <h6>{title}</h6>}
                {description && <p>{description}</p>}
              </div>
            </div>

            {services?.map((service, index) => {
              return (
                <div className="col-lg-3 col-md-6" key={index}>
                  <figure className="">
                    <div className="figcaption-inner">
                      {service?.icon ? (
                        <img
                          src={service?.icon?.data?.attributes?.url}
                          alt={service?.title}
                        />
                      ) : (
                        <img
                          src={service?.image?.data?.attributes?.url}
                          alt={service?.title}
                        />
                      )}
                      <figcaption>
                        <span>
                          {index < 10 ? "0" : null}
                          {index}
                        </span>
                        <h4>{service?.title}</h4>
                      </figcaption>
                    </div>
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedServiceStatic;
