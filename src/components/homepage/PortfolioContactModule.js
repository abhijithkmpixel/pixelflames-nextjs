import React from "react";
import GetInTouchWithUsForm from "../GetInTouchWithUsForm";

const PortfolioContactModule = ({ active, toggleState }) => {
  return (
    <div
      className={
        active ? "potfolio_contact_form d-flex" : "potfolio_contact_form"
      }
    >
      <div id="contactFormPopup1" className="contact-form-popup">
        <button className="fancybox-close-small" onClick={toggleState}>
          <svg viewBox="0 0 32 32">
            <path d="M10,10 L22,22 M22,10 L10,22"></path>
          </svg>
        </button>
        <div className="contact-form">
          <div className="titles">
            <h6>CONTACT FORM</h6>
          </div>
          <h2>
            Want to start a project or need our expert consultation? We’d love
            to share our expertise with you.
          </h2>
          <GetInTouchWithUsForm toggleState={toggleState} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioContactModule;
