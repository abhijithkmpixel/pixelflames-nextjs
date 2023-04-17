import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonials pt_100" data-scroll data-scroll-repeat>
      <div className="container">
        <span className="quote-icon"></span>
        <div className="titles ">
          <h6>Glowing feedback from happy customers</h6>
          <p>Client success stories: Hear what our customers are saying</p>
        </div>
        <div className="row ">
          <div className="col-md-12">
            <div className="testimonial-wrap testimonial-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide testimonial-item">
                  {/* <?php if($image) : ?> */}
                  {/* <div className="thumb-wrap">
                    <img
                      src="/images/left-quote.png"
                      alt="left"
                    />
                  </div> */}
                  {/* <?php endif; ?> */}
                  <div className="content-wrap">
                    <div className="testimonials_quote">
                      <span className="quote_left">
                        <img
                          src="/images/left-quote.png"
                          alt="left quote"
                        />
                      </span>
                      <p>asdasdasdad</p>
                      <span className="quote_right">
                        <img
                          src="/images/right-quote.png"
                          alt="right quote"
                        />
                      </span>
                    </div>
                    <span className="author-details"> asdasdasds </span>
                  </div>
                </div>
                {/* <?php endwhile; ?>   */}
              </div>
              <div className="testimonial-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
