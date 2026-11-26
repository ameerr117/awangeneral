
import { Link } from "react-router-dom";
import "./Partition.css";

import {
  FaArrowRight,
  FaCheckCircle,
  FaBuilding,
  FaLayerGroup,
  FaLightbulb,
  FaRulerCombined,
  FaWhatsapp,
  FaGlassMartini,
  FaDoorOpen,
  FaTools,
  FaClipboardCheck
} from "react-icons/fa";

const partitionServices = [
  {
    number: "01",
    title: "Aluminium Partitions",
    subtitle: "STRENGTH & FLEXIBILITY",
    description:
      "Modern aluminium partition systems designed to divide spaces with clean architectural lines, durable framing and a professional finish.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    features: ["Durable aluminium frames", "Modern configurations", "Custom dimensions"]
  },
  {
    number: "02",
    title: "Glass Partitions",
    subtitle: "LIGHT & TRANSPARENCY",
    description:
      "Elegant glass partition solutions that create open, bright interiors while maintaining a refined and professional environment.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
    features: ["Clear glass options", "Contemporary appearance", "Natural light flow"]
  },
  {
    number: "03",
    title: "Office Partitions",
    subtitle: "SMART WORKSPACES",
    description:
      "Practical office partition systems for creating private cabins, collaborative areas, reception spaces and organized workplaces.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85",
    features: ["Office space planning", "Private work areas", "Professional finishes"]
  },
  {
    number: "04",
    title: "Gypsum Partitions",
    subtitle: "SEAMLESS INTERIORS",
    description:
      "Interior gypsum partition systems offering flexible layouts, smooth surfaces and attractive room divisions for modern spaces.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    features: ["Smooth wall finishes", "Flexible room layouts", "Modern interior design"]
  }
];

const applications = [
  "Corporate Offices",
  "Commercial Buildings",
  "Residential Properties",
  "Hotels & Hospitality",
  "Retail Shops",
  "Meeting Rooms"
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We understand your requirements, space dimensions and project expectations.",
    icon: <FaLightbulb />
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "We plan suitable partition layouts and material options for your space.",
    icon: <FaRulerCombined />
  },
  {
    number: "03",
    title: "Installation",
    description:
      "Our team carries out installation with attention to alignment and finishing.",
    icon: <FaTools />
  },
  {
    number: "04",
    title: "Final Inspection",
    description:
      "We review the completed work, finishing details and overall workmanship.",
    icon: <FaClipboardCheck />
  }
];

const Partition = () => {
  return (
    <main className="partition-page">

      {/* HERO SECTION */}
      <section className="partition-hero">
        <div className="partition-hero-image"></div>
        <div className="partition-hero-overlay"></div>

        <div className="partition-container partition-hero-inner">
          <div className="partition-hero-content">
            <span className="partition-eyebrow">
              <span></span>
              AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
            </span>

            <h1>
              Spaces Designed
              <br />
              <em>With Purpose.</em>
            </h1>

            <p>
              Discover modern partition solutions that bring together
              functionality, architectural elegance and intelligent
              space planning.
            </p>

            <div className="partition-hero-actions">
              <Link to="/contact" className="partition-btn partition-btn-copper">
                Discuss Your Project <FaArrowRight />
              </Link>

              <a href="#partition-services" className="partition-text-link">
                Explore Our Solutions <span>↓</span>
              </a>
            </div>
          </div>

          <div className="partition-hero-bottom">
            <span>INTERIOR SPACE SOLUTIONS</span>
            <span>01 — 04</span>
          </div>
        </div>

        <div className="partition-hero-side-label">
          ARCHITECTURAL PARTITION SYSTEMS
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="partition-intro">
        <div className="partition-container partition-intro-grid">

          <div className="partition-intro-heading">
            <span className="partition-label">01 / WHO WE ARE</span>

            <h2>
              Defining spaces.
              <br />
              <span>Creating possibilities.</span>
            </h2>
          </div>

          <div className="partition-intro-description">
            <p className="partition-intro-lead">
              A well-designed partition does more than divide a room.
              It creates purpose, improves functionality and shapes
              the experience of an interior.
            </p>

            <p>
              AWAN GENERAL CONTRACTING & ALUMINIUM WORKS provides
              partition solutions for residential, commercial and
              corporate environments. We focus on practical layouts,
              suitable materials and carefully considered finishes.
            </p>

            <Link to="/contact" className="partition-underlined-link">
              Work With Our Team <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE INTRO */}
      <section className="partition-services" id="partition-services">
        <div className="partition-container">

          <div className="partition-section-heading">
            <div>
              <span className="partition-label">02 / OUR EXPERTISE</span>
              <h2>
                Partition solutions
                <br />
                <span>for modern living.</span>
              </h2>
            </div>

            <p>
              From contemporary glass systems to functional interior
              divisions, explore solutions designed around your space
              and project requirements.
            </p>
          </div>

          <div className="partition-services-grid">
            {partitionServices.map((service) => (
              <article className="partition-service-card" key={service.number}>

                <div className="partition-service-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />

                  <span className="partition-service-number">
                    {service.number}
                  </span>
                </div>

                <div className="partition-service-content">
                  <span className="partition-service-subtitle">
                    {service.subtitle}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <FaCheckCircle />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="partition-card-link">
                    Discuss This Solution <FaArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="partition-feature">
        <div className="partition-feature-image">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85"
            alt="Modern office interior with glass partitions"
            loading="lazy"
          />
        </div>

        <div className="partition-feature-content">
          <span className="partition-label partition-label-light">
            03 / OUR APPROACH
          </span>

          <h2>
            The right division.
            <br />
            <em>A better environment.</em>
          </h2>

          <p>
            Every space has different requirements. Our approach
            considers the layout, intended use and appearance of
            each environment to help create practical interior
            solutions.
          </p>

          <div className="partition-feature-points">
            <div>
              <FaLayerGroup />
              <span>Thoughtful space planning</span>
            </div>

            <div>
              <FaBuilding />
              <span>Commercial & residential applications</span>
            </div>

            <div>
              <FaGlassMartini />
              <span>Modern material options</span>
            </div>

            <div>
              <FaDoorOpen />
              <span>Functional interior layouts</span>
            </div>
          </div>

          <Link to="/contact" className="partition-btn partition-btn-light">
            Start Your Project <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="partition-applications">
        <div className="partition-container partition-applications-grid">

          <div className="partition-applications-heading">
            <span className="partition-label">04 / APPLICATIONS</span>

            <h2>
              Designed for
              <br />
              <span>every environment.</span>
            </h2>

            <p>
              Flexible partition systems for spaces that need
              better organization, privacy and visual appeal.
            </p>
          </div>

          <div className="partition-applications-list">
            {applications.map((application, index) => (
              <div className="partition-application-item" key={application}>
                <span>0{index + 1}</span>
                <h3>{application}</h3>
                <FaArrowRight />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="partition-process">
        <div className="partition-container">

          <div className="partition-section-heading partition-process-heading">
            <div>
              <span className="partition-label">05 / HOW WE WORK</span>

              <h2>
                A clear process.
                <br />
                <span>Considered execution.</span>
              </h2>
            </div>

            <p>
              We follow a structured approach to understand your
              requirements and deliver partition solutions with
              care and attention to detail.
            </p>
          </div>

          <div className="partition-process-grid">
            {processSteps.map((step) => (
              <article className="partition-process-card" key={step.number}>
                <div className="partition-process-top">
                  <span>{step.number}</span>
                  <div>{step.icon}</div>
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="partition-cta">
        <div className="partition-container partition-cta-inner">

          <div>
            <span className="partition-label partition-label-light">
              LET'S BUILD BETTER SPACES
            </span>

            <h2>
              Your space.
              <br />
              <em>Our expertise.</em>
            </h2>

            <p>
              Have a partition project in mind? Contact AWAN GENERAL
              CONTRACTING & ALUMINIUM WORKS to discuss your requirements.
            </p>
          </div>

          <div className="partition-cta-actions">
            <Link to="/contact" className="partition-btn partition-btn-copper">
              Request a Consultation <FaArrowRight />
            </Link>

            <a
              href="https://wa.me/971562700627"
              target="_blank"
              rel="noopener noreferrer"
              className="partition-whatsapp-link"
            >
              <FaWhatsapp /> Chat With Our Team
            </a>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Partition;
