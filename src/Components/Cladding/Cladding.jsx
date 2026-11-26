
import './Cladding.css';
import { Link } from 'react-router-dom';

import {
  FaArrowRight,
  FaCheck,
  FaShieldAlt,
  FaDraftingCompass,
  FaTools,
  FaBuilding,
  FaLayerGroup,
  FaRulerCombined,
  FaPhoneAlt
} from 'react-icons/fa';

const claddingTypes = [
  {
    number: '01',
    title: 'Aluminium Composite Panels',
    category: 'ACP PANEL SYSTEMS',
    description:
      'Modern ACP solutions designed to create clean, durable and visually distinctive building exteriors.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85'
  },
  {
    number: '02',
    title: 'Architectural Façades',
    category: 'CONTEMPORARY ARCHITECTURE',
    description:
      'Customized façade concepts that complement the character and design of residential and commercial buildings.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85'
  },
  {
    number: '03',
    title: 'Exterior Cladding',
    category: 'BUILDING EXTERIORS',
    description:
      'Exterior cladding solutions that enhance the appearance of buildings while helping protect their outer surfaces.',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1100&q=85'
  },
  {
    number: '04',
    title: 'Decorative Panels',
    category: 'DESIGN & DETAIL',
    description:
      'Distinctive aluminium panel applications that introduce texture, visual interest and architectural character.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85'
  }
];

const features = [
  {
    number: '01',
    icon: <FaShieldAlt />,
    title: 'Durable Performance',
    description:
      'Quality cladding systems selected for dependable performance and long-term exterior applications.'
  },
  {
    number: '02',
    icon: <FaBuilding />,
    title: 'Weather Protection',
    description:
      'Suitable exterior solutions that help shield building surfaces from everyday environmental exposure.'
  },
  {
    number: '03',
    icon: <FaDraftingCompass />,
    title: 'Design Flexibility',
    description:
      'A range of finishes, panel layouts and design possibilities to suit different architectural styles.'
  },
  {
    number: '04',
    icon: <FaLayerGroup />,
    title: 'Refined Finishing',
    description:
      'Careful attention to alignment, detailing and installation for a clean architectural appearance.'
  }
];

const process = [
  {
    number: '01',
    title: 'Site Assessment',
    description:
      'Understanding the building, surface conditions and project requirements.'
  },
  {
    number: '02',
    title: 'Design & Planning',
    description:
      'Selecting suitable materials, panel layouts and finishing details.'
  },
  {
    number: '03',
    title: 'Fabrication',
    description:
      'Preparing cladding components with care and attention to dimensions.'
  },
  {
    number: '04',
    title: 'Installation',
    description:
      'Completing the cladding work with a focus on precision and finish.'
  }
];

const Cladding = () => {
  return (
    <main className="awan-cladding-page">

      {/* HERO SECTION */}
      <section className="cladding-hero">
        <div className="cladding-hero-image"></div>
        <div className="cladding-hero-overlay"></div>

        <div className="cladding-container cladding-hero-content">
          <div className="cladding-eyebrow">
            <span></span>
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          </div>

          <h1>
            Elevating
            <em> Building Exteriors.</em>
          </h1>

          <p>
            Premium aluminium cladding solutions that bring together
            architectural design, practical protection and a refined finish.
          </p>

          <div className="cladding-hero-actions">
            <Link to="/contact" className="cladding-primary-btn">
              Discuss Your Project <FaArrowRight />
            </Link>

            <a href="#cladding-solutions" className="cladding-outline-btn">
              Explore Solutions
            </a>
          </div>

          <div className="cladding-hero-bottom">
            <span>01 / 04</span>
            <span className="cladding-hero-line"></span>
            <span>ALUMINIUM CLADDING COLLECTION</span>
          </div>
        </div>

        <div className="cladding-hero-side-label">
          ARCHITECTURAL EXCELLENCE
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="cladding-intro-section">
        <div className="cladding-container cladding-intro-grid">

          <div className="cladding-section-label">
            <span>01</span>
            <div></div>
            ABOUT OUR CLADDING
          </div>

          <div className="cladding-intro-heading">
            <span className="cladding-small-heading">
              DESIGNED TO MAKE AN IMPRESSION
            </span>

            <h2>
              A stronger identity
              <span> for every exterior.</span>
            </h2>
          </div>

          <div className="cladding-intro-description">
            <p>
              Building façades play an important role in defining the
              appearance and character of any property. Aluminium cladding
              offers a versatile way to create modern and distinctive exteriors.
            </p>

            <p>
              AWAN provides cladding solutions developed around project
              requirements, with attention to material selection, design
              details and professional installation.
            </p>

            <Link to="/about" className="cladding-text-link">
              Discover AWAN <FaArrowRight />
            </Link>
          </div>

        </div>
      </section>

      {/* CLADDING SOLUTIONS */}
      <section
        className="cladding-solutions-section"
        id="cladding-solutions"
      >
        <div className="cladding-container">

          <div className="cladding-section-heading">
            <div>
              <span className="cladding-small-heading">
                OUR SPECIALITIES
              </span>

              <h2>
                Explore Our
                <span> Cladding Solutions</span>
              </h2>
            </div>

            <p>
              Architectural aluminium systems designed to enhance
              residential, commercial and contemporary building exteriors.
            </p>
          </div>

          <div className="cladding-solutions-grid">
            {claddingTypes.map((item) => (
              <article className="cladding-solution-card" key={item.number}>

                <div className="cladding-card-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <span className="cladding-card-number">
                    {item.number}
                  </span>

                  <div className="cladding-card-overlay"></div>

                  <span className="cladding-card-category">
                    {item.category}
                  </span>
                </div>

                <div className="cladding-card-content">
                  <div className="cladding-card-title-row">
                    <h3>{item.title}</h3>
                    <span><FaArrowRight /></span>
                  </div>

                  <p>{item.description}</p>

                  <Link to="/contact" className="cladding-card-link">
                    Enquire About This Solution <FaArrowRight />
                  </Link>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ARCHITECTURAL SHOWCASE */}
      <section className="cladding-showcase-section">
        <div className="cladding-container cladding-showcase-grid">

          <div className="cladding-showcase-image">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1300&q=90"
              alt="Modern commercial building exterior"
              loading="lazy"
            />

            <div className="cladding-showcase-caption">
              <span>AWAN</span>
              <small>ARCHITECTURAL CLADDING</small>
            </div>
          </div>

          <div className="cladding-showcase-content">
            <span className="cladding-small-heading">
              THE AWAN APPROACH
            </span>

            <h2>
              façades with
              <span> purpose and character.</span>
            </h2>

            <p>
              A building's exterior is more than its outer surface. It
              communicates identity, creates a lasting impression and
              contributes to the overall architectural experience.
            </p>

            <ul>
              <li><FaCheck /> Project-focused cladding concepts</li>
              <li><FaCheck /> Modern aluminium panel applications</li>
              <li><FaCheck /> Attention to layout and detailing</li>
              <li><FaCheck /> Professional installation approach</li>
            </ul>

            <Link to="/contact" className="cladding-primary-btn">
              Start Your Project <FaArrowRight />
            </Link>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="cladding-features-section">
        <div className="cladding-container">

          <div className="cladding-section-heading">
            <div>
              <span className="cladding-small-heading">
                WHY CHOOSE ALUMINIUM CLADDING?
              </span>

              <h2>
                Performance in
                <span> Every Detail</span>
              </h2>
            </div>

            <p>
              The right cladding solution brings together design flexibility,
              dependable materials and careful workmanship.
            </p>
          </div>

          <div className="cladding-features-grid">
            {features.map((feature) => (
              <article className="cladding-feature-card" key={feature.number}>

                <div className="cladding-feature-top">
                  <span>{feature.number}</span>
                  <div className="cladding-feature-icon">
                    {feature.icon}
                  </div>
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="cladding-process-section">
        <div className="cladding-container">

          <div className="cladding-process-heading">
            <span className="cladding-small-heading">
              HOW WE WORK
            </span>

            <h2>
              From Concept
              <span> to Completion</span>
            </h2>

            <p>
              A practical process that keeps your project requirements,
              design details and final installation in focus.
            </p>
          </div>

          <div className="cladding-process-grid">
            {process.map((item) => (
              <article className="cladding-process-card" key={item.number}>

                <span className="cladding-process-number">
                  {item.number}
                </span>

                <div className="cladding-process-line"></div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cladding-cta-section">
        <div className="cladding-cta-pattern"></div>

        <div className="cladding-container cladding-cta-content">

          <div className="cladding-cta-icon">
            <FaRulerCombined />
          </div>

          <span>LET'S SHAPE YOUR NEXT PROJECT</span>

          <h2>
            Give Your Building
            <em> a Distinctive Finish.</em>
          </h2>

          <p>
            Connect with AWAN for aluminium cladding solutions that bring
            your architectural vision to life.
          </p>

          <div className="cladding-cta-actions">
            <Link to="/contact" className="cladding-cta-button">
              Contact Our Team <FaArrowRight />
            </Link>

            <a href="tel:+923000000000" className="cladding-cta-phone">
              <FaPhoneAlt /> Call Us
            </a>
          </div>

          <div className="cladding-cta-footer">
            <span>AWAN GENERAL CONTRACTING</span>
            <span>ALUMINIUM WORKS</span>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Cladding;
