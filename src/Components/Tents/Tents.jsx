
import './Tents.css';

const COMPANY = 'AWAN GENERAL CONTRACTING & ALUMINIUM WORKS';

const aluminiumServices = [
  {
    number: '01',
    title: 'Aluminium Doors',
    category: 'DOOR SYSTEMS',
    description:
      'Premium aluminium door solutions for residential and commercial projects, including sliding, hinged, automatic and frameless systems.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85'
  },
  {
    number: '02',
    title: 'Aluminium Windows',
    category: 'WINDOW SYSTEMS',
    description:
      'Modern window systems designed to provide natural light, ventilation, security and long-lasting architectural performance.',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85'
  },
  {
    number: '03',
    title: 'Curtain Wall Systems',
    category: 'GLASS FACADES',
    description:
      'High-quality aluminium and glass façade systems that create elegant, modern and functional building exteriors.',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=85'
  },
  {
    number: '04',
    title: 'Aluminium Cladding',
    category: 'EXTERIOR FINISHES',
    description:
      'Contemporary cladding solutions designed to enhance building façades with durable and weather-resistant finishes.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85'
  },
  {
    number: '05',
    title: 'Glass Partitions',
    category: 'INTERIOR SYSTEMS',
    description:
      'Professional aluminium and glass partition systems for offices, commercial spaces and modern interiors.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85'
  },
  {
    number: '06',
    title: 'Railings & Handrails',
    category: 'ARCHITECTURAL DETAILS',
    description:
      'Strong and stylish aluminium, glass and metal railing solutions for balconies, staircases and terraces.',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85'
  }
];

const aluminiumBenefits = [
  {
    number: '01',
    title: 'Strong & Lightweight',
    text: 'Excellent structural strength with lightweight performance for modern architectural applications.'
  },
  {
    number: '02',
    title: 'Long-Lasting Quality',
    text: 'Corrosion resistance and dependable performance help maintain quality over time.'
  },
  {
    number: '03',
    title: 'Modern Design',
    text: 'Flexible fabrication options support creative shapes, finishes and architectural styles.'
  },
  {
    number: '04',
    title: 'Sustainable Material',
    text: 'Aluminium is recyclable and supports more responsible construction practices.'
  }
];

const applications = [
  {
    number: '01',
    title: 'Residential Projects',
    text: 'Elegant aluminium solutions for villas, apartments, private homes and residential developments.',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85'
  },
  {
    number: '02',
    title: 'Commercial Buildings',
    text: 'Professional aluminium and glass systems for offices, retail spaces and business environments.',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85'
  },
  {
    number: '03',
    title: 'Architectural Projects',
    text: 'Customized façade, glazing and aluminium solutions for contemporary architectural developments.',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=85'
  }
];

const process = [
  {
    number: '01',
    title: 'Consultation',
    text: 'Understanding your project requirements, measurements and architectural vision.'
  },
  {
    number: '02',
    title: 'Design & Planning',
    text: 'Preparing practical aluminium solutions with attention to design and functionality.'
  },
  {
    number: '03',
    title: 'Fabrication',
    text: 'Producing aluminium systems with precision, material quality and attention to detail.'
  },
  {
    number: '04',
    title: 'Installation',
    text: 'Professional installation and finishing to complete your project.'
  }
];

const Tents = () => {
  return (
    <main className="tents-page">

      {/* HERO SECTION */}
      <section className="tents-hero">
        <div className="tents-hero-image" />

        <div className="tents-hero-overlay">
          <div className="tents-container tents-hero-inner">

            <div className="tents-hero-content">
              <span className="tents-eyebrow">
                {COMPANY}
              </span>

              <div className="tents-small-line" />

              <p className="tents-hero-label">
                PREMIUM ALUMINIUM & GLASS SOLUTIONS
              </p>

              <h1>
                Architecture Defined
                <span> By Precision.</span>
              </h1>

              <p className="tents-hero-description">
                Transforming architectural spaces with premium aluminium
                fabrication, modern glass systems and professional
                installation solutions.
              </p>

              <div className="tents-hero-actions">
                <a href="#aluminium-services" className="tents-btn-primary">
                  EXPLORE OUR SERVICES
                  <span>↗</span>
                </a>

                <a href="#tents-contact" className="tents-btn-outline">
                  DISCUSS YOUR PROJECT
                </a>
              </div>
            </div>

            <div className="tents-hero-side">
              <span>01 / 06</span>
              <div />
              <p>DESIGNED FOR MODERN LIVING</p>
            </div>

          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="tents-intro-section">
        <div className="tents-container">

          <div className="tents-intro-grid">

            <div className="tents-intro-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85"
                alt="Modern architectural aluminium and glass building"
              />

              <div className="tents-image-caption">
                <span>AWAN</span>
                <p>CRAFTING ARCHITECTURAL EXCELLENCE</p>
              </div>
            </div>

            <div className="tents-intro-content">
              <span className="tents-section-label">
                ABOUT OUR EXPERTISE
              </span>

              <h2>
                Aluminium Solutions
                <span> For Modern Architecture</span>
              </h2>

              <div className="tents-heading-line" />

              <p>
                Aluminium has become one of the most versatile materials
                in modern construction. Its combination of strength,
                lightweight performance and refined appearance makes it
                ideal for contemporary architectural applications.
              </p>

              <p>
                At AWAN GENERAL CONTRACTING & ALUMINIUM WORKS, we provide
                aluminium doors, windows, curtain walls, cladding,
                glass partitions and architectural systems designed
                around the requirements of every project.
              </p>

              <div className="tents-intro-details">
                <div>
                  <strong>01.</strong>
                  <span>Quality Materials</span>
                </div>

                <div>
                  <strong>02.</strong>
                  <span>Precision Fabrication</span>
                </div>

                <div>
                  <strong>03.</strong>
                  <span>Professional Installation</span>
                </div>
              </div>

              <a href="#aluminium-services" className="tents-text-link">
                DISCOVER OUR EXPERTISE <span>↗</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        className="tents-services-section"
        id="aluminium-services"
      >
        <div className="tents-container">

          <div className="tents-section-header">
            <div>
              <span className="tents-section-label">
                WHAT WE DO
              </span>

              <h2>
                Our Aluminium
                <span> Solutions</span>
              </h2>
            </div>

            <p>
              Complete aluminium and glass solutions combining
              architectural beauty, practical performance and
              professional workmanship.
            </p>
          </div>

          <div className="tents-services-grid">
            {aluminiumServices.map((service) => (
              <article className="tents-service-card" key={service.number}>

                <div className="tents-service-image">
                  <img
                    src={service.image}
                    alt={`${service.title} architectural project`}
                    loading="lazy"
                  />

                  <span className="tents-service-number">
                    {service.number}
                  </span>

                  <span className="tents-service-arrow">↗</span>
                </div>

                <div className="tents-service-info">
                  <span className="tents-service-category">
                    {service.category}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="tents-card-bottom">
                    <span>AWAN ALUMINIUM WORKS</span>
                    <span>0{service.number.replace('0', '')}</span>
                  </div>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="tents-feature-section">

        <div className="tents-feature-image">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
            alt="Contemporary aluminium and glass architectural design"
            loading="lazy"
          />
        </div>

        <div className="tents-feature-content">
          <span className="tents-section-label">
            THE AWAN STANDARD
          </span>

          <h2>
            Performance
            <span> Meets Design.</span>
          </h2>

          <p>
            We believe that every architectural detail matters.
            Our aluminium solutions are designed to bring together
            structural reliability, modern aesthetics and
            long-term functionality.
          </p>

          <a href="#tents-contact" className="tents-feature-link">
            START YOUR PROJECT <span>↗</span>
          </a>
        </div>

      </section>

      {/* BENEFITS SECTION */}
      <section className="tents-benefits-section">
        <div className="tents-container">

          <div className="tents-benefits-heading">
            <span className="tents-section-label">
              WHY ALUMINIUM?
            </span>

            <h2>
              The Material Behind
              <span> Modern Architecture</span>
            </h2>

            <p>
              A reliable material choice for architectural projects
              that demand strength, versatility and refined design.
            </p>
          </div>

          <div className="tents-benefits-grid">
            {aluminiumBenefits.map((benefit) => (
              <article className="tents-benefit-card" key={benefit.number}>
                <span className="tents-benefit-number">
                  {benefit.number}
                </span>

                <div className="tents-benefit-icon">
                  {benefit.number === '01' && '◇'}
                  {benefit.number === '02' && '✧'}
                  {benefit.number === '03' && '⌘'}
                  {benefit.number === '04' && '↗'}
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.text}</p>

                <div className="tents-benefit-line" />
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* APPLICATIONS SECTION */}
      <section className="tents-applications-section">
        <div className="tents-container">

          <div className="tents-section-header">
            <div>
              <span className="tents-section-label">
                WHERE WE WORK
              </span>

              <h2>
                Solutions For
                <span> Every Project</span>
              </h2>
            </div>

            <p>
              From private residences to large commercial developments,
              our aluminium solutions adapt to different architectural
              environments.
            </p>
          </div>

          <div className="tents-applications-grid">
            {applications.map((item) => (
              <article
                className="tents-application-card"
                key={item.number}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <div className="tents-application-overlay">
                  <span>{item.number} / APPLICATION</span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <div className="tents-application-line" />
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="tents-process-section">
        <div className="tents-container">

          <div className="tents-process-heading">
            <span className="tents-section-label">
              HOW WE WORK
            </span>

            <h2>
              From Concept
              <span> To Completion.</span>
            </h2>

            <p>
              A structured approach that ensures every project
              receives professional attention at every stage.
            </p>
          </div>

          <div className="tents-process-grid">
            {process.map((item) => (
              <article className="tents-process-card" key={item.number}>
                <span className="tents-process-number">
                  {item.number}
                </span>

                <div className="tents-process-dot" />

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CONTACT SECTION */}
      <section className="tents-contact-section" id="tents-contact">
        <div className="tents-contact-background" />

        <div className="tents-contact-content">
          <span className="tents-section-label">
            QUALITY • PRECISION • INNOVATION
          </span>

          <h2>
            Lets Build Something
            <span> Exceptional.</span>
          </h2>

          <p>
            Have an upcoming architectural or aluminium project?
            Connect with AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
            to discuss your requirements.
          </p>

          <div className="tents-contact-actions">
            <a
              href="mailto:info@awanworks.com"
              className="tents-btn-primary"
            >
              CONTACT OUR TEAM <span>↗</span>
            </a>

            <a href="#aluminium-services" className="tents-contact-secondary">
              EXPLORE SERVICES
            </a>
          </div>
        </div>

        <div className="tents-contact-footer">
          <span>AWAN GENERAL CONTRACTING & ALUMINIUM WORKS</span>
          <span>CRAFTING QUALITY. BUILDING TRUST.</span>
        </div>
      </section>

    </main>
  );
};

export default Tents;
