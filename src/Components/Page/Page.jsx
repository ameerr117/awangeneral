
import { Link } from "react-router-dom";
import "./Page.css";
import visit2 from "../../assets/agc3.jpeg";

const Page = () => {
  return (
    <section className="awan-page-section">

      <div className="awan-page-container">

        {/* LEFT VIDEO AREA */}
        <div className="awan-page-visual">

          <div className="awan-image-main">

            <video
              className="awan-page-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={visit2}
            >
              <source
                src="/videos/awan-project.mp4"
                type="video/mp4"
              />
              Your browser does not support video playback.
            </video>

            <div className="awan-image-overlay"></div>

            <div className="awan-image-caption">
              <span>AWAN</span>
              <small>
                GENERAL CONTRACTING & ALUMINIUM WORKS
              </small>
            </div>

          </div>

          <div className="awan-image-number">
            <strong>01</strong>
            <span>OUR EXPERTISE</span>
          </div>

          <div className="awan-image-decoration"></div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="awan-page-content">

          <span className="awan-page-tag">
            <i></i>
            AWAN GENERAL ALUMINIUM
          </span>

          <h1>
            CREATING
            <span> EXCELLENCE </span>
            THROUGH ALUMINIUM SOLUTIONS
          </h1>

          <div className="awan-page-line"></div>

          <p className="awan-page-intro">
            Transforming architectural ideas into exceptional spaces
            through innovative aluminium and glass solutions.
          </p>

          <p className="awan-page-description">
            At AWAN GENERAL CONTRACTING & ALUMINIUM WORKS, we provide
            professional aluminium and glass solutions for residential,
            commercial and architectural projects.
          </p>

          <p className="awan-page-description">
            From premium aluminium windows and doors to curtain wall
            systems, glass partitions, railings and custom fabrication,
            our focus is on precision, quality workmanship and lasting
            performance.
          </p>

          {/* FEATURES */}
          <div className="awan-page-features">

            <div className="awan-feature">
              <span>01</span>
              <div>
                <h4>PREMIUM QUALITY</h4>
                <p>Carefully selected materials</p>
              </div>
            </div>

            <div className="awan-feature">
              <span>02</span>
              <div>
                <h4>EXPERT WORKMANSHIP</h4>
                <p>Precision in every detail</p>
              </div>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="awan-page-actions">

            <Link to="/programz" className="awan-learn-more">
              EXPLORE OUR SERVICES
              <span>↗</span>
            </Link>

            <Link to="/contact" className="awan-contact-link">
              CONTACT OUR TEAM
            </Link>

          </div>

          <div className="awan-page-bottom-text">
            QUALITY. PRECISION. ARCHITECTURAL EXCELLENCE.
          </div>

        </div>

      </div>

    </section>
  );
};

export default Page;
