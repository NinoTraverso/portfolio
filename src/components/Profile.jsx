import React, { forwardRef } from "react";

const Profile = forwardRef((props, ref) => {
  return (
    <div id="profile" ref={ref} className="profileSection">
      <div className="d-flex flex-row justify-content-between ">
        <div
          className="mx-3 mb-5 d-flex flex-column justify-content-center align-items-center"
          style={{ width: "60%" }}
        >
          <h1>Nino J. Traverso</h1>
          <h1>Web Developer & Designer</h1>
          <div
            id="skillsIcons"
            className="d-flex flex-wrap justify-content-around text-center mx-5"
          >
            <div className="col col-12 col-md-6 col-lg-4 col-xl-3 py-5">
              <i className="devicon-html5-plain-wordmark colored"></i>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 col-xl-3 py-5">
              <i className="devicon-css3-plain-wordmark colored"></i>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 col-xl-3 py-5">
              <i className="devicon-javascript-plain colored"></i>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 col-xl-3 py-5">
              <i className="devicon-react-original-wordmark colored"></i>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 col-xl-3 py-5">
              <i className="devicon-bootstrap-plain-wordmark colored"></i>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 col-xl-3 py-5">
              <i className="devicon-microsoftsqlserver-plain"></i>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 col-xl-3 py-5">
              <i className="devicon-dot-net-plain colored"></i>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 col-xl-3 py-5">
              <i className="devicon-csharp-plain-wordmark colored"></i>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 col-xl-3 py-5">
              <i className="devicon-vscode-plain colored"></i>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 col-xl-3 py-5">
              <i className="devicon-visualstudio-plain colored"></i>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 col-xl-3 py-5">
              <i className="devicon-figma-plain colored"></i>
            </div>

            <div className="col col-12 col-md-6 col-lg-4 col-xl-3 py-5">
              <i class="devicon-github-original"></i>
            </div>
          </div>
        </div>
        <div
          className="profileImage d-flex flex-column justify-content-end align-items-center mb-5"
          style={{ width: "40%", height: "100vh" }}
        >
          <img src="./assets/profileImage.png" alt="profileImage" />
        </div>
      </div>
    </div>
  );
});

export default Profile;
