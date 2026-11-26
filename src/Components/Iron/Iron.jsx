
import React from "react";
import { Link } from "react-router-dom";
import "./Iron.css";

const ironServices = [
  {
    number: "01",
    title: "Main Entrance Wrought Iron Gates",
    description:
      "Custom-designed entrance gates combining decorative metalwork, privacy and security for residential and commercial properties.",
    features: ["Custom patterns", "Decorative detailing", "Made-to-measure sizes"]
  },
  {
    number: "02",
    title: "Sliding Iron Gates",
    description:
      "Space-saving sliding gate systems designed for driveways, commercial entrances and properties with limited swing clearance.",
    features: ["Space-efficient operation", "Heavy-duty track options", "Manual or automated systems"]
  },
  {
    number: "03",
    title: "Swing Iron Gates",
    description:
      "Traditional and contemporary hinged gates designed for convenient access and attractive property entrances.",
    features: ["Single or double leaf", "Custom decorative designs", "Strong hinge arrangements"]
  },
  {
    number: "04",
    title: "Decorative Wrought Iron Gates",
    description:
      "Elegant ornamental gates featuring custom patterns, curves, scrollwork and detailed metal craftsmanship.",
    features: ["Classic and modern styles", "Ornamental metalwork", "Custom finishes"]
  },
  {
    number: "05",
    title: "Boundary & Garden Gates",
    description:
      "Functional metal gates for garden entrances, boundary walls, side access and outdoor areas.",
    features: ["Outdoor applications", "Different design options", "Weather-resistant finishes"]
  },
  {
    number: "06",
    title: "Custom Metal Railings",
    description:
      "Decorative and functional wrought iron railings for balconies, staircases, terraces and boundary areas.",
    features: ["Balcony railings", "Staircase handrails", "Custom fabrication"]
  }
];

const ironDesigns = [
  {
    number: "01",
    title: "Classic Ornamental",
    description:
      "Traditional scrollwork, curved details and decorative patterns for timeless entrance designs."
  },
  {
    number: "02",
    title: "Modern Minimalist",
    description:
      "Clean lines, geometric shapes and simple profiles for contemporary architectural styles."
  },
  {
    number: "03",
    title: "Luxury Decorative",
    description:
      "Detailed metal patterns and distinctive finishes for premium residential and commercial entrances."
  },
  {
    number: "04",
    title: "Privacy Panel Designs",
    description:
      "Solid or partially screened gate arrangements for increased visual privacy where required."
  }
];

const ironMaterials = [
  {
    title: "Mild Steel",
    description:
      "A versatile fabrication material suitable for custom gate frames, panels and decorative metalwork."
  },
  {
    title: "Wrought Iron Components",
    description:
      "Decorative iron elements and ornamental details for traditional and customized gate designs."
  },
  {
    title: "Protective Primers",
    description:
      "Suitable metal primers help prepare surfaces for protective paint systems and improved durability."
  },
  {
    title: "Powder Coating & Paint",
    description:
      "Available finish options selected according to the design, environment and project specification."
  }
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
  "Boundary Walls"
];

const Iron = () => {
  return (
    <main className="iron-page">

      {/* HERO */}
      <section className="iron-hero">
        <div className="iron-hero-overlay"></div>

        <div className="iron-hero-content">
          <span className="iron-eyebrow">
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          </span>

          <h1>
            Wrought Iron <span>Gates</span>
          </h1>

          <p>
            Custom-crafted iron gates and decorative metalwork
            designed to enhance security, appearance and functionality
            for residential and commercial properties.
          </p>

          <div className="iron-hero-buttons">
            <Link to="/contact" className="iron-primary-btn">
              Request a Quotation
            </Link>

            <a href="#iron-services" className="iron-secondary-btn">
              Explore Our Services
            </a>
          </div>
        </div>

        <div className="iron-hero-label">
          <span>01</span>
          <p>CRAFTSMANSHIP. SECURITY. DESIGN.</p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="iron-intro">
        <div className="iron-intro-heading">
          <span className="iron-tag">ABOUT OUR METAL WORK</span>

          <h2>
            Strong Entrances with
            <span> Distinctive Iron Designs</span>
          </h2>
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
            Discuss Your Gate Project →
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="iron-services" id="iron-services">
        <div className="iron-section-heading">
          <span className="iron-tag">WHAT WE PROVIDE</span>
          <h2>Our Wrought Iron Services</h2>
          <p>
            Custom metal gate and railing solutions for different
            property types, entrance layouts and design preferences.
          </p>
        </div>

        <div className="iron-services-grid">
          {ironServices.map((service) => (
            <article className="iron-service-card" key={service.number}>
              <div className="iron-service-top">
                <span>{service.number}</span>
                <div></div>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <Link to="/contact">Enquire Now →</Link>
            </article>
          ))}
        </div>
      </section>

      {/* DESIGN STYLES */}
      <section className="iron-designs">
        <div className="iron-section-heading">
          <span className="iron-tag">DESIGN POSSIBILITIES</span>
          <h2>Gate Designs to Match Your Architecture</h2>
          <p>
            Select a design direction and customize its details,
            dimensions, patterns and finish.
          </p>
        </div>

        <div className="iron-design-grid">
          {ironDesigns.map((design) => (
            <article className="iron-design-card" key={design.number}>
              <span>{design.number}</span>
              <h3>{design.title}</h3>
              <p>{design.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* MATERIALS */}
      <section className="iron-materials">
        <div className="iron-materials-heading">
          <span className="iron-tag">MATERIALS & FINISHES</span>
          <h2>Made with Suitable Materials</h2>
          <p>
            Material and finish selection is based on the intended
            application, environmental exposure and project design.
          </p>
        </div>

        <div className="iron-materials-grid">
          {ironMaterials.map((material, index) => (
            <article className="iron-material-card" key={material.title}>
              <span>0{index + 1}</span>
              <h3>{material.title}</h3>
              <p>{material.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="iron-features">
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
      </section>

      {/* APPLICATIONS */}
      <section className="iron-applications">
        <div className="iron-section-heading">
          <span className="iron-tag">PROJECT APPLICATIONS</span>
          <h2>Iron Gate Solutions for Every Property</h2>
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
              <span className="iron-application-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* FABRICATION PROCESS */}
      <section className="iron-process">
        <div className="iron-section-heading">
          <span className="iron-tag">HOW WE WORK</span>
          <h2>From Design to Installation</h2>
          <p>
            A coordinated process for planning, fabrication,
            finishing and installing custom iron gates.
          </p>
        </div>

        <div className="iron-process-grid">
          <article>
            <span>01</span>
            <h3>Consultation & Measurement</h3>
            <p>
              Understand the entrance requirements, available
              space, dimensions and preferred design.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Design & Planning</h3>
            <p>
              Plan the gate configuration, patterns, materials,
              operation and finishing details.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Fabrication & Finishing</h3>
            <p>
              Cut, shape, weld and prepare the selected metal
              components with suitable protective finishes.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Installation & Inspection</h3>
            <p>
              Install the gate, check its alignment and verify
              the operation and completed workmanship.
            </p>
          </article>
        </div>
      </section>

      {/* QUALITY AND SAFETY */}
      <section className="iron-quality">
        <div>
          <span className="iron-tag">QUALITY & SAFETY</span>

          <h2>Attention to Fabrication and Installation Details</h2>

          <p>
            Every gate should be designed according to its
            dimensions, weight, operating method, site conditions
            and applicable project requirements.
          </p>
        </div>

        <div className="iron-quality-grid">
          <article>
            <h3>Structural Design</h3>
            <p>
              Suitable frames, sections and support arrangements
              based on the gate's size and intended use.
            </p>
          </article>

          <article>
            <h3>Welding & Connections</h3>
            <p>
              Appropriate fabrication and connection details
              for the specified gate design.
            </p>
          </article>

          <article>
            <h3>Surface Protection</h3>
            <p>
              Suitable surface preparation, primer and finishing
              systems for the intended environment.
            </p>
          </article>

          <article>
            <h3>Safe Operation</h3>
            <p>
              Proper hinges, tracks, stops, locks and safety
              arrangements for the selected gate system.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="iron-cta">
        <span>LET'S CREATE YOUR ENTRANCE</span>

        <h2>Looking for Custom Wrought Iron Gates?</h2>

        <p>
          Contact AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          to discuss your gate design, fabrication and installation
          requirements.
        </p>

        <div className="iron-cta-buttons">
          <Link to="/contact" className="iron-primary-btn">
            Contact Our Team →
          </Link>

          <Link to="/Parking" className="iron-secondary-btn">
            Explore Parking Shades
          </Link>
        </div>
      </section>

    </main>
  );
};

export default Iron;
