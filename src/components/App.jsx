import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Profile from "./Profile";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Other from "./Other";

function App() {
  return (
    <div id="appContainer">
      <title>NinoTraversoPortfolio</title>
      <meta name="description" content="Nino Traverso Digital Portfolio." />
      <meta name="keywords" content="portfolio, web design, web development" />

      <div id="appContainer">
        <Profile />
        <Projects />
        <Certificates />
        <Other />
      </div>
    </div>
  );
}

export default App;
