import React from "react";

const AboutUs = ({ title, description, image, button }) => {
  return (
    <section className="customAboutUsSection">
      <div className="container">
        <div className="row aboutUsInnerWrapper">
          <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
            <div className="aboutUsSideImage">
              <img src={image} alt="pixelflames " />
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <h3>{title}</h3>
            <p>{description}</p>
            {button && (
              <a className="customCtaBtn redBtn" href={button?.href}>
                {button?.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
