
import './BlogDetail.css';

import {
  FaPaintRoller,
  FaWrench,
  FaBolt,
  FaHammer,
  FaBuilding,
  FaLayerGroup,
  FaWater,
  FaTools,
  FaHardHat,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';

const BlogDetail = () => {

  const services = [
    {
      icon: <FaPaintRoller />,
      number: '01',
      title: 'Painting Works',
      description: 'Professional interior and exterior painting, wall finishing, decorative painting and premium coating solutions.',
      tags: ['Interior Painting', 'Exterior Painting', 'Wall Finishing']
    },
    {
      icon: <FaWrench />,
      number: '02',
      title: 'Plumbing Works',
      description: 'Complete plumbing installation, maintenance, water supply systems and drainage solutions for buildings.',
      tags: ['Water Supply', 'Pipe Installation', 'Drainage']
    },
    {
      icon: <FaBolt />,
      number: '03',
      title: 'Electrical Works',
      description: 'Electrical installations, lighting systems, wiring, power distribution and electrical maintenance.',
      tags: ['Wiring', 'Lighting', 'Electrical Repair']
    },
    {
      icon: <FaLayerGroup />,
      number: '04',
      title: 'Flooring & Tiling',
      description: 'High-quality flooring, ceramic tiles, porcelain installation, marble finishing and modern floor solutions.',
      tags: ['Ceramic Tiles', 'Marble Work', 'Floor Finishing']
    },
    {
      icon: <FaHammer />,
      number: '05',
      title: 'Carpentry & Joinery',
      description: 'Custom woodwork, doors, cabinets, furniture installation and professional interior carpentry.',
      tags: ['Wooden Doors', 'Cabinets', 'Custom Joinery']
    },
    {
      icon: <FaWater />,
      number: '06',
      title: 'Waterproofing Works',
      description: 'Reliable waterproofing solutions for roofs, bathrooms, foundations, terraces and wet areas.',
      tags: ['Roof Waterproofing', 'Bathrooms', 'Leakage Protection']
    },
    {
      icon: <FaBuilding />,
      number: '07',
      title: 'Civil & Masonry Works',
      description: 'Building repairs, blockwork, plastering, concrete work, extensions and general civil construction.',
      tags: ['Block Work', 'Plastering', 'Concrete Work']
    },
    {
      icon: <FaTools />,
      number: '08',
      title: 'Maintenance & Repair',
      description: 'Building maintenance, renovation, repair services and technical support for residential and commercial properties.',
      tags: ['Renovation', 'Building Repairs', 'Maintenance']
    },
    {
      icon: <FaHardHat />,
      number: '09',
      title: 'Gypsum & Ceiling Works',
      description: 'Modern false ceilings, gypsum partitions, decorative ceiling designs and interior finishing.',
      tags: ['False Ceiling', 'Gypsum Board', 'Partitions']
    }
  ];

  return (
    <div className="extra-services-page">

      {/* HERO SECTION */}
      <section className="extra-hero">
        <div className="extra-hero-overlay"></div>

        <div className="extra-hero-content">

          <span className="extra-eyebrow">
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          </span>

          <h1>
            Beyond Aluminium.
            <br />
            <span>Complete Building Solutions.</span>
          </h1>

          <p>
            From painting and plumbing to electrical installations,
            flooring and complete building maintenance, we provide
            professional construction solutions under one roof.
          </p>

          <a href="#extra-services" className="extra-hero-btn">
            EXPLORE OUR SERVICES
            <FaArrowRight />
          </a>

        </div>

        <div className="extra-hero-bottom">
          <span>QUALITY</span>
          <span>PRECISION</span>
          <span>PROFESSIONAL EXECUTION</span>
        </div>

      </section>

      {/* INTRODUCTION */}
      <section className="extra-intro">

        <div className="extra-intro-label">
          <span></span>
          OUR ADDITIONAL EXPERTISE
        </div>

        <div className="extra-intro-content">

          <h2>
            Everything Your
            <br />
            <span>Building Needs.</span>
          </h2>

          <p>
            We go beyond aluminium fabrication to provide a wider range
            of contracting and building services. Our additional works
            cover essential construction activities, interior finishing,
            installation and maintenance for residential and commercial
            developments.
          </p>

        </div>

      </section>

      {/* SERVICES */}
      <section className="extra-services" id="extra-services">

        <div className="extra-section-heading">

          <div>
            <span>WHAT WE OFFER</span>
            <h2>Additional Construction Services</h2>
          </div>

          <p>
            Professional workmanship. Practical solutions.
            Reliable project execution.
          </p>

        </div>

        <div className="extra-services-grid">

          {services.map((service) => (

            <article className="extra-service-card" key={service.number}>

              <div className="extra-card-top">

                <span className="extra-number">
                  {service.number}
                </span>

                <div className="extra-service-icon">
                  {service.icon}
                </div>

              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="extra-service-tags">

                {service.tags.map((tag) => (
                  <span key={tag}>
                    <FaCheckCircle />
                    {tag}
                  </span>
                ))}

              </div>

              <a
                href={`https://wa.me/971562700627?text=${encodeURIComponent(
                  `Hello AWAN General, I am interested in your ${service.title} services. Please provide more information.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="extra-service-link"
              >
                ENQUIRE NOW
                <FaArrowRight />
              </a>

            </article>

          ))}

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="extra-why">

        <div className="extra-why-content">

          <span>THE AWAN ADVANTAGE</span>

          <h2>
            One Partner.
            <br />
            <strong>Multiple Solutions.</strong>
          </h2>

          <p>
            We aim to simplify construction requirements by bringing
            different building services together. From initial
            requirements to finishing and maintenance, our focus is
            on quality, coordination and professional execution.
          </p>

        </div>

        <div className="extra-why-points">

          <div>
            <FaCheckCircle />
            <span>Professional Workmanship</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>Quality-Focused Execution</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>Residential & Commercial Solutions</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>Integrated Contracting Services</span>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="extra-cta">

        <span>LETS BUILD SOMETHING BETTER</span>

        <h2>
          Have a Project in Mind?
          <br />
          <strong>Lets Discuss It.</strong>
        </h2>

        <p>
          Contact our team to discuss your construction,
          maintenance and additional service requirements.
        </p>

        <a
          href="https://wa.me/971562700627?text=Hello%20AWAN%20General%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project."
          target="_blank"
          rel="noopener noreferrer"
        >
          CONTACT OUR TEAM
          <FaArrowRight />
        </a>

      </section>

    </div>
  );
};

export default BlogDetail;
