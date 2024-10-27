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

        <div
          id="smallNavbar"
          className="d-flex d-xl-none flex-row justify-content-center align-items-center py-4"
          style={{ height: "5%", width: "100%" }}
        >
          <button
            className={`smallSectionButton sectionOne my-3 ${
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
            className={`smallSectionButton sectionTwo my-3 ${
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
            className={`smallSectionButton sectionThree my-3 ${
              activeButton === "Certificates" ? "active" : ""
            }`}
            onClick={() => {
              setActiveButton("Certificates");
              certificatesSection.current?.scrollIntoView({ behavior: "auto" });
            }}
          >
            <span className="buttonText">Certificates</span>
          </button>
          <button
            className={`smallSectionButton sectionFour my-3 ${
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
      </div>
    </div>
  );
}

export default App;
