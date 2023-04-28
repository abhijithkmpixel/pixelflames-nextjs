import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Banner = ({
  title,
  subtitle,
  bg,
  bgOverlay,
  button,
  sideImage,
  sideImageLink,
}) => {
  return (
    <section className="customHomeBannerDev">
      <img
        src={bg?.data?.attributes?.url}
        alt="background"
        className="bannerBgImage"
      />

      <img
        src={bgOverlay?.data?.attributes?.url}
        alt="banner image overlay image"
        className="bannerBgOverlay"
      />
      <div className="headerContentWrapper">
        <div className="container">
          <div className="contentInnerWrap">
            <h1 className="d-none">Web Development Services Company Dubai</h1>
            <h2>{title}</h2>
            <h6>{subtitle}</h6>
            {button && (
              <Link
                className="customCtaBtn"
                href={button?.href !== null ? button?.href : "#"}
              >
                {button?.text}
              </Link>
            )}
          </div>
          <div className="rightSideImage">
            <img
              src={sideImage?.data?.attributes?.url}
              alt="laptop"
              className=""
            />
            {sideImageLink && (
              <Link
                className="customCtaBtn hoverBtn"
                href={sideImageLink?.href !== null ? sideImageLink?.href : "#"}
              >
                {sideImageLink?.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
