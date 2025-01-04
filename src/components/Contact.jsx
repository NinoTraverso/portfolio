import React, { forwardRef } from "react";
import { ContactUs } from "../cards/ContactForm";

const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="contactSection">
      <div className="contact-container d-flex flex-column justify-content-center align-items-center">
        <div className="nav-separator d-none d-xl-block"></div>
        <br className="d-block d-xl-none" />
        <br className="d-block d-xl-none" />

        <div className="form-container pb-5">
          <ContactUs />
        </div>
        <div className="d-none d-xl-block separator mx-1"></div>
      </div>
    </div>
  );
});

export default Contact;
