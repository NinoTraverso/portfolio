import React, { forwardRef } from "react";
import ProjectCards from "../cards/ProjectCards";
import projects from "../projects";
import Analytics from "./Analytics";
import SpeedInsights from "./SpeedInsights";

function createProjectCard(project) {
  return (
    <div key={project.id} className="col-12 pb-5 d-flex justify-content-center">
      <ProjectCards
        id={project.id}
        img={project.img}
        name={project.name}
        details={project.description}
        technology={project.technology}
        projectLink={project.projectLink}
      />
    </div>
  );
}

const Projects = forwardRef((props, ref) => {
  return (
    <div id="projects" ref={ref} className="projectsSection ">
      <Analytics />
      <SpeedInsights />
      <div>{projects.map(createProjectCard)}</div>
    </div>
  );
});

export default Projects;
