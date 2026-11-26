
import './Glass.css';

const glassSystems = [
  {
    number: '01',
    title: 'Architectural Glass',
    category: 'BUILDING GLAZING',
    description:
      'Premium architectural glass solutions designed to bring natural light, openness and sophistication to modern buildings.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85'
  },
  {
    number: '02',
    title: 'Glass Partitions',
    category: 'INTERIOR SYSTEMS',
    description:
      'Elegant glass partition systems that create brighter, open and functional office and residential environments.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85'
  },
  {
    number: '03',
    title: 'Frameless Glass',
    category: 'MINIMAL DESIGN',
    description:
      'Contemporary frameless glazing solutions offering clean architectural lines and uninterrupted views.',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85'
  },
  {
    number: '04',
    title: 'Glass Railings',
    category: 'SAFETY & ELEGANCE',
    description:
      'Modern glass railing installations for staircases, balconies and terraces with a sophisticated finish.',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85'
  },
  {
    number: '05',
    title: 'Shower Glass',
    category: 'BATHROOM SOLUTIONS',
    description:
      'Custom shower enclosures and bathroom glass installations designed for elegant and practical interiors.',
    image:
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1100&q=85'
  },
  {
    number: '06',
    title: 'Custom Glazing',
    category: 'CUSTOM PROJECTS',
    description:
      'Specialized glass and glazing installations developed according to individual architectural requirements.',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85'
  }
];

const advantages = [
  {
    number: '01',
    title: 'Natural Light',
    description:
      'Glass solutions maximize daylight and help create brighter, more welcoming spaces.'
  },
  {
    number: '02',
    title: 'Modern Architecture',
    description:
      'Contemporary glazing designs that complement modern residential and commercial buildings.'
  },
  {
    number: '03',
    title: 'Custom Solutions',
    description:
      'Flexible designs tailored to project dimensions, architectural details and functional needs.'
  },
  {
    number: '04',
    title: 'Quality Installation',
    description:
      'Careful fitting, finishing and attention to detail throughout every installation.'
  }
];

const process = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'Understanding your project requirements, design preferences and application.'
  },
  {
    number: '02',
    title: 'Design & Planning',
    description:
      'Planning the glass system according to the project specifications.'
  },
  {
    number: '03',
    title: 'Fabrication',
    description:
      'Preparing customized glass solutions for the intended application.'
  },
  {
    number: '04',
    title: 'Installation',
    description:
      'Professional installation with attention to finishing and presentation.'
  }
];

const Glass = () => {
  return (
    <main className="glass-page">

      {/* HERO SECTION */}
      <section className="glass-hero">
        <div className="glass-hero-overlay"></div>

        <div className="glass-hero-inner">
          <div className="glass-hero-content">
            <span className="glass-eyebrow">
              <i></i> AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
            </span>

            <h1>
              The Beauty of
              <br />
              <em>Architectural Glass.</em>
            </h1>

            <p>
              Transforming modern spaces with elegant glass and glazing
              solutions designed around light, transparency and architectural
              excellence.
            </p>

            <a href="#glass-collection" className="glass-primary-btn">
              EXPLORE OUR GLASS SOLUTIONS
              <span>↗</span>
            </a>
          </div>

          <div className="glass-hero-bottom">
            <span>ARCHITECTURAL GLASS SYSTEMS</span>
            <span>01 — 06</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="glass-intro">
        <div className="glass-intro-inner">

          <div className="glass-intro-left">
            <span className="glass-section-label">
              <i></i> ABOUT OUR GLASS WORK
            </span>

            <h2>
              Creating Spaces
              <br />
              Through <em>Transparency.</em>
            </h2>
          </div>

          <div className="glass-intro-right">
            <p>
              Glass is more than a building material. It is an architectural
              element that connects spaces, welcomes natural light and creates
              a sense of openness.
            </p>

            <p>
              At AWAN GENERAL CONTRACTING & ALUMINIUM WORKS, we provide
              architectural glass and glazing solutions for residential,
              commercial and interior projects, combining contemporary
              aesthetics with professional workmanship.
            </p>

            <div className="glass-intro-signature">
              <span></span>
              <strong>DESIGNED FOR MODERN LIVING</strong>
            </div>
          </div>

        </div>
      </section>

      {/* GLASS COLLECTION */}
      <section className="glass-collection" id="glass-collection">
        <div className="glass-container">

          <div className="glass-section-heading">
            <div>
              <span className="glass-section-label">
                <i></i> OUR SPECIALITIES
              </span>
              <h2>
                Glass Solutions
                <br />
                <em>For Every Space.</em>
              </h2>
            </div>

            <p>
              Explore our range of architectural glass applications,
              thoughtfully designed for contemporary buildings and interiors.
            </p>
          </div>

          <div className="glass-grid">
            {glassSystems.map((item) => (
              <article className="glass-card" key={item.number}>

                <div className="glass-card-image">
                  <img src={item.image} alt={item.title} />

                  <span className="glass-card-number">
                    {item.number}
                  </span>

                  <span className="glass-card-arrow">↗</span>
                </div>

                <div className="glass-card-content">
                  <span className="glass-card-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="glass-card-bottom">
                    <span>AWAN GLASS SOLUTIONS</span>
                    <span>↗</span>
                  </div>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="glass-feature">
        <div className="glass-feature-image">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90"
            alt="Modern architectural glass design"
          />
        </div>

        <div className="glass-feature-content">
          <span className="glass-section-label glass-light-label">
            <i></i> THE ART OF GLAZING
          </span>

          <h2>
            Where Light
            <br />
            Meets <em>Architecture.</em>
          </h2>

          <p>
            Thoughtfully selected glass applications can completely transform
            the character of a building. From expansive glazing to elegant
            interior partitions, every detail contributes to a refined
            architectural experience.
          </p>

          <div className="glass-feature-note">
            <span>01 /</span>
            <strong>CLARITY IN EVERY DETAIL</strong>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="glass-advantages">
        <div className="glass-container">

          <div className="glass-section-heading">
            <div>
              <span className="glass-section-label">
                <i></i> WHY CHOOSE GLASS
              </span>

              <h2>
                The Difference
                <br />
                Is In The <em>Details.</em>
              </h2>
            </div>

            <p>
              Combining functional performance with contemporary design to
              create spaces that feel brighter, cleaner and more connected.
            </p>
          </div>

          <div className="glass-advantage-grid">
            {advantages.map((item) => (
              <div className="glass-advantage-card" key={item.number}>
                <span>{item.number}</span>
                <div className="glass-advantage-line"></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="glass-process">
        <div className="glass-container">

          <div className="glass-process-heading">
            <span className="glass-section-label glass-light-label">
              <i></i> OUR WORKING PROCESS
            </span>

            <h2>
              From Concept
              <br />
              To <em>Completion.</em>
            </h2>

            <p>
              A structured approach to delivering architectural glass
              solutions with care, precision and attention to detail.
            </p>
          </div>

          <div className="glass-process-grid">
            {process.map((item) => (
              <div className="glass-process-item" key={item.number}>
                <span>{item.number}</span>
                <div className="glass-process-line"></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ENQUIRY BANNER */}
      <section className="glass-cta">
        <div className="glass-cta-inner">

          <div>
            <span className="glass-section-label">
              <i></i> LET'S BUILD SOMETHING BEAUTIFUL
            </span>

            <h2>
              Have a Glass
              <br />
              Project in <em>Mind?</em>
            </h2>

            <p>
              Discuss your architectural glass requirements with AWAN GENERAL
              CONTRACTING & ALUMINIUM WORKS.
            </p>
          </div>

          <a href="/contact" className="glass-cta-btn">
            CONTACT OUR TEAM <span>↗</span>
          </a>

        </div>
      </section>

      {/* BOTTOM STRIP */}
      <section className="glass-bottom-strip">
        <span>AWAN GENERAL CONTRACTING & ALUMINIUM WORKS</span>
        <span>CLARITY • QUALITY • CRAFTSMANSHIP</span>
      </section>

    </main>
  );
};

export default Glass;
