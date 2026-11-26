
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
  FaGlobe
} from 'react-icons/fa';

import { SiGmail } from 'react-icons/si';

const Contact = () => {
  const emailAddress = 'awangcaw@gmail.com';
  const phoneNumber = '+971562700627';
  const displayPhone = '+971 56 270 0627';

  const mapAddress = 'M32/2, Musaffah, Abu Dhabi - UAE';

  const mapLink =
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(mapAddress);

  const directionsLink =
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent(mapAddress);

  const gmailLink =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;

  const whatsappLink =
    `https://wa.me/${phoneNumber.replace('+', '')}`;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
${mapAddress}`
    );

    const composeLink =
      `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`;

    window.open(
      composeLink,
      '_blank',
      'noopener,noreferrer'
    );
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
            Have a project in mind? Contact our team for professional
            aluminium, glass, construction and interior finishing services.
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
            Share your requirements with us. Our team will be happy
            to discuss your project and provide suitable solutions.
          </p>

        </div>


        <div className="contact-container">

          {/* LEFT CONTACT INFORMATION */}
          <div className="contact-info">

            <span className="contact-small-heading">
              GET IN TOUCH
            </span>

            <h2>Contact Information</h2>

            <p className="contact-info-description">
              Reach out to AWAN for aluminium, glass and
              architectural construction solutions.
            </p>


            {/* EMAIL */}
            <a
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-item"
            >

              <div className="contact-info-icon">
                <FaEnvelope />
              </div>

              <div className="contact-info-text">
                <span>EMAIL OUR TEAM</span>
                <strong>{emailAddress}</strong>
              </div>

            </a>


            {/* PHONE */}
            <a
              href="tel:+971562700627"
              className="contact-info-item"
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
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href={gmailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gmail"
                >
                  <SiGmail />
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>

              </div>

            </div>

          </div>


          {/* RIGHT CONTACT FORM */}
          <div className="contact-form-wrapper">

            <div className="contact-form-heading">

              <span>SEND US A MESSAGE</span>

              <h2>Tell Us About Your Project</h2>

              <p>
                Complete the form below and send your enquiry
                directly to our Gmail account.
              </p>

            </div>


            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* NAME AND EMAIL */}
              <div className="contact-form-row">

                <div className="contact-form-group">

                  <label htmlFor="contact-name">
                    Your Name *
                  </label>

                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="contact-form-group">

                  <label htmlFor="contact-email">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* PHONE AND PROJECT */}
              <div className="contact-form-row">

                <div className="contact-form-group">

                  <label htmlFor="contact-phone">
                    Mobile Number *
                  </label>

                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    placeholder="+971 00 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="contact-form-group">

                  <label htmlFor="contact-project">
                    Project Type *
                  </label>

                  <select
                    id="contact-project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select Project Type
                    </option>

                    <option value="Aluminium Windows">
                      Aluminium Windows
                    </option>

                    <option value="Aluminium Doors">
                      Aluminium Doors
                    </option>

                    <option value="Aluminium Cladding">
                      Aluminium Cladding
                    </option>

                    <option value="Aluminium Tents">
                      Aluminium Tents
                    </option>

                    <option value="Architectural Glass">
                      Architectural Glass
                    </option>

                    <option value="Curtain Wall Systems">
                      Curtain Wall Systems
                    </option>

                    <option value="Glass Partition Systems">
                      Glass Partition Systems
                    </option>

                    <option value="Wrought Iron Gate">
                      Wrought Iron Gate
                    </option>

                    <option value="Car Parkings & Shades">
                      Car Parkings & Shades
                    </option>

                    <option value="Paints & Gypsum Works">
                      Paints & Gypsum Works
                    </option>

                    <option value="Other Enquiry">
                      Other Enquiry
                    </option>

                  </select>

                </div>

              </div>


              {/* MESSAGE */}
              <div className="contact-form-group">

                <label htmlFor="contact-message">
                  Your Message *
                </label>

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


              {/* SUBMIT */}
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

            <p>
              M32/2, Musaffah, Abu Dhabi - UAE
            </p>

          </div>


          <div className="contact-location-buttons">

            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-map-btn"
            >
              VIEW OUR LOCATION ON MAP
              <FaArrowRight />
            </a>

            <a
              href={directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-directions-btn"
            >
              OPEN GOOGLE MAPS FOR DIRECTIONS
            </a>

          </div>

        </div>

      </section>


      {/* BOTTOM BANNER */}
      <section className="contact-bottom-banner">

        <span>
          AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
        </span>

        <h2>
          Quality. Precision. Architectural Excellence.
        </h2>

        <p>
          Building better spaces with professional aluminium
          and architectural solutions.
        </p>

        <a
          href={gmailLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          EMAIL OUR TEAM <FaArrowRight />
        </a>

      </section>

    </div>
  );
};

export default Contact;
