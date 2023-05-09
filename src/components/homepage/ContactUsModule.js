import { message } from "antd";
import axios from "axios";
import React, { useRef, useState } from "react";

const ContactUsModule = ({ title }) => {
  const [formLoading, setformLoading] = useState(false);
  const [formError, setformError] = useState(null);

  const name = useRef();
  const emailId = useRef();
  const messages = useRef();

  function clearFields() {
    emailId.current.value = "";
    name.current.value = "";
    messages.current.value = "";
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    setformLoading(true);

    let values = {
      name: name?.current?.value,
      email: emailId?.current?.value,
      message: messages?.current?.value,
    };

    if (values.name == "") {
      setformError("Please fill first name field!");
    } else if (values.name.length < 2) {
      setformError("Minimum character length for first name is 2");
    } else if (values.email == "") {
      setformError("Please fill email field!");
    } else if (
      !/^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63})$/i.test(
        values.email
      )
    ) {
      setformError("Invalid email");
    } else if (values.message == "") {
      setformError("Please fill message field!");
    } else {
      setformError(null);
      const sendMail = await axios
        .post(`/api/getaquote`, { values })
        .then(function (response) {
          // handle success
          return response?.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      clearFields();
      message.success(sendMail?.message);
    }

    setformLoading(false);
  };
  return (
    <div className="page-template-page-uidesign">
      <section
        className="maintenance-objectives free_quote_contact-form"
        id="getaquote"
      >
        <div className="container">
          {title && <h3 className="ui-getintouch">{title}</h3>}
          <div className="get-in-touch-contact-form contact-form-wrapper">
            <form onSubmit={(e) => submitHandler(e)}>
              <fieldset className="form_field">
                <div className="row">
                  <div className="col-md-6 col-sm-12 ui-design-right">
                    <label htmlFor="Name">
                      Name<span className="required-label">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      ref={name}
                      onChange={(e) => (name.current.value = e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 col-sm-12 ui-design-right">
                    <label htmlFor="email">
                      Email<span className="required-label">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      ref={emailId}
                      onChange={(e) => (emailId.current.value = e.target.value)}
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="form_field">
                <label htmlFor="email">
                  Comment or Message<span className="required-label">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  ref={messages}
                  onChange={(e) => (messages.current.value = e.target.value)}
                ></textarea>
              </fieldset>
              {formError && (
                <div className="form_error text-danger fs-2 mt-2">
                  {formError}
                </div>
              )}
              <fieldset>
                <button
                  type="submit"
                  disabled={formLoading}
                  className={formLoading && "btn"}
                >
                  send message
                  {formLoading && (
                    <div
                      className="spinner-border spinner-border-sm text-light ml-2"
                      role="status"
                    >
                      {/* <span className="sr-only">Loading...</span> */}
                    </div>
                  )}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsModule;
