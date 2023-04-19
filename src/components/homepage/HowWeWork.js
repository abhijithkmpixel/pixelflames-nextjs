import React from "react";

const HowWeWork = ({ title, description, works }) => {
  return (
    <section className="main-services work-flow" data-color="dark">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="titles">
              {title && <h6>{title}</h6>}
              {description && <p>{description}</p>}
            </div>
          </div>
          {works?.map((work, index) => {
            return (
              <div className="col-lg-3 col-md-6" key={index}>
                <figure className="">
                  <img
                    src={work?.icon?.data?.attributes?.url}
                    alt={work?.title}
                  />
                </figure>
                <article data-mh="work-flow">
                  <span>{index <= 9 ? `0${index + 1}` : index + 1}</span>
                  <h4>{work?.title}</h4>
                  <p>{work?.subtitle}</p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
