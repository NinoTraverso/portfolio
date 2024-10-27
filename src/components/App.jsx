import React, { useRef, useState, useEffect } from "react";
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

  const [activeButton, setActiveButton] = useState("Profile");

  useEffect(() => {
    const sections = [
      { ref: profileSection, name: "Profile" },
      { ref: projectsSection, name: "Projects" },
      { ref: certificatesSection, name: "Certificates" },
      { ref: contactSection, name: "Contact" },
    ];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = sections.find(
            (section) => section.ref.current === entry.target
          ).name;
          setActiveButton(sectionName);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.6,
    });

    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) observer.unobserve(section.ref.current);
      });
    };
  }, []);

  return (
    <div
      id="appContainer"
      className="d-flex justify-content-center align-items-center"
    >
      <title>NinoTraversoPortfolio</title>
      <meta name="description" content="Nino Traverso Digital Portfolio." />
      <meta name="keywords" content="portfolio, web design, web development" />
      <div id="homeContainer" className="d-flex flex-column flex-row">
        <navbar
          id="navbar"
          className="d-flex flex-row justify-content-between align-items-center py-3 fixed-top mx-auto"
        >
          <div id="navLogo" className="mx-4">
            <img src="../assets/logo.png" alt="" />
          </div>
          <div className="mx-5">
            <button
              className={`SectionButton sectionOne my-3 mx-2 ${
                activeButton === "Profile" ? "active" : ""
              }`}
              onClick={() => {
                setActiveButton("Profile");
                profileSection.current?.scrollIntoView({ behavior: "auto" });
              }}
            >
              <span className="buttonText">Profile</span>
            </button>
            <button
              className={`SectionButton sectionTwo my-3 mx-2 ${
                activeButton === "Projects" ? "active" : ""
              }`}
              onClick={() => {
                setActiveButton("Projects");
                projectsSection.current?.scrollIntoView({ behavior: "auto" });
              }}
            >
              <span className="buttonText">Projects</span>
            </button>
            <button
              className={`SectionButton sectionThree my-3 mx-2 ${
                activeButton === "Certificates" ? "active" : ""
              }`}
              onClick={() => {
                setActiveButton("Certificates");
                certificatesSection.current?.scrollIntoView({
                  behavior: "auto",
                });
              }}
            >
              <span className="buttonText">Certificates</span>
            </button>
            <button
              className={`SectionButton sectionFour my-3 mx-2 ${
                activeButton === "Contact" ? "active" : ""
              }`}
              onClick={() => {
                setActiveButton("Contact");
                contactSection.current?.scrollIntoView({ behavior: "auto" });
              }}
            >
              <span className="buttonText">Contact</span>
            </button>
          </div>
        </navbar>
        <div ref={profileSection} id="profileSection">
          <Profile />
        </div>
        <div ref={projectsSection} id="projectsSection">
          <Projects />
        </div>
        <div ref={certificatesSection} id="certificatesSection">
          <Certificates />
        </div>
        <div ref={contactSection} id="contactSection" className="mb-5">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
