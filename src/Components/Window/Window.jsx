
import './Window.css';

const COMPANY = 'AWAN GENERAL CONTRACTING & ALUMINIUM WORKS';

const windowTypes = [
  {
    number: '01',
    title: 'Aluminium Sliding Windows',
    subtitle: 'Smooth operation · Space efficiency',
    description: 'Sliding windows move horizontally along precision-engineered tracks. Their space-saving design suits modern residential and commercial buildings.',
    applications: 'Apartments, villas, offices and balconies.',
    features: ['Space-saving operation', 'Large glass openings', 'Modern slim-line look', 'Easy everyday operation'],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Modern interior with expansive glazed openings',
  },
  {
    number: '02',
    title: 'Aluminium Casement Windows',
    subtitle: 'Classic design · Natural ventilation',
    description: 'Side-hinged casement windows open outward or inward depending on the system. They offer flexible ventilation and effective sealing when correctly specified.',
    applications: 'Residential buildings, villas and commercial spaces.',
    features: ['Side-hinged operation', 'Wide opening area', 'Sealing options', 'Contemporary profiles'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Contemporary villa with modern window design',
  },
  {
    number: '03',
    title: 'Top Hung Windows',
    subtitle: 'Controlled ventilation · Weather protection',
    description: 'Top-hung windows are hinged along the upper edge and open outward from the bottom. They can provide ventilation while helping limit direct rain entry.',
    applications: 'Bathrooms, kitchens, offices and high-level openings.',
    features: ['Top-hinged operation', 'Controlled ventilation', 'Compact design', 'Useful for smaller openings'],
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Bright contemporary room with architectural glazing',
  },
  {
    number: '04',
    title: 'Bottom Hung Windows',
    subtitle: 'Practical interior ventilation',
    description: 'Bottom-hung windows are hinged at the lower edge and open inward from the top. Their configuration suits applications requiring a controlled opening arrangement.',
    applications: 'Specialist residential and commercial applications.',
    features: ['Bottom-hinged configuration', 'Controlled opening', 'Practical operation', 'Customisable design'],
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Minimalist residential architecture and glazing',
  },
  {
    number: '05',
    title: 'Tilt & Turn Windows',
    subtitle: 'Two opening functions · One system',
    description: 'Tilt-and-turn windows combine inward tilting for ventilation with a full inward opening function, offering flexibility for modern buildings.',
    applications: 'Premium apartments, villas, hotels and offices.',
    features: ['Dual opening function', 'Flexible ventilation', 'Multi-point hardware options', 'Modern architectural design'],
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Modern home interior with clean window lines',
  },
  {
    number: '06',
    title: 'Fixed Aluminium Windows',
    subtitle: 'Maximum daylight · Clear views',
    description: 'Fixed windows are non-opening glazed units designed to bring natural light into a building. They can be combined with operable sections for larger compositions.',
    applications: 'Curtain wall facades, staircases, offices and living spaces.',
    features: ['Non-opening design', 'Large glazing areas', 'Slim frame possibilities', 'Excellent daylight access'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Large fixed glazing in a modern building',
  },
  {
    number: '07',
    title: 'Louvre Windows',
    subtitle: 'Adjustable airflow · Modern function',
    description: 'Louvre windows use adjustable glass or specified blades to regulate airflow. Their configuration allows ventilation to be controlled as required.',
    applications: 'Service areas, plant rooms, kitchens and selected commercial spaces.',
    features: ['Adjustable blades', 'Ventilation control', 'Multiple blade configurations', 'Architectural flexibility'],
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Architectural facade with repeating vertical details',
  },
  {
    number: '08',
    title: 'Bi-Fold Aluminium Windows',
    subtitle: 'Wide openings · Seamless spaces',
    description: 'Bi-fold windows use connected panels that fold and stack to one or both sides, creating a wide opening between interior and exterior spaces.',
    applications: 'Restaurants, kitchens, terraces and contemporary villas.',
    features: ['Folding panel operation', 'Wide opening configuration', 'Indoor-outdoor connection', 'Custom panel arrangements'],
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Open-plan home connected to an outdoor terrace',
  },
  {
    number: '09',
    title: 'Corner & Structural Glazing',
    subtitle: 'Minimal frames · Architectural views',
    description: 'Specialist corner and structural glazing creates expansive glazed elevations. Design requires coordinated structural support, glazing specification and installation.',
    applications: 'Luxury villas, commercial buildings and architectural facades.',
    features: ['Expansive glass appearance', 'Architectural flexibility', 'Custom engineering', 'Specialist glazing details'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Contemporary architectural facade with broad glass surfaces',
  },
  {
    number: '10',
    title: 'Acoustic & Thermal Windows',
    subtitle: 'Comfort through system specification',
    description: 'Performance-focused configurations combine suitable aluminium profiles, glazing units, gaskets and hardware to meet project acoustic and thermal requirements.',
    applications: 'Hotels, residential buildings, offices and urban developments.',
    features: ['Insulating glass options', 'Weather-sealing systems', 'Acoustic glazing options', 'Project-specific targets'],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Quiet contemporary interior with extensive glazing',
  },
];

const performanceFeatures = [
  {
    number: '01',
    title: 'Thermal Performance',
    description: 'Thermally broken aluminium profiles and suitable insulated glazing can help reduce heat transfer through the window assembly.',
  },
  {
    number: '02',
    title: 'Air Tightness',
    description: 'Appropriate gaskets, hardware, fabrication and installation details help control unwanted air infiltration.',
  },
  {
    number: '03',
    title: 'Water Resistance',
    description: 'Drainage paths, weather seals and tested system details help manage water penetration under specified conditions.',
  },
  {
    number: '04',
    title: 'Wind Load Resistance',
    description: 'Frame dimensions, reinforcement, glass thickness and fixing arrangements should be designed for project wind loads.',
  },
  {
    number: '05',
    title: 'Acoustic Insulation',
    description: 'Glass composition, air gaps, frame design and sealing all contribute to the acoustic performance of a complete window.',
  },
  {
    number: '06',
    title: 'Safety & Security',
    description: 'Suitable safety glazing, locking hardware and secure fixing details should be selected for the intended application.',
  },
];

const processSteps = [
  ['01', 'Consultation', 'Understand project requirements, architectural intent and opening conditions.'],
  ['02', 'Specification', 'Review profiles, glazing, hardware and required performance criteria.'],
  ['03', 'Fabrication', 'Prepare components according to approved drawings and project specifications.'],
  ['04', 'Installation', 'Coordinate fitting, sealing and finishing with the building requirements.'],
];

const Window = () => {
  const whatsappUrl =
    'https://wa.me/971562700627?text=' +
    encodeURIComponent('Hello AWAN team, I would like to discuss an aluminium window project.');

  return (
    <main className="window-page">

      {/* HERO */}
      <section className="window-hero">
        <div className="window-hero-image" />
        <div className="window-hero-shade" />

        <div className="window-container window-hero-content">

          <div className="window-brand-lockup">
            <span className="window-brand-mark">A<span>W</span></span>
            <span className="window-brand-name">{COMPANY}</span>
          </div>

          <div className="window-hero-copy">
            <span className="window-kicker">
              <i /> ARCHITECTURAL ALUMINIUM SYSTEMS
            </span>

            <h1>
              Frames that<br />
              <em>shape the view.</em>
            </h1>

            <p>
              Thoughtfully specified aluminium window solutions for distinctive
              residential, commercial and architectural spaces.
            </p>

            <div className="window-hero-actions">
              <a href="#window-collection" className="window-btn window-btn-light">
                EXPLORE OUR SYSTEMS <span>↗</span>
              </a>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="window-text-link">
                DISCUSS A PROJECT <span>↗</span>
              </a>
            </div>
          </div>

          <div className="window-hero-caption">
            <span>01 — 10</span>
            <span>DESIGN / ENGINEERING / INSTALLATION</span>
          </div>

        </div>

        <div className="window-hero-vertical">
          AWAN · ALUMINIUM WORKS
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="window-intro window-container">

        <div className="window-intro-side">
          <span className="window-section-index">01 / THE AWAN APPROACH</span>
          <span className="window-outline-word">AWAN</span>
        </div>

        <div className="window-intro-main">
          <span className="window-kicker window-kicker-dark">
            BUILT AROUND YOUR SPACE
          </span>

          <h2>
            Light, proportion<br />
            and <em>precision.</em>
          </h2>

          <p>
            Aluminium windows help define the character of a building. They
            connect interior and exterior spaces while bringing in daylight,
            supporting ventilation and protecting against environmental conditions.
          </p>

          <p>
            AWAN offers a range of window configurations for residential,
            commercial and architectural applications. System selection can be
            tailored to opening dimensions, glazing requirements, building design
            and project performance targets.
          </p>

          <a className="window-inline-link" href="#window-collection">
            DISCOVER THE COLLECTION <span>↗</span>
          </a>
        </div>

        <div className="window-intro-photo">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85"
            alt="Modern villa architecture with expansive windows"
            loading="lazy"
          />
          <span>ARCHITECTURE IN NATURAL LIGHT</span>
        </div>

      </section>

      {/* WINDOW COLLECTION */}
      <section className="window-collection" id="window-collection">
        <div className="window-container">

          <div className="window-section-heading">
            <div>
              <span className="window-kicker window-kicker-dark">
                02 / OUR COLLECTION
              </span>
              <h2>
                Window systems,<br />
                <em>made for living.</em>
              </h2>
            </div>

            <p>
              Explore practical opening styles and architectural glazing
              options, selected around the needs of each project.
            </p>
          </div>

          <div className="window-types-grid">
            {windowTypes.map((item) => (
              <article className="window-type-card" key={item.number}>

                <div className="window-card-image">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                  />
                  <span className="window-card-number">{item.number}</span>
                  <span className="window-card-image-arrow">↗</span>
                </div>

                <div className="window-card-content">
                  <span className="window-card-subtitle">
                    {item.subtitle}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="window-card-features">
                    {item.features.map((feature) => (
                      <span key={feature}>
                        <i>+</i>{feature}
                      </span>
                    ))}
                  </div>

                  <div className="window-application">
                    <strong>SUITABLE APPLICATIONS</strong>
                    <p>{item.applications}</p>
                  </div>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="window-performance">
        <div className="window-container">

          <div className="window-section-heading performance-heading">
            <div>
              <span className="window-kicker">
                03 / SYSTEM PERFORMANCE
              </span>

              <h2>
                Details make<br />
                <em>the difference.</em>
              </h2>
            </div>

            <p>
              A complete window assembly must be considered as a system,
              including profiles, glass, hardware, seals and installation.
            </p>
          </div>

          <div className="window-performance-grid">
            {performanceFeatures.map((feature) => (
              <article className="window-performance-card" key={feature.number}>
                <span>{feature.number}</span>
                <div className="window-performance-line" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* TECHNICAL DETAILS */}
      <section className="window-technical window-container">

        <div className="window-technical-heading">
          <span className="window-kicker window-kicker-dark">
            04 / TECHNICAL CONSIDERATIONS
          </span>

          <h2>
            Good design<br />
            starts <em>beneath the surface.</em>
          </h2>

          <div className="window-technical-photo">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85"
              alt="Architectural detail in a modern residential space"
              loading="lazy"
            />
          </div>
        </div>

        <div className="window-technical-content">
          <p>
            Professional aluminium window specification requires more than
            selecting a frame style. Each project should be assessed according
            to its location, building height, opening size, exposure conditions
            and intended use.
          </p>

          <ul>
            <li>Aluminium profile series, alloy and wall thickness.</li>
            <li>Thermal break requirements and frame configuration.</li>
            <li>Glass thickness, composition and safety requirements.</li>
            <li>Hardware, hinges, rollers, handles and locking mechanisms.</li>
            <li>Air infiltration, water penetration and wind load requirements.</li>
            <li>Drainage, perimeter sealing, anchoring and installation details.</li>
            <li>Surface finish, colour selection and corrosion exposure.</li>
          </ul>

          <div className="window-standards-note">
            <strong>SPECIFICATION & STANDARDS</strong>
            <p>
              Project specifications may reference applicable standards such as
              EN 14351-1 for windows and external pedestrian doorsets, EN 12207
              for air permeability, EN 12208 for watertightness, EN 12210 for
              wind resistance and relevant ASTM test methods. Requirements depend
              on project location, regulations and specification.
            </p>
          </div>
        </div>

      </section>

      {/* PROCESS */}
      <section className="window-process">
        <div className="window-container">

          <div className="window-section-heading">
            <div>
              <span className="window-kicker window-kicker-dark">
                05 / OUR PROCESS
              </span>

              <h2>
                From first sketch<br />
                <em>to final fit.</em>
              </h2>
            </div>

            <p>
              A clear, coordinated approach helps every stage move forward
              with purpose.
            </p>
          </div>

          <div className="window-process-grid">
            {processSteps.map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ENQUIRY */}
      <section className="window-enquiry" id="window-enquiry">
        <div className="window-enquiry-image" />
        <div className="window-enquiry-shade" />

        <div className="window-container window-enquiry-inner">
          <div>
            <span className="window-kicker">
              06 / START YOUR PROJECT
            </span>

            <h2>
              Let’s make room<br />
              for <em>better views.</em>
            </h2>

            <p>
              Tell us about your aluminium window requirements. Our team is
              ready to discuss your project.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="window-btn window-btn-light"
          >
            REQUEST A QUOTATION <span>↗</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="window-footer">
        <div className="window-container window-footer-inner">

          <div className="window-footer-brand">
            <span className="window-brand-mark">A<span>W</span></span>

            <div>
              <strong>{COMPANY}</strong>
              <small>ARCHITECTURAL ALUMINIUM · GENERAL CONTRACTING</small>
            </div>
          </div>

          <span>DESIGNED WITH PURPOSE. BUILT TO LAST.</span>

          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            BACK TO TOP ↑
          </a>

        </div>
      </footer>

    </main>
  );
};

export default Window;
