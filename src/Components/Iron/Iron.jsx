
import { Link } from "react-router-dom";
import "./Iron.css";

const ironServices = [
  {
    number: "01",
    title: "Main Entrance Wrought Iron Gates",
    subtitle: "Elegant Entrance Designs",
    description:
      "Custom-designed entrance gates combining decorative metalwork, privacy and security for residential and commercial properties.",
    features: [
      "Custom patterns",
      "Decorative detailing",
      "Made-to-measure sizes",
    ],
    className: "iron-visual-entrance",
  },
  {
    number: "02",
    title: "Sliding Iron Gates",
    subtitle: "Practical Access Solutions",
    description:
      "Space-saving sliding gate systems designed for driveways, commercial entrances and properties with limited swing clearance.",
    features: [
      "Space-efficient operation",
      "Heavy-duty track options",
      "Manual or automated systems",
    ],
    className: "iron-visual-sliding",
  },
  {
    number: "03",
    title: "Swing Iron Gates",
    subtitle: "Traditional & Modern",
    description:
      "Traditional and contemporary hinged gates designed for convenient access and attractive property entrances.",
    features: [
      "Single or double leaf",
      "Custom decorative designs",
      "Strong hinge arrangements",
    ],
    className: "iron-visual-swing",
  },
  {
    number: "04",
    title: "Decorative Wrought Iron Gates",
    subtitle: "Decorative Metal Craft",
    description:
      "Elegant ornamental gates featuring custom patterns, curves, scrollwork and detailed metal craftsmanship.",
    features: [
      "Classic and modern styles",
      "Ornamental metalwork",
      "Custom finishes",
    ],
    className: "iron-visual-decorative",
  },
  {
    number: "05",
    title: "Boundary & Garden Gates",
    subtitle: "Outdoor Gate Solutions",
    description:
      "Functional metal gates for garden entrances, boundary walls, side access and outdoor areas.",
    features: [
      "Outdoor applications",
      "Different design options",
      "Weather-resistant finishes",
    ],
    className: "iron-visual-garden",
  },
  {
    number: "06",
    title: "Custom Metal Railings",
    subtitle: "Safety & Architectural Style",
    description:
      "Decorative and functional wrought iron railings for balconies, staircases, terraces and boundary areas.",
    features: [
      "Balcony railings",
      "Staircase handrails",
      "Custom fabrication",
    ],
    className: "iron-visual-railing",
  },
];

const ironDesigns = [
  {
    number: "01",
    title: "Classic Ornamental",
    description:
      "Traditional scrollwork, curved details and decorative patterns for timeless entrance designs.",
  },
  {
    number: "02",
    title: "Modern Minimalist",
    description:
      "Clean lines, geometric shapes and simple profiles for contemporary architectural styles.",
  },
  {
    number: "03",
    title: "Luxury Decorative",
    description:
      "Detailed metal patterns and distinctive finishes for premium residential and commercial entrances.",
  },
  {
    number: "04",
    title: "Privacy Panel Designs",
    description:
      "Solid or partially screened gate arrangements for increased visual privacy where required.",
  },
];

const ironMaterials = [
  {
    title: "Mild Steel",
    description:
      "A versatile fabrication material suitable for custom gate frames, panels and decorative metalwork.",
  },
  {
    title: "Wrought Iron Components",
    description:
      "Decorative iron elements and ornamental details for traditional and customized gate designs.",
  },
  {
    title: "Protective Primers",
    description:
      "Suitable metal primers help prepare surfaces for protective paint systems and improved durability.",
  },
  {
    title: "Powder Coating & Paint",
    description:
      "Available finish options selected according to the design, environment and project specification.",
  },
];

const ironApplications = [
  "Residential Villas",
  "Private Houses",
  "Apartment Buildings",
  "Commercial Properties",
  "Office Entrances",
  "Hotels & Resorts",
  "Schools & Institutions",
  "Garden Entrances",
  "Boundary Walls",
];

const ironProcess = [
  {
    number: "01",
    title: "Consultation & Measurement",
    description:
      "Understand the entrance requirements, available space, dimensions and preferred design.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Plan the gate configuration, patterns, materials, operation and finishing details.",
  },
  {
    number: "03",
    title: "Fabrication & Finishing",
    description:
      "Cut, shape, weld and prepare the selected metal components with suitable protective finishes.",
  },
  {
    number: "04",
    title: "Installation & Inspection",
    description:
      "Install the gate, check its alignment and verify the operation and completed workmanship.",
  },
];

const ironQuality = [
  {
    number: "01",
    title: "Structural Design",
    description:
      "Suitable frames, sections and support arrangements based on the gate's size and intended use.",
  },
  {
    number: "02",
    title: "Welding & Connections",
    description:
      "Appropriate fabrication and connection details for the specified gate design.",
  },
  {
    number: "03",
    title: "Surface Protection",
    description:
      "Suitable surface preparation, primer and finishing systems for the intended environment.",
  },
  {
    number: "04",
    title: "Safe Operation",
    description:
      "Proper hinges, tracks, stops, locks and safety arrangements for the selected gate system.",
  },
];

const Iron = () => {
  return (
    <main className="iron-page">

      {/* HERO SECTION */}
      <section className="iron-hero">
        <div className="iron-hero-overlay"></div>

        <div className="iron-container iron-hero-content">
          <span className="iron-eyebrow">
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          </span>

          <div className="iron-hero-line"></div>

          <h1>
            WROUGHT IRON
            <span> GATES & METALWORK</span>
          </h1>

          <p>
            Custom-crafted iron gates and decorative metalwork
            designed to enhance security, appearance and functionality
            for residential and commercial properties.
          </p>

          <div className="iron-hero-buttons">
            <Link to="/contact" className="iron-primary-btn">
              REQUEST A QUOTATION <span>→</span>
            </Link>

            <a href="#iron-services" className="iron-secondary-btn">
              EXPLORE OUR SERVICES
            </a>
          </div>
        </div>

        <div className="iron-hero-label">
          <span>01</span>
          <p>CRAFTSMANSHIP · SECURITY · DESIGN</p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="iron-intro iron-container">
        <div className="iron-intro-heading">
          <span className="iron-tag">ABOUT OUR METAL WORK</span>

          <h2>
            Strong Entrances with
            <span> Distinctive Iron Designs</span>
          </h2>

          <div className="iron-gold-line"></div>
        </div>

        <div className="iron-intro-text">
          <p>
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS provides
            custom wrought iron gate and metal fabrication solutions
            for residential, commercial and institutional projects.
          </p>

          <p>
            From elegant ornamental entrance gates to practical
            sliding and swing systems, our designs are developed
            around the property's architecture, access requirements
            and intended use.
          </p>

          <Link to="/contact" className="iron-text-link">
            DISCUSS YOUR GATE PROJECT <span>→</span>
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="iron-services" id="iron-services">
        <div className="iron-container">
          <div className="iron-section-heading">
            <div>
              <span className="iron-tag">WHAT WE PROVIDE</span>
              <h2>
                Our Wrought Iron <span>Services</span>
              </h2>
            </div>

            <p>
              Custom metal gate and railing solutions for different
              property types, entrance layouts and design preferences.
            </p>
          </div>

          <div className="iron-services-grid">
            {ironServices.map((service) => (
              <article className="iron-service-card" key={service.number}>
                <div className={`iron-service-visual ${service.className}`}>
                  <span className="iron-service-number">
                    {service.number}
                  </span>

                  <span className="iron-visual-brand">
                    AWAN METALWORK
                  </span>
                </div>

                <div className="iron-service-content">
                  <span className="iron-service-subtitle">
                    {service.subtitle}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <span>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="iron-service-link">
                    ENQUIRE ABOUT THIS SERVICE <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN STYLES */}
      <section className="iron-designs">
        <div className="iron-container">
          <div className="iron-section-heading">
            <div>
              <span className="iron-tag">DESIGN POSSIBILITIES</span>
              <h2>
                Gate Designs to Match <span>Your Architecture</span>
              </h2>
            </div>

            <p>
              Select a design direction and customize its details,
              dimensions, patterns and finish.
            </p>
          </div>

          <div className="iron-design-grid">
            {ironDesigns.map((design) => (
              <article className="iron-design-card" key={design.number}>
                <span>{design.number}</span>
                <div className="iron-design-line"></div>
                <h3>{design.title}</h3>
                <p>{design.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="iron-materials">
        <div className="iron-container">
          <div className="iron-materials-heading">
            <span className="iron-tag">MATERIALS & FINISHES</span>
            <h2>
              Made with <span>Suitable Materials</span>
            </h2>
            <p>
              Material and finish selection is based on the intended
              application, environmental exposure and project design.
            </p>
          </div>

          <div className="iron-materials-grid">
            {ironMaterials.map((material, index) => (
              <article className="iron-material-card" key={material.title}>
                <span>0{index + 1}</span>
                <div className="iron-material-line"></div>
                <h3>{material.title}</h3>
                <p>{material.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="iron-features">
        <div className="iron-container iron-features-grid">
          <div className="iron-features-content">
            <span className="iron-tag">WHY CHOOSE IRON GATES?</span>

            <h2>
              Security Meets
              <span> Architectural Style</span>
            </h2>

            <p>
              A properly designed and installed metal gate can provide
              controlled access, practical everyday operation and
              a distinctive entrance appearance.
            </p>

            <div className="iron-feature-list">
              <div>
                <span>01</span>
                <p>Custom designs for different architectural styles</p>
              </div>

              <div>
                <span>02</span>
                <p>Suitable gate configurations for different entrances</p>
              </div>

              <div>
                <span>03</span>
                <p>Decorative patterns and personalized finishes</p>
              </div>

              <div>
                <span>04</span>
                <p>Options for manual or automated gate operation</p>
              </div>

              <div>
                <span>05</span>
                <p>Protective coating options for outdoor applications</p>
              </div>
            </div>
          </div>

          <div className="iron-features-image">
            <div className="iron-image-caption">
              <span>AWAN</span>
              <p>CRAFTED FOR YOUR PROPERTY</p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="iron-applications">
        <div className="iron-container">
          <div className="iron-section-heading">
            <div>
              <span className="iron-tag">PROJECT APPLICATIONS</span>
              <h2>
                Iron Gate Solutions <span>for Every Property</span>
              </h2>
            </div>

            <p>
              Gate and railing solutions for a wide range of
              residential, commercial and institutional environments.
            </p>
          </div>

          <div className="iron-applications-grid">
            {ironApplications.map((application, index) => (
              <div className="iron-application-item" key={application}>
                <span>0{index + 1}</span>
                <h3>{application}</h3>
                <strong>↗</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FABRICATION PROCESS */}
      <section className="iron-process">
        <div className="iron-container">
          <div className="iron-section-heading">
            <div>
              <span className="iron-tag">HOW WE WORK</span>
              <h2>
                From Design <span>to Installation</span>
              </h2>
            </div>

            <p>
              A coordinated process for planning, fabrication,
              finishing and installing custom iron gates.
            </p>
          </div>

          <div className="iron-process-grid">
            {ironProcess.map((step) => (
              <article className="iron-process-card" key={step.number}>
                <span>{step.number}</span>
                <div className="iron-process-line"></div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY AND SAFETY */}
      <section className="iron-quality">
        <div className="iron-container iron-quality-grid">
          <div className="iron-quality-intro">
            <span className="iron-tag">QUALITY & SAFETY</span>

            <h2>
              Attention to Fabrication
              <span> and Installation Details</span>
            </h2>

            <p>
              Every gate should be designed according to its
              dimensions, weight, operating method, site conditions
              and applicable project requirements.
            </p>

            <Link to="/contact" className="iron-text-link">
              TALK TO OUR TEAM <span>→</span>
            </Link>
          </div>

          <div className="iron-quality-list">
            {ironQuality.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="iron-cta">
        <div className="iron-cta-overlay"></div>

        <div className="iron-container iron-cta-content">
          <div>
            <span className="iron-tag">LET'S CREATE YOUR ENTRANCE</span>

            <h2>
              Looking for Custom
              <span> Wrought Iron Gates?</span>
            </h2>

            <p>
              Contact AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
              to discuss your gate design, fabrication and installation
              requirements.
            </p>
          </div>

          <div className="iron-cta-buttons">
            <Link to="/contact" className="iron-primary-btn">
              CONTACT OUR TEAM <span>→</span>
            </Link>

            <Link to="/Parking" className="iron-secondary-btn">
              EXPLORE PARKING SHADES
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Iron;
