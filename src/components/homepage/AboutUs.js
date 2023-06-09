import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = ({ title, description, image, button }) => {
  return (
    <section className="customAboutUsSection">
      <div className="container">
        <div className="row aboutUsInnerWrapper">
          <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
            <div className="aboutUsSideImage">
              <Image src={image} alt="pixelflames" width={164} height={164} />
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <h3>{title}</h3>
            <p>{description}</p>
            {button && (
              <Link
                className="customCtaBtn redBtn"
                href={button?.href !== null ? button?.href : "#"}
              >
                {button?.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
