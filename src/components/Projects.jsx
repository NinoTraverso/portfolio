import React, { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="projectsSection">
      <h1 id="projects">Projects</h1>
    </div>
  );
});

export default Projects;
