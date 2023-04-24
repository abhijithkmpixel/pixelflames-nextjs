import React from "react";
import ServiceCard from "./cards/ServiceCard";

const FeaturedServicesRow = ({ services }) => {
  return (
    <div className="color-dark">
      <section className="featured-services pt-0" data-color="orange">
        <div className="container">
          <div className="row">
            {/* <div className="col-12">
            <div className="titles">
              <h6>asdasdasdsad</h6>
              <p>asdasdasd</p>
            </div>
          </div> */}

            {services?.data?.map((service, index) => {
              return (
                <ServiceCard
                  key={index}
                  title={service?.attributes?.name}
                  image={
                    service?.attributes?.listing_image?.data?.attributes?.url
                  }
                  slug={service?.attributes?.slug}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedServicesRow;
