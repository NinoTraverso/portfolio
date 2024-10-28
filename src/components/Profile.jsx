import React, { forwardRef } from "react";

const Profile = forwardRef((props, ref) => {
  return (
    <div id="profile" ref={ref} className="profileSection mt-5">
      <br />
      <br />
      <br />
      <br />
      <div className="d-flex flex-column flex-xl-row justify-content-around aling-items-center">
        <div className=" d-flex flex-column justify-content-center align-items-center">
          <h1>Nino J. Traverso</h1>
          <h1>Web Developer & Designer</h1>
          <div className="profileImage">
            <img
              src="./assets/profileImageClean.png"
              alt="profileImage"
              className="img-fluid"
            />
          </div>

          <h4 id="profileIntro" className="text-center mx-5">
            With a diverse background in tourism, astronomy, and web
            development, I excel in customer service, logistics, analytical
            abilities, and technical skills. Proficient in HTML, CSS,
            JavaScript, React and other technologies, I bring a unique blend of
            service excellence, scientific insight, and technical expertise to
            creatively tackle challenges across various roles and industries.
          </h4>
        </div>

        <div className=" mb-5 d-flex flex-column justify-content-center align-items-center">
          <h1>Skills</h1>

          <div
            id="skillsIcons"
            className="d-flex flex-wrap justify-content-around text-center mx-5"
          >
            <div className="col col-4 col-md-4 col-lg-4 col-xl-3 py-5">
              <i className="devicon-html5-plain-wordmark colored"></i>
            </div>

            <div className="col col-4 col-md-4 col-lg-4 col-xl-3 py-5">
              <i className="devicon-css3-plain-wordmark colored"></i>
            </div>

            <div className="col col-4 col-md-4 col-lg-4 col-xl-3 py-5">
              <i className="devicon-javascript-plain colored"></i>
            </div>

            <div className="col col-4 col-md-4 col-lg-4 col-xl-3 py-5">
              <i className="devicon-react-original-wordmark colored"></i>
            </div>

            <div className="col col-4 col-md-4 col-lg-4 col-xl-3 py-5">
              <i className="devicon-bootstrap-plain-wordmark colored"></i>
            </div>

            <div className="col col-4 col-md-4 col-lg-4 col-xl-3 py-5">
              <i className="devicon-microsoftsqlserver-plain"></i>
            </div>

            <div className="col col-4 col-md-4 col-lg-4 col-xl-3 py-5">
              <i className="devicon-dot-net-plain colored"></i>
            </div>

            <div className="col col-4 col-md-4 col-lg-4 col-xl-3 py-5">
              <i className="devicon-csharp-plain-wordmark colored"></i>
            </div>

            <div className="col col-4 col-md-4 col-lg-4 col-xl-3 py-5">
              <i className="devicon-vscode-plain colored"></i>
            </div>

            <div className="col col-4 col-md-4 col-lg-4 col-xl-3 py-5">
              <i className="devicon-visualstudio-plain colored"></i>
            </div>

            <div className="col col-4 col-md-4 col-lg-4 col-xl-3 py-5">
              <i className="devicon-figma-plain colored"></i>
            </div>

            <div className="col col-4 col-md-4 col-lg-4 col-xl-3 py-5">
              <i className="devicon-github-original"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Profile;
