
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

import {
  FaArrowRight,
  FaTimes
} from 'react-icons/fa';

// PROJECT IMAGES
import blog1 from "../../assets/ay03.jpeg";
import blog2 from "../../assets/ay00.jpeg";
import blog3 from "../../assets/ay01.jpeg";
import blog4 from "../../assets/ay02.jpeg";
import blog5 from "../../assets/ay04.jpeg";
import blog6 from "../../assets/ay05.jpeg";

// COMPLETED PROJECT PICTURES
const projects = [
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6
];

const companyQuotation =
  "At AWAN General Contracting & Aluminium Works, we turn your vision into reality through quality, precision and professional workmanship.";

const Blog = () => {

  const [selectedProject, setSelectedProject] = useState(null);

  // CLOSE IMAGE POPUP WITH ESCAPE
  useEffect(() => {
    if (selectedProject === null) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };

  }, [selectedProject]);

  return (
    <main className="awan-project-page">

      {/* HERO SECTION */}
      <section className="awan-project-hero">

        <div className="awan-hero-overlay"></div>

        <div className="awan-project-hero-content">

          <div className="awan-hero-label">
            <span></span>
            AWAN GENERAL ALUMINIUM & CONSTRUCTION
          </div>

          <h1>
            Crafting Excellence.
            <span> Building the Future.</span>
          </h1>

          <p>
            Discover our completed aluminium, glass and architectural
            projects, where precision engineering meets modern design.
          </p>

          <a href="#project-portfolio" className="awan-hero-button">
            EXPLORE OUR WORK <FaArrowRight />
          </a>

          <div className="awan-hero-bottom">
            <span>QUALITY</span>
            <span>PRECISION</span>
            <span>EXCELLENCE</span>
          </div>

        </div>

        <div className="awan-hero-number">
          01 / PORTFOLIO
        </div>

      </section>

      {/* INTRODUCTION */}
      <section className="awan-project-intro">

        <div className="awan-intro-left">

          <span className="awan-section-label">
            OUR EXPERIENCE
          </span>

          <h2>
            Designed with Purpose.
            <span> Built with Precision.</span>
          </h2>

        </div>

        <div className="awan-intro-right">

          <p>
            From contemporary aluminium systems to sophisticated glass
            installations, our portfolio reflects our commitment to
            professional workmanship, quality materials and architectural
            excellence.
          </p>

          <div className="awan-intro-line"></div>

        </div>

      </section>

      {/* COMPLETED PROJECT GALLERY */}
      <section
        className="awan-project-portfolio"
        id="project-portfolio"
      >

        <div className="awan-project-grid">

          {projects.map((image, index) => (

            <article
              className="awan-project-card"
              key={index}
              onClick={() => setSelectedProject(image)}
            >

              <div className="awan-project-image">

                <img
                  src={image}
                  alt={`AWAN Completed Project ${index + 1}`}
                  loading="lazy"
                />

                <div className="awan-image-overlay"></div>

                <span className="awan-project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="awan-image-view">
                  VIEW IMAGE <FaArrowRight />
                </div>

              </div>

              <div className="awan-project-details">

                <p className="awan-company-quotation">
                  "{companyQuotation}"
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* COMPANY COMMITMENT */}
      <section className="awan-project-feature">

        <div className="awan-feature-content">

          <span>OUR COMMITMENT</span>

          <h2>
            Every Detail Matters.
            <span> Every Project Counts.</span>
          </h2>

          <p>
            We believe quality is reflected in every profile, every
            connection and every finished detail.
          </p>

        </div>

        <div className="awan-feature-stats">

          <div>
            <strong>01</strong>
            <span>PRECISION</span>
          </div>

          <div>
            <strong>02</strong>
            <span>QUALITY</span>
          </div>

          <div>
            <strong>03</strong>
            <span>COMMITMENT</span>
          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="awan-project-contact">

        <div>

          <span>HAVE A PROJECT IN MIND?</span>

          <h2>Let's Create Something Exceptional.</h2>

          <p>
            Talk to our team about your aluminium, glass and
            architectural requirements.
          </p>

        </div>

        <Link to="/contact">
          START A PROJECT <FaArrowRight />
        </Link>

      </section>

      {/* FULL IMAGE POPUP */}
      {selectedProject && (

        <div
          className="awan-project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="awan-project-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Completed project image"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              className="awan-modal-close"
              aria-label="Close image"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes />
            </button>

            <img
              src={selectedProject}
              alt="AWAN completed project full view"
            />

          </div>

        </div>

      )}

    </main>
  );
};

export default Blog;
