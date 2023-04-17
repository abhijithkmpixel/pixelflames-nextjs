import React from "react";

const Header = () => {
  return (
    <>
      <header className="header desktop_sticky_navbar">
        <nav className="navbar">
          <div className="logo">
            <a href="#">
              <img
                width="100%"
                height="100%"
                src="https://pixelflames.com/wp-content/uploads/2023/02/Group-18red-black.svg"
                alt="logo"
              />
            </a>
          </div>
          <div className="logo light">
            <a href="#">
              <img
                width="100%"
                height="100%"
                src="https://pixelflames.com/wp-content/uploads/2023/02/new.png"
                alt="logo"
              />
            </a>
          </div>
          {/* <!-- end logo --> */}
          <div className="phone contact_phone_desk"> T:97876876 </div>
          <div className="phone contact_phone_desk"> T:097489656759 </div>
          {/* <!-- end phone --> */}
          <div className="main-menu">
            <ul>
              <li>
                <a href="#">ABout us</a>
              </li>
            </ul>
          </div>

          {/* <!-- header get in touch --> */}
          <button
            type="button"
            className="btn btn-primary get_in_touch_btn"
            data-toggle="modal"
            data-target="#get_in_touch"
          >
            <span>get in touch</span>
            {/* <?php $call_back_icon_mob = get_field('call_back_icon_mob', 'option'); ?> */}
            {/* <?php if($call_back_icon_mob) : ?> */}
            <img
              width="100%"
              height="100%"
              src="<?php echo $call_back_icon_mob['url']; ?>"
              alt="<?php echo $call_back_icon_mob['alt']; ?>"
            />
            {/* <?php endif; ?> */}
          </button>
          {/* <!-- header get in touch end --> */}

          {/* <!-- end main-menu --> */}
          <div className="hamburger-menu" id="hamburger-menu">
            <div className="burger">
              {/* <!-- <svg id="burger-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <title>Show / Hide Navigation</title>
          <rect className="burger-svg__base" width="50" height="50"/>
          <g className="burger-svg__bars">
            <rect className="burger-svg__bar burger-svg__bar-1" x="14" y="18" width="22" height="2"/>
            <rect className="burger-svg__bar burger-svg__bar-2" x="14" y="24" width="22" height="2"/>
            <rect className="burger-svg__bar burger-svg__bar-3" x="14" y="30" width="22" height="2"/>
          </g>
        </svg> --> */}
              <div className="custom_hamburger">
                <span className="hamburger_line"></span>
                <span className="hamburger_line"></span>
                <span className="hamburger_line"></span>
              </div>
              <div className="location_btn">
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
          </div>
          {/* <!-- end burger -->  */}
          {/* </div> */}

          <div className="close_btn_custom">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>{" "}
            </svg>
          </div>
          {/* <!-- end hamburger-menu -->  */}
        </nav>
      </header>
    </>
  );
};

export default Header;
