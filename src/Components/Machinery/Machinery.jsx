
import { Link } from "react-router-dom";
import {
  FaTruck,
  FaTools,
  FaHardHat,
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaBuilding,
  FaIndustry,
  FaMountain,
  FaWarehouse,
  FaEnvelope,
  FaGlobe
} from "react-icons/fa";

import "./Machinery.css";

import bobcat from "../../assets/boobcat.jpg";
import excavator from "../../assets/excavators.jpg";
import boomLift from "../../assets/boomlift.webp";
import dumper from "../../assets/DumpTruck.avif";
import forklift from "../../assets/forklifts.webp";
import wheelLoader from "../../assets/shawal1.jpg";
import machineryBanner from "../../assets/MAH.jpeg";

// ======================================
// AWAN TRANSPORT MACHINERY DATA
// ======================================

const machineryItems = [
  {
    id: "01",
    name: "Bobcat Service",
    category: "COMPACT CONSTRUCTION EQUIPMENT",
    image: bobcat,
    description:
      "Bobcat equipment services for site cleaning, material loading, ground preparation and construction support.",
    features: [
      "Site cleaning and clearing",
      "Material loading",
      "Ground preparation",
      "Construction site support"
    ]
  },
  {
    id: "02",
    name: "Shovel & Excavator Service",
    category: "EARTHMOVING EQUIPMENT",
    image: excavator,
    description:
      "Excavator and shovel services for excavation, digging, soil removal and earthmoving operations.",
    features: [
      "Excavation work",
      "Foundation digging",
      "Soil removal",
      "Earthmoving operations"
    ]
  },
  {
    id: "03",
    name: "Boom Lift Service",
    category: "ELEVATED WORKING EQUIPMENT",
    image: boomLift,
    description:
      "Boom lift services for elevated access, building maintenance, installation work and industrial projects.",
    features: [
      "Elevated access",
      "Building maintenance",
      "Installation support",
      "Industrial work at height"
    ]
  },
  {
    id: "04",
    name: "Dumper Truck Service",
    category: "HEAVY TRANSPORT EQUIPMENT",
    image: dumper,
    description:
      "Dumper services for moving soil, sand, aggregate and construction materials at project sites.",
    features: [
      "Soil transportation",
      "Sand movement",
      "Aggregate transportation",
      "Site material removal"
    ]
  },
  {
    id: "05",
    name: "Forklift Service",
    category: "MATERIAL HANDLING EQUIPMENT",
    image: forklift,
    description:
      "Forklift services for lifting, loading, unloading and shifting materials at warehouses and construction sites.",
    features: [
      "Loading and unloading",
      "Material handling",
      "Warehouse support",
      "Industrial shifting"
    ]
  },
  {
    id: "06",
    name: "Wheel Loader Service",
    category: "EARTHMOVING EQUIPMENT",
    image: wheelLoader,
    description:
      "Wheel loader services for loading, moving and handling construction materials and aggregates.",
    features: [
      "Material loading",
      "Earthmoving",
      "Aggregate handling",
      "Site support"
    ]
  }
];

const serviceAreas = [
  {
    icon: <FaBuilding />,
    title: "Building Construction",
    description:
      "Heavy machinery support for construction and building projects."
  },
  {
    icon: <FaMountain />,
    title: "Earthworks",
    description:
      "Excavation, digging, soil removal and ground preparation."
  },
  {
    icon: <FaWarehouse />,
    title: "Material Handling",
    description:
      "Equipment support for loading, unloading and material shifting."
  },
  {
    icon: <FaIndustry />,
    title: "Industrial Projects",
    description:
      "Machinery support for industrial and commercial site operations."
  }
];

const Machinery = () => {
  const phoneNumber = "971562700627";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hello AWAN TRANSPORT, I am interested in your heavy machinery services. Please share more information."
  )}`;

  return (
    <main className="awan-transport-page">

      {/* =================================
          HERO SECTION
      ================================= */}

      <section
        className="transport-hero"
        style={{ backgroundImage: `url(${machineryBanner})` }}
      >
        <div className="transport-hero-overlay"></div>

        <div className="transport-container transport-hero-content">
          <span className="transport-small-heading">
            HEAVY EQUIPMENT & MACHINERY SERVICES
          </span>

          <h1>
            AWAN <span>TRANSPORT</span>
          </h1>

          <h2>
            HEAVY EQUIPMENT RENTAL & TRANSPORT SERVICES
          </h2>

          <p>
            Heavy machinery solutions for construction, excavation,
            earthworks, lifting and material handling requirements.
          </p>

          <div className="transport-hero-buttons">
            <a
              href="#machinery-services"
              className="transport-btn primary-btn"
            >
              Explore Machinery <FaArrowRight />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="transport-btn outline-btn"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>

        <div className="transport-hero-bottom">
          <div>
            <FaTruck />
            <span>Heavy Equipment</span>
          </div>

          <div>
            <FaTools />
            <span>Machinery Services</span>
          </div>

          <div>
            <FaHardHat />
            <span>Construction Support</span>
          </div>
        </div>
      </section>

      {/* =================================
          INTRODUCTION
      ================================= */}

      <section className="transport-intro transport-section">
        <div className="transport-container transport-intro-grid">

          <div className="transport-intro-text">
            <span className="transport-label">
              WELCOME TO AWAN TRANSPORT
            </span>

            <h2>
              Heavy Machinery Solutions for
              <span> Every Project</span>
            </h2>

            <p>
              AWAN TRANSPORT focuses on heavy machinery and equipment
              services for construction sites, excavation operations,
              industrial projects and material handling requirements.
            </p>

            <p>
              Our machinery services cover site preparation,
              earthmoving, lifting, loading and construction material
              transportation according to project requirements.
            </p>

            <Link to="/contact" className="transport-text-link">
              Contact Our Team <FaArrowRight />
            </Link>
          </div>

          <div className="transport-intro-image">
            <img
              src={excavator}
              alt="AWAN heavy excavator machinery"
            />

            <div className="transport-image-caption">
              <FaHardHat />

              <div>
                <strong>Heavy Equipment Services</strong>
                <span>Construction & Industrial Support</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =================================
          MACHINERY SERVICES
      ================================= */}

      <section
        className="transport-machinery transport-section"
        id="machinery-services"
      >
        <div className="transport-container">

          <div className="transport-section-heading">
            <span className="transport-label">
              OUR MACHINERY
            </span>

            <h2>Heavy Machinery & Equipment Services</h2>

            <p>
              Explore our heavy equipment services for construction,
              excavation, transportation and industrial operations.
            </p>
          </div>

          <div className="transport-machinery-grid">

            {machineryItems.map((item) => (
              <article
                className="transport-machine-card"
                key={item.id}
              >
                <div className="transport-machine-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                  />

                  <span className="transport-machine-number">
                    {item.id}
                  </span>
                </div>

                <div className="transport-machine-content">

                  <span className="transport-machine-category">
                    {item.category}
                  </span>

                  <h3>{item.name}</h3>

                  <p>{item.description}</p>

                  <ul>
                    {item.features.map((feature, index) => (
                      <li key={index}>
                        <FaCheckCircle />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                      `Hello AWAN TRANSPORT, I am interested in ${item.name}. Please provide service details and availability.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="transport-card-link"
                  >
                    Enquire About Service <FaArrowRight />
                  </a>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =================================
          SERVICE APPLICATIONS
      ================================= */}

      <section className="transport-applications transport-section">
        <div className="transport-container">

          <div className="transport-section-heading light-heading">
            <span className="transport-label">
              OUR WORK AREAS
            </span>

            <h2>Machinery Applications</h2>

            <p>
              Equipment services for different construction,
              transportation and industrial requirements.
            </p>
          </div>

          <div className="transport-application-grid">

            {serviceAreas.map((area, index) => (
              <div
                className="transport-application-card"
                key={index}
              >
                <div className="transport-application-icon">
                  {area.icon}
                </div>

                <h3>{area.title}</h3>

                <p>{area.description}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =================================
          WHY CHOOSE AWAN
      ================================= */}

      <section className="transport-benefits transport-section">
        <div className="transport-container transport-benefits-grid">

          <div>
            <span className="transport-label">
              WHY AWAN TRANSPORT
            </span>

            <h2>
              Machinery Support That Keeps Your
              <span> Project Moving</span>
            </h2>

            <p>
              We focus on understanding project requirements and
              coordinating suitable heavy equipment services for
              construction and industrial operations.
            </p>
          </div>

          <div className="transport-benefit-list">

            {[
              "Heavy equipment service solutions",
              "Construction project support",
              "Machinery for different site requirements",
              "Professional service coordination",
              "Customer-focused communication",
              "Equipment rental inquiries"
            ].map((benefit, index) => (
              <div
                className="transport-benefit-item"
                key={index}
              >
                <FaCheckCircle />
                <span>{benefit}</span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =================================
          CONTACT SECTION
      ================================= */}

      <section className="transport-contact">
        <div className="transport-container transport-contact-content">

          <div>
            <span className="transport-label">
              CONTACT AWAN TRANSPORT
            </span>

            <h2>Need Heavy Equipment for Your Project?</h2>

            <p>
              Contact our team for Bobcat, Shovel, Excavator,
              Boom Lift, Dumper, Forklift and Wheel Loader service inquiries.
            </p>
          </div>

          <div className="transport-contact-buttons">

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="transport-btn primary-btn"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>

            <a
              href="tel:+971562700627"
              className="transport-btn contact-phone-btn"
            >
              <FaPhoneAlt /> tel:+971558816618
            </a>

          </div>
        </div>
      </section>

      {/* =================================
          FOOTER CONTACT STRIP
      ================================= */}

      <section className="transport-info-strip">
        <div className="transport-container transport-info-grid">

          <a href="tel:+971562700627">
            <FaPhoneAlt />
            <span>tel:+971558816618</span>
          </a>

          <a href="mailto:awangcaw@gmail.com">
            <FaEnvelope />
            <span>awangcaw@gmail.com</span>
          </a>

          <a
            href="https://www.agcaw.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaGlobe />
            <span>www.agcaw.com</span>
          </a>

        </div>
      </section>

    </main>
  );
};

export default Machinery;
