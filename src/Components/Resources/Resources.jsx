
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaPhoneAlt, FaTimes, FaExpand } from "react-icons/fa";

import visit1 from "../../assets/agc9.jpeg";
import visit2 from "../../assets/agc.jpeg";
import visit3 from "../../assets/agc3.jpeg";

import "./Resources.css";

const Resources = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const features = [
    "Custom aluminium windows and doors designed for modern residential and commercial spaces.",
    "Professional curtain wall, glass facade and architectural glazing solutions.",
    "High-quality glass partitions, shower enclosures and aluminium railings.",
    "Careful measurements, material selection and precision installation for every project.",
    "Reliable workmanship and attention to detail from planning through project completion.",
  ];

  const galleryImages = [
    {
      src: visit1,
      alt: "AWAN aluminium architectural solutions",
      number: "01",
      title: "ALUMINIUM SYSTEMS",
    },
    {
      src: visit2,
      alt: "Aluminium doors and glass installation",
      number: "02",
      title: "GLASS SOLUTIONS",
    },
    {
      src: visit3,
      alt: "Architectural aluminium project",
      number: "03",
      title: "ARCHITECTURAL WORKS",
    },
  ];

  return (
    <section className="awan-resources-section">
      <div className="awan-resources-container">

        {/* LEFT CONTENT */}
        <div className="awan-resources-content">
          <div className="awan-resources-label">
            <span>WHY CHOOSE AWAN</span>
            <i></i>
          </div>

          <h1>
            Aluminium Solutions
            <span>Designed Around Your Needs.</span>
          </h1>

          <p className="awan-resources-intro">
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS provides
            professional aluminium and glass solutions for residential,
            commercial and architectural projects. We bring together
            thoughtful design, quality materials and precise workmanship
            to deliver solutions suited to each project.
          </p>

          {/* FEATURES */}
          <div className="awan-resources-features">
            {features.map((feature, index) => (
              <div className="awan-resource-feature" key={index}>
                <FaCheckCircle className="awan-check-icon" />
                <p>{feature}</p>
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="awan-resources-actions">
            <Link to="/programz" className="awan-about-btn">
              EXPLORE OUR SERVICES
              <span>↗</span>
            </Link>

            <Link to="/contact" className="awan-call-btn">
              <FaPhoneAlt />
              <span>CONTACT OUR TEAM</span>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE GALLERY */}
        <div className="awan-resources-gallery">
          {galleryImages.map((image, index) => (
            <button
              type="button"
              className={`awan-gallery-image gallery-image-${[
                "one",
                "two",
                "three",
              ][index]}`}
              key={image.number}
              onClick={() => setSelectedImage(image)}
              aria-label={`Open ${image.title} image`}
            >
              <img src={image.src} alt={image.alt} />

              <div className="awan-gallery-caption">
                <span>{image.number}</span>
                <p>{image.title}</p>
                <FaExpand className="awan-expand-icon" />
              </div>
            </button>
          ))}

          <div className="awan-gallery-brand">
            <strong>AWAN</strong>
            <span>GENERAL CONTRACTING</span>
            <small>& ALUMINIUM WORKS</small>
          </div>
        </div>
      </div>

      {/* IMAGE LIGHTBOX */}
      {selectedImage && (
        <div
          className="awan-image-lightbox"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          <button
            type="button"
            className="awan-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <FaTimes />
          </button>

          <div
            className="awan-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage.src} alt={selectedImage.alt} />

            <div className="awan-lightbox-caption">
              <span>{selectedImage.number}</span>
              <p>{selectedImage.title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resources;
