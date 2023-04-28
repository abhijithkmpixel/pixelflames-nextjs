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
          {/* <form>
            <fieldset className="form_field">
              <label htmlFor="name">
                Name<span className="required-label">*</span>
              </label>
              <div className="row">
                <div className="col-md-6 col-sm-12 ui-design-right">
                  <input type="text" id="name" name="name" />
                  <label htmlFor="name" className="field-prefix">
                    First
                  </label>
                </div>
                <div className="col-md-6 col-sm-12 ui-design-right">
                  <input type="text" id="lastname" name="lastname" />
                  <label htmlFor="lastname" className="field-prefix">
                    Last
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset className="form_field">
              <label htmlFor="emailid">
                Email<span className="required-label">*</span>
              </label>
              <input type="email" id="emailid" name="emailid" />
            </fieldset>
            <fieldset className="form_field">
              <label htmlFor="subject">
                Subject<span className="required-label">*</span>
              </label>
              <input type="text" id="subject" name="subject" />
            </fieldset>

            <fieldset className="form_field">
              <label htmlFor="message">
                Comment or Message <span className="required-label">*</span>
              </label>
              <textarea name="" id="" cols="30" rows="10" />
            </fieldset>
            <fieldset>
              <input type="submit" value={"Send Message"} />
            </fieldset>
          </form> */}
          <GetInTouchWithUsForm />
        </div>
      </div>
    </div>
  );
};

export default PortfolioContactModule;
