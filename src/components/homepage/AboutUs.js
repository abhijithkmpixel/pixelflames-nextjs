import React from "react";

const AboutUs = () => {
  return (
    <section className="customAboutUsSection">
      <div className="container">
        <div className="row aboutUsInnerWrapper">
          <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
            <div className="aboutUsSideImage">
              <img
                src="<?php the_field('about_us_side_image_');?>"
                alt="asdasdad"
              />
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <h3>Who we are</h3>
            <p>
              Pixelflames is a prominent agency specializing in creating
              effective online solutions for businesses of all sizes. Our team
              of skilled professionals merges creativity with technical
              expertise to deliver top-notch services to clients. With offices
              located in Dubai, UAE, and India, we possess a worldwide reach,
              enabling us to assist clients across the UAE, KSA, Qatar, and
              beyond. We prioritize understanding the unique requirements and
              goals of our clients, collaborating closely with them to produce
              customized solutions that yield results. Our team excels at
              crafting exceptional web portals, landing pages, and app designs,
              as well as providing UI/UX strategy and CMS consultation services.
              Whether you require a website, mobile app, or custom e-commerce
              solution, we possess the skills and experience necessary to help
              you achieve success.
            </p>

            <a
              className="customCtaBtn redBtn"
              href="#"
              target="<?php echo esc_attr( $link_target ); ?>"
            >
              goto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
