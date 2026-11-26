
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Blog.css';

import {
  FaArrowRight,
  FaTimes,
  FaCheckCircle
} from 'react-icons/fa';

// PROJECT IMAGES
import blog1 from "../../assets/ay03.jpeg";
import blog2 from "../../assets/ay00.jpeg";
import blog3 from "../../assets/ay01.jpeg";
import blog4 from "../../assets/ay02.jpeg";
import blog5 from "../../assets/ay04.jpeg";
import blog6 from "../../assets/ay05.jpeg";

// PROJECT GALLERY
const projects = [
  { image: blog1, number: '01', title: 'Aluminium Project' },
  { image: blog2, number: '02', title: 'Architectural Work' },
  { image: blog3, number: '03', title: 'Glass Installation' },
  { image: blog4, number: '04', title: 'Modern Construction' },
  { image: blog5, number: '05', title: 'Aluminium Solutions' },
  { image: blog6, number: '06', title: 'Building Finishing' }
];

const companyQuotation =
  "At AWAN General Contracting & Aluminium Works, we turn your vision into reality through quality, precision and professional workmanship.";

const categoryDetails = {
  active: {
    label: 'ACTIVE PROJECTS',
    heading: 'Projects Currently in Progress.',
    description: 'Explore our project portfolio and discover the quality and workmanship behind our construction and aluminium solutions.'
  },
  pending: {
    label: 'UPCOMING PROJECTS',
    heading: 'Preparing for What Comes Next.',
    description: 'Discover the projects and opportunities being prepared by our team.'
  },
  completed: {
    label: 'COMPLETED PROJECTS',
    heading: 'Work Delivered with Excellence.',
    description: 'Explore our completed aluminium, glass and architectural work, where precision engineering meets modern design.'
  }
};

const Blog = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const location = useLocation();

  const projectStatus = location.state?.projectStatus || 'completed';

  const category = categoryDetails[projectStatus] || categoryDetails.completed;

  // CLOSE IMAGE POPUP WITH ESCAPE
  useEffect(() => {
    if (!selectedProject) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <main className="awan-project-page">

      {/* HERO */}
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

          <a href="#project-portfolio" className="awan-hero-button">
            EXPLORE OUR WORK <FaArrowRight />
          </a>

          <div className="awan-hero-bottom">
            <span><FaCheckCircle /> QUALITY</span>
            <span><FaCheckCircle /> PRECISION</span>
            <span><FaCheckCircle /> EXCELLENCE</span>
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


      {/* INTRODUCTION */}
      <section className="awan-project-intro awan-project-container">

        <div className="awan-intro-left">
          <span className="awan-section-label">
            <i></i> {category.label}
          </span>

          <h2>
            {category.heading}
          </h2>
        </div>

        <div className="awan-intro-right">
          <p>
            {category.description}
          </p>

          <div className="awan-intro-line"></div>
        </div>

      </section>


      {/* PROJECT PORTFOLIO */}
      <section
        className="awan-project-portfolio"
        id="project-portfolio"
      >

        <div className="awan-project-container">

          <div className="awan-portfolio-heading">
            <div>
              <span className="awan-section-label">
                <i></i> OUR EXPERIENCE
              </span>

              <h2>Selected Project Portfolio<span>.</span></h2>
            </div>

            <p>
              A closer look at our work, craftsmanship and attention to detail.
            </p>
          </div>


          <div className="awan-project-grid">

            {projects.map((project) => (

              <article
                className="awan-project-card"
                key={project.number}
                onClick={() => setSelectedProject(project)}
                tabIndex={0}
                role="button"
                aria-label={`View ${project.title}`}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
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
                    <span>AWAN PROJECT / {project.number}</span>
                    <h3>{project.title}</h3>
                  </div>

                  <FaArrowRight className="awan-project-detail-arrow" />

                </div>

              </article>

            ))}

          </div>

          <p className="awan-gallery-note">
            {companyQuotation}
          </p>

        </div>

      </section>


      {/* COMPANY COMMITMENT */}
      <section className="awan-project-feature">

        <div className="awan-project-container awan-feature-inner">

          <div className="awan-feature-content">

            <span className="awan-section-label">
              <i></i> OUR COMMITMENT
            </span>

            <h2>
              Every Detail Matters.
              <span>Every Project Counts.</span>
            </h2>

            <p>
              We believe quality is reflected in every profile,
              every connection and every finished detail. Our
              commitment is to deliver dependable solutions
              with professional workmanship.
            </p>

            <Link to="/about" className="awan-feature-link">
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


      {/* CONTACT CTA */}
      <section className="awan-project-contact">

        <div className="awan-project-container awan-contact-inner">

          <div>
            <span className="awan-section-label">
              <i></i> HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let's Create Something
              <span>Exceptional.</span>
            </h2>

            <p>
              Talk to our team about your aluminium, glass and
              architectural requirements.
            </p>
          </div>

          <Link to="/contact">
            START A PROJECT <FaArrowRight />
          </Link>

        </div>

      </section>


      {/* IMAGE POPUP */}
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
              <span>AWAN PROJECT / {selectedProject.number}</span>
              <h3>{selectedProject.title}</h3>
            </div>

          </div>

        </div>

      )}

    </main>
  );
};

export default Blog;
