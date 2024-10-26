import React, { forwardRef } from "react";

const Certificates = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="certificatesSection">
      <h1 id="certificates" className="my-0">
        Certificates
      </h1>
      <div id="certificatesCarousel d-flex justify-content-center align-items-center">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            {/* ----------------------------------- FULLSTACK ---------------------------------------- */}
            <div className="carousel-item active d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-md-row mx-5"
              >
                <div className="align-self-center">
                  <img
                    src="../assets/certificatesImages/FullStack.png"
                    alt="mercury"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start mx-5">
                  <h1 className="ms-0 ms-md-4 py-3">Full-Stack Developer</h1>
                  <span className="inTextCard">
                    <h6 className="py-3 ">
                      Intensive 6-months long Full-Stack Developer course
                      developing Front-End, Back-End and a Full-Stack web
                      applications, both independently and in small groups.
                    </h6>
                    <ul>
                      <li>
                        Skills: HTML &#47; CSS &#47; FlexBox JavaScript &#47;
                        Github &#47; DOM &#47; OOP&#47; Bootstrap &#47; SASS
                        &#47; Typescript &#47; Angular &#47; C# Programming
                        &#47; SQL Server &#47; ASP.NET WEBFORMS &#47; ADO.NET
                        &#47; ASP.NET MVC
                      </li>
                      <li>Level: Intermediate&#47;Expert</li>
                      <li>Time: 1000+ hours</li>
                      <li>
                        Institution:{" "}
                        <a
                          href="https://epicode.com/en/"
                          className="text-decoration-none text-white"
                        >
                          EPICODE
                        </a>{" "}
                      </li>
                      <li>Grading: 74&#37;</li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- WEB DEVELOPER ---------------------------------------- */}
            <div className="carousel-item d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-md-row mx-5"
              >
                <div className="align-self-center">
                  <img
                    src="../assets/certificatesImages/WebDevelopment.png"
                    alt="venus"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start mx-5">
                  <h1 className="ms-0 ms-md-4 py-3 t">Web Development</h1>
                  <span className="inTextCard">
                    <h6 className="py-3 ">
                      Full-Stack Development skills covering HTML, CSS,
                      JavaScript, Node.js, React, and more, with practical
                      projects aimed at building a solid foundation for
                      beginners and enhancing job readiness.
                    </h6>
                    <ul>
                      <li>
                        Skills: HTML, CSS, JavaScript, jQuery, Node.js,
                        Express.js, APIs, PostgreSQL, React.js
                      </li>
                      <li>Level: Intermediate</li>
                      <li>Time: 63 hours</li>
                      <li>Institution: Udemy</li>
                      <li>Grading: 100&#37;</li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- UX / UI + FIMGA  ---------------------------------------- */}
            <div className="carousel-item d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-md-row mx-5"
              >
                <div className="align-self-center">
                  <img
                    src="../assets/certificatesImages/UxUiFigma.png"
                    alt="earth"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start mx-5">
                  <h1 className="ms-0 ms-md-4 py-3 t">Web & Mobile Design</h1>
                  <span className="inTextCard">
                    <h6 className="py-3 ">
                      Develop modern web and mobile design skills covering UX
                      and UI principles, Figma and essential design tools to
                      learn create visually appealing and user-friendly digital
                      products.
                    </h6>
                    <ul>
                      <li>
                        Skills: UX & UI; Figma; Design Tools; Responsive Design;
                        Color Theory & Typography; Branding & Identity Design
                      </li>
                      <li>Level: Foundational</li>
                      <li>Time: 28 hours</li>
                      <li>Institution: Udemy</li>
                      <li>Grading: 100&#37;</li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- SOLAR SYSTEM ---------------------------------------- */}

            <div className="carousel-item d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-md-row mx-5"
              >
                <div className="align-self-center">
                  <img
                    src="../assets/certificatesImages/TheScienceOfTheSolarSystem.png"
                    alt="moon"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start mx-5">
                  <h1 className="ms-0 ms-md-4 py-3 t">Astronomy</h1>
                  <span className="inTextCard">
                    <h6 className="py-3 ">
                      Study of celestial bodies, planet, moons, asteroids and
                      comet characteristics.
                    </h6>
                    <ul>
                      <li>
                        Skills: Astronomy; Solar Systems; Chemistry; Geology;
                        Astrobiology
                      </li>
                      <li>Level: Foundational</li>
                      <li>Time: 29 hours</li>
                      <li>Institution: Coursera &#40;Caltech&#41;</li>
                      <li>Grading: 100&#37;</li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- ASTROBIOLOGY ---------------------------------------- */}

            <div className="carousel-item d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-md-row mx-5"
              >
                <div className="align-self-center">
                  <img
                    src="../assets/certificatesImages/AstrobiologyAndTheSearchForExtraterrestrialLife.png"
                    alt="mars"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start mx-5">
                  <h1 className="ms-0 ms-md-4 py-3 t">Astrobiology</h1>
                  <span className="inTextCard">
                    <h6 className="py-3 ">
                      Fourth planet in our Solar System and has an average
                      surface temperature of -65 C&deg; and orbiting the Sun
                      every 687 days.{" "}
                    </h6>
                    <ul>
                      <li>
                        Skills: Solar System; Biology; Microbiology;
                        Astrobiology
                      </li>
                      <li>Level: Foundational</li>
                      <li>Time: 11 hours</li>
                      <li>
                        Institution: Coursera &#40;The University of
                        Edinburgh&#41;
                      </li>
                      <li>Grading: 100&#37;</li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- JAPANESE ---------------------------------------- */}

            <div className="carousel-item d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-md-row mx-5"
              >
                <div className="align-self-center">
                  <img
                    src="../assets/certificatesImages/Japanese.png"
                    alt="asteroidBelt"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start mx-5">
                  <h1 className="ms-0 ms-md-4 py-3 t">Japanese</h1>
                  <span className="inTextCard">
                    <h6 className="py-3">
                      This is the zone between Mars and Jupiter where we can
                      find asteroids of different sizes, shapes and
                      compositions.
                    </h6>
                    <ul>
                      <li>
                        Skills: Basic vocabulary; Fundemental grammar;
                        Pronounciating; Listening; Conversational phrase and
                        expressions; Language related cultural insights
                      </li>
                      <li>Level: Foundational</li>
                      <li>Time: 30 hours</li>
                      <li>Institution: EDX &#40;Waseda University&#41;</li>
                      <li>Grading: 100&#37;</li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
});

export default Certificates;
