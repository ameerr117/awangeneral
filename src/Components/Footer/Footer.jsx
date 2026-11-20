
import { Link } from 'react-router-dom';
import './Footer.css';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa';

import unilogo from "../../assets/a6759469-cb67-47ae-be2d-838ac8b91cec.png";

function Footer() {

  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">

      <div className="footer-top-line"></div>

      <div className="footer-container">

        {/* COMPANY BRANDING */}
        <div className="footer-brand">

          <Link
            to="/"
            onClick={handleNavigation}
            className="footer-logo-link"
            aria-label="Go to homepage"
          >
            <img
              src={unilogo}
              alt="AWAN General Contracting Logo"
              className="footer-logo"
            />
          </Link>

          <h2>
            AWAN GENERAL CONTRACTING
            <span>& ALUMINIUM WORK LLC</span>
          </h2>

          <h4 className="footer-tagline">
            ARCHITECTURAL ALUMINIUM SOLUTIONS
          </h4>

          <p className="footer-description">
            Delivering professional aluminium, glazing and construction
            solutions through quality craftsmanship, innovative designs
            and international standards.
          </p>

          {/* SOCIAL MEDIA */}
          <div className="social-icons">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-link"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/fadibadshah/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-link"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:awangcaw@gmail.com?subject=Website%20Enquiry%20-%20AWAN%20General%20Contracting"
              aria-label="Send us an email"
              className="social-link"
            >
              <FaEnvelope />
            </a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">

          <h3>Quick Links</h3>
          <span className="footer-heading-line"></span>

          <ul>
            <li><Link to="/" onClick={handleNavigation}>Home</Link></li>
            <li><Link to="/about" onClick={handleNavigation}>About Us</Link></li>
            <li><Link to="/blog" onClick={handleNavigation}>Our Projects</Link></li>
            <li><Link to="/blog-detail" onClick={handleNavigation}>Other Services</Link></li>
            <li><Link to="/element" onClick={handleNavigation}>Client Portal</Link></li>
            <li><Link to="/contact" onClick={handleNavigation}>Contact Us</Link></li>
          </ul>

        </div>

        {/* ALUMINIUM SOLUTIONS */}
        <div className="footer-section">

          <h3>Our Solutions</h3>
          <span className="footer-heading-line"></span>

          <ul>
            <li><Link to="/programz" onClick={handleNavigation}>Aluminium Works</Link></li>
            <li><Link to="/window" onClick={handleNavigation}>Aluminium Windows</Link></li>
            <li><Link to="/door" onClick={handleNavigation}>Aluminium Doors</Link></li>
            <li><Link to="/cladding" onClick={handleNavigation}>Aluminium Cladding</Link></li>
            <li><Link to="/tents" onClick={handleNavigation}>Tents</Link></li>
            <li><Link to="/glass" onClick={handleNavigation}>Glass Works</Link></li>
            <li><Link to="/curtain" onClick={handleNavigation}>Curtain Walls</Link></li>
            <li><Link to="/partner" onClick={handleNavigation}>Glass Partitions</Link></li>
          </ul>

        </div>

        {/* CONTACT INFORMATION */}
        <div className="footer-section footer-contact">

          <h3>Get in Touch</h3>
          <span className="footer-heading-line"></span>

          <p className="contact-description">
            Have a project in mind? Our professional team is ready
            to discuss your aluminium and construction requirements.
          </p>

          <div className="footer-contact-info">

            <div className="contact-item">
              <FaPhoneAlt />
              <div>
                <span>Call Us</span>
                <a href="tel:+971558816618">+971 55 881 6618</a>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <div>
                <span>Email Us</span>
                <a href="mailto:awangcaw@gmail.com">awangcaw@gmail.com


</a>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <div>
                <span>Location</span>
                <p>M32/2, MUSAFFAH, ABU DHABI - UAE</p>
              </div>
            </div>

          </div>

          <Link
            to="/contact"
            className="footer-contact-btn"
            onClick={handleNavigation}
          >
            Contact Our Team <FaArrowRight />
          </Link>

        </div>

      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} AWAN GENERAL CONTRACTING
          & ALUMINIUM WORK LLC. All Rights Reserved.
        </p>

        <Link to="/" onClick={handleNavigation}>
          Back to Home ↑
        </Link>

      </div>

    </footer>
  );
}

export default Footer;
