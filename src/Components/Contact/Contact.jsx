
import './Contact.css';

import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
  FaMapMarkerAlt,
  FaCheckCircle
} from 'react-icons/fa';

import { SiGmail } from 'react-icons/si';

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get('name');
    const phone = data.get('phone');
    const email = data.get('email');
    const project = data.get('project');
    const message = data.get('message');

    const subject = encodeURIComponent(
      `New Project Enquiry - ${name}`
    );

    const body = encodeURIComponent(
`Dear AWAN General Contracting & Aluminium Works Team,

I would like to enquire about your services.

CUSTOMER DETAILS
-------------------------
Full Name: ${name}
Phone Number: ${phone}
Email Address: ${email}

PROJECT INFORMATION
-------------------------
Project Type: ${project}

Project Requirements:
${message}

I would appreciate it if your team could contact me to discuss the project details, pricing and next steps.

Thank you.

Best Regards,
${name}`
    );

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1&to=awangcaw@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const mapAddress = 'AWAN GENERAL CONTRACTING & ALUMINIUM WORKS';

  return (
    <div className="contact-page">

      {/* CONTACT HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <span className="contact-hero-label">
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          </span>

          <h1>
            Let's Build
            <span>Something Exceptional.</span>
          </h1>

          <p>
            From aluminium systems to complete architectural
            solutions, let's discuss your next project.
          </p>

          <div className="contact-hero-bottom">
            <span>QUALITY</span>
            <i></i>
            <span>PRECISION</span>
            <i></i>
            <span>TRUST</span>
          </div>
        </div>

        <div className="contact-hero-number">
          <span>01</span>
          <small>GET IN TOUCH</small>
        </div>
      </section>

      {/* CONTACT MAIN SECTION */}
      <section className="contact-main-section">

        <div className="contact-section-heading">
          <div>
            <span className="contact-small-label">
              START A CONVERSATION
            </span>

            <h2>
              Tell Us About
              <span>Your Project.</span>
            </h2>
          </div>

          <p>
            Have a question or planning a new project?
            Complete the enquiry form and our team will
            be happy to assist you.
          </p>
        </div>

        <div className="contact-us-container">

          {/* LEFT SIDE FORM */}
          <div className="contact-form-box">

            <div className="contact-form-heading">
              <span className="contact-form-index">01 / PROJECT ENQUIRY</span>

              <h2>
                Got a Project in Mind?
                <span>Let's Talk About Your Plan!</span>
              </h2>

              <p>
                Share your requirements with us.
                We will help you find the right solution.
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="contact-form-grid">

                <div className="contact-input-group">
                  <label htmlFor="name">FULL NAME *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="contact-input-group">
                  <label htmlFor="email">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="contact-input-group">
                  <label htmlFor="phone">PHONE NUMBER *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+971 XX XXX XXXX"
                    required
                  />
                </div>

                <div className="contact-input-group">
                  <label htmlFor="project">PROJECT TYPE *</label>

                  <select
                    id="project"
                    name="project"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select project type
                    </option>

                    <option>Aluminium Windows & Doors</option>
                    <option>Curtain Wall & Facade</option>
                    <option>Glass & Glazing Works</option>
                    <option>Aluminium Cladding</option>
                    <option>Glass Railings</option>
                    <option>Painting Works</option>
                    <option>Plumbing Works</option>
                    <option>Electrical Works</option>
                    <option>Flooring & Tiling</option>
                    <option>Carpentry & Joinery</option>
                    <option>Civil Construction</option>
                    <option>Building Maintenance</option>
                    <option>Other Construction Works</option>
                  </select>
                </div>

              </div>

              <div className="contact-input-group contact-message-group">
                <label htmlFor="message">PROJECT DETAILS *</label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project requirements..."
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                <span>Send Your Enquiry</span>
                <FaArrowRight />
              </button>

            </form>

            <div className="contact-form-bottom">
              <span>AWAN GENERAL CONTRACTING</span>
              <span>QUALITY · PRECISION · TRUST</span>
            </div>

          </div>

          {/* RIGHT SIDE INFORMATION */}
          <div className="contact-information">

            <div className="contact-info-heading">
              <span className="contact-small-label">
                CONTACT OUR TEAM
              </span>

              <h2>
                We're Here
                <span>To Help You.</span>
              </h2>

              <p className="contact-info-description">
                Connect with our team for project enquiries,
                quotations and professional aluminium
                and construction solutions.
              </p>
            </div>

            {/* EMAIL */}
            <a
              href="mailto:awangcaw@gmail.com"
              className="contact-info-card"
            >
              <div className="contact-info-icon">
                <FaEnvelope />
              </div>

              <div className="contact-info-text">
                <span>EMAIL OUR TEAM</span>
                <h3>awangcaw@gmail.com</h3>
              </div>

              <FaArrowRight className="contact-card-arrow" />
            </a>

            {/* PHONE */}
            <a
              href="tel:+971562700627"
              className="contact-info-card"
            >
              <div className="contact-info-icon">
                <FaPhoneAlt />
              </div>

              <div className="contact-info-text">
                <span>CALL OUR TEAM</span>
                <h3>+971 56 270 0627</h3>
              </div>

              <FaArrowRight className="contact-card-arrow" />
            </a>

            {/* LOCATION */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-location-card"
            >
              <div className="contact-location-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <span>FIND OUR LOCATION</span>
                <h3>View Our Location on Map</h3>
                <p>Open Google Maps for directions</p>
              </div>

              <FaArrowRight className="contact-card-arrow" />
            </a>

            {/* SOCIAL MEDIA */}
            <div className="contact-social">
              <span className="contact-social-label">
                STAY CONNECTED
              </span>

              <h2>Connect With Us</h2>

              <p>
                Follow our work and discover our latest projects.
              </p>

              <div className="social-icons">

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
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
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="mailto:awangcaw@gmail.com"
                  aria-label="Gmail"
                >
                  <SiGmail />
                </a>

              </div>
            </div>

            {/* BRAND FOOTER */}
            <div className="contact-brand-footer">
              <span className="contact-brand-mark">A.</span>

              <div>
                <strong>AWAN ALUMINIUM WORKS</strong>
                <small>ENGINEERED FOR EXCELLENCE</small>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* BOTTOM TRUST STRIP */}
      <section className="contact-trust-strip">
        <div>
          <FaCheckCircle />
          <span>QUALITY MATERIALS</span>
        </div>

        <div>
          <FaCheckCircle />
          <span>PRECISION WORKMANSHIP</span>
        </div>

        <div>
          <FaCheckCircle />
          <span>PROFESSIONAL SOLUTIONS</span>
        </div>
      </section>

    </div>
  );
};

export default Contact;
