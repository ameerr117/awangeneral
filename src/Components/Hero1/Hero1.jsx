
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  FaWhatsapp,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa6';

import './Hero1.css';

import image1 from '../../assets/alu006.jpg';
import image2 from '../../assets/alu008.jpg';
import image3 from '../../assets/alu007.jpg';
import image4 from '../../assets/alu09.jpg';

const slides = [
  {
    image: image1,
    title: 'ALUMINIUM DOORS',
    number: '01',
    link: '/door'
  },
  {
    image: image2,
    title: 'ALUMINIUM WINDOWS',
    number: '02',
    link: '/window'
  },
  {
    image: image3,
    title: 'ALUMINIUM CLADDING',
    number: '03',
    link: '/cladding'
  },
  {
    image: image4,
    title: 'ALUMINIUM TENTS',
    number: '04',
    link: '/tents'
  },
  {
    image: image2,
    title: 'ARCHITECTURAL GLASS',
    number: '05',
    link: '/glass'
  },
  {
    image: image3,
    title: 'CURTAIN WALL SYSTEMS',
    number: '06',
    link: '/check'
  },
  {
    image: image1,
    title: 'GLASS PARTITION SYSTEMS',
    number: '07',
    link: '/gallery'
  },
  {
    image: image4,
    title: 'WROUGHT IRON GATE',
    number: '08',
    link: '/wrought-iron'
  },
  {
    image: image3,
    title: 'CAR PARKINGS & SHADES',
    number: '09',
    link: '/car-parking'
  },
  {
    image: image2,
    title: 'PAINTS & GYPSUM WORKS',
    number: '10',
    link: '/timer'
  }
];

const Hero1 = () => {
  const [current, setCurrent] = useState(0);

  const phoneNumber = '971562700627';

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="awan-hero">

      {/* BACKGROUND IMAGE SLIDER */}
      <div className="awan-hero-images">
        {slides.map((slide, index) => (
          <div
            key={slide.number}
            className={`awan-hero-image ${
              current === index ? 'show' : ''
            }`}
            style={{
              backgroundImage: `url(${slide.image})`
            }}
          />
        ))}
      </div>

      {/* BACKGROUND EFFECTS */}
      <div className="awan-hero-shade"></div>
      <div className="awan-hero-grid"></div>
      <div className="awan-hero-glow"></div>

      {/* MAIN CONTENT */}
      <div className="awan-hero-container">

        <div className="awan-hero-content" key={current}>

          <div className="hero-kicker">
            <span className="hero-kicker-line"></span>
            <span>AWAN GENERAL CONTRACTING</span>
            <span className="hero-kicker-dot"></span>
            <span>ALUMINIUM WORKS</span>
          </div>

          <div className="hero-heading-wrap">

            <span className="hero-small-label">
              DESIGNED FOR MODERN SPACES
            </span>

            <h1>
              {slides[current].title}
              <span className="hero-heading-period">.</span>
            </h1>

          </div>

          <p className="hero-description">
            Discover premium aluminium, architectural glass and
            interior finishing solutions, crafted with precision,
            modern design, and exceptional attention to detail.
            We transform architectural ideas into beautiful spaces.
          </p>

          {/* BUTTONS */}
          <div className="awan-hero-buttons">

            <Link
              to={slides[current].link}
              className="hero-btn hero-btn-primary"
            >
              <span>EXPLORE SERVICE</span>
              <FaArrowUpRightFromSquare />
            </Link>

            <Link to="/contact" className="hero-btn hero-btn-outline">
              <span>CONTACT US</span>
              <FaArrowRight />
            </Link>

          </div>

          {/* TRUST DETAILS */}
          <div className="hero-trust-row">

            <div className="hero-trust-item">
              <span className="hero-trust-icon">01</span>
              <div>
                <strong>PREMIUM QUALITY</strong>
                <small>Carefully selected materials</small>
              </div>
            </div>

            <span className="hero-trust-divider"></span>

            <div className="hero-trust-item">
              <span className="hero-trust-icon">02</span>
              <div>
                <strong>MODERN DESIGN</strong>
                <small>Elegant architectural solutions</small>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE SPECIALITY CARD */}
        <div className="hero-side-card">

          <div className="hero-card-top">
            <span>OUR SPECIALITY</span>

            <span className="hero-card-status">
              <i></i> PREMIUM
            </span>
          </div>

          <div className="hero-card-number">
            {slides[current].number}
            <span> / 10</span>
          </div>

          <div className="hero-card-line"></div>

          <h3>{slides[current].title}</h3>

          <p>
            Precision, durability and timeless architectural elegance
            in every detail.
          </p>

          <Link
            to={slides[current].link}
            className="hero-card-link"
          >
            EXPLORE THIS SERVICE
            <FaArrowUpRightFromSquare />
          </Link>

        </div>

      </div>

      {/* BOTTOM SLIDER CONTROLS */}
      <div className="hero-bottom-bar">

        <div className="hero-slider-controls">

          <button
            type="button"
            className="hero-arrow"
            onClick={previousSlide}
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>

          <div className="hero-slide-dots">
            {slides.map((slide, index) => (
              <button
                type="button"
                key={slide.number}
                className={`hero-dot ${
                  current === index ? 'active' : ''
                }`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to ${slide.title}`}
              >
                <span></span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="hero-arrow"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>

        </div>

        <div className="hero-bottom-caption">
          <span>ARCHITECTURAL EXCELLENCE</span>
          <span className="hero-caption-line"></span>
          <span>CRAFTED WITH PRECISION</span>
        </div>

        <div className="hero-slide-counter">
          <strong>{slides[current].number}</strong>
          <span> / 10</span>
        </div>

      </div>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp />
        <span className="whatsapp-tooltip">
          Chat With Us
        </span>
      </a>

    </section>
  );
};

export default Hero1;
