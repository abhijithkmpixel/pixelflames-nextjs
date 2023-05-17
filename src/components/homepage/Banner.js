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
      <Image
        src={bg?.data?.attributes?.url}
        alt={
          bg?.data?.attributes?.alternativeText
            ? bg?.data?.attributes?.alternativeText
            : "Banner background image"
        }
        className="bannerBgImage"
        width={1920}
        height={572}
        priority
      />
      <Image
        src={bgOverlay?.data?.attributes?.url}
        alt="banner image overlay image"
        className="bannerBgOverlay"
        width={1920}
        height={572}
        priority
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
            <Image
              src={sideImage?.data?.attributes?.url}
              alt={
                sideImage?.data?.attributes?.alternativeText
                  ? sideImage?.data?.attributes?.alternativeText
                  : "banner side featured image"
              }
              width={480}
              height={514}
              priority
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
