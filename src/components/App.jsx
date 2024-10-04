import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Profile from "./Profile";

function App() {
  return (
    <div id="appContainer">
      <title>NinoTraversoPortfolio</title>
      <meta name="description" content="Nino Traverso Digital Portfolio." />
      <meta name="keywords" content="portfolio, web design, web development" />

      <div id="appContainer">
        <Profile />
      </div>
    </div>
  );
}

export default App;
