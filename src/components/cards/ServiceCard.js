import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ title, image, slug, index }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <Link href={`/service/${slug}`}>
        <figure className="">
          <div className="figcaption-inner">
            <Image src={image} alt={title} width={80} height={80} />
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
