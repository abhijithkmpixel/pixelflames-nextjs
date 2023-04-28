import Link from "next/link";
import React from "react";

const PortfolioListCard = ({
  title,
  description,
  image,
  client,
  slug,
  technology,
}) => {
  return (
    <div className="project-box">
      <figure className="project-image">
        <Link href={`/project/${slug}`}>
          <picture>
            <img src={image} alt={title} />
          </picture>
        </Link>
      </figure>
      <div className="project-content">
        <h3>
          <Link href={`/project/${slug}`}>{title} </Link>
        </h3>
        <h6> Client : {client}</h6>
        {technology && <small className="mb-2">{technology}</small>}
        {description && <span>{description}</span>}
      </div>
    </div>
  );
};

export default PortfolioListCard;
