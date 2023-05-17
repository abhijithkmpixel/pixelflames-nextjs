import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="swiper_button_next" onClick={onClick}>
      <span></span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="swiper_button_prev" onClick={onClick}>
      <span></span>{" "}
    </div>
  );
}
const Offgrid = ({
  title1,
  subtitle1,
  description1,
  image1,
  title2,
  description2,
  slides,
}) => {
  const sliderRef = useRef();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    slide: "swiper-slide",
    nextArrow: <SampleNextArrow onClick={sliderRef?.current?.slickNext()} />,
    prevArrow: <SamplePrevArrow onClick={sliderRef?.current?.slickPrev()} />,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="off_grid_column" data-scroll data-scroll-repeat>
      <div className="container">
        <div className="grid_item row">
          <div className="col-lg-7">
            <div className="detail_content ">
              {title1 && <h4>{title1}</h4>}
              {subtitle1 && <h5>{subtitle1}</h5>}
              {description1 && description1}
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="thumbnail_image min_570"
              data-scroll
              data-scroll-speed="2"
            >
              <Image src={image1} alt={title1} width={488} height={731} />
            </div>
          </div>
        </div>
        <div className="grid_item row">
          <div className="col-12">
            <div className="container Pading_Reduce">
              <div className="detail_content ">
                {title2 && <h4>{title2}</h4>}
                {description2 && description2}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="slider">
              <div className="custom_swiper ">
                <Slider
                  {...settings}
                  className="swiper-wrapper"
                  ref={sliderRef}
                >
                  {slides?.map((slide, index) => {
                    return (
                      <div
                        className="swiper-slide"
                        data-background={slide?.image?.data?.attributes?.url}
                        style={{
                          backgroundImage: slide?.image?.data?.attributes?.url,
                        }}
                        key={index}
                      >
                        <Image
                          src={slide?.image?.data?.attributes?.url}
                          alt={
                            slide?.image?.data?.attributes?.alternativeText
                              ? slide?.image?.data?.attributes?.alternativeText
                              : slide?.title
                          }
                          width={570}
                          height={570}
                        />
                        <div className="slide-inner text-white">
                          <h4 className="text-white">{slide?.title}</h4>
                          {slide?.subtitle}
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offgrid;
