
import { Link } from 'react-router-dom';
import gypsumImage from '../../assets/paints and gypsum works.jpeg';
import './Paints.css';

const Paints = () => {
  const whatsappNumber = '923XXXXXXXXX';

  const whatsappLink = (message) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const services = [
    {
      number: '01',
      title: 'Interior Painting',
      subtitle: 'Beautiful Interior Spaces',
      description:
        'Professional interior painting for homes, offices and commercial spaces. We focus on smooth preparation, neat finishing and suitable paint selection.',
      features: [
        'Wall and ceiling painting',
        'Surface preparation and priming',
        'Smooth and even paint application',
        'Colour selection assistance',
      ],
      className: 'paint-interior',
    },
    {
      number: '02',
      title: 'Exterior Painting',
      subtitle: 'Protection and Appearance',
      description:
        'Exterior painting solutions designed to improve building appearance and provide a suitable protective finish for external surfaces.',
      features: [
        'Exterior wall painting',
        'Weather-suitable paint selection',
        'Surface cleaning and preparation',
        'Professional finishing',
      ],
      className: 'paint-exterior',
    },
    {
      number: '03',
      title: 'Decorative Finishes',
      subtitle: 'Distinctive Wall Designs',
      description:
        'Decorative wall treatments that add texture, character and visual interest to residential and commercial interiors.',
      features: [
        'Feature wall finishes',
        'Textured paint effects',
        'Decorative colour combinations',
        'Custom design options',
      ],
      className: 'paint-decorative',
    },
    {
      number: '04',
      title: 'Gypsum Ceilings',
      subtitle: 'Modern Ceiling Designs',
      description:
        'Gypsum ceiling installations for contemporary interiors, including simple, layered and custom-designed ceiling arrangements.',
      features: [
        'False ceiling installation',
        'Custom ceiling designs',
        'Recessed lighting provisions',
        'Joint finishing and smooth surfaces',
      ],
      className: 'paint-ceiling',
    },
    {
      number: '05',
      title: 'Gypsum Partitions',
      subtitle: 'Flexible Interior Divisions',
      description:
        'Gypsum board partition systems that help organise interior layouts and create functional spaces in offices, homes and commercial buildings.',
      features: [
        'Office and room partitions',
        'Metal framing systems',
        'Board fixing and joint treatment',
        'Custom partition layouts',
      ],
      className: 'paint-partition',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Site Inspection',
      description:
        'Reviewing the site, surface conditions, dimensions and project requirements.',
    },
    {
      number: '02',
      title: 'Preparation',
      description:
        'Preparing surfaces, checking levels and arranging suitable materials.',
    },
    {
      number: '03',
      title: 'Installation & Application',
      description:
        'Carrying out painting, gypsum installation and finishing work according to the approved scope.',
    },
    {
      number: '04',
      title: 'Finishing & Inspection',
      description:
        'Checking completed surfaces, details and workmanship before handover.',
    },
  ];

  const applications = [
    'Residential Buildings',
    'Corporate Offices',
    'Commercial Buildings',
    'Hotels & Hospitality',
    'Retail Shops & Showrooms',
    'Apartments & Villas',
  ];

  return (
    <main className="awan-paints-page">

      {/* HERO */}
      <section className="paints-hero">
        <div className="paints-hero-background"></div>
        <div className="paints-hero-overlay"></div>

        <div className="paints-container paints-hero-content">
          <span className="paints-eyebrow">
            AWAN GENERAL CONTRACTING AND ALUMINIUM WORK LLC
          </span>

          <h1>
            PAINTS &
            <span> GYPSUM WORKS</span>
          </h1>

          <p>
            Professional painting, decorative finishing, gypsum
            ceilings and partition solutions for modern residential
            and commercial spaces.
          </p>

          <div className="paints-hero-actions">
            <a href="#paints-services" className="paints-btn">
              EXPLORE OUR SERVICES <span>→</span>
            </a>

            <a
              href={whatsappLink(
                'Hello, I would like to discuss your Paints and Gypsum Works services.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="paints-btn paints-btn-outline"
            >
              REQUEST A QUOTE
            </a>
          </div>
        </div>

        <div className="paints-hero-footer">
          <span>PAINTING · DECORATION · GYPSUM</span>
          <span>AWAN QUALITY WORK</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="paints-intro paints-container">
        <div className="paints-intro-heading">
          <span className="paints-section-label">
            ABOUT OUR SERVICES
          </span>

          <h2>
            Transforming Spaces
            <span> With Quality Finishes</span>
          </h2>

          <div className="paints-gold-line"></div>
        </div>

        <div className="paints-intro-description">
          <p>
            AWAN GENERAL CONTRACTING AND ALUMINIUM WORK LLC
            provides painting and gypsum solutions for interior
            and exterior building projects.
          </p>

          <p>
            From preparing and painting walls to installing modern
            gypsum ceilings and partitions, our services are planned
            around the functional and visual requirements of each
            project.
          </p>

          <a href="#paints-process" className="paints-text-link">
            DISCOVER OUR WORK PROCESS <span>→</span>
          </a>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="paints-feature-section">
        <div className="paints-container paints-feature-grid">
          <div className="paints-feature-image">
            <img
              src={gypsumImage}
              alt="AWAN painting and gypsum works"
            />

            <div className="paints-image-label">
              <span>AWAN</span>
              <strong>PAINTS & GYPSUM WORKS</strong>
            </div>
          </div>

          <div className="paints-feature-content">
            <span className="paints-section-label">
              INTERIOR FINISHING SERVICES
            </span>

            <h2>
              Detail Makes
              <span> The Difference.</span>
            </h2>

            <p>
              Quality finishing brings together careful preparation,
              appropriate materials and professional workmanship.
              Our painting and gypsum services help create clean,
              practical and attractive building interiors.
            </p>

            <div className="paints-feature-points">
              <div>
                <span>✓</span>
                <p>Careful surface preparation</p>
              </div>

              <div>
                <span>✓</span>
                <p>Neat installation and finishing</p>
              </div>

              <div>
                <span>✓</span>
                <p>Project-specific material selection</p>
              </div>

              <div>
                <span>✓</span>
                <p>Residential and commercial solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="paints-services-section" id="paints-services">
        <div className="paints-container">

          <div className="paints-section-heading">
            <div>
              <span className="paints-section-label">
                WHAT WE PROVIDE
              </span>

              <h2>
                Our Painting & <span>Gypsum Services</span>
              </h2>
            </div>

            <p>
              Explore our complete range of finishing services
              for modern buildings and interior environments.
            </p>
          </div>

          <div className="paints-services-grid">
            {services.map((service) => (
              <article
                className="paints-service-card"
                key={service.number}
              >
                <div className={`paints-service-visual ${service.className}`}>
                  <span className="paints-service-number">
                    {service.number}
                  </span>

                  <span className="paints-visual-brand">
                    AWAN FINISHING
                  </span>
                </div>

                <div className="paints-service-content">
                  <span className="paints-service-subtitle">
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

                  <a
                    href={whatsappLink(
                      `Hello, I am interested in your ${service.title} service. Please share more information.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="paints-service-link"
                  >
                    ENQUIRE ABOUT THIS SERVICE <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORK PROCESS */}
      <section className="paints-process-section" id="paints-process">
        <div className="paints-container">

          <div className="paints-section-heading">
            <div>
              <span className="paints-section-label">
                HOW WE WORK
              </span>

              <h2>
                Our Project <span>Process</span>
              </h2>
            </div>

            <p>
              A structured approach helps organise work from
              initial site review through final inspection.
            </p>
          </div>

          <div className="paints-process-grid">
            {process.map((step) => (
              <article className="paints-process-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS AND QUALITY */}
      <section className="paints-quality-section">
        <div className="paints-container paints-quality-grid">

          <div>
            <span className="paints-section-label">
              MATERIALS & WORKMANSHIP
            </span>

            <h2>
              Quality Finishing
              <span> Starts With Preparation</span>
            </h2>

            <p>
              Each project requires materials and installation
              methods suited to its surface, environment and
              intended use. Proper preparation and finishing
              help achieve a consistent result.
            </p>
          </div>

          <div className="paints-quality-list">
            <div>
              <span>01</span>
              <div>
                <h3>Surface Preparation</h3>
                <p>
                  Cleaning, repairing and preparing surfaces
                  before applying paint or installing gypsum boards.
                </p>
              </div>
            </div>

            <div>
              <span>02</span>
              <div>
                <h3>Suitable Materials</h3>
                <p>
                  Selecting paint, primers, gypsum boards and
                  framing components according to project conditions.
                </p>
              </div>
            </div>

            <div>
              <span>03</span>
              <div>
                <h3>Proper Installation</h3>
                <p>
                  Applying materials and installing systems
                  according to product instructions and project details.
                </p>
              </div>
            </div>

            <div>
              <span>04</span>
              <div>
                <h3>Final Inspection</h3>
                <p>
                  Reviewing finished surfaces, joints, edges
                  and visible details before completion.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PROJECT APPLICATIONS */}
      <section className="paints-applications-section">
        <div className="paints-container">

          <div className="paints-section-heading">
            <div>
              <span className="paints-section-label">
                OUR PROJECT AREAS
              </span>

              <h2>
                Solutions For <span>Different Spaces</span>
              </h2>
            </div>

            <p>
              Painting and gypsum services for a variety of
              residential and commercial environments.
            </p>
          </div>

          <div className="paints-applications-grid">
            {applications.map((application, index) => (
              <div className="paints-application-card" key={application}>
                <span>0{index + 1}</span>
                <h3>{application}</h3>
                <strong>↗</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="paints-contact-section">
        <div className="paints-container paints-contact-content">
          <div>
            <span className="paints-section-label">
              LETS DISCUSS YOUR PROJECT
            </span>

            <h2>
              Give Your Space
              <span> A Better Finish.</span>
            </h2>

            <p>
              Contact AWAN GENERAL CONTRACTING AND ALUMINIUM
              WORK LLC for interior painting, exterior painting,
              decorative finishes, gypsum ceilings and gypsum partitions.
            </p>
          </div>

          <a
            href={whatsappLink(
              'Hello, I need a quotation for Paints and Gypsum Works.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="paints-btn"
          >
            CONTACT OUR TEAM <span>→</span>
          </a>
        </div>
      </section>

      {/* RELATED SOLUTIONS */}
      <section className="paints-related-section">
        <div className="paints-container">

          <div className="paints-related-heading">
            <span className="paints-section-label">
              AWAN GENERAL CONTRACTING AND ALUMINIUM WORK LLC
            </span>

            <h2>
              Explore Our <span>Other Solutions</span>
            </h2>

            <p>
              Discover more architectural and construction
              solutions available from our company.
            </p>
          </div>

          <div className="paints-related-grid">
            <Link to="/window" className="paints-related-card">
              <span>01</span>
              <h3>Aluminium Windows</h3>
              <strong>EXPLORE WINDOWS →</strong>
            </Link>

            <Link to="/door" className="paints-related-card">
              <span>02</span>
              <h3>Aluminium Doors</h3>
              <strong>EXPLORE DOORS →</strong>
            </Link>

            <Link to="/glass" className="paints-related-card">
              <span>03</span>
              <h3>Glass Solutions</h3>
              <strong>EXPLORE GLASS →</strong>
            </Link>

            <Link to="/cladding" className="paints-related-card">
              <span>04</span>
              <h3>Aluminium Cladding</h3>
              <strong>EXPLORE CLADDING →</strong>
            </Link>

            <Link to="/Curtain" className="paints-related-card">
              <span>05</span>
              <h3>Curtain Wall Systems</h3>
              <strong>EXPLORE CURTAIN WALLS →</strong>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Paints;
