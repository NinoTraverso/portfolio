import React, { forwardRef } from "react";

const Other = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="otherSection">
      <h1 id="other" className="my-0">
        Other
      </h1>
    </div>
  );
});

export default Other;
