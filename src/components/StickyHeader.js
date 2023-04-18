import Link from "next/link";
import React, { useState } from "react";

const StickyHeader = ({
  additionalClass,
  topHeader,
  setId,
  logo,
  logoWhite,
  headerNumber,
  headerLinks,
  popupImage
}) => {
  const [navOpen, setnavOpen] = useState(false);
  function toggleDesktopNav() {
    setnavOpen(navOpen ? false : true);
  }
  return (
    <>
      <header
        className={`header ${additionalClass ? additionalClass : ""}`}
        id={setId && setId}
      >
        {topHeader && (
          <div className="top_header">
            <ul className="contact_phone external_link">
              {headerNumber?.map((number, index) => {
                return (
                  <li key={index}>
                    <a href={number?.text}>{number?.text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <nav className={navOpen ? "navbar light" : "navbar"}>
          <div className="logo">
            {" "}
            <Link href="/">
              <img width="100%" height="100%" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="logo light">
            {" "}
            <Link href="/">
              <img width="100%" height="100%" src={logoWhite} alt="logo" />
            </Link>
          </div>
          {/* <!-- end logo --> */}
          {headerNumber?.map((number, index) => {
            return (
              <div key={index} className="phone contact_phone_desk">
                {number?.text}{" "}
              </div>
            );
          })}

          {/* <!-- end phone --> */}
          <div className="main-menu">
            <ul>
              {headerLinks?.map((link, index) => {
                return (
                  <li
                    key={index}
                    className={
                      link?.link.length > 0 && "menu-item-has-children"
                    }
                  >
                    <a href={link?.dropdown_href}>{link?.dropdown_text}</a>
                    {link?.link.length > 0 && (
                      <ul className="sub-menu">
                        {link?.link?.map((link, index) => {
                          return (
                            <li key={index}>
                              <a href={link?.href}>{link?.text}</a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* <!-- header get in touch --> */}
          <button
            type="button"
            className="btn btn-primary get_in_touch_btn"
            data-toggle="modal"
            data-target="#get_in_touch"
          >
            <span>get i touch</span>

            <img
              width="100%"
              height="100%"
              src={"/images/req_call.png"}
              alt="call"
            />
          </button>
          {/* <!-- header get in touch end --> */}

          {/* <!-- end main-menu --> */}
          <div className={"hamburger-menu"} id="hamburger-menu">
            <div className="burger">
              <div className="custom_hamburger">
                <span className="hamburger_line"></span>
                <span className="hamburger_line"></span>
                <span className="hamburger_line"></span>
              </div>
              <div className="location_btn" onClick={toggleDesktopNav}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fillRule="currentColor"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </div>
            </div>
            {/* <!-- end burger -->  */}
          </div>
          {/* <!-- end hamburger-menu -->  */}
          <div className="closeburger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </nav>
      </header>

      {/* desktop menu  */}
      <div className={navOpen ? "navigation-menu active" : "navigation-menu"}>
        <div className="site_logo">
          <div className="logo">
            {" "}
            <a href="<?php echo home_url(); ?>">
              <img
                width="100%"
                height="100%"
                src={logo}
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className="close_btn" onClick={toggleDesktopNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </div>
        <div className="inner">
          <div className="side-menu">
      
          </div>
          {/* <!-- end side-menu --> */}
          <div className="sides external_link">
    
            <div id="map">
              {/* <iframe
                src="<?php echo $map_iframe_src; ?>"
                width="100%"
                height="450"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
              ></iframe> */}
            </div>
      
            <figure>
              <picture>
                <img
                  src={popupImage}
                  alt=""
                />
              </picture>
              <a href="#map" data-fancybox>
                <img
                  src="<?php bloginfo('template_directory');?>/images/icon-map-marker.svg"
                  alt="Image"
                />
              </a>
            </figure>
          </div>
          {/* <!-- end sides --> */}
          <div className="sides external_link">
            <h6> asdasdsdd</h6>
            asdasdasdasd
          </div>
          {/* <!-- end sides --> */}
        </div>
        {/* <!-- end inner --> */}
      </div>
    </>
  );
};

export default StickyHeader;
