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
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos < scrollPosition) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }

      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const handleSmallNavButtonClick = () => {
    const newNavbarState = !isNavbarExpanded;
    setIsNavbarExpanded(newNavbarState);

    if (newNavbarState) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const handleSectionButtonClick = (sectionRef, sectionName) => {
    setActiveButton(sectionName);
    setIsNavbarExpanded(false);
    document.body.classList.remove("no-scroll");
    sectionRef.current?.scrollIntoView({ behavior: "auto" });
  };

  return (
    <div
      id="appContainer"
      className="d-flex justify-content-center align-items-center"
    >
      <title>NinoTraversoPortfolio</title>
      <meta name="description" content="Nino Traverso Digital Portfolio." />
      <meta name="keywords" content="portfolio, web design, web development" />

      <div id="homeContainer" className="d-flex flex-column flex-row">
        {/* ------------------------------------------------ NAV 640px ABOVE ---------------------------------------- */}
        <nav
          id="navbar"
          className={`d-flex flex-row justify-content-between align-items-center mt-3 py-1 fixed-top mx-auto ${
            isNavbarVisible ? "show" : "hide"
          }`}
        >
          <div id="navLogo" className="mx-4">
            <img src="../assets/logo.png" alt="" />
          </div>
          <div className="mx-5">
            <button
              className={`SectionButton sectionOne my-3 mx-2 ${
                activeButton === "Profile" ? "active" : ""
              }`}
              onClick={() =>
                handleSectionButtonClick(profileSection, "Profile")
              }
            >
              <span className="buttonText">Profile</span>
            </button>
            <button
              className={`SectionButton sectionTwo my-3 mx-2 ${
                activeButton === "Projects" ? "active" : ""
              }`}
              onClick={() =>
                handleSectionButtonClick(projectsSection, "Projects")
              }
            >
              <span className="buttonText">Projects</span>
            </button>
            <button
              className={`SectionButton sectionThree my-3 mx-2 ${
                activeButton === "Certificates" ? "active" : ""
              }`}
              onClick={() =>
                handleSectionButtonClick(certificatesSection, "Certificates")
              }
            >
              <span className="buttonText">Certificates</span>
            </button>
            <button
              className={`SectionButton sectionFour my-3 mx-2 ${
                activeButton === "Contact" ? "active" : ""
              }`}
              onClick={() =>
                handleSectionButtonClick(contactSection, "Contact")
              }
            >
              <span className="buttonText">Contact</span>
            </button>
          </div>
        </nav>
        {/* ------------------------------------------------ NAV 640px BELOW ---------------------------------------- */}
        <nav
          id="navSmall"
          className={`d-flex flex-row justify-content-between align-items-center py-3 fixed-top mx-auto ${
            isNavbarVisible ? "show" : "hide"
          } ${isNavbarExpanded ? "expand" : ""}`}
        >
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div id="navLogo" className="mx-4">
              <img src="../assets/logo.png" alt="" />
            </div>
            <button
              className="collapsedNavButton"
              onClick={handleSmallNavButtonClick}
            >
              <h1 className="pt-1">Home</h1>
            </button>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center mt-5 mx-5">
            <button
              className={`SectionButton sectionOne my-3 mx-2 ${
                activeButton === "Profile" ? "active" : ""
              }`}
              onClick={() =>
                handleSectionButtonClick(profileSection, "Profile")
              }
            >
              <span className="buttonText">Profile</span>
            </button>
            <button
              className={`SectionButton sectionTwo my-3 mx-2 ${
                activeButton === "Projects" ? "active" : ""
              }`}
              onClick={() =>
                handleSectionButtonClick(projectsSection, "Projects")
              }
            >
              <span className="buttonText">Projects</span>
            </button>
            <button
              className={`SectionButton sectionThree my-3 mx-2 ${
                activeButton === "Certificates" ? "active" : ""
              }`}
              onClick={() =>
                handleSectionButtonClick(certificatesSection, "Certificates")
              }
            >
              <span className="buttonText">Certificates</span>
            </button>
            <button
              className={`SectionButton sectionFour my-3 mx-2 ${
                activeButton === "Contact" ? "active" : ""
              }`}
              onClick={() =>
                handleSectionButtonClick(contactSection, "Contact")
              }
            >
              <span className="buttonText">Contact</span>
            </button>
          </div>
        </nav>
        {/* ------------------------------------------------ SECTIONS ---------------------------------------- */}
        <div ref={profileSection} id="profileSection">
          <Profile />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div ref={projectsSection} id="projectsSection">
          <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
            <h1 id="sectionTitle" className="text-center my-5 mt-xl-none">
              Projects
            </h1>
            <div className="projectsSectionImage mt-5 mt-xl-none">
              <img
                src="./assets/sectionImages/projects.png"
                alt="projectsSectionImage"
              />
            </div>
          </div>

          <br />
          <br />
          <br />
          <Projects />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div ref={certificatesSection} id="certificatesSection">
          <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
            <h1 id="sectionTitle" className="text-center my-5 mt-xl-none">
              Certificates
            </h1>
            <div className="projectsSectionImage mt-5 mt-xl-none">
              <img
                src="./assets/sectionImages/certificates.png"
                alt="projectsSectionImage"
              />
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <Certificates />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div ref={contactSection} id="contactSection" className="my-5">
          <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
            <h1 id="sectionTitle" className="text-center my-5 mt-xl-none">
              Contact
            </h1>
            <div className="projectsSectionImage mt-5 mt-xl-none">
              <img
                src="./assets/sectionImages/contact.png"
                alt="projectsSectionImage"
              />
            </div>
          </div>

          <br />
          <br />
          <br />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
