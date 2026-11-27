
import  { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Stories.css";

import class1 from "../../assets/009.jpeg";
import class2 from "../../assets/008.jpeg";
import class3 from "../../assets/007.jpeg";
import class4 from "../../assets/006.jpeg";
import class5 from "../../assets/005.jpeg";
import class6 from "../../assets/004.jpeg";
import class7 from "../../assets/003.jpeg";
import class8 from "../../assets/002.jpeg";
import class9 from "../../assets/001.jpeg";
import class10 from "../../assets/000.jpeg";
import class11 from "../../assets/0001.jpeg";
import class12 from "../../assets/0002.jpeg";

const stories = [
  {
    title: "Aluminium Windows",
    image: class1,
    description:
      "Beautifully designed aluminium windows that welcome natural light, provide lasting durability and give every space a refined architectural finish.",
    quotation:
      "A beautiful space begins with the perfect view. Our aluminium windows combine elegance, strength and comfort.",
  },
  {
    title: "Curtain Wall Systems",
    image: class2,
    description:
      "Modern glass and aluminium facade systems that create impressive building exteriors with a clean, sophisticated appearance.",
    quotation:
      "We turn building facades into architectural statements through precision, innovation and modern design.",
  },
  {
    title: "Aluminium Doors",
    image: class3,
    description:
      "Premium aluminium door systems designed to bring security, smooth functionality and contemporary style.",
    quotation:
      "Every entrance tells a story. We make yours stronger, smarter and more beautiful.",
  },
  {
    title: "Glass Railings",
    image: class4,
    description:
      "Elegant glass railing solutions that create open views and add a sophisticated finish to balconies and staircases.",
    quotation:
      "Clear views, confident design and dependable quality — crafted to complement modern architecture.",
  },
  {
    title: "Aluminium Cladding",
    image: class5,
    description:
      "High-quality exterior cladding that enhances building appearance with a durable architectural finish.",
    quotation:
      "The exterior defines the first impression. We make every detail count.",
  },
  {
    title: "Glass Partitions",
    image: class6,
    description:
      "Contemporary glass partitions that create brighter, more open and organized spaces for offices and interiors.",
    quotation:
      "We create spaces that feel open, connected and beautifully designed.",
  },
  {
    title: "Custom Fabrication",
    image: class7,
    description:
      "Custom aluminium fabrication carefully developed around project requirements and architectural details.",
    quotation:
      "Your vision deserves precision. Our craftsmanship turns ideas into reality.",
  },
  {
    title: "Automatic Doors",
    image: class8,
    description:
      "Modern automatic door systems offering convenient access, smooth operation and a professional entrance experience.",
    quotation:
      "Smart access, seamless movement and modern convenience — designed around you.",
  },
  {
    title: "Aluminium Louvers",
    image: class9,
    description:
      "Architectural louver systems that add visual character and practical shading to contemporary buildings.",
    quotation:
      "A perfect balance of architectural beauty and practical design.",
  },
  {
    title: "Complete Projects",
    image: class10,
    description:
      "Complete project solutions bringing together aluminium, glazing and construction expertise.",
    quotation:
      "From the first idea to the final finish, we build with commitment, care and quality.",
  },
   {
    title: "Complete Projects",
    image: class11,
    description:
      "Complete project solutions bringing together aluminium, glazing and construction expertise.",
    quotation:
      "From the first idea to the final finish, we build with commitment, care and quality.",
  },
   {
    title: "Complete Projects",
    image: class12,
    description:
      "Complete project solutions bringing together aluminium, glazing and construction expertise.",
    quotation:
      "From the first idea to the final finish, we build with commitment, care and quality.",
  },
];

const getVisibleCards = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
};

const Stories = () => {
  const [visibleCards, setVisibleCards] = useState(getVisibleCards);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [paused, setPaused] = useState(false);

  const maxIndex = Math.max(0, stories.length - visibleCards);

  const next = useCallback(() => {
    setCurrent((previous) =>
      previous >= maxIndex ? 0 : previous + 1
    );
  }, [maxIndex]);

  const previous = useCallback(() => {
    setCurrent((previous) =>
      previous <= 0 ? maxIndex : previous - 1
    );
  }, [maxIndex]);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setCurrent((previous) => Math.min(previous, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (paused || selected) return;

    const timer = setInterval(next, 4500);

    return () => clearInterval(timer);
  }, [next, paused, selected]);

  useEffect(() => {
    if (!selected) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const centerIndex =
    visibleCards === 1 ? current : current + Math.floor(visibleCards / 2);

  return (
    <section className="awan-stories-section">

      {/* HEADING */}
      <div className="stories-heading">

        <span className="stories-heading-line"></span>

        <h2>
          Projects We Have <span>Completed</span>
        </h2>

        <span className="stories-heading-line"></span>

      </div>

      <p className="stories-heading-description">
        EXPLORE OUR ALUMINIUM & ARCHITECTURAL PROJECTS
      </p>

      {/* CAROUSEL */}
      <div
        className="stories-carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setPaused(false);
          }
        }}
      >

        <button
          type="button"
          className="stories-arrow stories-arrow-left"
          onClick={previous}
          aria-label="Previous projects"
        >
          ‹
        </button>

        <div className="stories-slider">

          <div
            className="stories-track"
            style={{
              width: `${(stories.length / visibleCards) * 100}%`,
              transform: `translateX(-${(current * 100) / stories.length}%)`,
            }}
          >

            {stories.map((story, index) => {

              let positionClass = "";

              if (index === centerIndex) {
                positionClass = "is-center";
              } else if (index === current) {
                positionClass = "is-left";
              } else if (index === current + visibleCards - 1) {
                positionClass = "is-right";
              }

              return (
                <div
                  className={`stories-slide ${positionClass}`}
                  key={story.title}
                  style={{
                    flexBasis: `${100 / stories.length}%`,
                  }}
                >

                  <button
                    type="button"
                    className="stories-project-card"
                    onClick={() => setSelected(story)}
                    aria-label={`View ${story.title} project`}
                  >

                    <img
                      src={story.image}
                      alt={story.title}
                      loading="lazy"
                    />

                    <div className="stories-project-overlay">
                      <span>
                        PROJECT {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3>{story.title}</h3>

                      <small>VIEW PROJECT ↗</small>
                    </div>

                  </button>

                </div>
              );
            })}

          </div>

        </div>

        <button
          type="button"
          className="stories-arrow stories-arrow-right"
          onClick={next}
          aria-label="Next projects"
        >
          ›
        </button>

      </div>

      {/* PAGINATION DOTS */}
      <div className="stories-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            type="button"
            key={index}
            className={`stories-dot ${
              current === index ? "active" : ""
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to project slide ${index + 1}`}
          />
        ))}
      </div>

      {/* PROJECT DETAILS BUTTON */}
      <div className="stories-bottom-action">
        <Link to="/programz" className="stories-details-button">
          VIEW OUR PROJECTS DETAILS
          <span>↗</span>
        </Link>
      </div>

      {/* PROJECT POPUP */}
      {selected && (
        <div
          className="story-image-overlay"
          onClick={() => setSelected(null)}
        >

          <button
            type="button"
            className="story-image-close"
            onClick={() => setSelected(null)}
            aria-label="Close project"
          >
            ×
          </button>

          <div
            className="story-image-modal"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={selected.image}
              alt={selected.title}
              className="story-full-image"
            />

            <div className="story-popup-info">

              <span>
                AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
              </span>

              <h2>{selected.title}</h2>

              <p>{selected.description}</p>

              <div className="quotation-mark">“</div>

              <p>{selected.quotation}</p>

              <small>
                QUALITY • PRECISION • EXCELLENCE
              </small>

            </div>

          </div>

        </div>
      )}

    </section>
  );
};

export default Stories;
