import { Link } from 'react-router-dom';
import './Footer.css';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaGlobe
} from 'react-icons/fa';

import logo from "../../assets/a6759469-cb67-47ae-be2d-838ac8b91cec.png";

const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP ACCENT LINE */}
      <div className="footer-top-line"></div>

      {/* MAIN FOOTER */}
      <div className="footer-container">

        {/* BRAND SECTION */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo-link">
            <img
              src={logo}
              alt="Awan General Contracting Logo"
              className="footer-logo"
            />
          </Link>

          <h2 className="footer-company-name">
            AWAN GENERAL CONTRACTING
            <span>& ALUMINIUM WORK LLC</span>
          </h2>

          <div className="footer-brand-line"></div>

          <p className="footer-tagline">
            ARCHITECTURAL ALUMINIUM SOLUTIONS
          </p>

          <p className="footer-description">
            We deliver professional aluminium and architectural solutions
            with a strong commitment to quality, precision, innovation,
            and customer satisfaction.
          </p>

          {/* SOCIAL MEDIA */}
          <div className="footer-social-icons">

            <a
  href="https://www.facebook.com/agcaw/about/?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=100091272055967&sk=about"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit AWAN Facebook"
  title="AWAN Facebook"
  className="mobile-social-link"
>
  <FaFacebookF />
</a>

           <a
  href="https://www.instagram.com/awangen.cont.alumi.works/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="AWAN Instagram"
  title="AWAN Instagram"
  className="mobile-social-link"
>
  <FaInstagram />
</a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:awangcaw@gmail.com"
              className="footer-social"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">

          <h3 className="footer-heading">
            QUICK LINKS
            <span className="footer-heading-line"></span>
          </h3>

          <ul className="footer-links">

            <li>
              <Link to="/">
                <FaArrowRight />
                Home
              </Link>
            </li>

            <li>
              <Link to="/about">
                <FaArrowRight />
                About Us
              </Link>
            </li>

            <li>
              <Link to="/programz">
                <FaArrowRight />
                Our Projects
              </Link>
            </li>

            <li>
              <Link to="/blog">
                <FaArrowRight />
                Blog
              </Link>
            </li>

         

            <li>
              <Link to="/contact">
                <FaArrowRight />
                Contact Us
              </Link>
            </li>

          </ul>
        </div>

        {/* CONTACT SECTION */}
        <div className="footer-section footer-contact">

          <h3 className="footer-heading">
            CONTACT US
            <span className="footer-heading-line"></span>
          </h3>

          <p className="contact-description">
            Get in touch with our team for professional assistance
            and project inquiries.
          </p>

          {/* PHONE */}
          <div className="contact-item">

            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <div className="contact-details">
              <span>PHONE NUMBER</span>
              <a href="tel:+971558816618">
                +971 55 881 6618
              </a>
            </div>

          </div>

          {/* EMAIL */}
          <div className="contact-item">

            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div className="contact-details">
              <span>EMAIL ADDRESS</span>
              <a href="mailto:awangcaw@gmail.com">
                awangcaw@gmail.com
              </a>
            </div>

          </div>

          {/* ADDRESS */}
          <div className="contact-item">

            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div className="contact-details">
              <span>OUR LOCATION</span>
              <p>
                M32/2, Musaffah,
                Abu Dhabi - UAE
              </p>
            </div>

          </div>

          {/* WEBSITE */}
          <div className="contact-item">

            <div className="contact-icon">
              <FaGlobe />
            </div>

            <div className="contact-details">
              <span>BUSINESS</span>
              <p>
                AWAN GENERAL CONTRACTING
                & ALUMINIUM WORK LLC
              </p>
            </div>

          </div>

          <Link to="/contact" className="footer-contact-btn">
            CONTACT OUR TEAM
            <FaArrowRight />
          </Link>

        </div>

      </div>

      {/* QUALITY STRIP */}
      <div className="footer-middle-strip">

        <div className="footer-strip-inner">

          <div className="footer-strip-item">
            <span>01</span>
            <p>QUALITY</p>
          </div>

          <div className="footer-strip-item">
            <span>02</span>
            <p>PRECISION</p>
          </div>

          <div className="footer-strip-item">
            <span>03</span>
            <p>INNOVATION</p>
          </div>

          <div className="footer-strip-item">
            <span>04</span>
            <p>EXCELLENCE</p>
          </div>

        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom-wrapper">

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} AWAN GENERAL CONTRACTING
            & ALUMINIUM WORK LLC.
            <span> ALL RIGHTS RESERVED.</span>
          </p>

          <div className="footer-bottom-links">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;