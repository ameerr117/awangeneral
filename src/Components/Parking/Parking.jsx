
import { Link } from "react-router-dom";
import "./Parking.css";

const parkingServices = [
  {
    number: "01",
    title: "Cantilever Parking Shades",
    description:
      "Modern cantilever structures designed to protect vehicles with fewer supporting columns and convenient parking access.",
    features: [
      "Open parking access",
      "Strong support structure",
      "Modern appearance",
    ],
    image:
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    title: "Tensile Fabric Shades",
    description:
      "Architectural fabric shade systems combining attractive shapes with practical protection against sunlight and weather.",
    features: [
      "Contemporary designs",
      "UV-resistant fabric options",
      "Lightweight appearance",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "Pyramid Parking Shades",
    description:
      "Distinctive pyramid-style shade structures suitable for residential, commercial and public parking areas.",
    features: [
      "Elegant design",
      "Effective shade coverage",
      "Multiple layout options",
    ],
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    title: "Double Car Parking Shades",
    description:
      "Practical shade solutions designed to cover two or more vehicles with coordinated structural arrangements.",
    features: [
      "Multiple vehicle coverage",
      "Space-efficient layouts",
      "Custom dimensions",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "05",
    title: "Aluminium & Steel Structures",
    description:
      "Durable structural solutions using appropriately selected aluminium or steel components for different parking requirements.",
    features: [
      "Material options",
      "Protective finishes",
      "Project-specific fabrication",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "06",
    title: "Custom Parking Canopies",
    description:
      "Made-to-measure parking canopy designs developed around available space, vehicle arrangement and architectural style.",
    features: [
      "Custom dimensions",
      "Flexible configurations",
      "Residential and commercial use",
    ],
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=85",
  },
];

const parkingMaterials = [
  {
    number: "01",
    title: "Galvanized Steel",
    description:
      "A practical structural material offering strength and corrosion protection when properly specified and maintained.",
  },
  {
    number: "02",
    title: "Aluminium",
    description:
      "A lightweight material option for selected shade structures, frames and architectural components.",
  },
  {
    number: "03",
    title: "PVC & HDPE Fabric",
    description:
      "Specialized shade fabrics available in different weights, finishes and UV-resistance specifications.",
  },
  {
    number: "04",
    title: "Polycarbonate Sheets",
    description:
      "A roofing option available in different transparency and tint choices for selected canopy applications.",
  },
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
  "Industrial Facilities",
];

const parkingProcess = [
  {
    number: "01",
    title: "Site Inspection",
    description:
      "Review the available area, ground conditions, access and parking requirements.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Prepare the proposed layout, dimensions, material selection and structural design.",
  },
  {
    number: "03",
    title: "Fabrication",
    description:
      "Prepare the selected structural components and roofing or shade materials.",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "Install the structure and inspect alignment, connections and finishing.",
  },
];

const Parking = () => {
  return (
    <main className="parking-page">
      {/* HERO */}
      <section className="parking-hero">
        <div className="parking-hero-overlay"></div>

        <div className="parking-hero-content">
          <span className="parking-eyebrow">
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          </span>

          <div className="parking-hero-line"></div>

          <h1>
            Car Parking
            <span> Shades & Canopies</span>
          </h1>

          <p>
            Smart, durable and modern parking shade solutions designed
            to protect vehicles and enhance residential, commercial
            and outdoor spaces.
          </p>

          <div className="parking-hero-buttons">
            <Link to="/contact" className="parking-primary-btn">
              Request a Quotation <span>↗</span>
            </Link>

            <a href="#parking-services" className="parking-secondary-btn">
              Explore Our Services <span>↓</span>
            </a>
          </div>
        </div>

        <div className="parking-hero-bottom">
          <span>01 / PARKING SOLUTIONS</span>
          <p>PROTECTIVE STRUCTURES. PRACTICAL DESIGN.</p>
        </div>

        <div className="parking-hero-side-text">
          ARCHITECTURAL SHADE SOLUTIONS
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="parking-intro parking-container">
        <div className="parking-intro-heading">
          <span className="parking-tag">ABOUT OUR SERVICE</span>

          <h2>
            Professional Parking Shades
            <span> Built Around Your Space</span>
          </h2>
        </div>

        <div className="parking-intro-text">
          <p>
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS provides car
            parking shade and canopy solutions for residential,
            commercial and industrial environments.
          </p>

          <p>
            We focus on functional layouts, suitable structural
            materials, quality fabrication and professional
            installation. Each design can be planned according to
            site conditions, parking capacity and project requirements.
          </p>

          <Link to="/contact" className="parking-text-link">
            Discuss Your Parking Project <span>↗</span>
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="parking-services" id="parking-services">
        <div className="parking-container">
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
                <div className="parking-service-image">
                  <img src={service.image} alt={service.title} />
                  <span className="parking-image-number">
                    {service.number}
                  </span>
                </div>

                <div className="parking-service-content">
                  <div className="parking-card-topline">
                    <span>AWAN PARKING SOLUTIONS</span>
                    <span className="parking-card-mark">✳</span>
                  </div>

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

                  <Link to="/contact" className="parking-card-link">
                    Enquire Now <span>↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="parking-materials">
        <div className="parking-container">
          <div className="parking-materials-heading">
            <span className="parking-tag">MATERIAL SELECTION</span>
            <h2>Materials for Reliable Performance</h2>
            <p>
              Material selection depends on structural design,
              environmental exposure, appearance and project budget.
            </p>
          </div>

          <div className="parking-materials-grid">
            {parkingMaterials.map((material) => (
              <article className="parking-material-card" key={material.number}>
                <span className="parking-material-number">
                  {material.number}
                </span>
                <div className="parking-material-divider"></div>
                <h3>{material.title}</h3>
                <p>{material.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS / DARK FEATURE SECTION */}
      <section className="parking-benefits">
        <div className="parking-benefits-image">
          <div className="parking-image-caption">
            <span>AWAN</span>
            <p>DESIGNED FOR EVERYDAY PERFORMANCE</p>
          </div>
        </div>

        <div className="parking-benefits-content">
          <span className="parking-tag">WHY CHOOSE PARKING SHADES?</span>

          <h2>
            More Than Shade.
            <span> Better Vehicle Protection.</span>
          </h2>

          <p className="parking-benefits-intro">
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

          <Link to="/contact" className="parking-benefits-link">
            Plan Your Parking Space <span>↗</span>
          </Link>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="parking-applications">
        <div className="parking-container">
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
                <span className="parking-application-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{application}</h3>
                <span className="parking-application-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="parking-process">
        <div className="parking-container">
          <div className="parking-section-heading">
            <span className="parking-tag">HOW WE WORK</span>
            <h2>Our Project Process</h2>
            <p>
              A planned approach from initial consultation to final
              installation and inspection.
            </p>
          </div>

          <div className="parking-process-grid">
            {parkingProcess.map((step) => (
              <article key={step.number}>
                <span className="parking-process-number">{step.number}</span>
                <div className="parking-process-line"></div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY & SAFETY */}
      <section className="parking-quality">
        <div className="parking-container parking-quality-layout">
          <div className="parking-quality-heading">
            <span className="parking-tag">QUALITY & SAFETY</span>
            <h2>Designed with Structural Requirements in Mind</h2>
            <p>
              Parking shade structures should be planned according
              to site conditions, applicable building requirements
              and engineering specifications.
            </p>
            <Link to="/contact" className="parking-text-link">
              Talk to Our Team <span>↗</span>
            </Link>
          </div>

          <div className="parking-quality-points">
            <article>
              <span>01</span>
              <div>
                <h3>Structural Stability</h3>
                <p>
                  Appropriate support, foundations and connections
                  based on the approved structural design.
                </p>
              </div>
            </article>

            <article>
              <span>02</span>
              <div>
                <h3>Wind & Weather Considerations</h3>
                <p>
                  Design consideration for local wind conditions,
                  rainfall and environmental exposure.
                </p>
              </div>
            </article>

            <article>
              <span>03</span>
              <div>
                <h3>Material Protection</h3>
                <p>
                  Suitable coatings, finishes and maintenance
                  recommendations for selected materials.
                </p>
              </div>
            </article>

            <article>
              <span>04</span>
              <div>
                <h3>Safe Installation</h3>
                <p>
                  Proper installation planning, site coordination
                  and inspection of completed work.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="parking-cta">
        <div className="parking-cta-overlay"></div>

        <div className="parking-cta-content">
          <span>LET'S PLAN YOUR PARKING SPACE</span>

          <h2>Looking for Modern Car Parking Shades?</h2>

          <p>
            Contact AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
            to discuss your parking shade requirements.
          </p>

          <div className="parking-cta-buttons">
            <Link to="/contact" className="parking-primary-btn">
              Contact Our Team <span>↗</span>
            </Link>

            <Link to="/Curtain" className="parking-secondary-btn">
              Explore Other Solutions <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Parking;
