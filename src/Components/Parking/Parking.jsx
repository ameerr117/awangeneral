
import React from "react";
import { Link } from "react-router-dom";
import "./Parking.css";

const parkingServices = [
  {
    number: "01",
    title: "Cantilever Parking Shades",
    description:
      "Modern cantilever structures designed to provide vehicle protection with fewer supporting columns and convenient parking access.",
    features: ["Open parking access", "Strong support structure", "Modern appearance"]
  },
  {
    number: "02",
    title: "Tensile Fabric Shades",
    description:
      "Architectural fabric shade systems combining attractive shapes with practical protection against sunlight and weather.",
    features: ["Contemporary designs", "UV-resistant fabric options", "Lightweight appearance"]
  },
  {
    number: "03",
    title: "Pyramid Parking Shades",
    description:
      "Distinctive pyramid-style shade structures suitable for residential, commercial and public parking areas.",
    features: ["Elegant design", "Effective shade coverage", "Multiple layout options"]
  },
  {
    number: "04",
    title: "Double Car Parking Shades",
    description:
      "Practical shade solutions designed to cover two or more vehicles with coordinated structural arrangements.",
    features: ["Multiple vehicle coverage", "Space-efficient layouts", "Custom dimensions"]
  },
  {
    number: "05",
    title: "Aluminium & Steel Structures",
    description:
      "Durable structural solutions using appropriately selected aluminium or steel components for different parking requirements.",
    features: ["Material options", "Protective finishes", "Project-specific fabrication"]
  },
  {
    number: "06",
    title: "Custom Parking Canopies",
    description:
      "Made-to-measure parking canopy designs developed around available space, vehicle arrangement and architectural style.",
    features: ["Custom dimensions", "Flexible configurations", "Residential and commercial use"]
  }
];

const parkingMaterials = [
  {
    title: "Galvanized Steel",
    description:
      "A practical structural material offering strength and corrosion protection when properly specified and maintained."
  },
  {
    title: "Aluminium",
    description:
      "A lightweight material option for selected shade structures, frames and architectural components."
  },
  {
    title: "PVC & HDPE Fabric",
    description:
      "Specialized shade fabrics available in different weights, finishes and UV-resistance specifications."
  },
  {
    title: "Polycarbonate Sheets",
    description:
      "A roofing option available in different transparency and tint choices for selected canopy applications."
  }
];

const parkingApplications = [
  "Residential Villas",
  "Apartment Buildings",
  "Commercial Buildings",
  "Corporate Offices",
  "Shopping Centres",
  "Hotels & Resorts",
  "Schools & Universities",
  "Hospitals & Clinics",
  "Industrial Facilities"
];

const Parking = () => {
  return (
    <main className="parking-page">

      {/* HERO SECTION */}
      <section className="parking-hero">
        <div className="parking-hero-overlay"></div>

        <div className="parking-hero-content">
          <span className="parking-eyebrow">
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          </span>

          <h1>
            Car Parkings <span>& Shades</span>
          </h1>

          <p>
            Smart, durable and modern parking shade solutions
            designed to protect vehicles and enhance outdoor spaces.
          </p>

          <div className="parking-hero-buttons">
            <Link to="/contact" className="parking-primary-btn">
              Request a Quotation
            </Link>

            <a href="#parking-services" className="parking-secondary-btn">
              Explore Our Services
            </a>
          </div>
        </div>

        <div className="parking-hero-bottom">
          <span>01</span>
          <p>PROTECTIVE STRUCTURES. PRACTICAL DESIGN.</p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="parking-intro">
        <div className="parking-intro-heading">
          <span className="parking-tag">ABOUT OUR SERVICE</span>

          <h2>
            Professional Parking Shades
            <span> Built Around Your Space</span>
          </h2>
        </div>

        <div className="parking-intro-text">
          <p>
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS provides
            car parking shade and canopy solutions for residential,
            commercial and industrial environments.
          </p>

          <p>
            We focus on functional layouts, suitable structural
            materials, quality fabrication and professional
            installation. Each design can be planned according to
            site conditions, parking capacity and project requirements.
          </p>

          <Link to="/contact" className="parking-text-link">
            Discuss Your Parking Project →
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="parking-services" id="parking-services">
        <div className="parking-section-heading">
          <span className="parking-tag">WHAT WE PROVIDE</span>
          <h2>Our Parking Shade Solutions</h2>
          <p>
            A range of parking structures designed for different
            spaces, vehicle capacities and architectural requirements.
          </p>
        </div>

        <div className="parking-services-grid">
          {parkingServices.map((service) => (
            <article className="parking-service-card" key={service.number}>
              <div className="parking-service-top">
                <span>{service.number}</span>
                <div className="parking-service-line"></div>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <Link to="/contact">
                Enquire Now →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* MATERIALS */}
      <section className="parking-materials">
        <div className="parking-materials-heading">
          <span className="parking-tag">MATERIAL SELECTION</span>
          <h2>Materials for Reliable Performance</h2>
          <p>
            Material selection depends on structural design,
            environmental exposure, appearance and project budget.
          </p>
        </div>

        <div className="parking-materials-grid">
          {parkingMaterials.map((material, index) => (
            <article className="parking-material-card" key={material.title}>
              <span>0{index + 1}</span>
              <h3>{material.title}</h3>
              <p>{material.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="parking-benefits">
        <div className="parking-benefits-content">
          <span className="parking-tag">WHY CHOOSE PARKING SHADES?</span>

          <h2>
            More Than Shade.
            <span> Better Vehicle Protection.</span>
          </h2>

          <p>
            A properly designed parking shade helps reduce direct
            sunlight exposure and provides a more comfortable
            outdoor parking environment.
          </p>

          <div className="parking-benefits-list">
            <div>
              <span>01</span>
              <p>Helps reduce direct sunlight on parked vehicles</p>
            </div>

            <div>
              <span>02</span>
              <p>Provides shade for residential and commercial parking</p>
            </div>

            <div>
              <span>03</span>
              <p>Offers customizable designs and coverage options</p>
            </div>

            <div>
              <span>04</span>
              <p>Enhances the appearance and usability of outdoor spaces</p>
            </div>

            <div>
              <span>05</span>
              <p>Can be designed for different vehicle capacities</p>
            </div>
          </div>
        </div>

        <div className="parking-benefits-image">
          <div className="parking-image-caption">
            <span>AWAN</span>
            <p>DESIGNED FOR EVERYDAY PERFORMANCE</p>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="parking-applications">
        <div className="parking-section-heading">
          <span className="parking-tag">OUR PROJECT APPLICATIONS</span>
          <h2>Parking Solutions for Every Property</h2>
          <p>
            Shade structures for a variety of outdoor parking
            environments and property types.
          </p>
        </div>

        <div className="parking-applications-grid">
          {parkingApplications.map((application, index) => (
            <div className="parking-application-item" key={application}>
              <span>0{index + 1}</span>
              <h3>{application}</h3>
              <span className="parking-application-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* INSTALLATION PROCESS */}
      <section className="parking-process">
        <div className="parking-section-heading">
          <span className="parking-tag">HOW WE WORK</span>
          <h2>Our Project Process</h2>
          <p>
            A planned approach from initial consultation to final
            installation and inspection.
          </p>
        </div>

        <div className="parking-process-grid">
          <article>
            <span>01</span>
            <h3>Site Inspection</h3>
            <p>
              Review the available area, ground conditions,
              access and parking requirements.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Design & Planning</h3>
            <p>
              Prepare the proposed layout, dimensions,
              material selection and structural design.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Fabrication</h3>
            <p>
              Prepare the selected structural components
              and roofing or shade materials.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Installation</h3>
            <p>
              Install the structure and inspect alignment,
              connections and finishing.
            </p>
          </article>
        </div>
      </section>

      {/* QUALITY & SAFETY */}
      <section className="parking-quality">
        <div>
          <span className="parking-tag">QUALITY & SAFETY</span>
          <h2>Designed with Structural Requirements in Mind</h2>
          <p>
            Parking shade structures should be planned according
            to site conditions, applicable building requirements
            and engineering specifications.
          </p>
        </div>

        <div className="parking-quality-points">
          <div>
            <h3>Structural Stability</h3>
            <p>
              Appropriate support, foundations and connections
              based on the approved structural design.
            </p>
          </div>

          <div>
            <h3>Wind & Weather Considerations</h3>
            <p>
              Design consideration for local wind conditions,
              rainfall and environmental exposure.
            </p>
          </div>

          <div>
            <h3>Material Protection</h3>
            <p>
              Suitable coatings, finishes and maintenance
              recommendations for selected materials.
            </p>
          </div>

          <div>
            <h3>Safe Installation</h3>
            <p>
              Proper installation planning, site coordination
              and inspection of completed work.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="parking-cta">
        <span>LET'S PLAN YOUR PARKING SPACE</span>

        <h2>Looking for Modern Car Parking Shades?</h2>

        <p>
          Contact AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          to discuss your parking shade requirements.
        </p>

        <div className="parking-cta-buttons">
          <Link to="/contact" className="parking-primary-btn">
            Contact Our Team →
          </Link>

          <Link to="/Curtain" className="parking-secondary-btn">
            Explore Other Solutions
          </Link>
        </div>
      </section>

    </main>
  );
};

export default Parking;
