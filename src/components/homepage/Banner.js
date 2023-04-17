import React, { useEffect } from "react";

const Banner = ({ title, subtitle, bg, bgOverlay, button, sideImage }) => {
  return (
    <section className="customHomeBannerDev">
      <img src={bg?.data?.attributes?.url} alt="" className="bannerBgImage" />
      <img
        src={bgOverlay?.data?.attributes?.url}
        alt=""
        className="bannerBgOverlay"
      />
      <div className="headerContentWrapper">
        <div className="container">
          <div className="contentInnerWrap">
            <h1 className="d-none">Web Development Services Company Dubai</h1>
            <h2>{title}</h2>
            <h6>{subtitle}</h6>
            {button && (
              <a
                className="customCtaBtn"
                href={button?.href}
                target="<?php echo esc_attr( $link_target ); ?>"
              >
                {button?.text}
              </a>
            )}
          </div>
          <div className="rightSideImage">
            <img src={sideImage?.data?.attributes?.url} alt="laptop" className="" />

            <a
              className="customCtaBtn hoverBtn"
              href="<?php echo esc_url( $link_url ); ?>"
              target="<?php echo esc_attr( $link_target ); ?>"
            >
              link2
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
