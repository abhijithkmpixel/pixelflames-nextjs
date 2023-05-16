import { message } from "antd";
import axios from "axios";
import React, { useRef, useState } from "react";

const GetInTouchWithUsForm = ({ toggleState }) => {
  const [formLoading, setformLoading] = useState(false);
  const [formError, setformError] = useState(null);

  const firstName = useRef();
  const lastName = useRef();
  const emailId = useRef();
  const subject = useRef();
  const messages = useRef();
  function clearFields() {
    firstName.current.value = "";
    lastName.current.value = "";
    emailId.current.value = "";
    subject.current.value = "";
    messages.current.value = "";
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setformLoading(true);

    let values = {
      firstName: firstName?.current?.value,
      lastName: lastName?.current?.value,
      email: emailId?.current?.value,
      subject: subject?.current?.value,
      message: messages?.current?.value,
    };

    if (values.firstName == "") {
      setformError("Please fill first name field!");
    } else if (values.firstName.length < 2) {
      setformError("Minimum character length for first name is 2");
    } else if (values.lastName == "") {
      setformError("Please fill last name field!");
    } else if (values.lastName.length < 2) {
      setformError("Minimum character length for last name is 2");
    } else if (values.email == "") {
      setformError("Please fill email field!");
    } else if (
      !/^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63})$/i.test(
        values.email
      )
    ) {
      setformError("Invalid email");
    } else if (values.subject == "") {
      setformError("Please fill subject field!");
    } else if (values.message == "") {
      setformError("Please fill message field!");
    } else {
      setformError(null);
      const sendMail = await axios
        .post(`/api/contactform`, { values })
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
      toggleState !== undefined && toggleState();
    }
    setformLoading(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <fieldset className="form_field">
          <label htmlFor="name">
            Name<span className="required-label">*</span>
          </label>
          <div className="row">
            <div className="col-md-6 col-sm-12 ui-design-right">
              <input
                type="text"
                id="name"
                name="name"
                ref={firstName}
                onChange={(e) => (firstName.current.value = e.target.value)}
              />
              <label htmlFor="name" className="field-prefix">
                First
              </label>
              {/* {firstNameError && (
                            <span className="error">{firstNameError}</span>
                          )} */}
            </div>
            <div className="col-md-6 col-sm-12 ui-design-right">
              <input
                type="text"
                id="lastname"
                name="lastname"
                ref={lastName}
                onChange={(e) => (lastName.current.value = e.target.value)}
              />
              <label htmlFor="lastname" className="field-prefix">
                Last
              </label>
              {/* {lastNameError && (
                            <span className="error">{lastNameError}</span>
                          )} */}
            </div>
          </div>
        </fieldset>
        <fieldset className="form_field">
          <label htmlFor="emailid">
            Email<span className="required-label">*</span>
          </label>
          <input
            type="email"
            id="emailid"
            name="emailid"
            ref={emailId}
            onChange={(e) => (emailId.current.value = e.target.value)}
          />
          {/* {emailIdError && (
                        <span className="error">{emailIdError}</span>
                      )} */}
        </fieldset>
        <fieldset className="form_field">
          <label htmlFor="subject">
            Subject<span className="required-label">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            ref={subject}
            onChange={(e) => (subject.current.value = e.target.value)}
          />
          {/* {subjectError && (
                        <span className="error">{subjectError}</span>
                      )} */}
        </fieldset>
        <fieldset className="form_field">
          <label htmlFor="message">
            Comment or Message <span className="required-label">*</span>
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            ref={messages}
            onChange={(e) => (messages.current.value = e.target.value)}
          />
          {/* {messageError && (
                        <span className="error">{messageError}</span>
                      )} */}
        </fieldset>
        {formError && (
          <div className="form_error text-danger fs-2 mt-2">{formError}</div>
        )}
        <fieldset>
          {/* <input type="submit" value={"Send Message"} /> */}
          <button
            type="submit"
            disabled={formLoading}
            className={formLoading == true ? "btn" : ""}
          >
            Send message
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
    </>
  );
};

export default GetInTouchWithUsForm;
