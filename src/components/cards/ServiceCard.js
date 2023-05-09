import Link from "next/link";
import React from "react";

const ServiceCard = ({ title, image, slug, index }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <Link href={`/service/${slug}`}>
        <figure className="">
          <div className="figcaption-inner">
            <img src={image} alt={title} />
            <figcaption>
              <span>
                {index < 10 ? "0" : null}
                {index + 1}
              </span>
              <h4>{title}</h4>
            </figcaption>
          </div>
        </figure>
      </Link>
    </div>
  );
};

export default ServiceCard;
