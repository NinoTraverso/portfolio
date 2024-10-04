import React, { forwardRef } from "react";

const Certificates = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="certificatesSection">
      <h1 id="certificates">Certificates</h1>
    </div>
  );
});

export default Certificates;
