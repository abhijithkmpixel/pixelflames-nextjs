import React from "react";

export const AboutIntro = ({ title, description, columns }) => {
  return (
    <section className="about-intro">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
          </div>
          {columns?.map((column, index) => {
            return (
              <div key={index} className="col-md-6">
                <p>{column}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
