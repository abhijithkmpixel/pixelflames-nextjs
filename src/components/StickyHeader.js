import Link from "next/link";
import React, { useState } from "react";

const StickyHeader = ({
  logo,
  logoWhite,
  headerNumber,
  headerLinks,
  popupImage,
  headerPopupTitle,
  headerPopupDesc,
  mapLink,
  getInTouch,
  innerPage,
  pageTitle,
  pageDescription,
  button,
  pageBody,
  extLink,
}) => {
  const [navOpen, setnavOpen] = useState(false);
  const [mapOpen, setmapOpen] = useState(false);
  const [requestCallback, setrequestCallback] = useState(false);
  function toggleDesktopNav() {
    setnavOpen(navOpen ? false : true);
    if (typeof window !== "undefined") {
      document.querySelector("body").classList.toggle("overflow-hidden");
      document.querySelectorAll(".sub-menu").forEach((elm) => {
        elm.classList.remove("active");
      });
    }
  }
  function toggleMapView() {
    setmapOpen(mapOpen ? false : true);
  }
  function toggleRequestCallbackForm() {
    setrequestCallback(requestCallback ? false : true);
  }
  return (
    <>
      <header
        className={
          innerPage
            ? "header desktop_sticky_navbar inner_page"
            : "header desktop_sticky_navbar"
        }
      >
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
                    <Link href={link?.dropdown_href}>
                      {link?.dropdown_text}
                    </Link>
                    {link?.link.length > 0 && (
                      <ul className="sub-menu">
                        {link?.link?.map((link, index) => {
                          return (
                            <li key={index}>
                              <Link href={link?.href}>{link?.text}</Link>
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
          {getInTouch && (
            <button
              type="button"
              className="btn btn-primary get_in_touch_btn"
              data-toggle="modal"
              data-target="#get_in_touch"
              onClick={toggleRequestCallbackForm}
            >
              <span>{getInTouch?.text}</span>

              <img
                width="100%"
                height="100%"
                src={"/images/req_call.png"}
                alt="call"
              />
            </button>
          )}
          {/* <!-- header get in touch end --> */}

          {/* <!-- end main-menu --> */}
          <div className="hamburger-menu" id="hamburger-menu">
            <div className="burger">
              <div className="custom_hamburger" onClick={toggleDesktopNav}>
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

      <header className={innerPage ? "header inner_page" : "header"} id={"top"}>
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
                    <Link href={link?.dropdown_href}>
                      {link?.dropdown_text}
                    </Link>
                    {link?.link.length > 0 && (
                      <ul className="sub-menu">
                        {link?.link?.map((link, index) => {
                          return (
                            <li key={index}>
                              <Link href={link?.href}>{link?.text}</Link>
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
          {getInTouch && (
            <button
              type="button"
              className="btn btn-primary get_in_touch_btn"
              data-toggle="modal"
              data-target="#get_in_touch"
              onClick={toggleRequestCallbackForm}
            >
              <span>{getInTouch?.text}</span>

              <img
                width="100%"
                height="100%"
                src={"/images/req_call.png"}
                alt="call"
              />
            </button>
          )}
          {/* <!-- header get in touch end --> */}

          {/* <!-- end main-menu --> */}
          <div className={"hamburger-menu"} id="hamburger-menu">
            <div className="burger">
              <div className="custom_hamburger" onClick={toggleDesktopNav}>
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
        {pageTitle || pageDescription ? (
          <div className="page-title">
            <div className="container">
              {pageTitle && <h1 className="primary_heading">{pageTitle}</h1>}
              {pageDescription && (
                <h3 className="secondary_heading">{pageDescription}</h3>
              )}
              {button && (
                <div className="color-dark mt-4 color-white">
                  <div className="custom-btn dark get-in-touch-service">
                    <a className="scrollTo" href={button?.href}>
                      {button?.text}
                      <span></span> <i></i>
                    </a>
                  </div>
                </div>
              )}
              {extLink && (
                <Link
                  className="porfolio_link"
                  href={extLink?.href}
                  target="_blank"
                >
                  {extLink?.text}
                </Link>
              )}
            </div>
          </div>
        ) : null}
      </header>

      {/* desktop menu  */}
      <div className={navOpen ? "navigation-menu active" : "navigation-menu"}>
        <div className="site_logo">
          <div className="logo">
            {" "}
            <Link href="/">
              <img width="100%" height="100%" src={logo} alt="logo" />
            </Link>
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
            <ul>
              {headerLinks?.map((link, index) => {
                return (
                  <li
                    key={index}
                    className={
                      link?.link.length > 0 && "menu-item-has-children"
                    }
                    onClick={(e) => {
                      e.target
                        .querySelector(".sub-menu")
                        .classList.toggle("active");
                    }}
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
          {/* <!-- end side-menu --> */}
          <div className="sides external_link">
            <div id="map" className={mapOpen && "d-flex"}>
              <div className="close_btn" onClick={toggleMapView}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
                </svg>
              </div>
              <iframe
                src={mapLink}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
              ></iframe>
            </div>

            <figure>
              <picture>
                <img src={popupImage} alt="popup image" />
              </picture>
              <div id="#map" onClick={toggleMapView}>
                <img
                  src="/images/icon-map-marker.svg"
                  alt="location marker icon"
                />
              </div>
            </figure>
          </div>
          {/* <!-- end sides --> */}
          <div className="sides external_link">
            <h6> {headerPopupTitle}</h6>
            <div dangerouslySetInnerHTML={{ __html: headerPopupDesc }}></div>
          </div>
          {/* <!-- end sides --> */}
        </div>
        {/* <!-- end inner --> */}
      </div>

      <div
        className={
          requestCallback
            ? "modal fade get_in_touch_form d-block opacity-1"
            : "modal fade get_in_touch_form"
        }
        id="get_in_touch"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="get_in_touch"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              title="Close"
              onClick={toggleRequestCallbackForm}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-body">
              <h6>Request a call back</h6>
              <form>
                <div className="row align-items-center">
                  <div className="col-md-7 col-sm-12">
                    <fieldset className="form_field">
                      <label htmlFor="name">
                        Name<span>*</span>
                      </label>
                      <input type="text" id="name" name="name" />
                    </fieldset>
                    <fieldset className="form_field">
                      <label htmlFor="email">
                        Email<span>*</span>
                      </label>
                      <input type="email" id="email" name="email" />
                    </fieldset>
                    <fieldset className="form_field">
                      <label htmlFor="phone">
                        Phone<span>*</span>
                      </label>
                      <input type="tel" id="phone" name="phone" />
                    </fieldset>
                    <fieldset className="mt-3 mb-2">
                      <input type="submit" value={"SEND"} />
                    </fieldset>
                  </div>
                  <div className="col-md-5 col-sm-12">
                    <figure>
                      <img
                        src="/images/capacitive-touch-sensing-icon.png"
                        alt="touch icon"
                      />
                    </figure>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyHeader;
