
import { Link } from 'react-router-dom';
import './Footer.css';

import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaEnvelope 
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
            <span> & ALUMINIUM WORK LLC</span>
          </h2>

          <h4 className="footer-tagline">
            ARCHITECTURAL ALUMINIUM SOLUTIONS
          </h4>

          <p>
            Delivering professional aluminium, glazing and construction
            solutions with quality craftsmanship, innovative designs
            and international standards.
          </p>

          {/* SOCIAL MEDIA - SAME AS NAVBAR */}
          <div className="social-icons">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-link facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/fadibadshah/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-link instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link linkedin"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:awangcaw@gmail.com?subject=New%20Website%20Enquiry%20-%20AWAN%20General%20Contracting"
              aria-label="Send us an email"
              className="social-link email"
            >
              <FaEnvelope />
            </a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><Link to="/" onClick={handleNavigation}>Home</Link></li>
            <li><Link to="/about" onClick={handleNavigation}>About Us</Link></li>
            <li><Link to="/blog" onClick={handleNavigation}>Projects</Link></li>
            <li><Link to="/blog-detail" onClick={handleNavigation}>Other Services</Link></li>
            <li><Link to="/element" onClick={handleNavigation}>Client Portal</Link></li>
            <li><Link to="/contact" onClick={handleNavigation}>Contact Us</Link></li>
          </ul>
        </div>

        {/* ALUMINIUM SOLUTIONS */}
        <div className="footer-section">
          <h3>Aluminium Solutions</h3>

          <ul>
            <li><Link to="/programz" onClick={handleNavigation}>Aluminium Works</Link></li>
            <li><Link to="/window" onClick={handleNavigation}>Aluminium Windows</Link></li>
            <li><Link to="/door" onClick={handleNavigation}>Aluminium Doors</Link></li>
            <li><Link to="/cladding" onClick={handleNavigation}>Aluminium Cladding</Link></li>
            <li><Link to="/tents" onClick={handleNavigation}>Tents</Link></li>
            <li><Link to="/glass" onClick={handleNavigation}>Glass Works</Link></li>
            <li><Link to="/curtain" onClick={handleNavigation}>Curtain Walls</Link></li>
            <li><Link to="/partner" onClick={handleNavigation}>Partitions</Link></li>
          </ul>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="footer-section footer-contact">
          <h3>Get in Touch</h3>

          <p>
            Have a project in mind? Our professional team is ready
            to discuss your aluminium and construction requirements.
          </p>

          <div className="footer-contact-info">
            <p>
              <strong>Phone:</strong>
              <a href="tel:+971508089726"> tel:+971558816618</a>
            </p>

            <p>
              <strong>Email:</strong>
              <a href="mailto:AGCAW@gmail.com"> AGCAW@gmail.com</a>
            </p>
          </div>

          <Link
            to="/contact"
            className="footer-contact-btn"
            onClick={handleNavigation}
          >
            Contact Our Team →
          </Link>
        </div>

      </div>

      {/* COPYRIGHT */}
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
