import React from "react";

const ContactUsModule = () => {
  return (
    <div className="page-template-page-uidesign">
      <section
        className="maintenance-objectives free_quote_contact-form"
        id="getaquote"
      >
        <div className="container">
          <h3 className="ui-getintouch">asdasdasdasd</h3>
          <div className="get-in-touch-contact-form contact-form-wrapper">
            <fieldset className="form_field">
              <div className="row">
                <div className="col-md-6 col-sm-12 ui-design-right">
                  <label htmlFor="Name">
                    Name<span className="required-label">*</span>
                  </label>
                  <input type="text" id="name" name="name" />
                </div>
                <div className="col-md-6 col-sm-12 ui-design-right">
                  <label htmlFor="email">
                    Email<span className="required-label">*</span>
                  </label>
                  <input type="email" id="email" name="email" />
                </div>
              </div>
            </fieldset>
            <fieldset className="form_field">
              <label htmlFor="email">
                Comment or Message<span className="required-label">*</span>
              </label>
              <textarea name="message" id="message"></textarea>
            </fieldset>
            <fieldset>
              <input type="submit" value={"send message"} />
            </fieldset>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsModule;
