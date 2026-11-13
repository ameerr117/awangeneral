import './Door.css';

const Door = () => {
  const doorSystems = [
    {
      number: '01',
      title: 'Sliding Doors',
      description:
        'Space-efficient aluminium sliding door systems designed for smooth operation, natural light and modern residential or commercial spaces.'
    },
    {
      number: '02',
      title: 'Hinged Doors',
      description:
        'Strong and reliable aluminium hinged doors suitable for entrances, offices and a wide range of architectural applications.'
    },
    {
      number: '03',
      title: 'Automatic Doors',
      description:
        'Modern automatic door systems designed to provide convenient access and professional functionality in commercial environments.'
    },
    {
      number: '04',
      title: 'Frameless Glass Doors',
      description:
        'Minimal and elegant glass door systems that create an open and contemporary appearance for offices and interior spaces.'
    },
    {
      number: '05',
      title: 'Bi-Fold Doors',
      description:
        'Flexible folding door systems that help connect interior and exterior spaces while maximizing opening areas.'
    },
    {
      number: '06',
      title: 'Custom Door Solutions',
      description:
        'Customized aluminium door systems developed according to project dimensions, design requirements and functional needs.'
    }
  ];

  const benefits = [
    {
      title: 'Durable Performance',
      text: 'Aluminium door systems provide reliable strength and long-lasting performance.'
    },
    {
      title: 'Modern Design',
      text: 'Clean profiles and professional finishes complement contemporary architecture.'
    },
    {
      title: 'Flexible Solutions',
      text: 'A variety of opening styles and configurations can meet different project requirements.'
    },
    {
      title: 'Professional Finish',
      text: 'Careful fabrication and installation help achieve a clean and precise final result.'
    }
  ];

  return (
    <main className="door-page">

      <section className="door-hero">
        <div className="door-hero-content">
          <span>ALUMINIUM DOOR SYSTEMS</span>
          <h1>Secure, Stylish & Built to Perform</h1>
          <p>
            Professional aluminium door solutions designed for modern
            residential, commercial and architectural projects.
          </p>
        </div>
      </section>

      <section className="door-intro">
        <div className="door-heading">
          <span>ABOUT OUR DOORS</span>
          <h2>Modern Access Solutions for Every Space</h2>
        </div>

        <div className="door-intro-text">
          <p>
            Aluminium doors combine durability, functionality and modern
            aesthetics. Their strength and flexible design options make them
            suitable for a wide variety of residential and commercial projects.
          </p>
          <p>
            We provide professional door systems designed to meet project
            requirements while maintaining quality, performance and a clean
            architectural appearance.
          </p>
        </div>
      </section>

      <section className="door-systems">
        <div className="door-heading door-center">
          <span>OUR DOOR SOLUTIONS</span>
          <h2>Explore Our Door Systems</h2>
        </div>

        <div className="door-grid">
          {doorSystems.map((door) => (
            <article className="door-card" key={door.number}>
              <span className="door-number">{door.number}</span>
              <h3>{door.title}</h3>
              <div className="door-line"></div>
              <p>{door.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="door-benefits">
        <div className="door-benefits-container">
          <div className="door-benefits-intro">
            <span>WHY CHOOSE OUR DOORS?</span>
            <h2>Quality in Every Detail</h2>
            <p>
              Our aluminium door solutions are developed to combine reliable
              functionality with modern architectural design.
            </p>
          </div>

          <div className="door-benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="door-benefit-card" key={index}>
                <span>0{index + 1}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="door-process">
        <div className="door-heading door-center">
          <span>OUR PROCESS</span>
          <h2>From Design to Installation</h2>
        </div>

        <div className="door-process-grid">
          <div>
            <span>01</span>
            <h3>Consultation</h3>
            <p>Understanding your project requirements and access needs.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Planning</h3>
            <p>Developing a suitable door system for your project.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Fabrication</h3>
            <p>Producing quality aluminium components with precision.</p>
          </div>
          <div>
            <span>04</span>
            <h3>Installation</h3>
            <p>Completing the project with a professional final finish.</p>
          </div>
        </div>
      </section>

      <section className="door-closing">
        <span>QUALITY • SECURITY • PERFORMANCE</span>
        <h2>Professional Aluminium Door Solutions</h2>
        <p>
          Delivering durable, functional and modern door systems for every type
          of architectural project.
        </p>
      </section>

    </main>
  );
};

export default Door;