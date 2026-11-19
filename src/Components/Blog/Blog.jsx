
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

import {
  FaArrowRight,
  FaBuilding,
  FaCheckCircle,
  FaSearch,
  FaTimes,
  FaLayerGroup
} from 'react-icons/fa';

import blog1 from "../../assets/ay03.jpeg";
import blog2 from "../../assets/ay00.jpeg";
import blog3 from "../../assets/ay01.jpeg";
import blog4 from "../../assets/ay02.jpeg";
import blog5 from "../../assets/ay04.jpeg";
import blog6 from "../../assets/ay05.jpeg";

// COMPLETED PROJECT DATA
const projectData = [
  ["Commercial Aluminium Doors", "DOOR SYSTEMS", blog5],
  ["Glass Partition Systems", "INTERIOR SYSTEMS", blog6],
  ["Aluminium Sliding Window Installation", "WINDOW SYSTEMS", blog1],
  ["Structural Glass Entrance", "GLASS SYSTEMS", blog2],
  ["Aluminium Composite Panel Facade", "CLADDING SYSTEMS", blog3],
  ["Shopfront Aluminium Glazing", "COMMERCIAL SYSTEMS", blog4],
  ["Office Glass Partition Installation", "INTERIOR SYSTEMS", blog5],
  ["Aluminium Hinged Door System", "DOOR SYSTEMS", blog6],
  ["Curtain Wall Glazing Works", "FACADE SYSTEMS", blog1],
  ["Balcony Glass Railing", "GLASS SYSTEMS", blog2],
  ["Aluminium Louvers and Screens", "ARCHITECTURAL SYSTEMS", blog3],
  ["Automatic Glass Entrance Doors", "DOOR SYSTEMS", blog4],
  ["Aluminium Pergola Installation", "OUTDOOR SYSTEMS", blog5],
  ["Frameless Glass Shower Enclosure", "INTERIOR GLASS SYSTEMS", blog6],
  ["Aluminium Office Partition", "INTERIOR SYSTEMS", blog1],
  ["Glass Balcony Enclosure", "GLASS SYSTEMS", blog2],
  ["Aluminium Canopy Installation", "OUTDOOR SYSTEMS", blog3],
  ["Commercial Glass Facade", "FACADE SYSTEMS", blog4],
  ["Aluminium Folding Door System", "DOOR SYSTEMS", blog5],
  ["Staircase Glass Railing", "GLASS SYSTEMS", blog6],
  ["Aluminium Sunshade Installation", "ARCHITECTURAL SYSTEMS", blog1],
  ["Glass Office Entrance", "COMMERCIAL SYSTEMS", blog2]
];

const projects = projectData.map((item, index) => ({
  id: index + 1,
  title: item[0],
  category: item[1],
  image: item[2]
}));

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    "ALL",
    ...new Set(projects.map(project => project.category))
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "ALL" ||
        project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Close image preview using Escape key
  useEffect(() => {
    if (!selectedProject) return;

    const handleEscape = event => {
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

        <div className="awan-hero-number">01 / PORTFOLIO</div>
      </section>

      {/* INTRODUCTION */}
      <section className="awan-project-intro">

        <div className="awan-intro-left">
          <span className="awan-section-label">OUR EXPERIENCE</span>

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

      {/* PROJECT PORTFOLIO */}
      <section
        className="awan-project-portfolio"
        id="project-portfolio"
      >

        <div className="awan-portfolio-heading">

          <div>
            <span className="awan-section-label">
              SELECTED PROJECTS
            </span>

            <h2>Our Completed Work</h2>

            <p>
              A collection of aluminium and glass solutions.
            </p>
          </div>

          <div className="awan-total-projects">
            <FaBuilding />

            <div>
              <strong>{projects.length}</strong>
              <span>COMPLETED PROJECTS</span>
            </div>
          </div>

        </div>

        {/* SEARCH AND CATEGORY FILTER */}
        <div className="awan-project-controls">

          <div className="awan-search-box">
            <FaSearch />

            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={event => setSearchTerm(event.target.value)}
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}
          </div>

          <div className="awan-category-filter">
            <span>FILTER:</span>

            <select
              value={selectedCategory}
              onChange={event => setSelectedCategory(event.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === "ALL" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* RESULTS INFORMATION */}
        <div className="awan-results-line">
          <span>
            SHOWING <strong>{filteredProjects.length}</strong> OF{" "}
            <strong>{projects.length}</strong> PROJECTS
          </span>

          <span className="awan-completed-indicator">
            <FaCheckCircle /> ALL PROJECTS COMPLETED
          </span>
        </div>

        {/* PROJECT GRID */}
        <div className="awan-project-grid">

          {filteredProjects.map((project, index) => (
            <article
              className="awan-project-card"
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >

              <div className="awan-project-image">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                <div className="awan-image-overlay"></div>

                <span className="awan-project-number">
                  {String(project.id).padStart(2, "0")}
                </span>

                <span className="awan-completed-badge">
                  <FaCheckCircle /> COMPLETED
                </span>

                <div className="awan-image-view">
                  VIEW PROJECT <FaArrowRight />
                </div>

              </div>

              <div className="awan-project-details">

                <span className="awan-project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <div className="awan-card-bottom">
                  <span>
                    PROJECT {String(project.id).padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    aria-label={`View ${project.title}`}
                    onClick={event => {
                      event.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    <FaArrowRight />
                  </button>
                </div>

              </div>

            </article>
          ))}

        </div>

        {/* EMPTY RESULTS */}
        {filteredProjects.length === 0 && (
          <div className="awan-empty-projects">
            <FaLayerGroup />

            <h3>No Projects Found</h3>

            <p>
              Try another project name or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("ALL");
              }}
            >
              RESET FILTERS
            </button>
          </div>
        )}

      </section>

      {/* BOTTOM FEATURE STRIP */}
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
            onClick={event => event.stopPropagation()}
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
              alt={selectedProject.title}
            />

          </div>

        </div>
      )}

    </main>
  );
};

export default Blog;
