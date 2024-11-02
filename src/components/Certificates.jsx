import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import certificates from "../certificates";

function Certificates() {
  const [flipped, setFlipped] = useState(
    Array(certificates.length).fill(false)
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });

    setTimeout(() => {
      setFlipped((prev) => {
        const newFlipped = [...prev];
        newFlipped[index] = false;
        return newFlipped;
      });
    }, 20000); // 20 seconds
  };

  const handleSlideChange = (selectedIndex) => {
    setActiveIndex(selectedIndex);

    setFlipped(Array(certificates.length).fill(false));
  };

  return (
    <div>
      <Carousel
        indicators={false}
        activeIndex={activeIndex}
        onSelect={handleSlideChange}
      >
        {certificates.map((cert, index) => (
          <Carousel.Item key={index}>
            <div className={`flip-card ${flipped[index] ? "flipped" : ""}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="newCarouselImage"
                    style={{ borderRadius: "20px" }}
                  />
                  <button
                    className="flip-card-button d-flex justify-content-center align-items-center"
                    onClick={() => handleFlip(index)}
                  >
                    <h1 className="fw-semibold">+</h1>
                  </button>
                </div>
                <div className="flip-card-back">
                  <h3 style={{ color: "#fc5185" }} className="fw-bold">
                    {cert.title}
                  </h3>
                  <p className="d-none d-md-block">{cert.description}</p>
                  <p>
                    <strong>Skills:</strong> {cert.skills}
                  </p>
                  <p className="d-none d-sm-block">
                    <strong>Level:</strong> {cert.level}
                  </p>
                  <p>
                    <strong>Time:</strong> {cert.time}
                  </p>
                  <p className="d-none d-sm-block">
                    <strong>Institution:</strong> {cert.institution}
                  </p>
                  <p className="d-none d-sm-block">
                    <strong>Grade:</strong> {cert.grade}
                  </p>
                  {cert.link && (
                    <a
                      id="certificateVisitLink"
                      href={cert.link}
                      className="text-decoration-none text-white px-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more
                    </a>
                  )}
                  <button
                    className="flip-card-front-button d-flex justify-content-center align-items-center"
                    onClick={() => handleFlip(index)}
                  >
                    <h1 className="fw-semibold">-</h1>
                  </button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Certificates;
