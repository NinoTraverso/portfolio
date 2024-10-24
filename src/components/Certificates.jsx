import React, { forwardRef } from "react";

const Certificates = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="certificatesSection">
      <h1 id="certificates" className="my-0">
        Certificates
      </h1>
    </div>
  );
});

export default Certificates;
