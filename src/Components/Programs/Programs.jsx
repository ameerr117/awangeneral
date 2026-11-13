import { useEffect, useState } from 'react';
import blog1 from "../../assets/alu09.jpg";
import blog2 from "../../assets/alu09.jpg";
import './Programs.css';

const Programs = () => {
  const [current, setCurrent] = useState(0);

  const products = [
    {
      number: '01',
      category: 'ALUMINIUM SYSTEMS',
      title: 'Windows & Doors',
      image: blog1,
      description: 'Precision-fabricated aluminium window and door systems for modern architectural projects.'
    },
    {
      number: '02',
      category: 'BUILDING ENVELOPE',
      title: 'Facades & Glazing',
      image: blog2,
      description: 'Integrated aluminium and glass solutions designed for contemporary building exteriors.'
    },
    {
      number: '03',
      category: 'FACADE ENGINEERING',
      title: 'Curtain Wall Systems',
      image: blog1,
      description: 'Professional curtain wall solutions combining performance, durability and architectural design.'
    },
    {
      number: '04',
      category: 'INTERIOR GLAZING',
      title: 'Frameless Glass Systems',
      image: blog2,
      description: 'Clean and contemporary glass systems for offices, commercial spaces and modern interiors.'
    },
    {
      number: '05',
      category: 'SAFETY & DESIGN',
      title: 'Glass Railings',
      image: blog1,
      description: 'Architectural railing systems designed to combine safety with a refined visual appearance.'
    },
    {
      number: '06',
      category: 'EXTERIOR FINISHES',
      title: 'Aluminium Cladding',
      image: blog2,
      description: 'Durable aluminium cladding solutions for distinctive and modern building exteriors.'
    },
    {
      number: '07',
      category: 'SPACE SOLUTIONS',
      title: 'Glass Partitions',
      image: blog1,
      description: 'Functional and elegant partition systems that create bright and flexible interior spaces.'
    },
    {
      number: '08',
      category: 'ARCHITECTURAL FEATURES',
      title: 'Aluminium Louvers',
      image: blog2,
      description: 'Modern shading and ventilation systems engineered for architectural applications.'
    },
    {
      number: '09',
      category: 'ENTRANCE SYSTEMS',
      title: 'Automatic Doors',
      image: blog1,
      description: 'Reliable automated entrance solutions for commercial and high-traffic environments.'
    },
    {
      number: '10',
      category: 'CUSTOM FABRICATION',
      title: 'Bespoke Aluminium Works',
      image: blog2,
      description: 'Custom-designed aluminium fabrication developed around individual project requirements.'
    },
    {
      number: '11',
      category: 'METAL SOLUTIONS',
      title: 'Stainless Steel Works',
      image: blog1,
      description: 'Professionally fabricated stainless steel and decorative metal solutions for construction projects.'
    },
    {
      number: '12',
      category: 'PROJECT DELIVERY',
      title: 'Installation & Execution',
      image: blog2,
      description: 'Coordinated fabrication and installation services focused on quality workmanship and project delivery.'
    }
  ];

  const visibleCards = 3;
  const maxSlide = Math.ceil(products.length / visibleCards) - 1;

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(slider);
  }, [maxSlide]);

  const nextSlide = () => {
    setCurrent((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const visibleProducts = products.slice(
    current * visibleCards,
    current * visibleCards + visibleCards
  );

  return (
    <section className="Blogs-container">

      <div className="showcase-top">

        <div className="showcase-intro">
          <span className="section-label">
            AWAN GENERAL ALUMINIUM & CONSTRUCTION
          </span>

          <h1>
            Delivered Solutions.<br />
            <span>Built for Modern Architecture.</span>
          </h1>

          <p>
            A selection of aluminium, glass and architectural solutions
            delivered with professional workmanship, precision and attention
            to project requirements.
          </p>
        </div>

        <div className="showcase-controls">
          <button onClick={previousSlide} aria-label="Previous products">
            <span>←</span>
          </button>
          <button onClick={nextSlide} aria-label="Next products">
            <span>→</span>
          </button>
        </div>

      </div>

      <div className="showcase-viewport">
        <div className="products-row">
          {visibleProducts.map((product) => (
            <article className="post" key={product.number}>

              <div className="product-index">{product.number}</div>

              <div className="post-info">
                <img src={product.image} alt={product.title} />

                <div className="image-overlay">
                  <span>{product.category}</span>
                </div>
              </div>

              <div className="Blogs-text">
                <div className="card-line"></div>

                <h3>{product.title}</h3>

                <p>{product.description}</p>

                <button className="more">
                  EXPLORE SOLUTION
                  <span>→</span>
                </button>
              </div>

            </article>
          ))}
        </div>
      </div>

      <div className="showcase-bottom">
        <div className="showcase-brand">
          <span>AWAN</span>
          <small>GENERAL ALUMINIUM & CONSTRUCTION</small>
        </div>

        <div className="showcase-progress">
          <span>
            {String(current + 1).padStart(2, '0')}
          </span>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${((current + 1) / (maxSlide + 1)) * 100}%`
              }}
            ></div>
          </div>

          <span>
            {String(maxSlide + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

    </section>
  );
};

export default Programs;