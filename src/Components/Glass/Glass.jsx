import './Glass.css';

const Glass = () => {
  const glassSystems = [
    {
      number: '01',
      title: 'Architectural Glass',
      description:
        'Professional glass solutions designed to support modern building and interior architecture.'
    },
    {
      number: '02',
      title: 'Glass Partitions',
      description:
        'Modern office and interior partition systems that create open, bright and functional spaces.'
    },
    {
      number: '03',
      title: 'Frameless Glass',
      description:
        'Minimal glass systems designed for clean lines and a contemporary architectural appearance.'
    },
    {
      number: '04',
      title: 'Glass Railings',
      description:
        'Elegant glass railing systems suitable for balconies, staircases and modern architectural spaces.'
    },
    {
      number: '05',
      title: 'Shower Glass',
      description:
        'Customized glass solutions designed for modern bathrooms and interior environments.'
    },
    {
      number: '06',
      title: 'Custom Glazing',
      description:
        'Flexible glass and glazing solutions developed according to project specifications and design requirements.'
    }
  ];

  return (
    <main className="glass-page">

      <section className="glass-hero">
        <div className="glass-hero-content">
          <span>ARCHITECTURAL GLASS SOLUTIONS</span>
          <h1>Transparency Meets Modern Design</h1>
          <p>
            Professional glass and glazing systems designed to bring light,
            openness and elegance to every project.
          </p>
        </div>
      </section>

      <section className="glass-intro">
        <div>
          <span>ABOUT OUR GLASS WORK</span>
          <h2>Modern Glass for Modern Spaces</h2>
        </div>

        <div className="glass-intro-text">
          <p>
            Glass plays an important role in modern architecture by connecting
            spaces with natural light, visibility and contemporary design.
          </p>
          <p>
            We provide professional architectural glass solutions for
            residential, commercial and interior projects with attention to
            quality and precise installation.
          </p>
        </div>
      </section>

      <section className="glass-systems">
        <div className="glass-heading">
          <span>OUR SOLUTIONS</span>
          <h2>Complete Glass & Glazing Services</h2>
        </div>

        <div className="glass-grid">
          {glassSystems.map((item) => (
            <article className="glass-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <div className="glass-line"></div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-advantages">
        <div className="glass-advantages-content">
          <span>THE ADVANTAGE OF GLASS</span>
          <h2>Light, Space & Architectural Elegance</h2>

          <div className="glass-advantage-grid">
            <div>
              <h3>Natural Light</h3>
              <p>Helping create brighter and more welcoming interior spaces.</p>
            </div>

            <div>
              <h3>Modern Appearance</h3>
              <p>Clean and elegant solutions for contemporary architecture.</p>
            </div>

            <div>
              <h3>Design Flexibility</h3>
              <p>Suitable for a wide range of architectural applications.</p>
            </div>

            <div>
              <h3>Professional Installation</h3>
              <p>Careful fitting and finishing for a clean final appearance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="glass-closing">
        <span>CLARITY • QUALITY • DESIGN</span>
        <h2>Professional Architectural Glass Solutions</h2>
        <p>
          Creating bright, elegant and functional spaces through professional
          glass and glazing solutions.
        </p>
      </section>

    </main>
  );
};

export default Glass;