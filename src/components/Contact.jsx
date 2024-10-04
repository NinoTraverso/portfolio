import React, { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="contactSection">
      <h1 id="contact">Projects</h1>
    </div>
  );
});

export default Contact;
