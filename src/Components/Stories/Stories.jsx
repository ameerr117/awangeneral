
import { useState, useEffect, useCallback } from 'react';
import './Stories.css';

import class1 from "../../assets/ay00.jpeg";
import class2 from "../../assets/ay01.jpeg";
import class3 from "../../assets/ay02.jpeg";

const Stories = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [paused, setPaused] = useState(false);

  // Responsive number of visible cards
  const getVisibleCards = () => {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards);

  const stories = [
    {
      title: 'Aluminium Windows',
      category: 'WINDOW SYSTEMS',
      image: class1,
      description: 'Explore modern aluminium window solutions designed for durability, natural lighting and elegant architectural finishes.'
    },
    {
      title: 'Curtain Wall Systems',
      category: 'FACADE SYSTEMS',
      image: class2,
      description: 'Discover contemporary curtain wall solutions combining aluminium framing and glass for modern building facades.'
    },
    {
      title: 'Aluminium Doors',
      category: 'DOOR SYSTEMS',
      image: class3,
      description: 'High-quality aluminium door solutions designed for practical performance, durability and modern architectural style.'
    },
    {
      title: 'Glass Railings',
      category: 'RAILING SYSTEMS',
      image: class1,
      description: 'Elegant glass railing solutions for balconies, staircases and contemporary architectural spaces.'
    },
    {
      title: 'Aluminium Cladding',
      category: 'EXTERIOR SOLUTIONS',
      image: class2,
      description: 'Modern aluminium cladding solutions that enhance building exteriors with clean and professional finishes.'
    },
    {
      title: 'Glass Partitions',
      category: 'INTERIOR SOLUTIONS',
      image: class3,
      description: 'Functional glass partition systems that create bright, modern and organized interior environments.'
    },
    {
      title: 'Custom Fabrication',
      category: 'FABRICATION',
      image: class1,
      description: 'Custom aluminium fabrication developed to meet project specifications and architectural requirements.'
    },
    {
      title: 'Automatic Doors',
      category: 'ACCESS SYSTEMS',
      image: class2,
      description: 'Modern automatic door solutions for convenient access in commercial and residential environments.'
    },
    {
      title: 'Aluminium Louvers',
      category: 'ARCHITECTURAL SYSTEMS',
      image: class3,
      description: 'Architectural louver systems designed to complement building facades and provide practical shading.'
    },
    {
      title: 'Complete Projects',
      category: 'PROJECT EXECUTION',
      image: class1,
      description: 'Professional project execution combining aluminium, glazing and construction services.'
    }
  ];

  const maxSlide = Math.max(0, stories.length - visibleCards);

  // One click moves exactly one card
  const next = useCallback(() => {
    setCurrent(prev => prev >= maxSlide ? 0 : prev + 1);
  }, [maxSlide]);

  const previous = useCallback(() => {
    setCurrent(prev => prev <= 0 ? maxSlide : prev - 1);
  }, [maxSlide]);

  // Update visible cards when screen size changes
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Keep current position valid after resizing
  useEffect(() => {
    setCurrent(prev => Math.min(prev, maxSlide));
  }, [maxSlide]);

  // Automatic slider
  useEffect(() => {
    if (paused || selected) return;

    const timer = setInterval(next, 4500);

    return () => clearInterval(timer);
  }, [next, paused, selected]);

  // Close popup with Escape key
  useEffect(() => {
    if (!selected) return;

    const handleEscape = event => {
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

  const openStory = story => setSelected(story);

  return (
    <section className="stories-container">
      <div className="stories-inner">

        {/* HEADER */}
        <div className="stories-header">
          <div className="stories-heading">
            <span className="stories-tag">
              <span className="stories-tag-line" />
              AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
            </span>

            <h1>
              Our Expertise <span>& Solutions</span>
            </h1>

            <p>
              Discover our aluminium, glass and architectural
              solutions for modern residential and commercial projects.
            </p>
          </div>

          {/* FORWARD AND BACKWARD BUTTONS */}
          <div className="slider-buttons">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous projects"
              title="Previous"
            >
              ←
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next projects"
              title="Next"
            >
              →
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div
          className="stories-slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={event => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setPaused(false);
            }
          }}
        >
          <div
            className="stories-track"
            style={{
              transform: `translateX(-${current * (100 / visibleCards)}%)`
            }}
          >
            {stories.map((story, index) => (
              <div className="stories-slide" key={story.title}>
                <article className="stories-card">

                  <button
                    type="button"
                    className="stories-image"
                    onClick={() => openStory(story)}
                    aria-label={`View ${story.title} image`}
                  >
                    <img
                      src={story.image}
                      alt={story.title}
                      loading="lazy"
                    />

                    <span className="stories-category">
                      {story.category}
                    </span>

                    <span className="stories-image-icon">↗</span>
                  </button>

                  <div className="stories-info">
                    <span className="stories-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <h2>{story.title}</h2>

                    <p>{story.description}</p>

                    <button
                      type="button"
                      className="read-more-btn"
                      onClick={() => openStory(story)}
                    >
                      Explore Solution <span>→</span>
                    </button>
                  </div>

                </article>
              </div>
            ))}
          </div>
        </div>

        {/* PROGRESS */}
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

      </div>

      {/* IMAGE POPUP */}
      {selected && (
        <div
          className="story-image-overlay"
          onClick={() => setSelected(null)}
          role="presentation"
        >
          <button
            type="button"
            className="story-image-close"
            onClick={() => setSelected(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="story-image-modal"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={event => event.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.title}
              className="story-full-image"
            />

            <div className="story-popup-info">
              <span>{selected.category}</span>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Stories;
