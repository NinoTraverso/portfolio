import React from "react";

function ProjectCards(props) {
  const className = `project project${props.id}`;

  return (
    <div id="projectCard" className={`${className}`}>
      <div className="d-flex flex-column justify-content-between">
        <div id="imgContainer">
          <img src={props.img} alt={props.name} className="img" />
        </div>
        <h3 className="name projectName text-center">{props.name}</h3>
        <h5 className="details projectDetails">{props.details}</h5>
        <div className="d-flex justify-content-center">
          <a
            href={props.projectLink}
            className="projectButton text-decoration-none text-center px-2"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
