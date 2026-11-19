
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import './Hero1.css';

import image1 from '../../assets/alu006.jpg';
import image2 from '../../assets/alu008.jpg';
import image3 from '../../assets/alu007.jpg';
import image4 from '../../assets/alu09.jpg';

const Hero1 = () => {
  const images = [image1, image2, image3, image4];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // WhatsApp number with country code
  const phoneNumber = '971562700627';

  // AUTOMATIC SLIDER
  useEffect(() => {
    if (isPaused) return;

    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(slider);
  }, [images.length, isPaused]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="awan-hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >

      {/* BACKGROUND IMAGES */}
      <div className="awan-hero-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`awan-hero-image ${
              current === index ? 'show' : ''
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* DARK IMAGE OVERLAY */}
      <div className="awan-hero-shade"></div>

      {/* MAIN CONTENT */}
      <div className="awan-hero-inner">

        <div className="awan-hero-left">

          <div className="awan-hero-eyebrow">
            <span></span>
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          </div>

          <h1>
            SHAPING
            <br />
            <span>MODERN</span>
            <br />
            ARCHITECTURE.
          </h1>

          <div className="awan-hero-description">
            <div className="awan-description-line"></div>

            <p>
              Precision-engineered aluminium and glass solutions
              for contemporary architecture. We combine technical
              expertise, quality materials and refined workmanship
              to bring architectural visions to life.
            </p>
          </div>

          <div className="awan-hero-actions">

            <Link to="/blog" className="awan-primary-button">
              EXPLORE OUR PROJECTS
              <span>↗</span>
            </Link>

            <Link to="/contact" className="awan-secondary-button">
              GET IN TOUCH
              <span>→</span>
            </Link>

          </div>

        </div>

        {/* RIGHT SIDE INFORMATION */}
        <div className="awan-hero-right">

          <div className="awan-hero-image-caption">
            <span className="caption-index">
              0{current + 1}
            </span>

            <span className="caption-divider"></span>

            <span>ARCHITECTURAL SOLUTIONS</span>
          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="awan-hero-footer">

        <div className="awan-footer-brand">
          <span className="footer-brand-mark">A.</span>
          <span>ENGINEERED FOR EXCELLENCE</span>
        </div>

        <div className="awan-footer-specialties">
          <span>ALUMINIUM</span>
          <i></i>
          <span>GLASS</span>
          <i></i>
          <span>FAÇADE SYSTEMS</span>
        </div>

        {/* SLIDER CONTROLS */}
        <div className="awan-slider-controls">

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
          >
            ←
          </button>

          <div className="awan-slider-progress">
            {images.map((_, index) => (
              <button
                type="button"
                key={index}
                className={current === index ? 'selected' : ''}
                onClick={() => setCurrent(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-current={current === index ? 'true' : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            →
          </button>

        </div>

      </div>

      {/* LOCATION */}
      <div className="awan-hero-vertical">
        ABU DHABI · UNITED ARAB EMIRATES
      </div>

      {/* FLOATING WHATSAPP */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp />
      </a>

    </section>
  );
};

export default Hero1;
