
import { useState, useEffect } from 'react';
import './Stories.css';

import class1 from "../../assets/ay00.jpeg";
import class2 from "../../assets/ay01.jpeg";
import class3 from "../../assets/ay02.jpeg";

import class4 from "../../assets/ay00.jpeg";
import class5 from "../../assets/ay01.jpeg";
import class6 from "../../assets/ay02.jpeg";
import class7 from "../../assets/ay00.jpeg";
import class8 from "../../assets/ay01.jpeg";
import class9 from "../../assets/ay02.jpeg";

const Stories = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);

  const stories = [
    {
      title: 'Aluminium Windows',
      category: 'WINDOW SYSTEMS',
      image: class1,
      description: 'Modern aluminium window systems for residential and commercial buildings.'
    },
    {
      title: 'Curtain Wall Systems',
      category: 'FACADE SYSTEMS',
      image: class2,
      description: 'Contemporary glass and aluminium facade solutions.'
    },
    {
      title: 'Aluminium Doors',
      category: 'DOOR SYSTEMS',
      image: class3,
      description: 'Elegant and durable entrance and interior door solutions.'
    },
    {
      title: 'Glass Railings',
      category: 'RAILING SYSTEMS',
      image: class4,
      description: 'Modern railing systems for balconies and staircases.'
    },
    {
      title: 'Aluminium Cladding',
      category: 'EXTERIOR SOLUTIONS',
      image: class5,
      description: 'Professional exterior cladding for modern buildings.'
    },
    {
      title: 'Glass Partitions',
      category: 'INTERIOR SOLUTIONS',
      image: class6,
      description: 'Create bright, elegant and functional interior spaces.'
    },
    {
      title: 'Custom Fabrication',
      category: 'FABRICATION',
      image: class7,
      description: 'Custom aluminium fabrication according to project needs.'
    },
    {
      title: 'Automatic Doors',
      category: 'ACCESS SYSTEMS',
      image: class8,
      description: 'Modern automatic entrance systems for commercial spaces.'
    },
    {
      title: 'Aluminium Louvers',
      category: 'ARCHITECTURAL SYSTEMS',
      image: class9,
      description: 'Architectural shading and ventilation solutions.'
    },
    {
      title: 'Complete Projects',
      category: 'PROJECT EXECUTION',
      image: class1,
      description: 'Professional aluminium and construction project solutions.'
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

  // Close image with Escape key
  useEffect(() => {
    if (!selected) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelected(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selected]);

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
          <span className="stories-tag">
            AWAN GENERAL ALUMINIUM
          </span>

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

                <div
                  className="stories-image"
                  onClick={() => setSelected(story.image)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelected(story.image);
                    }
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={story.image} alt={story.title} />

                  <span>{story.category}</span>
                </div>

                <div className="stories-info">
                  <h2>{story.title}</h2>

                  <p>{story.description}</p>

                  <button
                    className="read-more-btn"
                    onClick={() => setSelected(story.image)}
                  >
                    View Full Image →
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
          <div
            style={{
              width: `${((current + 1) / (maxSlide + 1)) * 100}%`
            }}
          />
        </div>

        <span>{String(maxSlide + 1).padStart(2, '0')}</span>
      </div>

      {/* FULL IMAGE POPUP - IMAGE ONLY */}
      {selected && (
        <div
          className="story-image-overlay"
          onClick={() => setSelected(null)}
        >
          <button
            className="story-image-close"
            onClick={() => setSelected(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <img
            src={selected}
            alt="Full project"
            className="story-full-image"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

    </section>
  );
};

export default Stories;
