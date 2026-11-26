
import { Link } from "react-router-dom";
import "./Partition.css";

const partitionServices = [
  {
    number: "01",
    title: "Aluminium Partitions",
    description:
      "Modern aluminium partition systems designed to divide spaces while maintaining a professional and elegant appearance."
  },
  {
    number: "02",
    title: "Glass Partitions",
    description:
      "Stylish glass partition solutions that provide transparency, natural light and a spacious working environment."
  },
  {
    number: "03",
    title: "Office Partitions",
    description:
      "Functional office partition systems designed to create organized workspaces, private cabins and meeting areas."
  },
  {
    number: "04",
    title: "Gypsum Partitions",
    description:
      "Interior gypsum partition systems for flexible layouts, smooth finishes and modern room divisions."
  }
];

const Partition = () => {
  return (
    <main className="partition-page">

      {/* HERO */}
      <section className="partition-hero">
        <div className="partition-hero-content">
          <span>AWAN GENERAL CONTRACTING & ALUMINIUM WORKS</span>

          <h1>
            Modern <strong>Partition</strong> Solutions
          </h1>

          <p>
            Professional aluminium, glass and interior partition
            systems designed to transform your spaces.
          </p>

          <div className="partition-hero-buttons">
            <Link to="/contact" className="partition-btn">
              Get a Free Quote
            </Link>

            <a href="#partition-services" className="partition-outline-btn">
              Explore Services
            </a>
          </div>
        </div>

        <div className="partition-hero-label">
          <span>01</span>
          <p>SPACE DIVISION & INTERIOR SOLUTIONS</p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="partition-intro">
        <div className="partition-intro-left">
          <span className="partition-tag">WHO WE ARE</span>

          <h2>
            Creating Better Spaces Through
            <span> Smart Partition Design</span>
          </h2>
        </div>

        <div className="partition-intro-right">
          <p>
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS provides
            professional partition solutions for residential,
            commercial and corporate environments.
          </p>

          <p>
            Our solutions combine functionality, durability and
            contemporary design to create practical and attractive
            interior spaces.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="partition-services" id="partition-services">
        <div className="partition-section-heading">
          <span className="partition-tag">OUR EXPERTISE</span>
          <h2>Our Partition Services</h2>
          <p>
            Complete partition solutions for modern interiors and
            professional environments.
          </p>
        </div>

        <div className="partition-services-grid">
          {partitionServices.map((service) => (
            <article className="partition-service-card" key={service.number}>
              <span className="partition-card-number">
                {service.number}
              </span>

              <div className="partition-card-line"></div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <Link to="/contact">
                Discuss Your Project →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="partition-applications">
        <div className="partition-applications-content">
          <span className="partition-tag">WHERE WE WORK</span>

          <h2>Partition Solutions for Every Environment</h2>

          <div className="partition-applications-list">
            <span>Corporate Offices</span>
            <span>Commercial Buildings</span>
            <span>Residential Properties</span>
            <span>Hotels & Hospitality</span>
            <span>Retail Shops</span>
            <span>Meeting Rooms</span>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="partition-process">
        <div className="partition-section-heading">
          <span className="partition-tag">OUR WORK PROCESS</span>
          <h2>From Planning to Installation</h2>
        </div>

        <div className="partition-process-grid">
          <div>
            <span>01</span>
            <h3>Consultation</h3>
            <p>Understanding your space, requirements and project goals.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Planning & Design</h3>
            <p>Developing practical partition layouts for your space.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Installation</h3>
            <p>Professional installation using suitable materials.</p>
          </div>

          <div>
            <span>04</span>
            <h3>Final Inspection</h3>
            <p>Checking finishing, alignment and overall workmanship.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="partition-cta">
        <span>LETS BUILD BETTER SPACES</span>
        <h2>Ready to Transform Your Interior?</h2>
        <p>
          Contact AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          for your partition project.
        </p>

        <Link to="/contact">
          Contact Our Team →
        </Link>
      </section>

    </main>
  );
};

export default Partition;
