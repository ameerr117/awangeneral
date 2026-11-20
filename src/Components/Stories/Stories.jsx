
import { useState, useEffect, useCallback } from 'react';
import './Stories.css';

import class1 from "../../assets/ay00.jpeg";
import class2 from "../../assets/ay01.jpeg";
import class3 from "../../assets/ay02.jpeg";
import class4 from "../../assets/ay03.jpeg";
import class5 from "../../assets/ay04.jpeg";
import class6 from "../../assets/ay05.jpeg";
import class7 from "../../assets/ay06.jpeg";
import class8 from "../../assets/ay07.jpeg";
import class9 from "../../assets/ay08.jpeg";
import class10 from "../../assets/ay09.jpeg";

const stories = [
  {
    title: 'Aluminium Windows',
    image: class1,
    description: 'Beautifully designed aluminium windows that welcome natural light, provide lasting durability and give every space a refined architectural finish.',
    quotation: 'A beautiful space begins with the perfect view. Our aluminium windows combine elegance, strength and comfort.'
  },
  {
    title: 'Curtain Wall Systems',
    image: class2,
    description: 'Modern glass and aluminium facade systems that create impressive building exteriors with a clean, sophisticated appearance.',
    quotation: 'We turn building facades into architectural statements through precision, innovation and modern design.'
  },
  {
    title: 'Aluminium Doors',
    image: class3,
    description: 'Premium aluminium door systems designed to bring security, smooth functionality and contemporary style to residential and commercial spaces.',
    quotation: 'Every entrance tells a story. We make yours stronger, smarter and more beautiful.'
  },
  {
    title: 'Glass Railings',
    image: class4,
    description: 'Elegant glass railing solutions that create open views and add a sophisticated finish to balconies and staircases.',
    quotation: 'Clear views, confident design and dependable quality — crafted to complement modern architecture.'
  },
  {
    title: 'Aluminium Cladding',
    image: class5,
    description: 'High-quality exterior cladding that enhances building appearance with a durable and professional architectural finish.',
    quotation: 'The exterior defines the first impression. We make every detail count.'
  },
  {
    title: 'Glass Partitions',
    image: class6,
    description: 'Contemporary glass partitions that create brighter, more open and organized spaces for offices and interiors.',
    quotation: 'We create spaces that feel open, connected and beautifully designed.'
  },
  {
    title: 'Custom Fabrication',
    image: class7,
    description: 'Custom aluminium fabrication carefully developed around project requirements, architectural details and practical performance.',
    quotation: 'Your vision deserves precision. Our craftsmanship turns ideas into reality.'
  },
  {
    title: 'Automatic Doors',
    image: class8,
    description: 'Modern automatic door systems offering convenient access, smooth operation and a professional entrance experience.',
    quotation: 'Smart access, seamless movement and modern convenience — designed around you.'
  },
  {
    title: 'Aluminium Louvers',
    image: class9,
    description: 'Architectural louver systems that add visual character and practical shading to contemporary buildings.',
    quotation: 'A perfect balance of architectural beauty and practical design.'
  },
  {
    title: 'Complete Projects',
    image: class10,
    description: 'Complete project solutions bringing together aluminium, glazing and construction expertise with attention to every detail.',
    quotation: 'From the first idea to the final finish, we build with commitment, care and quality.'
  }
];

const Stories = () => {
  const getVisibleCards = () => {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState(null);

  const maxIndex = Math.max(0, stories.length - visibleCards);

  const next = useCallback(() => {
    setCurrent(prev =>
      prev >= maxIndex ? 0 : Math.min(prev + visibleCards, maxIndex)
    );
  }, [maxIndex, visibleCards]);

  const previous = useCallback(() => {
    setCurrent(prev =>
      prev <= 0 ? maxIndex : Math.max(prev - visibleCards, 0)
    );
  }, [maxIndex, visibleCards]);

  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrent(prev => Math.min(prev, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (paused || selected) return;

    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, paused, selected]);

  useEffect(() => {
    if (!selected) return;

    const handleEscape = event => {
      if (event.key === 'Escape') setSelected(null);
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <section className="stories-container">

      <div className="stories-top">
        <span className="stories-subtitle">
          AWAN PROJECT SHOWCASE
        </span>

        <div className="stories-controls">
          <button onClick={previous} aria-label="Previous projects">←</button>
          <button onClick={next} aria-label="Next projects">→</button>
        </div>
      </div>

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
            width: `${(stories.length / visibleCards) * 100}%`,
            transform: `translateX(-${(current / stories.length) * 100}%)`
          }}
        >
          {stories.map((story, index) => (
            <div
              className="stories-slide"
              key={story.title}
              style={{ flexBasis: `${100 / stories.length}%` }}
            >
              <article className="stories-card">

                <button
                  type="button"
                  className="stories-picture"
                  onClick={() => setSelected(story)}
                  aria-label={`View ${story.title}`}
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    loading="lazy"
                  />

                  <span className="picture-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="picture-open">↗</span>
                </button>

                <div className="stories-info">
                  <span className="stories-line"></span>

                  <h3>{story.title}</h3>

                  <p>{story.description}</p>

                  <button
                    type="button"
                    className="stories-read-more"
                    onClick={() => setSelected(story)}
                  >
                    View Project <span>→</span>
                  </button>
                </div>

              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="stories-progress">
        <span>{String(current + 1).padStart(2, '0')}</span>

        <div className="progress-line">
          <div
            style={{
              width: `${((current + 1) / (maxIndex + 1)) * 100}%`
            }}
          />
        </div>

        <span>{String(maxIndex + 1).padStart(2, '0')}</span>
      </div>

      {selected && (
        <div
          className="story-image-overlay"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            className="story-image-close"
            onClick={() => setSelected(null)}
          >
            ×
          </button>

          <div
            className="story-image-modal"
            role="dialog"
            aria-modal="true"
            onClick={event => event.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.title}
              className="story-full-image"
            />

            <div className="story-popup-info">
              <span>AWAN GENERAL CONTRACTING & ALUMINIUM WORKS</span>
              <h2>{selected.title}</h2>
              <div className="quotation-mark">“</div>
              <p>{selected.quotation}</p>
              <small>QUALITY • PRECISION • EXCELLENCE</small>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Stories;
