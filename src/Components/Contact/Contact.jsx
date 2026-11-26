
import { useState } from 'react';
import './Contact.css';

import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaArrowRight,
  FaDirections
} from 'react-icons/fa';

import { SiGmail } from 'react-icons/si';

const Contact = () => {
  // EMAIL ADDRESSES
  const infoEmail = 'info@awangcaw.com';
  const salesEmail = 'sale@awangcaw.com';

  // PHONE NUMBER
  const phoneNumber = '+971562700627';
  const displayPhone = '+971 56 270 0627';

  // OFFICE LOCATION
  const mapAddress = 'M32/2, Musaffah, Abu Dhabi - UAE';

  // GOOGLE MAPS LINKS
  const mapLink =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapAddress)}`;

  const directionsLink =
    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapAddress)}`;

  // EMAIL LINKS
  const infoMailLink = `mailto:${infoEmail}`;
  const salesMailLink = `mailto:${salesEmail}`;

  const infoGmailLink =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(infoEmail)}`;

  const salesGmailLink =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(salesEmail)}`;

  // WHATSAPP LINK
  const whatsappLink =
    `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
      'Hello AWAN Team, I would like to enquire about your services.'
    )}`;

  // SOCIAL MEDIA
  // Replace these with your official company profile URLs.
  const socialLinks = {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/'
  };

  // FORM DATA
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    recipient: infoEmail,
    message: ''
  });

  // HANDLE FORM INPUTS
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  // SUBMIT FORM
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() ||
        !formData.email.trim() ||
        !formData.phone.trim() ||
        !formData.project ||
        !formData.message.trim()) {
      alert('Please complete all required fields.');
      return;
    }

    const recipient =
      formData.recipient === salesEmail ? salesEmail : infoEmail;

    const subject = encodeURIComponent(
      `New Project Enquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `NEW PROJECT ENQUIRY

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.project}

Message:
${formData.message}

Business Address:
${mapAddress}

AWAN General Contracting & Aluminium Works`
    );

    const composeLink =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(recipient)}` +
      `&su=${subject}&body=${body}`;

    // Opens Gmail directly from the visitor's submit action.
    window.open(composeLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="contact-page">

      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="contact-hero-content">

          <span className="contact-label">
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          </span>

          <h1>
            LET'S DISCUSS
            <span> YOUR PROJECT</span>
          </h1>

          <p>
            Contact our professional team for aluminium, glass,
            construction and interior finishing services.
          </p>

          <a href="#contact-main" className="contact-hero-btn">
            GET IN TOUCH <FaArrowRight />
          </a>

        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="contact-main" id="contact-main">

        <div className="contact-heading">
          <span>CONTACT AWAN</span>
          <h2>We Are Ready To Help You</h2>

          <p>
            Share your requirements with our team for professional
            project assistance and suitable solutions.
          </p>
        </div>

        <div className="contact-container">

          {/* CONTACT INFORMATION */}
          <div className="contact-info">

            <span className="contact-small-heading">
              GET IN TOUCH
            </span>

            <h2>Contact Information</h2>

            <p className="contact-info-description">
              Reach out to AWAN for aluminium, glass and
              architectural construction solutions.
            </p>

            {/* GENERAL EMAIL */}
            <a
              href={infoMailLink}
              className="contact-info-item"
              aria-label={`Send email to ${infoEmail}`}
            >
              <div className="contact-info-icon">
                <FaEnvelope />
              </div>

              <div className="contact-info-text">
                <span>GENERAL INFORMATION</span>
                <strong>{infoEmail}</strong>
              </div>
            </a>

            {/* SALES EMAIL */}
            <a
              href={salesMailLink}
              className="contact-info-item"
              aria-label={`Send email to ${salesEmail}`}
            >
              <div className="contact-info-icon">
                <FaEnvelope />
              </div>

              <div className="contact-info-text">
                <span>SALES & QUOTATIONS</span>
                <strong>{salesEmail}</strong>
              </div>
            </a>

            {/* PHONE */}
            <a
              href={`tel:${phoneNumber}`}
              className="contact-info-item"
              aria-label={`Call ${displayPhone}`}
            >
              <div className="contact-info-icon">
                <FaPhoneAlt />
              </div>

              <div className="contact-info-text">
                <span>CALL OUR TEAM</span>
                <strong>{displayPhone}</strong>
              </div>
            </a>

            {/* WHATSAPP */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-item"
              aria-label="Chat with AWAN on WhatsApp"
            >
              <div className="contact-info-icon">
                <FaWhatsapp />
              </div>

              <div className="contact-info-text">
                <span>WHATSAPP</span>
                <strong>Chat With Our Team</strong>
              </div>
            </a>

            {/* LOCATION */}
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-item"
              aria-label="View AWAN office location on Google Maps"
            >
              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>

              <div className="contact-info-text">
                <span>OUR OFFICE LOCATION</span>
                <strong>{mapAddress}</strong>
              </div>
            </a>

            {/* SOCIAL MEDIA */}
            <div className="contact-social-section">

              <h3>Connect With Us</h3>

              <div className="contact-social-icons">

                <a
  href="https://www.facebook.com/agcaw/about/?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=100091272055967&sk=about"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit AWAN Facebook"
  title="AWAN Facebook"
>
  <FaFacebookF />
</a>

               <a
  href={socialLinks.instagram}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit AWAN Instagram"
  title="AWAN Instagram"
>
  <FaInstagram />
</a>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href={infoGmailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email general information through Gmail"
                  title="General Gmail"
                >
                  <SiGmail />
                </a>

                <a
                  href={salesGmailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email sales through Gmail"
                  title="Sales Gmail"
                >
                  <FaEnvelope />
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  title="WhatsApp"
                >
                  <FaWhatsapp />
                </a>

              </div>
            </div>

          </div>

          {/* CONTACT FORM */}
          <div className="contact-form-wrapper">

            <div className="contact-form-heading">
              <span>SEND US A MESSAGE</span>
              <h2>Tell Us About Your Project</h2>

              <p>
                Complete the form and select the team that
                should receive your enquiry.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* NAME AND EMAIL */}
              <div className="contact-form-row">

                <div className="contact-form-group">
                  <label htmlFor="contact-name">Your Name *</label>

                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="contact-email">Email Address *</label>

                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>

              </div>

              {/* PHONE AND PROJECT */}
              <div className="contact-form-row">

                <div className="contact-form-group">
                  <label htmlFor="contact-phone">Mobile Number *</label>

                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    placeholder="+971 00 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="contact-project">Project Type *</label>

                  <select
                    id="contact-project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Project Type</option>
                    <option value="Aluminium Windows">Aluminium Windows</option>
                    <option value="Aluminium Doors">Aluminium Doors</option>
                    <option value="Aluminium Cladding">Aluminium Cladding</option>
                    <option value="Aluminium Tents">Aluminium Tents</option>
                    <option value="Architectural Glass">Architectural Glass</option>
                    <option value="Curtain Wall Systems">Curtain Wall Systems</option>
                    <option value="Glass Partition Systems">Glass Partition Systems</option>
                    <option value="Wrought Iron Gate">Wrought Iron Gate</option>
                    <option value="Car Parkings & Shades">Car Parkings & Shades</option>
                    <option value="Paints & Gypsum Works">Paints & Gypsum Works</option>
                    <option value="Other Enquiry">Other Enquiry</option>
                  </select>
                </div>

              </div>

              {/* EMAIL RECIPIENT */}
              <div className="contact-form-group">
                <label htmlFor="contact-recipient">
                  Send Enquiry To *
                </label>

                <select
                  id="contact-recipient"
                  name="recipient"
                  value={formData.recipient}
                  onChange={handleChange}
                  required
                >
                  <option value={infoEmail}>
                    General Information - {infoEmail}
                  </option>

                  <option value={salesEmail}>
                    Sales & Quotations - {salesEmail}
                  </option>
                </select>
              </div>

              {/* MESSAGE */}
              <div className="contact-form-group">
                <label htmlFor="contact-message">Your Message *</label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Describe your project requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="contact-submit-btn"
              >
                SEND MESSAGE <FaArrowRight />
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="contact-location-section">

        <div className="contact-location-content">

          <span className="contact-location-label">
            FIND OUR LOCATION
          </span>

          <h2>Visit Our Office</h2>

          <div className="contact-location-address">
            <FaMapMarkerAlt />
            <p>{mapAddress}</p>
          </div>

          <div className="contact-location-buttons">

            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-map-btn"
            >
              VIEW OUR LOCATION ON MAP <FaArrowRight />
            </a>

            <a
              href={directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-directions-btn"
            >
              <FaDirections /> OPEN GOOGLE MAPS FOR DIRECTIONS
            </a>

          </div>

        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="contact-bottom-banner">

        <span>
          AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
        </span>

        <h2>Quality. Precision. Architectural Excellence.</h2>

        <p>
          Building better spaces with professional aluminium
          and architectural solutions.
        </p>

        <div className="contact-bottom-emails">

          <a href={infoMailLink}>
            <FaEnvelope /> {infoEmail}
          </a>

          <a href={salesMailLink}>
            <FaEnvelope /> {salesEmail}
          </a>

          <a href={`tel:${phoneNumber}`}>
            <FaPhoneAlt /> {displayPhone}
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp Us
          </a>

        </div>

      </section>

    </div>
  );
};

export default Contact;
