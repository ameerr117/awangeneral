
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

const WHATSAPP_NUMBER = '971562700627';

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

const gallery = [
  {
    number: '01',
    category: 'CONSTRUCTION',
    title: 'Modern Building Works',
    description: 'Professional building and construction solutions.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
    alt: 'Modern architectural building and construction project'
  },
  {
    number: '02',
    category: 'INTERIOR DESIGN',
    title: 'Interior Finishing',
    description: 'Beautiful interiors with quality finishing details.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Modern interior design with premium finishing'
  },
  {
    number: '03',
    category: 'EXTERIOR WORKS',
    title: 'Exterior Solutions',
    description: 'Contemporary building exteriors and finishing.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    alt: 'Contemporary commercial building exterior'
  }
];

const createWhatsAppLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const BlogDetail = () => {
  return (
    <main className="extra-services-page">

      {/* HERO */}
      <section className="extra-hero">
        <div className="extra-hero-overlay"></div>

        <div className="extra-hero-content">

          <div className="extra-eyebrow">
            <span></span>
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          </div>

          <h1>
            Beyond Aluminium.
            <span>Complete Building Solutions.</span>
          </h1>

          <p>
            From painting and plumbing to electrical installations,
            flooring and complete building maintenance, we provide
            professional construction solutions under one roof.
          </p>

          <div className="extra-hero-actions">
            <a href="#extra-services" className="extra-hero-btn">
              EXPLORE OUR SERVICES <FaArrowRight />
            </a>

            <a
              href={createWhatsAppLink('Hello AWAN General, I would like to discuss a building project.')}
              target="_blank"
              rel="noopener noreferrer"
              className="extra-hero-outline"
            >
              DISCUSS YOUR PROJECT
            </a>
          </div>

          <div className="extra-hero-highlights">
            <span><FaCheckCircle /> QUALITY WORKMANSHIP</span>
            <span><FaCheckCircle /> PROFESSIONAL EXECUTION</span>
            <span><FaCheckCircle /> RELIABLE SOLUTIONS</span>
          </div>
        </div>

        <div className="extra-hero-side">
          <span>02 / OUR SERVICES</span>
          <i></i>
          <span>BUILT WITH PRECISION</span>
        </div>

        {/* AWAN BRAND LOGO */}
        <div className="extra-brand-logo">
          <div className="extra-logo-symbol">
            <span>A</span>
          </div>

          <div className="extra-logo-text">
            <h2>AWAN<span>.</span></h2>
            <p>GENERAL CONTRACTING</p>
            <small>ALUMINIUM & ARCHITECTURAL WORKS</small>
          </div>
        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="extra-intro">

        <div className="extra-intro-heading">
          <span className="extra-section-label">
            <i></i> OUR ADDITIONAL EXPERTISE
          </span>

          <h2>
            Everything Your
            <span>Building Needs.</span>
          </h2>
        </div>

        <div className="extra-intro-content">
          <p>
            We go beyond aluminium fabrication to provide a wider range
            of contracting and building services. Our additional works
            cover essential construction activities, interior finishing,
            installation and maintenance for residential and commercial
            developments.
          </p>

          <div className="extra-intro-note">
            <span>AWAN</span>
            <p>One professional partner for multiple building requirements.</p>
          </div>
        </div>

      </section>


      {/* PROJECT GALLERY */}
      <section className="extra-gallery">

        <div className="extra-gallery-heading">
          <div>
            <span className="extra-section-label">
              <i></i> OUR WORK & EXPERTISE
            </span>
            <h2>Building Solutions <span>in Action.</span></h2>
          </div>

          <p>
            Explore our construction, installation and finishing services.
          </p>
        </div>

        <div className="extra-gallery-grid">
          {gallery.map((item) => (
            <article className="extra-gallery-card" key={item.number}>

              <div className="extra-gallery-image">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />

                <span className="extra-gallery-number">
                  {item.number}
                </span>
              </div>

              <div className="extra-gallery-caption">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

            </article>
          ))}
        </div>

      </section>


      {/* SERVICES */}
      <section className="extra-services" id="extra-services">

        <div className="extra-section-heading">
          <div>
            <span className="extra-section-label">
              <i></i> WHAT WE OFFER
            </span>
            <h2>Additional Construction <span>Services.</span></h2>
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
                <span className="extra-number">{service.number}</span>

                <div className="extra-service-icon">
                  {service.icon}
                </div>
              </div>

              <h3>{service.title}</h3>

              <p className="extra-service-description">
                {service.description}
              </p>

              <div className="extra-service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>
                    <FaCheckCircle />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={createWhatsAppLink(
                  `Hello AWAN General, I am interested in your ${service.title} services. Please provide more information.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="extra-service-link"
              >
                ENQUIRE NOW <FaArrowRight />
              </a>

            </article>
          ))}
        </div>

      </section>


      {/* WHY CHOOSE AWAN */}
      <section className="extra-why">

        <div className="extra-why-content">
          <span className="extra-section-label">
            <i></i> THE AWAN ADVANTAGE
          </span>

          <h2>
            One Partner.
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
          <div><FaCheckCircle /> Professional Workmanship</div>
          <div><FaCheckCircle /> Quality-Focused Execution</div>
          <div><FaCheckCircle /> Residential & Commercial Solutions</div>
          <div><FaCheckCircle /> Integrated Contracting Services</div>
        </div>

      </section>


      {/* CONTACT CTA */}
      <section className="extra-cta">

        <div className="extra-cta-content">
          <span>LET'S BUILD SOMETHING BETTER</span>

          <h2>
            Have a Project in Mind?
            <strong>Let's Discuss It.</strong>
          </h2>

          <p>
            Contact our team to discuss your construction,
            maintenance and additional service requirements.
          </p>

          <a
            href={createWhatsAppLink(
              'Hello AWAN General, I would like to discuss a construction project.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="extra-cta-button"
          >
            CONTACT OUR TEAM <FaArrowRight />
          </a>
        </div>

        <div className="extra-cta-brand">
          <span>A</span>
          <strong>AWAN.</strong>
          <small>BUILT WITH PRECISION</small>
        </div>

      </section>

    </main>
  );
};

export default BlogDetail;
