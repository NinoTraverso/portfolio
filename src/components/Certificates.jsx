import React, { forwardRef } from "react";

const Certificates = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="certificatesSection">
      <div id="certificatesCarousel d-flex justify-content-center align-items-center">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            {/* ----------------------------------- FULLSTACK ---------------------------------------- */}
            <div className="carousel-item active d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-xl-row mx-5"
              >
                <div className="d-none d-xl-block align-self-center">
                  <img
                    src="../assets/certificatesImages/FullStack.png"
                    alt="mercury"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-xl-start mx-5">
                  <h1 className="ms-0 ms--4 py-3 fw-semibold inTextCard">
                    Full-Stack Developer
                  </h1>
                  <div className="d-block d-xl-none align-self-center">
                    <img
                      src="../assets/certificatesImages/FullStack.png"
                      alt="mercury"
                      className="newCarouselImage"
                      style={{ borderRadius: "20px" }}
                    />
                  </div>
                  <span className="inTextCard">
                    <h6 className="py-4 text-center text-xl-start ">
                      Intensive 6-months long Full-Stack Developer course
                      developing Front-End, Back-End and a Full-Stack web
                      applications, both independently and in small groups.
                    </h6>

                    <p>
                      <span className="fw-bold">Skills: </span>

                      <span className="fw-lighter">
                        HTML &#47; CSS &#47; FlexBox JavaScript &#47; Github
                        &#47; DOM &#47; OOP&#47; Bootstrap &#47; SASS &#47;
                        Typescript &#47; Angular &#47; C# Programming &#47; SQL
                        Server &#47; ASP.NET WEBFORMS &#47; ADO.NET &#47;
                        ASP.NET MVC
                      </span>
                    </p>
                    <p>
                      <span className="fw-bold">Level: </span>{" "}
                      Intermediate&#47;Expert
                    </p>
                    <p>
                      <span className="fw-bold">Time: </span> 1000+ hours
                    </p>
                    <p>
                      <span className="fw-bold">Institution: </span>{" "}
                      <a
                        href="https://epicode.com/en/"
                        className="text-decoration-none text-white"
                      >
                        EPICODE
                      </a>{" "}
                    </p>
                    <p>
                      <span className="fw-bold">Grade: </span> 74&#37;
                    </p>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- WEB DEVELOPER ---------------------------------------- */}
            <div className="carousel-item active d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-xl-row mx-5"
              >
                <div className="d-none d-xl-block align-self-center">
                  <img
                    src="../assets/certificatesImages/WebDevelopment.png"
                    alt="mercury"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-xl-start mx-5">
                  <h1 className="ms-0 ms--4 py-3 fw-semibold inTextCard">
                    Web Development
                  </h1>
                  <div className="d-block d-xl-none align-self-center">
                    <img
                      src="../assets/certificatesImages/WebDevelopment.png"
                      alt="mercury"
                      className="newCarouselImage"
                      style={{ borderRadius: "20px" }}
                    />
                  </div>
                  <span className="inTextCard">
                    <h6 className="py-4 text-center text-xl-start ">
                      Full-Stack Development skills covering HTML, CSS,
                      JavaScript, Node.js, React, and more, with practical
                      projects aimed at building a solid foundation for
                      beginners and enhancing job readiness.
                    </h6>

                    <p className="fw-italic">
                      <span className="fw-bold">Skills: </span> HTML, CSS,
                      JavaScript, jQuery, Node.js, Express.js, APIs, PostgreSQL,
                      React.js
                    </p>
                    <p>
                      <span className="fw-bold">Level: </span> Intermediate
                    </p>
                    <p>
                      <span className="fw-bold">Time: </span> 63 hours
                    </p>
                    <p>
                      <span className="fw-bold">Institution: </span> Udemy
                    </p>
                    <p>
                      <span className="fw-bold">Grade: </span> 100&#37;
                    </p>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- WEB AND MOBILE DESIGN  ---------------------------------------- */}
            <div className="carousel-item active d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-xl-row mx-5"
              >
                <div className="d-none d-xl-block align-self-center">
                  <img
                    src="../assets/certificatesImages/UxUiFigma.png"
                    alt="mercury"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-xl-start mx-5">
                  <h1 className="ms-0 ms--4 py-3 fw-semibold inTextCard">
                    Web & Mobile Design
                  </h1>
                  <div className="d-block d-xl-none align-self-center">
                    <img
                      src="../assets/certificatesImages/UxUiFigma.png"
                      alt="mercury"
                      className="newCarouselImage"
                      style={{ borderRadius: "20px" }}
                    />
                  </div>
                  <span className="inTextCard">
                    <h6 className="py-4 text-center text-xl-start ">
                      Develop modern web and mobile design skills covering UX
                      and UI principles, Figma and essential design tools to
                      learn create visually appealing and user-friendly digital
                      products.
                    </h6>

                    <p className="fw-italic">
                      <span className="fw-bold">Skills: </span> UX & UI; Figma;
                      Design Tools; Responsive Design; Color Theory &
                      Typography; Branding & Identity Design
                    </p>
                    <p>
                      <span className="fw-bold">Level: </span> Foundational
                    </p>
                    <p>
                      <span className="fw-bold">Time: </span> 28 hours
                    </p>
                    <p>
                      <span className="fw-bold">Institution: </span> Udemy
                    </p>
                    <p>
                      <span className="fw-bold">Grade: </span> 100&#37;
                    </p>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- SOLAR SYSTEM ---------------------------------------- */}

            <div className="carousel-item active d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-xl-row mx-5"
              >
                <div className="d-none d-xl-block align-self-center">
                  <img
                    src="../assets/certificatesImages/TheScienceOfTheSolarSystem.png"
                    alt="mercury"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-xl-start mx-5">
                  <h1 className="ms-0 ms--4 py-3 fw-semibold inTextCard">
                    Astronomy
                  </h1>
                  <div className="d-block d-xl-none align-self-center">
                    <img
                      src="../assets/certificatesImages/TheScienceOfTheSolarSystem.png"
                      alt="mercury"
                      className="newCarouselImage"
                      style={{ borderRadius: "20px" }}
                    />
                  </div>
                  <span className="inTextCard">
                    <h6 className="py-4 text-center text-xl-start ">
                      Study of celestial bodies, planet, moons, asteroids and
                      comet characteristics.
                    </h6>

                    <p className="fw-italic">
                      <span className="fw-bold">Skills: </span> Astronomy; Solar
                      Systems; Chemistry; Geology; Astrobiology
                    </p>
                    <p>
                      <span className="fw-bold">Level: </span> Foundational
                    </p>
                    <p>
                      <span className="fw-bold">Time: </span> 29 hours
                    </p>
                    <p>
                      <span className="fw-bold">Institution: </span> Coursera
                      &#40;Caltech&#41;
                    </p>
                    <p>
                      <span className="fw-bold">Grade: </span> 100&#37;
                    </p>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- ASTROBIOLOGY ---------------------------------------- */}
            <div className="carousel-item active d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-xl-row mx-5"
              >
                <div className="d-none d-xl-block align-self-center">
                  <img
                    src="../assets/certificatesImages/AstrobiologyAndTheSearchForExtraterrestrialLife.png"
                    alt="mercury"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-xl-start mx-5">
                  <h1 className="ms-0 ms--4 py-3 fw-semibold inTextCard">
                    Astrobiology
                  </h1>
                  <div className="d-block d-xl-none align-self-center">
                    <img
                      src="../assets/certificatesImages/AstrobiologyAndTheSearchForExtraterrestrialLife.png"
                      alt="mercury"
                      className="newCarouselImage"
                      style={{ borderRadius: "20px" }}
                    />
                  </div>
                  <span className="inTextCard">
                    <h6 className="py-4 text-center text-xl-start ">
                      Fourth planet in our Solar System and has an average
                      surface temperature of -65 C&deg; and orbiting the Sun
                      every 687 days.{" "}
                    </h6>

                    <p className="fw-italic">
                      <span className="fw-bold">Skills: </span> Solar System;
                      Biology; Microbiology; Astrobiology
                    </p>
                    <p>
                      <span className="fw-bold">Level: </span> Foundational
                    </p>
                    <p>
                      <span className="fw-bold">Time: </span> 11 hours
                    </p>
                    <p>
                      <span className="fw-bold">Institution: </span> Coursera
                      &#40;The University of Edinburgh&#41;
                    </p>
                    <p>
                      <span className="fw-bold">Grade: </span> 100&#37;
                    </p>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------------------- JAPANESE ---------------------------------------- */}

            <div className="carousel-item active d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <div
                id="cardContainer"
                className="align-self-center d-flex flex-column flex-xl-row mx-5"
              >
                <div className="d-none d-xl-block align-self-center">
                  <img
                    src="../assets/certificatesImages/Japanese.png"
                    alt="mercury"
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center align-items-xl-start mx-5">
                  <h1 className="ms-0 ms--4 py-3 fw-semibold inTextCard">
                    Japanese
                  </h1>
                  <div className="d-block d-xl-none align-self-center">
                    <img
                      src="../assets/certificatesImages/Japanese.png"
                      alt="mercury"
                      className="newCarouselImage"
                      style={{ borderRadius: "20px" }}
                    />
                  </div>
                  <span className="inTextCard">
                    <h6 className="py-4 text-center text-xl-start">
                      This is the zone between Mars and Jupiter where we can
                      find asteroids of different sizes, shapes and
                      compositions.
                    </h6>

                    <p className="fw-italic">
                      <span className="fw-bold">Skills: </span> Basic
                      vocabulary; Fundemental grammar; Pronounciating;
                      Listening; Conversational phrase and expressions; Language
                      related cultural insights
                    </p>
                    <p>
                      <span className="fw-bold">Level: </span> Foundational
                    </p>
                    <p>
                      <span className="fw-bold">Time: </span> 30 hours
                    </p>
                    <p>
                      <span className="fw-bold">Institution: </span> EDX
                      &#40;Waseda University&#41;
                    </p>
                    <p>
                      <span className="fw-bold">Grade: </span> 100&#37;
                    </p>
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
