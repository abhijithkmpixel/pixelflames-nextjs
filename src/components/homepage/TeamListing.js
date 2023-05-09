import Image from "next/image";
import React from "react";

const TeamListing = ({ title, description, team }) => {
  return (
    <section className="team" data-color="dark">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="titles">
              {title && <h6>{title}</h6>}
              {description && <p>{description}</p>}
            </div>
          </div>
          {team?.map((m, index) => {
            return (
              <div className="col-lg-4 col-md-6" key={index}>
                <figure>
                  <picture>
                    <Image
                      src={m?.image?.data?.attributes?.url}
                      alt={"member" + m.name}
                      width={370}
                      height={447}
                    />
                  </picture>
                  <figcaption>
                    {m?.name && <h5>{m?.name}</h5>}
                    {m?.designation && <span>{m?.designation}</span>}
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamListing;
