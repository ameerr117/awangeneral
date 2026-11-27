
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Blog.css";

import {
  FaArrowRight,
  FaTimes,
  FaCheckCircle
} from "react-icons/fa";

// ======================================
// PROJECT IMAGES - 12 PICTURES
// ======================================

import blog1 from "../../assets/000.jpeg";
import blog2 from "../../assets/009.jpeg";
import blog3 from "../../assets/008.jpeg";
import blog4 from "../../assets/007.jpeg";
import blog5 from "../../assets/006.jpeg";
import blog6 from "../../assets/005.jpeg";
import blog7 from "../../assets/004.jpeg";
import blog8 from "../../assets/003.jpeg";
import blog9 from "../../assets/002.jpeg";
import blog10 from "../../assets/001.jpeg";
import blog11 from "../../assets/0001.jpeg";
import blog12 from "../../assets/0002.jpeg";

// ======================================
// PROJECT GALLERY
// ======================================

const projects = [
  {
    image: blog1,
    number: "01",
    title: "Aluminium Project",
    description: "Aluminium architectural project and installation work."
  },
  {
    image: blog2,
    number: "02",
    title: "Architectural Work",
    description: "Modern architectural solutions and professional finishing."
  },
  {
    image: blog3,
    number: "03",
    title: "Glass Installation",
    description: "Glass installation and architectural glazing solutions."
  },
  {
    image: blog4,
    number: "04",
    title: "Modern Construction",
    description: "Construction work with attention to quality and detail."
  },
  {
    image: blog5,
    number: "05",
    title: "Aluminium Solutions",
    description: "Custom aluminium solutions for modern buildings."
  },
  {
    image: blog6,
    number: "06",
    title: "Building Finishing",
    description: "Professional building finishing and project execution."
  },
  {
    image: blog7,
    number: "07",
    title: "Aluminium Installation",
    description: "Aluminium installation and fabrication work."
  },
  {
    image: blog8,
    number: "08",
    title: "Building Architecture",
    description: "Architectural work for commercial and residential projects."
  },
  {
    image: blog9,
    number: "09",
    title: "Glass Architecture",
    description: "Modern glass applications and installation solutions."
  },
  {
    image: blog10,
    number: "10",
    title: "Construction Services",
    description: "Construction and site development solutions."
  },
  {
    image: blog11,
    number: "11",
    title: "Aluminium Fabrication",
    description: "Aluminium fabrication and architectural workmanship."
  },
  {
    image: blog12,
    number: "12",
    title: "Complete Projects",
    description: "Project work delivered with professional attention to detail."
  }
];

const companyQuotation =
  "At AWAN General Contracting & Aluminium Works, we turn your vision into reality through quality, precision and professional workmanship.";

// ======================================
// PROJECT CATEGORIES
// ======================================

const categoryDetails = {
  active: {
    label: "ACTIVE PROJECTS",
    heading: "Projects Currently in Progress.",
    description:
      "Explore our project portfolio and discover the quality and workmanship behind our construction and aluminium solutions."
  },

  pending: {
    label: "UPCOMING PROJECTS",
    heading: "Preparing for What Comes Next.",
    description:
      "Discover the projects and opportunities being prepared by our team."
  },

  completed: {
    label: "COMPLETED PROJECTS",
    heading: "Work Delivered with Excellence.",
    description:
      "Explore our completed aluminium, glass and architectural work, where precision engineering meets modern design."
  }
};

// ======================================
// MAIN BLOG COMPONENT
// ======================================

const Blog = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const location = useLocation();

  const projectStatus =
    location.state?.projectStatus || "completed";

  const category =
    categoryDetails[projectStatus] || categoryDetails.completed;

  // ======================================
  // CLOSE POPUP WITH ESCAPE
  // ======================================

  useEffect(() => {
    if (!selectedProject) return;

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

      {/* ==================================
          HERO SECTION
      ================================== */}

      <section className="awan-project-hero">

        <div className="awan-hero-overlay"></div>

        <div className="awan-project-container awan-project-hero-content">

          <div className="awan-hero-label">
            <span></span>
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          </div>

          <h1>
            Crafting Excellence.
            <span>Building the Future.</span>
          </h1>

          <p>
            Discover our aluminium, glass and architectural projects,
            where precision engineering meets modern design and
            professional workmanship.
          </p>

          <a
            href="#project-portfolio"
            className="awan-hero-button"
          >
            EXPLORE OUR WORK <FaArrowRight />
          </a>

          <div className="awan-hero-bottom">

            <span>
              <FaCheckCircle /> QUALITY
            </span>

            <span>
              <FaCheckCircle /> PRECISION
            </span>

            <span>
              <FaCheckCircle /> EXCELLENCE
            </span>

          </div>

        </div>

        {/* AWAN BRAND */}

        <div className="awan-project-brand">

          <div className="awan-brand-symbol">
            <span>A</span>
          </div>

          <div className="awan-brand-text">
            <h2>AWAN<span>.</span></h2>
            <p>GENERAL CONTRACTING</p>
            <small>ALUMINIUM & ARCHITECTURAL WORKS</small>
          </div>

        </div>

        <div className="awan-hero-number">
          01 / PORTFOLIO
        </div>

      </section>

      {/* ==================================
          INTRODUCTION
      ================================== */}

      <section className="awan-project-intro awan-project-container">

        <div className="awan-intro-left">

          <span className="awan-section-label">
            <i></i>
            {category.label}
          </span>

          <h2>
            {category.heading}
          </h2>

        </div>

        <div className="awan-intro-right">

          <p>{category.description}</p>

          <div className="awan-intro-line"></div>

        </div>

      </section>

      {/* ==================================
          12 PROJECT PICTURES
      ================================== */}

      <section
        className="awan-project-portfolio"
        id="project-portfolio"
      >

        <div className="awan-project-container">

          <div className="awan-portfolio-heading">

            <div>

              <span className="awan-section-label">
                <i></i>
                OUR EXPERIENCE
              </span>

              <h2>
                Selected Project Portfolio<span>.</span>
              </h2>

            </div>

            <p>
              A closer look at our work, craftsmanship
              and attention to detail.
            </p>

          </div>

          {/* PROJECT GRID */}

          <div className="awan-project-grid">

            {projects.map((project) => (

              <button
                type="button"
                className="awan-project-card"
                key={project.number}
                onClick={() => setSelectedProject(project)}
                aria-label={`View ${project.title}`}
              >

                <div className="awan-project-image">

                  <img
                    src={project.image}
                    alt={`AWAN ${project.title}`}
                    loading="lazy"
                  />

                  <div className="awan-image-overlay"></div>

                  <span className="awan-project-number">
                    {project.number}
                  </span>

                  <div className="awan-image-view">
                    VIEW PROJECT <FaArrowRight />
                  </div>

                </div>

                <div className="awan-project-details">

                  <div>

                    <span>
                      AWAN PROJECT / {project.number}
                    </span>

                    <h3>{project.title}</h3>

                  </div>

                  <FaArrowRight className="awan-project-detail-arrow" />

                </div>

              </button>

            ))}

          </div>

          <p className="awan-gallery-note">
            {companyQuotation}
          </p>

        </div>

      </section>

      {/* ==================================
          COMPANY COMMITMENT
      ================================== */}

      <section className="awan-project-feature">

        <div className="awan-project-container awan-feature-inner">

          <div className="awan-feature-content">

            <span className="awan-section-label">
              <i></i>
              OUR COMMITMENT
            </span>

            <h2>
              Every Detail Matters.
              <span>Every Project Counts.</span>
            </h2>

            <p>
              We believe quality is reflected in every profile,
              every connection and every finished detail.
              Our commitment is to deliver dependable solutions
              with professional workmanship.
            </p>

            <Link
              to="/about"
              className="awan-feature-link"
            >
              DISCOVER AWAN <FaArrowRight />
            </Link>

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

        </div>

      </section>

      {/* ==================================
          CONTACT SECTION
      ================================== */}

      <section className="awan-project-contact">

        <div className="awan-project-container awan-contact-inner">

          <div>

            <span className="awan-section-label">
              <i></i>
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let's Create Something
              <span>Exceptional.</span>
            </h2>

            <p>
              Talk to our team about your aluminium, glass
              and architectural requirements.
            </p>

          </div>

          <Link to="/contact">
            START A PROJECT <FaArrowRight />
          </Link>

        </div>

      </section>

      {/* ==================================
          PROJECT IMAGE POPUP
      ================================== */}

      {selectedProject && (

        <div
          className="awan-project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="awan-project-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} image`}
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
              src={selectedProject.image}
              alt={`AWAN ${selectedProject.title} full view`}
            />

            <div className="awan-modal-caption">

              <span>
                AWAN PROJECT / {selectedProject.number}
              </span>

              <h3>{selectedProject.title}</h3>

              <p>{selectedProject.description}</p>

            </div>

          </div>

        </div>

      )}

    </main>
  );
};

export default Blog;
