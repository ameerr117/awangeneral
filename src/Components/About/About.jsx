
import './About.css';

import Approach from "../../Components/Approach/Approach";
import Resources from "../../Components/Resources/Resources";
import Stories from "../../Components/Stories/Stories";
import Parteners from "../../Components/Parteners/Parteners";
import Page from "../../Components/Page/Page";

import {
  FaArrowRight,
  FaCheckCircle,
  FaBuilding,
  FaDraftingCompass,
  FaLayerGroup,
  FaTools
} from "react-icons/fa";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="Full">

      {/* HERO SECTION */}
      <section className="Abouts">
        <div className="about-overlay"></div>

        <div className="about-hero-content">

          <div className="about-tag">
            <span className="about-tag-line"></span>
            AWAN GENERAL CONTRACTING & ALUMINIUM WORK L.L.C
          </div>

          <h1>
            Engineering Quality.
            <span> Building Confidence.</span>
          </h1>

          <p>
            Delivering premium aluminium, glass and architectural solutions
            through precision engineering, exceptional craftsmanship and
            professional project execution.
          </p>

          <div className="about-hero-actions">
            <Link to="/contact" className="about-primary-btn">
              Discuss Your Project <FaArrowRight />
            </Link>

            <Link to="/services" className="about-secondary-btn">
              Explore Our Services
            </Link>
          </div>

          <div className="about-highlights">
            <div>
              <FaCheckCircle />
              <span>QUALITY WORKMANSHIP</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>PRECISION ENGINEERING</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>RELIABLE EXECUTION</span>
            </div>
          </div>

        </div>

        <div className="about-hero-side">
          <span>01 / COMPANY PROFILE</span>
          <div></div>
          <span>BUILT WITH PRECISION</span>
        </div>

        <div className="about-hero-bottom">
          <span>AWAN</span>
          <span>ALUMINIUM & ARCHITECTURAL SOLUTIONS</span>
        </div>
      </section>


      {/* COMPANY INTRODUCTION */}
      <section className="about-introduction">

        <div className="about-intro-left">
          <span className="about-section-label">
            <span></span> WHO WE ARE
          </span>

          <h2>
            Creating Spaces.
            <span> Delivering Excellence.</span>
          </h2>
        </div>

        <div className="about-intro-right">
          <p>
            AWAN GENERAL CONTRACTING & ALUMINIUM WORK L.L.C is committed
            to providing professional aluminium, glass and architectural
            solutions for modern construction requirements.
          </p>

          <p>
            Our focus is on quality materials, detailed workmanship,
            practical design and dependable installation. We approach
            every project with attention to detail and a commitment
            to delivering lasting value.
          </p>

          <Link to="/contact" className="about-text-link">
            Let's Build Together <FaArrowRight />
          </Link>
        </div>

      </section>


      {/* COMPANY VALUES */}
      <section className="about-values">

        <div className="about-values-heading">
          <span className="about-section-label">
            <span></span> OUR EXPERTISE
          </span>

          <h2>
            Built Around
            <span> Quality & Precision</span>
          </h2>

          <p>
            Professional solutions designed to meet the demands
            of contemporary architecture and construction.
          </p>
        </div>

        <div className="about-values-grid">

          <div className="about-value-card">
            <div className="about-value-icon">
              <FaBuilding />
            </div>
            <span>01</span>
            <h3>General Contracting</h3>
            <p>
              Professional project coordination and construction
              solutions with attention to detail.
            </p>
          </div>

          <div className="about-value-card">
            <div className="about-value-icon">
              <FaLayerGroup />
            </div>
            <span>02</span>
            <h3>Aluminium Systems</h3>
            <p>
              Modern aluminium solutions designed for functionality,
              durability and architectural appeal.
            </p>
          </div>

          <div className="about-value-card">
            <div className="about-value-icon">
              <FaDraftingCompass />
            </div>
            <span>03</span>
            <h3>Glass & Glazing</h3>
            <p>
              Contemporary glazing solutions that enhance natural
              light and architectural design.
            </p>
          </div>

          <div className="about-value-card">
            <div className="about-value-icon">
              <FaTools />
            </div>
            <span>04</span>
            <h3>Expert Installation</h3>
            <p>
              Careful installation and professional finishing
              for dependable project results.
            </p>
          </div>

        </div>
      </section>


      {/* EXISTING COMPANY COMPONENTS */}
      <Approach />
      <Resources />
      <Stories />
      <Parteners />
      <Page />

    </main>
  );
};

export default About;
