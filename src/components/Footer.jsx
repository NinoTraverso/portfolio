import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="">
      <div className="d-flex flex-column justify-content-around align-items-center">
        <div className="d-flex flex-row justify-content-around align-items-center w-100 mt-4">
          <a href="#profile" id="footerLogo" className="mx-4">
            <img src="../assets/logo.png" alt="logo" />
          </a>
          <div>
            <a
              href="https://github.com/NinoTraverso"
              className="text-decoration-none mx-2"
            >
              <i class=" githubIcon devicon-github-original"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/ninotraverso-developer-astronomy-planetarysciences/"
              className="text-decoration-none mx-2"
            >
              <i class="linkedinIcon devicon-linkedin-plain"></i>
            </a>
          </div>
        </div>
        <div className="mt-4 w-75">
          <p className="border-top text-center py-2">
            &copy;{currentYear} - NJT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
