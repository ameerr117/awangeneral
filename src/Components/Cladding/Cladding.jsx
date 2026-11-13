import './Cladding.css';

const Cladding = () => {
  const claddingTypes = [
    {
      number: '01',
      title: 'Aluminium Composite Panels',
      description:
        'Modern ACP solutions designed to provide durable, clean and visually impressive building façades.'
    },
    {
      number: '02',
      title: 'Architectural Façades',
      description:
        'Customized façade systems developed to complement modern commercial and residential architecture.'
    },
    {
      number: '03',
      title: 'Exterior Cladding',
      description:
        'Weather-resistant exterior solutions that help protect buildings while improving their visual appearance.'
    },
    {
      number: '04',
      title: 'Decorative Panels',
      description:
        'Stylish aluminium panel solutions that add texture, detail and architectural character to building surfaces.'
    }
  ];

  return (
    <main className="cladding-page">

      <section className="cladding-hero">
        <div className="cladding-hero-content">
          <span>ALUMINIUM CLADDING SYSTEMS</span>
          <h1>Modern Façades. Lasting Impressions.</h1>
          <p>
            Professional aluminium cladding solutions designed to enhance,
            protect and transform modern buildings.
          </p>
        </div>
      </section>

      <section className="cladding-intro">
        <span>ABOUT CLADDING</span>
        <h2>Building Exteriors Designed for Performance</h2>
        <p>
          Aluminium cladding provides a modern and durable solution for
          building exteriors. It combines visual flexibility with reliable
          performance and helps create distinctive architectural façades.
        </p>
      </section>

      <section className="cladding-solutions">
        <div className="cladding-heading">
          <span>OUR SOLUTIONS</span>
          <h2>Complete Cladding Services</h2>
        </div>

        <div className="cladding-grid">
          {claddingTypes.map((item) => (
            <article className="cladding-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <div></div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cladding-features">
        <div className="cladding-features-content">
          <span>WHY ALUMINIUM CLADDING?</span>
          <h2>Protection Meets Modern Design</h2>

          <div className="feature-list">
            <div>
              <h3>Durability</h3>
              <p>Designed to provide reliable long-term exterior performance.</p>
            </div>
            <div>
              <h3>Weather Resistance</h3>
              <p>Suitable for demanding environmental and climatic conditions.</p>
            </div>
            <div>
              <h3>Design Flexibility</h3>
              <p>Available in a range of finishes and architectural styles.</p>
            </div>
            <div>
              <h3>Professional Appearance</h3>
              <p>Creates clean, modern and visually impressive building façades.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cladding-process">
        <span>OUR APPROACH</span>
        <h2>From Vision to Installation</h2>

        <div className="cladding-process-grid">
          <div><b>01</b><h3>Assessment</h3><p>Understanding the building and project requirements.</p></div>
          <div><b>02</b><h3>Planning</h3><p>Developing a suitable cladding concept and solution.</p></div>
          <div><b>03</b><h3>Fabrication</h3><p>Preparing quality materials with attention to detail.</p></div>
          <div><b>04</b><h3>Installation</h3><p>Completing the façade with precision and professional care.</p></div>
        </div>
      </section>

      <section className="cladding-closing">
        <span>DESIGN • PROTECTION • PERFORMANCE</span>
        <h2>Professional Aluminium Cladding Solutions</h2>
        <p>
          Creating modern and durable façades for residential, commercial and
          architectural projects.
        </p>
      </section>

    </main>
  );
};

export default Cladding;