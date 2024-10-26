import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Profile from "./Profile";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Contact from "./Contact";

function App() {
  const profileSection = useRef(null);
  const projectsSection = useRef(null);
  const certificatesSection = useRef(null);
  const contactSection = useRef(null);

  return (
    <div id="appContainer">
      <title>NinoTraversoPortfolio</title>
      <meta name="description" content="Nino Traverso Digital Portfolio." />
      <meta name="keywords" content="portfolio, web design, web development" />
      <div id="homeContainer" className="d-flex flex-row">
        <div style={{ width: "10%" }}>
          <aside
            id="asideContent"
            style={{ width: "10%" }}
            className="d-flex flex-column justify-content-center align-items-center me-3"
          >
            <div className="logoContainer ">
              <img src="./assets/logo.png" alt="logoImage" />
            </div>
            <button
              className="profileSection asideButton mt-4"
              onClick={() => {
                profileSection.current?.scrollIntoView({ behavior: "auto" });
              }}
            >
              Profile
            </button>
            <button
              className="projectsSection asideButton"
              onClick={() => {
                projectsSection.current?.scrollIntoView({ behavior: "auto" });
              }}
            >
              Project
            </button>
            <button
              className="certificatesSection asideButton"
              onClick={() => {
                certificatesSection.current?.scrollIntoView({
                  behavior: "auto",
                });
              }}
            >
              Certificaes
            </button>

            <button
              className="contactSection asideButton"
              onClick={() => {
                contactSection.current?.scrollIntoView({ behavior: "auto" });
              }}
            >
              Contact
            </button>
          </aside>
        </div>

        {/* -------------------------------------------------------------------------------- appContainer --------------- */}
        <div id="homeContent" style={{ width: "90%" }} className="ms-5">
          <Profile ref={profileSection} id="profileSection" />
          <Projects ref={projectsSection} id="projectsSection" />
          <Certificates ref={certificatesSection} id="certificatesSection" />
          <Contact ref={contactSection} id="contactSection" />
        </div>
      </div>
    </div>
  );
}

export default App;
