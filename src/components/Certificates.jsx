import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import certificates from "../certificates";

function Certificates() {
  const [flipped, setFlipped] = useState(
    Array(certificates.length).fill(false)
  );

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <Carousel>
      {certificates.map((cert, index) => (
        <Carousel.Item key={index}>
          <div
            className={`flip-card ${flipped[index] ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="newCarouselImage"
                  style={{ borderRadius: "20px" }}
                />
                <button className="flip-card-button d-flex justify-content-center align-items-center">
                  <h1 className="fw-semibold">+</h1>
                </button>
              </div>
              <div className="flip-card-back">
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
                <p>
                  <strong>Skills:</strong> {cert.skills}
                </p>
                <p>
                  <strong>Level:</strong> {cert.level}
                </p>
                <p>
                  <strong>Time:</strong> {cert.time}
                </p>
                <p>
                  <strong>Institution:</strong> {cert.institution}
                </p>
                <p>
                  <strong>Grade:</strong> {cert.grade}
                </p>
                {cert.link && (
                  <a
                    href={cert.link}
                    className="text-decoration-none text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                )}
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Certificates;
