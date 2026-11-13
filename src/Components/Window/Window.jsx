
import './Window.css';

const windowTypes = [
  {
    number: '01',
    title: 'Aluminium Sliding Windows',
    subtitle: 'Smooth Operation & Space Efficiency',
    description:
      'Sliding windows operate horizontally along precision-engineered tracks. Their space-saving design makes them suitable for modern residential and commercial buildings.',
    applications: 'Apartments, villas, offices and balconies.',
    features: ['Space-saving operation', 'Modern appearance', 'Large glass openings', 'Easy operation']
  },
  {
    number: '02',
    title: 'Aluminium Casement Windows',
    subtitle: 'Classic Design & Natural Ventilation',
    description:
      'Casement windows are hinged at the side and open outward or inward, depending on the system design. They provide flexible ventilation and can achieve effective weather sealing when correctly specified.',
    applications: 'Residential buildings, villas and commercial spaces.',
    features: ['Side-hinged operation', 'Wide opening area', 'Effective sealing options', 'Contemporary profiles']
  },
  {
    number: '03',
    title: 'Top Hung Windows',
    subtitle: 'Controlled Ventilation & Weather Protection',
    description:
      'Top hung windows are hinged along the upper edge and open outward from the bottom. They can provide ventilation while helping limit direct rain entry, subject to design and installation.',
    applications: 'Bathrooms, kitchens, offices and high-level openings.',
    features: ['Top-hinged operation', 'Controlled ventilation', 'Compact design', 'Suitable for smaller openings']
  },
  {
    number: '04',
    title: 'Bottom Hung Windows',
    subtitle: 'Practical Interior Ventilation',
    description:
      'Bottom hung windows are hinged at the lower edge and open inward from the top. Their configuration is useful where controlled ventilation and specific opening arrangements are required.',
    applications: 'Specialist residential and commercial applications.',
    features: ['Bottom-hinged configuration', 'Controlled opening', 'Practical operation', 'Customisable design']
  },
  {
    number: '05',
    title: 'Tilt & Turn Windows',
    subtitle: 'Two Opening Functions in One System',
    description:
      'Tilt and turn windows combine inward tilting for ventilation with a full inward opening function. They offer flexibility for modern building designs.',
    applications: 'Premium apartments, villas, hotels and offices.',
    features: ['Dual opening function', 'Flexible ventilation', 'Multi-point hardware options', 'Modern architectural design']
  },
  {
    number: '06',
    title: 'Fixed Aluminium Windows',
    subtitle: 'Maximum Daylight & Clear Views',
    description:
      'Fixed windows are non-opening glazed units designed to bring natural light into a building. They can be combined with operable window sections for larger architectural compositions.',
    applications: 'Curtain wall facades, staircases, offices and living spaces.',
    features: ['Non-opening design', 'Large glazing areas', 'Slim frame possibilities', 'Excellent daylight access']
  },
  {
    number: '07',
    title: 'Louvre Windows',
    subtitle: 'Adjustable Airflow & Modern Functionality',
    description:
      'Louvre windows use adjustable glass or other specified blades to regulate airflow. Their design allows ventilation to be controlled according to the system configuration.',
    applications: 'Service areas, plant rooms, kitchens and selected commercial spaces.',
    features: ['Adjustable blades', 'Ventilation control', 'Multiple blade configurations', 'Architectural flexibility']
  },
  {
    number: '08',
    title: 'Bi-Fold Aluminium Windows',
    subtitle: 'Wide Openings & Seamless Spaces',
    description:
      'Bi-fold windows consist of multiple panels connected by hinges that fold and stack to one or both sides, creating a wider opening.',
    applications: 'Restaurants, kitchens, terraces and contemporary villas.',
    features: ['Folding panel operation', 'Wide opening configuration', 'Indoor-outdoor connection', 'Custom panel arrangements']
  },
  {
    number: '09',
    title: 'Corner & Structural Glazing Windows',
    subtitle: 'Minimal Frames & Architectural Views',
    description:
      'Specialist corner and structural glazing arrangements create expansive glazed elevations. Their design requires coordinated structural support, glazing specification and professional installation.',
    applications: 'Luxury villas, commercial buildings and architectural facades.',
    features: ['Expansive glass appearance', 'Architectural flexibility', 'Custom engineering', 'Specialist glazing details']
  },
  {
    number: '10',
    title: 'Acoustic & Thermal Performance Windows',
    subtitle: 'Comfort Through System Specification',
    description:
      'These are performance-focused window configurations selected using suitable aluminium profiles, glazing units, gaskets and hardware to meet project acoustic and thermal requirements.',
    applications: 'Hotels, residential buildings, offices and urban developments.',
    features: ['Insulating glass options', 'Weather-sealing systems', 'Acoustic glazing options', 'Project-specific performance targets']
  }
];

const performanceFeatures = [
  {
    number: '01',
    title: 'Thermal Performance',
    description:
      'Thermally broken aluminium profiles and suitable insulated glazing can help reduce heat transfer through the window assembly.'
  },
  {
    number: '02',
    title: 'Air Tightness',
    description:
      'Appropriate gaskets, hardware, fabrication and installation details help control unwanted air infiltration.'
  },
  {
    number: '03',
    title: 'Water Resistance',
    description:
      'Drainage paths, weather seals and tested system details help manage water penetration under specified conditions.'
  },
  {
    number: '04',
    title: 'Wind Load Resistance',
    description:
      'Frame dimensions, reinforcement, glass thickness and fixing arrangements should be designed for the project wind loads.'
  },
  {
    number: '05',
    title: 'Acoustic Insulation',
    description:
      'Glass composition, air gaps, frame design and sealing contribute to the acoustic performance of a complete window.'
  },
  {
    number: '06',
    title: 'Safety & Security',
    description:
      'Suitable safety glazing, locking hardware and secure fixing details should be selected according to the intended application.'
  }
];

const Window = () => {
  return (
    <main className="window-page">

      {/* HERO SECTION */}
      <section className="window-hero">
        <div className="window-hero-overlay"></div>

        <div className="window-container window-hero-content">
          <span className="window-eyebrow">
            AWAN GENERAL ALUMINIUM & CONSTRUCTION WORK LLC
          </span>

          <h1>
            ALUMINIUM
            <span> WINDOW SYSTEMS</span>
          </h1>

          <p>
            Engineered window solutions combining architectural design,
            practical functionality and project-specific performance.
          </p>

          <a href="#window-collection" className="window-main-btn">
            EXPLORE WINDOW SYSTEMS
            <span>↗</span>
          </a>
        </div>

        <div className="window-hero-bottom">
          <span>01 / ARCHITECTURAL SYSTEMS</span>
          <span>DESIGN · PERFORMANCE · PRECISION</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="window-intro window-container">
        <div className="window-intro-label">
          <span>01</span>
          <p>INTRODUCTION</p>
        </div>

        <div className="window-intro-content">
          <h2>
            Designed Around
            <span> Light, Space & Performance.</span>
          </h2>

          <p>
            Aluminium windows play an important role in modern architecture.
            They connect interior and exterior spaces while providing natural
            light, ventilation and protection from environmental conditions.
          </p>

          <p>
            AWAN presents a range of aluminium window configurations for
            residential, commercial and architectural applications. System
            selection can be adapted to opening dimensions, building design,
            glazing requirements and project performance targets.
          </p>
        </div>
      </section>

      {/* WINDOW COLLECTION */}
      <section className="window-collection" id="window-collection">
        <div className="window-container">

          <div className="window-section-heading">
            <div>
              <span className="window-section-label">02 / OUR COLLECTION</span>
              <h2>Explore Window Types</h2>
            </div>

            <p>
              Different opening configurations for different architectural
              requirements.
            </p>
          </div>

          <div className="window-types-grid">
            {windowTypes.map((item) => (
              <article className="window-type-card" key={item.number}>

                <div className="window-card-top">
                  <span>{item.number}</span>
                  <span className="window-card-arrow">↗</span>
                </div>

                <div className="window-card-visual">
                  <div className="window-frame-illustration">
                    <div className="window-frame-inner">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>

                <div className="window-card-content">
                  <span className="window-card-subtitle">
                    {item.subtitle}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="window-card-features">
                    {item.features.map((feature, index) => (
                      <span key={index}>
                        <i>✓</i> {feature}
                      </span>
                    ))}
                  </div>

                  <div className="window-application">
                    <strong>APPLICATIONS</strong>
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
              <span className="window-section-label">03 / SYSTEM PERFORMANCE</span>
              <h2>Performance That Matters.</h2>
            </div>

            <p>
              A complete window assembly must be considered as a system,
              including profiles, glass, hardware, seals and installation.
            </p>
          </div>

          <div className="window-performance-grid">
            {performanceFeatures.map((feature) => (
              <div className="window-performance-card" key={feature.number}>
                <span>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TECHNICAL CONSIDERATIONS */}
      <section className="window-technical window-container">

        <div className="window-technical-heading">
          <span className="window-section-label">04 / TECHNICAL CONSIDERATIONS</span>
          <h2>
            Every Detail
            <span> Has a Purpose.</span>
          </h2>
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
            <strong>INTERNATIONAL DESIGN APPROACH</strong>
            <p>
              Project specifications may reference applicable standards such
              as EN 14351-1 for windows and external pedestrian doorsets,
              EN 12207 for air permeability, EN 12208 for watertightness,
              EN 12210 for wind resistance and relevant ASTM test methods.
              The applicable requirements depend on project location,
              regulations and specification.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="window-process">
        <div className="window-container">
          <span className="window-section-label">05 / PROJECT APPROACH</span>
          <h2>From Concept to Installation.</h2>

          <div className="window-process-grid">
            <div>
              <span>01</span>
              <h3>Consultation</h3>
              <p>Understand project requirements, architectural intent and opening conditions.</p>
            </div>

            <div>
              <span>02</span>
              <h3>Specification</h3>
              <p>Review profiles, glazing, hardware and required performance criteria.</p>
            </div>

            <div>
              <span>03</span>
              <h3>Fabrication</h3>
              <p>Prepare components according to approved drawings and project specifications.</p>
            </div>

            <div>
              <span>04</span>
              <h3>Installation</h3>
              <p>Coordinate fitting, sealing and finishing with the building requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section className="window-enquiry" id="window-enquiry">
        <div className="window-container window-enquiry-inner">

          <div>
            <span className="window-section-label">06 / START YOUR PROJECT</span>
            <h2>
              Lets Create
              <span> Better Spaces.</span>
            </h2>

            <p>
              Discuss your aluminium window requirements with our team.
              Share your project details to begin the conversation.
            </p>
          </div>

          <a
            href="mailto:fahadyaseen020@gmail.com?subject=Aluminium%20Window%20Project%20Enquiry"
            className="window-main-btn"
          >
            REQUEST A QUOTATION
            <span>↗</span>
          </a>

        </div>
      </section>

    </main>
  );
};

export default Window;
