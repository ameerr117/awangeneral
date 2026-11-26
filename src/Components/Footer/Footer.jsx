
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

import logo from "../../assets/a6759469-cb67-47ae-be2d-838ac8b91cec.png";

const Footer = () => {
  return (
    <footer className="awan-footer">
      <div className="footer-container">

        {/* COMPANY */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="AWAN Logo" />
            <span>
              AWAN GENERAL CONTRACTING
              <small>& ALUMINIUM WORKS LLC</small>
            </span>
          </Link>

          <p>
            Quality aluminium, glass and contracting solutions
            in Abu Dhabi, UAE.
          </p>

          <div className="footer-socials">
            <a href="https://www.facebook.com/agcaw/about/?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=100091272055967&sk=about" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/awangen.cont.alumi.works/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/blog">Blog</Link>
        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h3>Contact</h3>

          <a href="mailto:info@agcaw.com">
            <FaEnvelope /> info@agcaw.com
          </a>

          <a href="mailto:sale@agcaw.com">
            <FaEnvelope /> sale@agcaw.com
          </a>

          <a href="tel:+971562700627">
            <FaPhoneAlt /> +971 56 270 0627
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=M32%2F2%2C+Musaffah%2C+Abu+Dhabi%2C+UAE"
            target="_blank"
            rel="noreferrer"
          >
            <FaMapMarkerAlt /> Musaffah, Abu Dhabi, UAE
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} AWAN GENERAL CONTRACTING & ALUMINIUM WORKS LLC.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
