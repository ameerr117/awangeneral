
import { useEffect, useState } from 'react';

import blog1 from "../../assets/alu006.jpg";
import blog2 from "../../assets/alu007.jpg";
import blog3 from "../../assets/alu008.jpg";
import blog4 from "../../assets/alu055.jpg";
import blog5 from "../../assets/alu09.jpg";
import blog6 from "../../assets/alu43.jpg";
import blog7 from "../../assets/alu43.jpg";
import blog8 from "../../assets/alu007.jpg";

import './Programs.css';

const Programs = () => {
  const [current, setCurrent] = useState(0);

  const products = [
    {
      number: '01',
      category: 'ALUMINIUM SYSTEMS',
      title: 'Windows & Doors',
      image: blog1,
      description: 'Premium aluminium windows and doors designed for modern residential and commercial architecture.'
    },
    {
      number: '02',
      category: 'BUILDING ENVELOPE',
      title: 'Facades & Glazing',
      image: blog2,
      description: 'Modern facade and glazing systems combining architectural beauty, durability and performance.'
    },
    {
      number: '03',
      category: 'FACADE ENGINEERING',
      title: 'Curtain Wall Systems',
      image: blog3,
      description: 'Advanced curtain wall systems delivering elegant building exteriors and reliable performance.'
    },
    {
      number: '04',
      category: 'INTERIOR SOLUTIONS',
      title: 'Glass Partitions',
      image: blog4,
      description: 'Contemporary glass partitions for offices, commercial spaces and modern interiors.'
    },
    {
      number: '05',
      category: 'SAFETY & DESIGN',
      title: 'Glass Railings',
      image: blog5,
      description: 'Elegant glass railing systems designed for safety, strength and sophisticated architecture.'
    },
    {
      number: '06',
      category: 'EXTERIOR FINISHES',
      title: 'Aluminium Cladding',
      image: blog6,
      description: 'High-quality aluminium cladding solutions for attractive and durable building exteriors.'
    },
    {
      number: '07',
      category: 'ARCHITECTURAL GLASS',
      title: 'Frameless Glass',
      image: blog7,
      description: 'Minimalist frameless glass solutions creating open, bright and elegant spaces.'
    },
    {
      number: '08',
      category: 'CUSTOM FABRICATION',
      title: 'Aluminium Works',
      image: blog8,
      description: 'Custom aluminium fabrication and installation tailored to individual project requirements.'
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
            Our Expertise.<br />
            <span>Eight Categories. One Standard.</span>
          </h1>

          <p>
            Explore our range of professional aluminium, glass and
            architectural solutions, delivered with precision,
            quality and modern engineering.
          </p>
        </div>

        <div className="showcase-controls">
          <button onClick={previousSlide} aria-label="Previous categories">
            <span>←</span>
          </button>

          <button onClick={nextSlide} aria-label="Next categories">
            <span>→</span>
          </button>
        </div>

      </div>

      <div className="showcase-viewport">

        <div className="products-row">

          {visibleProducts.map((product) => (
            <article className="post" key={product.number}>

              <div className="product-index">
                {product.number}
              </div>

              <div className="post-info">

                <img
                  src={product.image}
                  alt={product.title}
                />

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
