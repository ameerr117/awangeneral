import './Tents.css';

const Tents = () => {
  const aluminiumServices = [
    {
      number: '01',
      title: 'Aluminium Doors',
      description:
        'Professional aluminium door solutions for residential and commercial projects, including sliding, hinged, automatic and frameless systems.'
    },
    {
      number: '02',
      title: 'Aluminium Windows',
      description:
        'Durable and modern window systems designed to provide natural light, ventilation, security and long-lasting architectural performance.'
    },
    {
      number: '03',
      title: 'Curtain Wall Systems',
      description:
        'High-quality aluminium and glass façade systems that create modern, elegant and functional building exteriors.'
    },
    {
      number: '04',
      title: 'Aluminium Cladding',
      description:
        'Modern cladding solutions designed to enhance building façades with durable, clean and weather-resistant finishes.'
    },
    {
      number: '05',
      title: 'Glass Partitions',
      description:
        'Professional aluminium and glass partition systems for offices, commercial spaces and modern interior environments.'
    },
    {
      number: '06',
      title: 'Railings & Handrails',
      description:
        'Strong and stylish aluminium, glass and metal railing solutions for balconies, staircases, terraces and other architectural spaces.'
    }
  ];

  const aluminiumBenefits = [
    {
      title: 'Strong & Lightweight',
      text: 'Aluminium provides excellent strength while remaining lightweight, making it ideal for a wide range of architectural applications.'
    },
    {
      title: 'Long-Lasting',
      text: 'Its natural resistance to corrosion helps aluminium maintain reliable performance in demanding environmental conditions.'
    },
    {
      title: 'Modern & Flexible',
      text: 'Aluminium can be fabricated into different shapes and systems to support modern and creative architectural designs.'
    },
    {
      title: 'Sustainable',
      text: 'Aluminium is a recyclable material, making it a responsible choice for modern construction and building projects.'
    }
  ];

  return (
    <main className="tents-page">

      {/* Hero Section */}
      <section className="tents-hero">
        <div className="tents-overlay">
          <div className="tents-hero-content">
            <p className="hero-label">COMPLETE ALUMINIUM SOLUTIONS</p>

            <h1>Built with Strength. Designed for Modern Architecture.</h1>

            <p className="hero-description">
              We provide professional aluminium and glass solutions for
              residential, commercial and architectural projects, combining
              quality fabrication, modern design and reliable performance.
            </p>
          </div>
        </div>
      </section>

      {/* About Aluminium */}
      <section className="tents-intro">
        <div className="section-heading">
          <span>ABOUT ALUMINIUM</span>
          <h2>A Material Designed for Modern Construction</h2>
        </div>

        <div className="intro-content">
          <p>
            Aluminium is one of the most versatile materials used in modern
            construction and architecture. Its combination of strength,
            lightweight performance and clean appearance makes it suitable for
            a wide variety of building applications.
          </p>

          <p>
            From doors and windows to curtain walls, cladding and architectural
            glazing, aluminium offers flexible solutions that meet both
            functional and aesthetic requirements.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="aluminium-services">
        <div className="section-heading center-heading">
          <span>OUR EXPERTISE</span>
          <h2>Complete Aluminium & Glass Solutions</h2>
          <p>
            Professional fabrication and installation services for modern
            residential, commercial and architectural projects.
          </p>
        </div>

        <div className="services-grid">
          {aluminiumServices.map((service) => (
            <article className="aluminium-card" key={service.number}>
              <span className="service-number">{service.number}</span>

              <h3>{service.title}</h3>

              <div className="card-line"></div>

              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why Aluminium */}
      <section className="why-aluminium">
        <div className="benefits-container">

          <div className="benefits-intro">
            <span>WHY CHOOSE ALUMINIUM?</span>

            <h2>Performance That Lasts</h2>

            <p>
              Aluminium is trusted throughout the construction industry for its
              durability, flexibility and ability to support modern
              architectural designs.
            </p>
          </div>

          <div className="benefits-grid">
            {aluminiumBenefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <span className="benefit-number">
                  0{index + 1}
                </span>

                <h3>{benefit.title}</h3>

                <p>{benefit.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Industries */}
      <section className="aluminium-applications">
        <div className="section-heading center-heading">
          <span>OUR APPLICATIONS</span>
          <h2>Solutions for Every Type of Project</h2>
        </div>

        <div className="application-grid">

          <div className="application-card">
            <span>01</span>
            <h3>Residential</h3>
            <p>
              Modern aluminium solutions for villas, apartments, homes and
              residential developments.
            </p>
          </div>

          <div className="application-card">
            <span>02</span>
            <h3>Commercial</h3>
            <p>
              Professional aluminium and glass systems for offices, retail
              spaces and commercial buildings.
            </p>
          </div>

          <div className="application-card">
            <span>03</span>
            <h3>Architectural Projects</h3>
            <p>
              Customized façade, glazing and aluminium solutions for modern
              construction projects.
            </p>
          </div>

        </div>
      </section>

      {/* Work Process */}
      <section className="work-process">
        <div className="section-heading center-heading">
          <span>OUR WORKING PROCESS</span>
          <h2>From Concept to Completion</h2>
        </div>

        <div className="process-grid">

          <div className="process-item">
            <span>01</span>
            <h3>Consultation</h3>
            <p>
              Understanding the project requirements and architectural vision.
            </p>
          </div>

          <div className="process-item">
            <span>02</span>
            <h3>Design & Planning</h3>
            <p>
              Developing practical and professional aluminium solutions.
            </p>
          </div>

          <div className="process-item">
            <span>03</span>
            <h3>Fabrication</h3>
            <p>
              Producing aluminium systems with attention to quality and detail.
            </p>
          </div>

          <div className="process-item">
            <span>04</span>
            <h3>Installation</h3>
            <p>
              Completing every project with precision and a professional finish.
            </p>
          </div>

        </div>
      </section>

      {/* Final Section */}
      <section className="tents-closing">
        <div>
          <span>QUALITY • PRECISION • INNOVATION</span>

          <h2>Your Partner in Aluminium Excellence</h2>

          <p>
            From simple aluminium installations to complete architectural
            systems, we deliver reliable solutions designed to meet the
            requirements of modern construction.
          </p>
        </div>
      </section>

    </main>
  );
};

export default Tents;