
import { Link } from "react-router-dom";
import "./Curtain.css";

const Curtain = () => {
  // Replace with your actual WhatsApp number, including country code.
  const whatsappNumber = "923XXXXXXXXX";

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
      type: "aluminium-facade",
    },
  ];

  const benefits = [
    {
      icon: "01",
      title: "Durable Construction",
      description:
        "Quality aluminium framing designed for long-lasting building façade applications.",
    },
    {
      icon: "02",
      title: "Modern Appearance",
      description:
        "Contemporary glass and aluminium designs that enhance exterior architecture.",
    },
    {
      icon: "03",
      title: "Natural Lighting",
      description:
        "Glazed façade systems help bring daylight into interior spaces.",
    },
    {
      icon: "04",
      title: "Custom Solutions",
      description:
        "Flexible configurations to suit different architectural designs and project needs.",
    },
  ];

  const components = [
    {
      title: "Aluminium Mullions",
      description: "Vertical framing members supporting the façade system.",
    },
    {
      title: "Aluminium Transoms",
      description: "Horizontal framing members connecting façade sections.",
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

  return (
    <main className="awan-curtain">

      {/* HERO SECTION */}
      <section className="awan-curtain-hero">
        <div className="awan-curtain-hero-overlay"></div>

        <div className="awan-curtain-container awan-curtain-hero-content">
          <div className="awan-curtain-eyebrow">
            <span></span>
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          </div>

          <h1>
            ALUMINIUM
            <span> CURTAIN WALL </span>
            SYSTEMS
          </h1>

          <p>
            Modern aluminium and glass façade solutions
            designed to transform building exteriors with
            architectural elegance and lasting performance.
          </p>

          <div className="awan-curtain-hero-actions">
            <a href="#curtain-systems" className="awan-curtain-btn">
              EXPLORE OUR SYSTEMS <span>→</span>
            </a>

            <a
              href={whatsappLink(
                "Hello, I need information about your Aluminium Curtain Wall Systems."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="awan-curtain-btn awan-curtain-btn-outline"
            >
              REQUEST A QUOTE
            </a>
          </div>
        </div>

        <div className="awan-curtain-hero-footer">
          <span>ARCHITECTURAL ALUMINIUM SOLUTIONS</span>
          <span>01 — 03</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="awan-curtain-intro awan-curtain-container">
        <div className="awan-curtain-intro-left">
          <span className="awan-curtain-section-label">
            ABOUT CURTAIN WALL SYSTEMS
          </span>

          <h2>
            Engineering Modern
            <span> Aluminium Facades</span>
          </h2>

          <div className="awan-curtain-gold-line"></div>
        </div>

        <div className="awan-curtain-intro-right">
          <p>
            Aluminium curtain wall systems are non-load-bearing
            exterior building envelopes made using aluminium
            framing and glass or other façade materials.
          </p>

          <p>
            At AWAN GENERAL CONTRACTING & ALUMINIUM WORKS,
            we provide aluminium curtain wall, structural
            glazing and façade solutions according to
            architectural designs and project requirements.
          </p>

          <a
            href="#curtain-components"
            className="awan-curtain-text-link"
          >
            DISCOVER THE SYSTEM <span>→</span>
          </a>
        </div>
      </section>

      {/* CURTAIN WALL SYSTEMS */}
      <section
        className="awan-curtain-systems"
        id="curtain-systems"
      >
        <div className="awan-curtain-container">
          <div className="awan-curtain-section-heading">
            <div>
              <span className="awan-curtain-section-label">
                OUR ALUMINIUM SOLUTIONS
              </span>

              <h2>
                Curtain Wall <span>Systems</span>
              </h2>
            </div>

            <p>
              Explore our aluminium and glass façade solutions
              for modern commercial and residential architecture.
            </p>
          </div>

          <div className="awan-curtain-system-grid">
            {systems.map((system) => (
              <article
                className="awan-curtain-system-card"
                key={system.number}
              >
                <div
                  className={`awan-curtain-system-image ${system.type}`}
                >
                  <span className="awan-curtain-system-number">
                    {system.number}
                  </span>

                  <span className="awan-curtain-image-brand">
                    AWAN ALUMINIUM
                  </span>
                </div>

                <div className="awan-curtain-system-content">
                  <span className="awan-curtain-system-subtitle">
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
                  >
                    ENQUIRE NOW <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="awan-curtain-benefits">
        <div className="awan-curtain-container">
          <div className="awan-curtain-section-heading">
            <div>
              <span className="awan-curtain-section-label">
                QUALITY AND PERFORMANCE
              </span>

              <h2>
                Why Choose <span>Aluminium?</span>
              </h2>
            </div>

            <p>
              Functional, attractive and adaptable façade
              systems for contemporary building projects.
            </p>
          </div>

          <div className="awan-curtain-benefit-grid">
            {benefits.map((benefit) => (
              <div
                className="awan-curtain-benefit-card"
                key={benefit.title}
              >
                <span className="awan-curtain-benefit-number">
                  {benefit.icon}
                </span>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURTAIN WALL COMPONENTS */}
      <section
        className="awan-curtain-components"
        id="curtain-components"
      >
        <div className="awan-curtain-container awan-curtain-components-grid">
          <div className="awan-curtain-components-info">
            <span className="awan-curtain-section-label">
              SYSTEM DETAILS
            </span>

            <h2>
              Understanding Curtain Wall
              <span> Components</span>
            </h2>

            <p>
              A complete curtain wall assembly combines aluminium
              framing, glazing, sealing materials and structural
              connections to form a buildings exterior envelope.
            </p>

            <div className="awan-curtain-component-list">
              {components.map((component, index) => (
                <div
                  className="awan-curtain-component-item"
                  key={component.title}
                >
                  <span className="awan-curtain-component-check">
                    0{index + 1}
                  </span>

                  <div>
                    <h3>{component.title}</h3>
                    <p>{component.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="awan-curtain-technical-visual">
            <div className="awan-curtain-technical-frame">
              <div className="curtain-technical-top">
                ALUMINIUM & GLASS
              </div>

              <div className="curtain-technical-building">
                <div className="curtain-technical-window"></div>
                <div className="curtain-technical-window"></div>
                <div className="curtain-technical-window"></div>
                <div className="curtain-technical-window"></div>
                <div className="curtain-technical-window"></div>
                <div className="curtain-technical-window"></div>
              </div>

              <div className="curtain-technical-caption">
                <span>AWAN</span>
                <strong>PRECISION ENGINEERING</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT APPLICATIONS */}
      <section className="awan-curtain-applications">
        <div className="awan-curtain-container">
          <div className="awan-curtain-section-heading">
            <div>
              <span className="awan-curtain-section-label">
                PROJECT APPLICATIONS
              </span>

              <h2>
                Solutions For <span>Every Project</span>
              </h2>
            </div>

            <p>
              Aluminium curtain wall and glazing systems
              for a variety of architectural developments.
            </p>
          </div>

          <div className="awan-curtain-application-grid">
            {applications.map((application, index) => (
              <div
                className="awan-curtain-application-card"
                key={application}
              >
                <span className="curtain-application-number">
                  0{index + 1}
                </span>

                <h3>{application}</h3>

                <span className="curtain-application-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="awan-curtain-cta">
        <div className="awan-curtain-container awan-curtain-cta-content">
          <div>
            <span className="awan-curtain-section-label">
              LETS BUILD SOMETHING MODERN
            </span>

            <h2>
              Give Your Building
              <span> A Modern Identity.</span>
            </h2>

            <p>
              Contact AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
              for aluminium curtain wall, structural glazing
              and façade solutions.
            </p>
          </div>

          <a
            href={whatsappLink(
              "Hello, I need a quotation for an Aluminium Curtain Wall project."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="awan-curtain-btn"
          >
            CONTACT OUR TEAM <span>→</span>
          </a>
        </div>
      </section>

      {/* RELATED ALUMINIUM SOLUTIONS */}
      <section className="curtain-related-solutions">
        <div className="curtain-related-container">

          <div className="curtain-related-heading">
            <span>
              AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
            </span>

            <h2>
              Explore Our <strong>Aluminium Solutions</strong>
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
                    : `${solution.label} →`}
                </span>
              </Link>
            ))}
          </div>

          <div className="curtain-related-footer">
            <span>QUALITY. PRECISION. ARCHITECTURAL EXCELLENCE.</span>
            <Link to="/programz">VIEW ALL SOLUTIONS →</Link>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Curtain;
