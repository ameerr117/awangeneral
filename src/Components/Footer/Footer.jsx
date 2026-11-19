
import { Link } from 'react-router-dom';
import './Footer.css';

import unilogo from "../../assets/a6759469-cb67-47ae-be2d-838ac8b91cec.png";
import fb from "../../assets/FBlogo.png";
import insta from "../../assets/instalogo.webp";
import twitter from "../../assets/Twitterlogo.png";
import linkdin from "../../assets/inlogo.png";
import gmail from "../../assets/Gmaillogo.png";

function Footer() {

  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* COMPANY INFORMATION */}
        <div className="footer-brand">

          <Link
            to="/"
            onClick={handleNavigation}
            className="footer-logo-link"
            aria-label="Go to homepage"
          >
            <img
              src={unilogo}
              alt="AWAN GENERAL CONTRACTING & ALUMINIUM WORK LLC"
              className="footer-logo"
            />
          </Link>

          {/* SAME NAME AS NAVBAR */}
          <h2>
            AWAN GENERAL CONTRACTING
            <span> & ALUMINIUM WORK LLC</span>
          </h2>

          <p>
            Delivering professional aluminium, glazing and construction
            solutions with quality craftsmanship and modern standards.
          </p>

          {/* SOCIAL MEDIA */}
          <div className="social-icons">

            <a href="https://web.facebook.com/fahad.yaseen.5076/"
              target="_blank" rel="noopener noreferrer"
              aria-label="Facebook">
              <img src={fb} alt="Facebook" />
            </a>

            <a href="https://www.instagram.com/fadibadshah/"
              target="_blank" rel="noopener noreferrer"
              aria-label="Instagram">
              <img src={insta} alt="Instagram" />
            </a>

            <a href="https://twitter.com"
              target="_blank" rel="noopener noreferrer"
              aria-label="Twitter">
              <img src={twitter} alt="Twitter" />
            </a>

            <a href="https://www.linkedin.com"
              target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn">
              <img src={linkdin} alt="LinkedIn" />
            </a>

            <a href="mailto:AGCAW@gmail.com"
              aria-label="Send us an email">
              <img src={gmail} alt="Email" />
            </a>

          </div>
        </div>

        {/* QUICK NAVIGATION */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><Link to="/" onClick={handleNavigation}>Home</Link></li>
            <li><Link to="/about" onClick={handleNavigation}>About Us</Link></li>
            <li><Link to="/projects" onClick={handleNavigation}>Projects</Link></li>
            <li><Link to="/contact" onClick={handleNavigation}>Contact Us</Link></li>
          </ul>
        </div>

        {/* OUR SERVICES */}
        <div className="footer-section">
          <h3>Our Services</h3>

          <ul>
            <li><Link to="/programz" onClick={handleNavigation}>Aluminium Works</Link></li>
            <li><Link to="/curtain" onClick={handleNavigation}>Curtain Walls</Link></li>
            <li><Link to="/window" onClick={handleNavigation}>Windows & Doors</Link></li>
            <li><Link to="/railing" onClick={handleNavigation}>Glass & Railings</Link></li>
          </ul>
        </div>

        {/* CONTACT SECTION */}
        <div className="footer-section footer-contact">
          <h3>Get in Touch</h3>

          <p>
            Have a project in mind? Our professional team is ready to
            discuss your aluminium and construction requirements.
          </p>

          <Link
            to="/contact"
            className="footer-contact-btn"
            onClick={handleNavigation}
          >
            Contact Our Team →
          </Link>
        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} AWAN GENERAL CONTRACTING
          & ALUMINIUM WORK LLC. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
