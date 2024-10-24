import React, { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="contactSection">
      <h1 id="contact" className="my-0">
        Contact
      </h1>
    </div>
  );
});

export default Contact;
