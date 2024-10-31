import React from "react";

function ProjectCards(props) {
  const className = `project project${props.id}`;

  return (
    <div id="projectCard" className={`${className}`}>
      <div className="d-flex flex-column flex-xl-row justify-content-start align-items-center my-5">
        <h3 className="name projectName d-block d-xl-none text-center text-xl-start fw-bold my-4">
          {props.name}
        </h3>
        <div id="projectImgContainer" className="mx-5">
          <img src={props.img} alt={props.name} className="img" />
        </div>
        <div className="mx-5 ">
          <h3 className="name projectName d-none d-xl-block text-center text-xl-start fw-bold ">
            {props.name}
          </h3>
          <h5 className="details projectDetails text-center text-xl-start my-4">
            {props.details}
          </h5>
          <h5 className="details projectTecnologies text-center text-xl-start my-4">
            <span className="fw-semibold">Technology:</span> {props.technology}
          </h5>
          <div className="d-flex justify-content-center justify-content-xl-start mt-4">
            <a
              href={props.projectLink}
              className="projectDetailsButton text-decoration-none text-center text-xl-start py-2 px-3"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
