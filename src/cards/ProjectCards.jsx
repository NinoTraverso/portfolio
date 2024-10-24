import React from "react";

function ProjectCards(props) {
  const className = `project project${props.id}`;

  return (
    <div id="projectCard" className={`${className}`}>
      <div className="d-flex flex-row justify-content-start align-items-center my-5">
        <div id="projectImgContainer" className="mx-5">
          <img src={props.img} alt={props.name} className="img" />
        </div>
        <div className="mx-5 ">
          <h3 className="name projectName text-start fw-bold ">{props.name}</h3>
          <h5 className="details projectDetails my-4">{props.details}</h5>
          <h5 className="details projectDetails my-4">
            <span className="fw-semibold">Technology:</span> {props.technology}
          </h5>
          <div className="d-flex justify-content-start mt-4">
            <a
              href={props.projectLink}
              className="projectDetailsButton text-decoration-none text-start py-2 px-3"
            >
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
