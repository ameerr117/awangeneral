
import { useState, useEffect } from 'react';
import './Stories.css';

import class1 from "../../assets/classimg1.jpg.webp";
import class2 from "../../assets/classimg2.jpg.webp";
import class3 from "../../assets/classimg3.jpg.webp";

const Stories = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);

  const stories = [
    {
      title: 'Aluminium Windows',
      category: 'WINDOW SYSTEMS',
      image: class1,
      description: 'Modern aluminium window systems for residential and commercial buildings.',
      details: 'We provide sliding, hinged, tilt and turn, top-hung and custom aluminium window systems. Our solutions focus on durability, smooth operation and modern architectural appearance.'
    },
    {
      title: 'Curtain Wall Systems',
      category: 'FACADE SYSTEMS',
      image: class2,
      description: 'Contemporary glass and aluminium facade solutions.',
      details: 'Our curtain wall solutions are designed for modern commercial buildings, combining architectural appearance, glazing and professional installation.'
    },
    {
      title: 'Aluminium Doors',
      category: 'DOOR SYSTEMS',
      image: class3,
      description: 'Elegant and durable entrance and interior door solutions.',
      details: 'We offer sliding doors, hinged doors, automatic doors and frameless glass doors for residential and commercial applications.'
    },
    {
      title: 'Glass Railings',
      category: 'RAILING SYSTEMS',
      image: class1,
      description: 'Modern railing systems for balconies and staircases.',
      details: 'Our glass and aluminium railing systems combine safety, elegant design and dependable construction for different architectural environments.'
    },
    {
      title: 'Aluminium Cladding',
      category: 'EXTERIOR SOLUTIONS',
      image: class2,
      description: 'Professional exterior cladding for modern buildings.',
      details: 'Aluminium cladding provides attractive exterior finishes and flexible architectural design possibilities.'
    },
    {
      title: 'Glass Partitions',
      category: 'INTERIOR SOLUTIONS',
      image: class3,
      description: 'Create bright, elegant and functional interior spaces.',
      details: 'Our glass partition systems are suitable for offices, commercial buildings and modern interior environments.'
    },
    {
      title: 'Custom Fabrication',
      category: 'FABRICATION',
      image: class1,
      description: 'Custom aluminium fabrication according to project needs.',
      details: 'We provide customised aluminium fabrication based on project drawings, dimensions and technical requirements.'
    },
    {
      title: 'Automatic Doors',
      category: 'ACCESS SYSTEMS',
      image: class2,
      description: 'Modern automatic entrance systems for commercial spaces.',
      details: 'Automatic entrance solutions provide convenient access and a professional appearance for offices, shops and commercial buildings.'
    },
    {
      title: 'Aluminium Louvers',
      category: 'ARCHITECTURAL SYSTEMS',
      image: class3,
      description: 'Architectural shading and ventilation solutions.',
      details: 'Aluminium louvers are designed to support shading, ventilation and privacy while complementing modern building facades.'
    },
    {
      title: 'Complete Projects',
      category: 'PROJECT EXECUTION',
      image: class1,
      description: 'Professional aluminium and construction project solutions.',
      details: 'From project coordination and fabrication to installation and finishing, we aim to deliver quality workmanship and reliable project execution.'
    }
  ];

  const visibleCards = 3;
  const maxSlide = stories.length - visibleCards;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => prev >= maxSlide ? 0 : prev + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [maxSlide]);

  const next = () => {
    setCurrent(prev => prev >= maxSlide ? 0 : prev + 1);
  };

  const previous = () => {
    setCurrent(prev => prev <= 0 ? maxSlide : prev - 1);
  };

  return (
    <section className="stories-container">

      <div className="stories-header">
        <div>
          <span className="stories-tag">AWAN GENERAL ALUMINIUM</span>
          <h1>Our Expertise & Solutions</h1>
          <p>
            Discover our aluminium, glass and architectural
            solutions for modern construction projects.
          </p>
        </div>

        <div className="slider-buttons">
          <button onClick={previous} aria-label="Previous">←</button>
          <button onClick={next} aria-label="Next">→</button>
        </div>
      </div>

      <div className="stories-slider">
        <div
          className="stories-track"
          style={{
            transform: `translateX(-${current * (100 / visibleCards)}%)`
          }}
        >
          {stories.map((story, index) => (
            <div className="stories-slide" key={index}>
              <div className="stories-card">

                <div className="stories-image">
                  <img src={story.image} alt={story.title} />
                  <span>{story.category}</span>
                </div>

                <div className="stories-info">
                  <h2>{story.title}</h2>
                  <p>{story.description}</p>

                  <button
                    className="read-more-btn"
                    onClick={() => setSelected(story)}
                  >
                    Read Full Details →
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="stories-progress">
        <span>{String(current + 1).padStart(2, '0')}</span>
        <div className="progress-line">
          <div style={{ width: `${((current + 1) / (maxSlide + 1)) * 100}%` }} />
        </div>
        <span>{String(maxSlide + 1).padStart(2, '0')}</span>
      </div>

      {selected && (
        <div className="story-modal" onClick={() => setSelected(null)}>
          <div
            className="story-modal-content"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <span className="stories-tag">{selected.category}</span>
            <h2>{selected.title}</h2>
            <img src={selected.image} alt={selected.title} />
            <p>{selected.details}</p>

            <button
              className="modal-button"
              onClick={() => setSelected(null)}
            >
              Close Details
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Stories;
