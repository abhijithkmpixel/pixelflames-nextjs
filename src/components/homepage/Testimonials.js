import React from "react";
import Slider from "react-slick";

const Testimonials = ({ title, subtitle, testimonials }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="testimonials pt_100" data-scroll data-scroll-repeat>
      <div className="container">
        <span className="quote-icon"></span>
        <div className="titles ">
          {title && <h6>{title}</h6>}
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className="row ">
          <div className="col-md-12">
            <div className="testimonial-wrap testimonial-slider">
              <Slider {...settings} className="swiper-wrapper">
                {testimonials?.map((content, index) => {
                  return (
                    <div className="swiper-slide testimonial-item" key={index}>
                      <div className="content-wrap">
                        <div className="testimonials_quote">
                          <span className="quote_left">
                            <img
                              src="/images/left-quote.png"
                              alt="left quote"
                            />
                          </span>
                          <p>{content?.testimonial_description}</p>
                          <span className="quote_right">
                            <img
                              src="/images/right-quote.png"
                              alt="right quote"
                            />
                          </span>
                        </div>
                        <span className="author-details">
                          {" "}
                          {content?.author_info}{" "}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
