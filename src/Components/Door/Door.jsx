
import './Door.css';
import { Link } from 'react-router-dom';

import {
  FaArrowRight,
  FaCheck,
  FaPhoneAlt,
  FaShieldAlt,
  FaDraftingCompass,
  FaTools,
  FaDoorOpen,
  FaBuilding,
  FaWindowMaximize
} from 'react-icons/fa';

const doorSystems = [
  {
    number: '01',
    title: 'Sliding Doors',
    category: 'SPACE-SAVING SYSTEM',
    description:
      'Smooth-operating aluminium sliding doors that bring natural light and practical access to modern spaces.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85'
  },
  {
    number: '02',
    title: 'Hinged Doors',
    category: 'CLASSIC FUNCTIONALITY',
    description:
      'Strong and dependable hinged door systems for residential entrances, offices and commercial buildings.',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85'
  },
  {
    number: '03',
    title: 'Automatic Doors',
    category: 'SMART ACCESS',
    description:
      'Contemporary automatic entrance solutions designed for convenient movement and professional environments.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85'
  },
  {
    number: '04',
    title: 'Frameless Glass Doors',
    category: 'MINIMAL DESIGN',
    description:
      'Elegant glass door solutions that create open interiors, clean sightlines and a refined architectural finish.',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85'
  },
  {
    number: '05',
    title: 'Bi-Fold Doors',
    category: 'WIDE OPENINGS',
    description:
      'Flexible folding door systems that connect indoor and outdoor spaces with generous opening areas.',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85'
  },
  {
    number: '06',
    title: 'Custom Door Solutions',
    category: 'MADE FOR YOUR PROJECT',
    description:
      'Purpose-designed aluminium door systems developed around your dimensions, style and project requirements.',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85'
  }
];

const benefits = [
  {
    icon: <FaShieldAlt />,
    number: '01',
    title: 'Built for Durability',
    text: 'Reliable aluminium systems designed for everyday use and lasting performance.'
  },
  {
    icon: <FaDraftingCompass />,
    number: '02',
    title: 'Architectural Design',
    text: 'Modern profiles and refined finishes that complement different building styles.'
  },
  {
    icon: <FaWindowMaximize />,
    number: '03',
    title: 'Flexible Options',
    text: 'Different configurations, opening styles and design choices for your space.'
  },
  {
    icon: <FaTools />,
    number: '04',
    title: 'Professional Workmanship',
    text: 'Careful fabrication and installation focused on fit, finish and functionality.'
  }
];

const process = [
  {
    number: '01',
    title: 'Consultation',
    text: 'We understand your space, requirements and preferred door style.'
  },
  {
    number: '02',
    title: 'Design & Planning',
    text: 'We plan a suitable system around your project dimensions and needs.'
  },
  {
    number: '03',
    title: 'Fabrication',
    text: 'Your aluminium door components are prepared with attention to detail.'
  },
  {
    number: '04',
    title: 'Installation',
    text: 'We complete the installation with a clean and professional finish.'
  }
];

const Door = () => {
  return (
    <main className="awan-door-page">

      {/* HERO SECTION */}
      <section className="door-hero">
        <div className="door-hero-image"></div>
        <div className="door-hero-overlay"></div>

        <div className="door-container door-hero-content">
          <div className="door-eyebrow">
            <span></span>
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          </div>

          <h1>
            Doors That Define
            <em> Modern Spaces.</em>
          </h1>

          <p>
            Discover premium aluminium and glass door solutions designed
            around performance, architectural style and everyday functionality.
          </p>

          <div className="door-hero-actions">
            <Link to="/contact" className="door-primary-btn">
              Discuss Your Project <FaArrowRight />
            </Link>

            <a href="#door-systems" className="door-outline-btn">
              Explore Door Systems
            </a>
          </div>

          <div className="door-hero-bottom">
            <span>01 / 06</span>
            <span className="door-hero-bottom-line"></span>
            <span>ALUMINIUM DOOR COLLECTION</span>
          </div>
        </div>

        <div className="door-hero-side-label">
          QUALITY IN EVERY DETAIL
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="door-intro-section">
        <div className="door-container door-intro-grid">

          <div className="door-section-label">
            <span>01</span>
            <div></div>
            ABOUT OUR DOOR SYSTEMS
          </div>

          <div className="door-intro-heading">
            <span className="door-small-heading">DESIGNED FOR MODERN LIVING</span>
            <h2>
              The perfect balance of
              <span> strength, style and function.</span>
            </h2>
          </div>

          <div className="door-intro-description">
            <p>
              Aluminium doors are an important part of a building's appearance
              and functionality. They offer versatile design possibilities for
              homes, offices and commercial spaces.
            </p>

            <p>
              At AWAN, we focus on practical door solutions, precise
              workmanship and a professional finish that complements your
              architectural vision.
            </p>

            <Link to="/about" className="door-text-link">
              Discover AWAN <FaArrowRight />
            </Link>
          </div>

        </div>
      </section>

      {/* DOOR SYSTEMS */}
      <section className="door-systems-section" id="door-systems">
        <div className="door-container">

          <div className="door-section-heading">
            <div>
              <span className="door-small-heading">OUR SPECIALITIES</span>
              <h2>
                Explore Our
                <span> Door Systems</span>
              </h2>
            </div>

            <p>
              A considered range of aluminium and glass door solutions
              for residential and commercial applications.
            </p>
          </div>

          <div className="door-system-grid">
            {doorSystems.map((door) => (
              <article className="door-system-card" key={door.number}>

                <div className="door-card-image">
                  <img src={door.image} alt={door.title} loading="lazy" />

                  <span className="door-card-number">{door.number}</span>

                  <div className="door-card-image-overlay"></div>

                  <span className="door-card-category">
                    {door.category}
                  </span>
                </div>

                <div className="door-card-content">
                  <div className="door-card-title-row">
                    <h3>{door.title}</h3>
                    <span><FaArrowRight /></span>
                  </div>

                  <p>{door.description}</p>

                  <Link to="/contact" className="door-card-link">
                    Enquire About This System <FaArrowRight />
                  </Link>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="door-brand-section">
        <div className="door-container door-brand-grid">

          <div className="door-brand-image">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
              alt="Modern architectural aluminium and glass entrance"
              loading="lazy"
            />
            <div className="door-image-caption">
              <span>AWAN</span>
              <small>ALUMINIUM WORKS</small>
            </div>
          </div>

          <div className="door-brand-content">
            <span className="door-small-heading">THE AWAN APPROACH</span>

            <h2>
              Every entrance
              <span> makes a statement.</span>
            </h2>

            <p>
              A well-designed door does more than provide access. It adds
              character to a building, connects spaces and supports the
              overall architectural experience.
            </p>

            <ul>
              <li><FaCheck /> Practical design and functionality</li>
              <li><FaCheck /> Modern aluminium and glass options</li>
              <li><FaCheck /> Project-focused solutions</li>
              <li><FaCheck /> Attention to finishing details</li>
            </ul>

            <Link to="/contact" className="door-primary-btn">
              Start Your Project <FaArrowRight />
            </Link>
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="door-benefits-section">
        <div className="door-container">

          <div className="door-section-heading door-benefits-heading">
            <div>
              <span className="door-small-heading">WHY CHOOSE AWAN</span>
              <h2>
                Quality in
                <span> Every Detail</span>
              </h2>
            </div>

            <p>
              Our approach brings together considered design, reliable
              materials and careful workmanship.
            </p>
          </div>

          <div className="door-benefits-grid">
            {benefits.map((benefit) => (
              <article className="door-benefit-card" key={benefit.number}>
                <div className="door-benefit-top">
                  <span>{benefit.number}</span>
                  <div className="door-benefit-icon">{benefit.icon}</div>
                </div>

                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="door-process-section">
        <div className="door-container">

          <div className="door-process-heading">
            <span className="door-small-heading">HOW WE WORK</span>
            <h2>
              From First Discussion
              <span> to Final Installation</span>
            </h2>
            <p>
              A straightforward process focused on your project requirements
              and a professional finished result.
            </p>
          </div>

          <div className="door-process-grid">
            {process.map((item) => (
              <article className="door-process-card" key={item.number}>
                <span className="door-process-number">{item.number}</span>
                <div className="door-process-line"></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="door-cta-section">
        <div className="door-cta-pattern"></div>

        <div className="door-container door-cta-content">
          <div className="door-cta-icon">
            <FaDoorOpen />
          </div>

          <span>LET'S BUILD SOMETHING BETTER</span>

          <h2>
            Your Project Deserves
            <em> the Right Entrance.</em>
          </h2>

          <p>
            Talk to AWAN about aluminium door solutions for your next
            residential or commercial project.
          </p>

          <div className="door-cta-actions">
            <Link to="/contact" className="door-cta-button">
              Contact Our Team <FaArrowRight />
            </Link>

            <a href="tel:+923000000000" className="door-cta-phone">
              <FaPhoneAlt /> Call Us
            </a>
          </div>

          <div className="door-cta-footer">
            <span>AWAN GENERAL CONTRACTING</span>
            <span>ALUMINIUM WORKS</span>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Door;
