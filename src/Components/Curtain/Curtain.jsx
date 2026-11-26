
import { Link } from "react-router-dom";
import "./Curtain.css";

const whatsappNumber = "971562700627";

const whatsappLink = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const systems = [
  {
    number: "01",
    title: "Aluminium Curtain Wall",
    subtitle: "Modern Building Facades",
    description:
      "High-quality aluminium framing systems combined with glass panels to create elegant and durable building exteriors.",
    features: [
      "Strong aluminium profiles",
      "Modern architectural appearance",
      "Glass panel installation",
      "Weather-resistant detailing",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85",
    type: "curtain-wall",
  },
  {
    number: "02",
    title: "Structural Glazing",
    subtitle: "Seamless Glass Architecture",
    description:
      "Contemporary glass façade systems designed to create clean exterior elevations with minimal visible framing.",
    features: [
      "Modern glass appearance",
      "Natural daylight",
      "Precision installation",
      "Custom façade solutions",
    ],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85",
    type: "structural-glazing",
  },
  {
    number: "03",
    title: "Aluminium Facade",
    subtitle: "Architectural Exterior Finishes",
    description:
      "Custom aluminium façade solutions that enhance building exteriors with attractive finishes and durable materials.",
    features: [
      "Custom aluminium designs",
      "Multiple finishing options",
      "Durable construction",
      "Professional installation",
    ],
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1100&q=85",
    type: "aluminium-facade",
  },
];

const benefits = [
  {
    number: "01",
    title: "Durable Construction",
    description:
      "Quality aluminium framing designed for long-lasting building façade applications.",
  },
  {
    number: "02",
    title: "Modern Appearance",
    description:
      "Contemporary glass and aluminium designs that enhance exterior architecture.",
  },
  {
    number: "03",
    title: "Natural Lighting",
    description:
      "Glazed façade systems help bring daylight into interior spaces.",
  },
  {
    number: "04",
    title: "Custom Solutions",
    description:
      "Flexible configurations to suit different architectural designs and project needs.",
  },
];

const components = [
  {
    title: "Aluminium Mullions",
    description:
      "Vertical framing members supporting the curtain wall system.",
  },
  {
    title: "Aluminium Transoms",
    description:
      "Horizontal framing members connecting façade sections.",
  },
  {
    title: "Glass Panels",
    description:
      "Selected glazing suitable for the building design and project requirements.",
  },
  {
    title: "Gaskets & Sealants",
    description:
      "Sealing materials that help provide air and weather protection.",
  },
  {
    title: "Fixing Brackets",
    description:
      "Structural connections between the curtain wall and building structure.",
  },
];

const applications = [
  "Commercial Buildings",
  "Corporate Offices",
  "Shopping Malls",
  "Hotels & Resorts",
  "Residential Projects",
  "Industrial Buildings",
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We discuss your project requirements, architectural vision and preferred façade design.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "We review project details and plan suitable aluminium framing and glazing solutions.",
  },
  {
    number: "03",
    title: "Fabrication",
    description:
      "Aluminium components are prepared and fabricated according to the approved project requirements.",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "Our team carries out installation with attention to alignment, connections and finishing.",
  },
];

const relatedSolutions = [
  {
    number: "01",
    title: "Aluminium Windows",
    label: "EXPLORE WINDOWS",
    path: "/window",
  },
  {
    number: "02",
    title: "Aluminium Doors",
    label: "EXPLORE DOORS",
    path: "/door",
  },
  {
    number: "03",
    title: "Glass Solutions",
    label: "EXPLORE GLASS",
    path: "/glass",
  },
  {
    number: "04",
    title: "Aluminium Cladding",
    label: "EXPLORE CLADDING",
    path: "/cladding",
  },
  {
    number: "05",
    title: "Curtain Wall Systems",
    label: "CURRENT SOLUTION",
    path: "/Curtain",
    active: true,
  },
];

const Curtain = () => {
  return (
    <main className="curtain-page">
      {/* HERO */}
      <section className="curtain-hero">
        <div className="curtain-hero-overlay"></div>

        <div className="curtain-container curtain-hero-content">
          <span className="curtain-eyebrow">
            <i></i>
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          </span>

          <h1>
            Aluminium
            <span>Curtain Wall</span>
            Systems
          </h1>

          <p>
            Modern aluminium and glass façade solutions designed to
            transform building exteriors with architectural elegance
            and lasting performance.
          </p>

          <div className="curtain-hero-actions">
            <a href="#curtain-systems" className="curtain-button">
              EXPLORE OUR SYSTEMS <span>↗</span>
            </a>

            <a
              href={whatsappLink(
                "Hello, I need information about your Aluminium Curtain Wall Systems."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="curtain-button curtain-button-outline"
            >
              REQUEST A QUOTE
            </a>
          </div>
        </div>

        <div className="curtain-hero-bottom">
          <span>ARCHITECTURAL ALUMINIUM SOLUTIONS</span>
          <span>01 — 03</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="curtain-intro curtain-container">
        <div className="curtain-intro-heading">
          <span className="curtain-label">ABOUT CURTAIN WALL SYSTEMS</span>

          <h2>
            Engineering Modern
            <span> Aluminium Facades</span>
          </h2>

          <div className="curtain-copper-line"></div>
        </div>

        <div className="curtain-intro-copy">
          <p>
            Aluminium curtain wall systems are non-load-bearing
            exterior building envelopes made using aluminium framing
            and glass or other façade materials.
          </p>

          <p>
            At AWAN GENERAL CONTRACTING & ALUMINIUM WORKS, we provide
            aluminium curtain wall, structural glazing and façade
            solutions according to architectural designs and project
            requirements.
          </p>

          <a href="#curtain-components" className="curtain-text-link">
            DISCOVER THE SYSTEM <span>↗</span>
          </a>
        </div>
      </section>

      {/* SYSTEM COLLECTION */}
      <section className="curtain-systems" id="curtain-systems">
        <div className="curtain-container">
          <div className="curtain-section-heading">
            <div>
              <span className="curtain-label">
                OUR ALUMINIUM SOLUTIONS
              </span>
              <h2>
                Curtain Wall <span>Systems</span>
              </h2>
            </div>

            <p>
              Explore our aluminium and glass façade solutions for
              modern commercial and residential architecture.
            </p>
          </div>

          <div className="curtain-system-grid">
            {systems.map((system) => (
              <article className="curtain-system-card" key={system.number}>
                <div className="curtain-system-image">
                  <img src={system.image} alt={system.title} />
                  <span className="curtain-system-number">
                    {system.number}
                  </span>
                  <span className="curtain-image-caption">
                    AWAN ALUMINIUM
                  </span>
                </div>

                <div className="curtain-system-content">
                  <span className="curtain-system-subtitle">
                    {system.subtitle}
                  </span>

                  <h3>{system.title}</h3>
                  <p>{system.description}</p>

                  <ul>
                    {system.features.map((feature) => (
                      <li key={feature}>
                        <span>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink(
                      `Hello, I am interested in ${system.title}. Please provide more information.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="curtain-card-link"
                  >
                    ENQUIRE NOW <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="curtain-performance">
        <div className="curtain-container">
          <div className="curtain-performance-heading">
            <span className="curtain-label curtain-label-light">
              QUALITY AND PERFORMANCE
            </span>

            <h2>
              Designed for
              <span> Modern Architecture</span>
            </h2>

            <p>
              Functional, attractive and adaptable façade systems
              for contemporary building projects.
            </p>
          </div>

          <div className="curtain-benefit-grid">
            {benefits.map((benefit) => (
              <article className="curtain-benefit-card" key={benefit.number}>
                <span className="curtain-benefit-number">
                  {benefit.number}
                </span>

                <div className="curtain-benefit-rule"></div>

                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL DETAILS */}
      <section
        className="curtain-technical"
        id="curtain-components"
      >
        <div className="curtain-container curtain-technical-grid">
          <div className="curtain-technical-info">
            <span className="curtain-label">SYSTEM DETAILS</span>

            <h2>
              Understanding Curtain Wall
              <span> Components</span>
            </h2>

            <p className="curtain-technical-intro">
              A complete curtain wall assembly combines aluminium
              framing, glazing, sealing materials and structural
              connections to form a building's exterior envelope.
            </p>

            <div className="curtain-component-list">
              {components.map((component, index) => (
                <article
                  className="curtain-component-item"
                  key={component.title}
                >
                  <span className="curtain-component-number">
                    0{index + 1}
                  </span>

                  <div>
                    <h3>{component.title}</h3>
                    <p>{component.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="curtain-technical-image">
            <img
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1100&q=85"
              alt="Modern glass and aluminium building facade"
            />

            <div className="curtain-technical-image-overlay">
              <span>AWAN</span>
              <strong>PRECISION ENGINEERING</strong>
              <p>ALUMINIUM & GLASS SYSTEMS</p>
            </div>

            <div className="curtain-technical-side-label">
              ARCHITECTURAL DETAIL
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="curtain-applications">
        <div className="curtain-container">
          <div className="curtain-section-heading">
            <div>
              <span className="curtain-label">PROJECT APPLICATIONS</span>
              <h2>
                Solutions For <span>Every Project</span>
              </h2>
            </div>

            <p>
              Aluminium curtain wall and glazing systems for a variety
              of architectural developments.
            </p>
          </div>

          <div className="curtain-application-grid">
            {applications.map((application, index) => (
              <article
                className="curtain-application-card"
                key={application}
              >
                <span className="curtain-application-number">
                  0{index + 1}
                </span>

                <h3>{application}</h3>
                <span className="curtain-application-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="curtain-process">
        <div className="curtain-container">
          <div className="curtain-process-heading">
            <span className="curtain-label">HOW WE WORK</span>
            <h2>
              From Concept to
              <span> Completion</span>
            </h2>
            <p>
              A considered approach to planning, fabrication and
              installation for your aluminium façade project.
            </p>
          </div>

          <div className="curtain-process-grid">
            {processSteps.map((step) => (
              <article className="curtain-process-card" key={step.number}>
                <span>{step.number}</span>
                <div className="curtain-process-line"></div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY CTA */}
      <section className="curtain-enquiry">
        <div className="curtain-container curtain-enquiry-content">
          <div>
            <span className="curtain-label curtain-label-light">
              LET'S BUILD SOMETHING MODERN
            </span>

            <h2>
              Give Your Building
              <span> A Modern Identity.</span>
            </h2>

            <p>
              Contact AWAN GENERAL CONTRACTING & ALUMINIUM WORKS for
              aluminium curtain wall, structural glazing and façade
              solutions.
            </p>
          </div>

          <a
            href={whatsappLink(
              "Hello, I need a quotation for an Aluminium Curtain Wall project."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="curtain-button curtain-enquiry-button"
          >
            CONTACT OUR TEAM <span>↗</span>
          </a>
        </div>
      </section>

      {/* RELATED SOLUTIONS */}
      <section className="curtain-related">
        <div className="curtain-container">
          <div className="curtain-related-heading">
            <span className="curtain-label">
              AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
            </span>

            <h2>
              Explore Our <span>Aluminium Solutions</span>
            </h2>

            <p>
              Discover our complete range of aluminium, glass and
              architectural solutions for modern buildings.
            </p>
          </div>

          <div className="curtain-related-grid">
            {relatedSolutions.map((solution) => (
              <Link
                to={solution.path}
                key={solution.number}
                className={`curtain-related-card ${
                  solution.active ? "active" : ""
                }`}
              >
                <span className="curtain-related-number">
                  {solution.number}
                </span>

                <strong>{solution.title}</strong>

                <span className="curtain-related-link">
                  {solution.active
                    ? "CURRENT SOLUTION ✓"
                    : `${solution.label} ↗`}
                </span>
              </Link>
            ))}
          </div>

          <div className="curtain-related-footer">
            <span>QUALITY. PRECISION. ARCHITECTURAL EXCELLENCE.</span>
            <Link to="/programz">VIEW ALL SOLUTIONS ↗</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Curtain;
