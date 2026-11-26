
import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

import "./Contact.css";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  service: "",
  recipient: "both",
  message: "",
};

const RECIPIENT_EMAILS = {
  info: "info@agcaw.com",
  sales: "sale@agcaw.com",
  both: "info@agcaw.com, sale@agcaw.com",
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // HANDLE INPUT CHANGES
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status) {
      setStatus("");
    }
  };

  // HANDLE FORM SUBMISSION
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("");

    // EMAILJS CONFIGURATION
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // CHECK EMAILJS CREDENTIALS
    console.log("EmailJS configuration:", {
      serviceID: serviceID ? "Found" : "Missing",
      templateID: templateID ? "Found" : "Missing",
      publicKey: publicKey ? "Found" : "Missing",
    });

    // CHECK MISSING CREDENTIALS
    if (!serviceID || !templateID || !publicKey) {
      console.error("EmailJS configuration is incomplete.");

      setStatus(
        "Email configuration is incomplete. Please check your .env file."
      );

      setLoading(false);
      return;
    }

    // SELECT RECIPIENT
    const selectedRecipient =
      RECIPIENT_EMAILS[formData.recipient];

    if (!selectedRecipient) {
      setStatus("Please select a valid email department.");
      setLoading(false);
      return;
    }

    // EMAIL TEMPLATE PARAMETERS
    const templateParams = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      phone: formData.phone.trim(),
      service: formData.service,
      message: formData.message.trim(),
      to_email: selectedRecipient,
      selected_department: formData.recipient,
    };

    try {
      // SEND EMAIL
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log("EmailJS response:", response);

      if (response.status === 200) {
        setStatus("success");
        setFormData(INITIAL_FORM);
      } else {
        setStatus(
          "Email service did not confirm your enquiry. Please try again."
        );
      }
    } catch (error) {
      console.error("EMAILJS ERROR:", error);

      setStatus(
        error?.text ||
          error?.message ||
          "Unable to send your enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="awan-contact-page">

      {/* =================================
          HERO SECTION
      ================================= */}

      <section className="contact-hero">

        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">

          <span className="contact-small-title">
            AWAN GENERAL CONTRACTING
          </span>

          <h1>Contact Us</h1>

          <p>
            Let's discuss your next project. Our team is ready
            to assist you with professional aluminium and
            contracting solutions.
          </p>

          <a href="#contact-form" className="contact-hero-btn">
            GET IN TOUCH
            <FaArrowRight />
          </a>

        </div>

      </section>

      {/* =================================
          CONTACT FORM SECTION
      ================================= */}

      <section
        className="contact-form-section"
        id="contact-form"
      >

        <div className="contact-container">

          <div className="contact-form-card">

            <div className="contact-form-heading">

              <span>LET'S TALK</span>

              <h2>Send Us Your Enquiry</h2>

              <p>
                Complete the form below and our team will get
                back to you as soon as possible.
              </p>

            </div>

            {/* EMAIL DEPARTMENTS */}

            <div className="contact-recipient-box">

              <div className="recipient-box-heading">

                <FaEnvelope />

                <h3>Our Email Departments</h3>

              </div>

              <div className="recipient-email-grid">

                <a
                  href="mailto:info@agcaw.com"
                  className="recipient-email"
                >

                  <div className="recipient-icon">
                    <FaEnvelope />
                  </div>

                  <div>
                    <span>GENERAL ENQUIRIES</span>
                    <strong>info@agcaw.com</strong>
                  </div>

                </a>

                <a
                  href="mailto:sale@agcaw.com"
                  className="recipient-email"
                >

                  <div className="recipient-icon">
                    <FaEnvelope />
                  </div>

                  <div>
                    <span>SALES DEPARTMENT</span>
                    <strong>sale@agcaw.com</strong>
                  </div>

                </a>

              </div>

              <p className="recipient-note">
                Choose which department should receive your enquiry.
              </p>

            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="awan-contact-form"
            >

              <div className="contact-input-grid">

                {/* NAME */}

                <div className="contact-field">

                  <label htmlFor="contact-name">
                    Your Full Name *
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* EMAIL */}

                <div className="contact-field">

                  <label htmlFor="contact-email">
                    Email Address *
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* PHONE */}

                <div className="contact-field">

                  <label htmlFor="contact-phone">
                    Phone Number *
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="+971 56 270 0627"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* SERVICE */}

                <div className="contact-field">

                  <label htmlFor="contact-service">
                    Select Service *
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Choose a service
                    </option>

                    <option value="Aluminium Works">
                      Aluminium Works
                    </option>

                    <option value="Glass Works">
                      Glass Works
                    </option>

                    <option value="Curtain Wall">
                      Curtain Wall
                    </option>

                    <option value="Doors and Windows">
                      Doors and Windows
                    </option>

                    <option value="Iron Works">
                      Iron Works
                    </option>

                    <option value="Cladding Works">
                      Cladding Works
                    </option>

                    <option value="Partitions">
                      Partitions
                    </option>

                    <option value="General Contracting">
                      General Contracting
                    </option>

                    <option value="Other Services">
                      Other Services
                    </option>

                  </select>

                </div>

                {/* RECIPIENT */}

                <div className="contact-field contact-recipient-select">

                  <label htmlFor="contact-recipient">
                    Select Email Department *
                  </label>

                  <select
                    id="contact-recipient"
                    name="recipient"
                    value={formData.recipient}
                    onChange={handleChange}
                    required
                  >

                    <option value="info">
                      General Enquiries - info@agcaw.com
                    </option>

                    <option value="sales">
                      Sales Department - sale@agcaw.com
                    </option>

                    <option value="both">
                      Both Departments - Info & Sales
                    </option>

                  </select>

                </div>

              </div>

              {/* MESSAGE */}

              <div className="contact-field">

                <label htmlFor="contact-message">
                  Your Message *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>

              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={loading}
              >

                {loading ? (
                  "SENDING..."
                ) : (
                  <>
                    SEND YOUR ENQUIRY
                    <FaPaperPlane />
                  </>
                )}

              </button>

              {/* SUCCESS MESSAGE */}

              {status === "success" && (

                <div
                  className="contact-status success"
                  role="status"
                >

                  <FaCheckCircle />

                  <span>
                    Your enquiry was accepted by the email service.
                    Please check the selected inbox.
                  </span>

                </div>

              )}

              {/* ERROR MESSAGE */}

              {status && status !== "success" && (

                <div
                  className="contact-status error"
                  role="alert"
                >

                  <FaExclamationCircle />

                  <span>{status}</span>

                </div>

              )}

            </form>

          </div>

        </div>

      </section>

      {/* =================================
          CONTACT INFORMATION
      ================================= */}

      <section className="contact-information-section">

        <div className="contact-container">

          <div className="contact-section-heading">

            <span>CONTACT INFORMATION</span>

            <h2>We're Here To Help</h2>

            <p>
              Reach out to our team through your preferred
              contact method.
            </p>

          </div>

          <div className="contact-information-grid">

            {/* GENERAL EMAIL */}

            <a
              href="mailto:info@agcaw.com"
              className="contact-info-card"
            >

              <div className="contact-info-icon">
                <FaEnvelope />
              </div>

              <h3>Email Our Team</h3>

              <p>info@agcaw.com</p>

            </a>

            {/* SALES EMAIL */}

            <a
              href="mailto:sale@agcaw.com"
              className="contact-info-card"
            >

              <div className="contact-info-icon">
                <FaEnvelope />
              </div>

              <h3>Sales Enquiries</h3>

              <p>sale@agcaw.com</p>

            </a>

            {/* PHONE */}

            <a
              href="tel:+971562700627"
              className="contact-info-card"
            >

              <div className="contact-info-icon">
                <FaPhoneAlt />
              </div>

              <h3>Call Our Team</h3>

              <p>+971 56 270 0627</p>

            </a>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/971562700627"
              target="_blank"
              rel="noreferrer"
              className="contact-info-card"
            >

              <div className="contact-info-icon">
                <FaWhatsapp />
              </div>

              <h3>WhatsApp</h3>

              <p>Chat With Our Team</p>

            </a>

            {/* ADDRESS */}

            <a
              href="https://www.google.com/maps/search/?api=1&query=M32%2F2%2C+Musaffah%2C+Abu+Dhabi%2C+UAE"
              target="_blank"
              rel="noreferrer"
              className="contact-info-card"
            >

              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>

              <h3>Find Our Location</h3>

              <p>M32/2, Musaffah, Abu Dhabi - UAE</p>

            </a>

            {/* WORKING HOURS */}

            <div className="contact-info-card">

              <div className="contact-info-icon">
                <FaClock />
              </div>

              <h3>Working Hours</h3>

              <p>Monday - Saturday</p>

              <p>8:00 AM - 6:00 PM</p>

            </div>

          </div>

        </div>

      </section>

      {/* =================================
          GOOGLE MAP
      ================================= */}

      <section className="contact-map-section">

        <div className="contact-container">

          <div className="contact-section-heading">

            <span>OUR LOCATION</span>

            <h2>Visit Our Office</h2>

            <p>
              We welcome you to visit our location in Musaffah,
              Abu Dhabi.
            </p>

          </div>

          <div className="contact-map">

            <iframe
              title="AWAN General Contracting Location"
              src="https://www.google.com/maps?q=M32%2F2%2C%20Musaffah%2C%20Abu%20Dhabi%2C%20UAE&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

        </div>

      </section>

      {/* =================================
          FINAL CTA
      ================================= */}

      <section className="contact-final-cta">

        <div className="contact-container">

          <div className="contact-cta-content">

            <span>LET'S BUILD SOMETHING GREAT</span>

            <h2>
              Ready To Start Your Next Project?
            </h2>

            <p>
              Contact AWAN General Contracting & Aluminium Works
              today for professional solutions and dedicated support.
            </p>

            <div className="contact-cta-buttons">

              <a href="tel:+971562700627">
                CALL US
                <FaPhoneAlt />
              </a>

              <a
                href="https://wa.me/971562700627"
                target="_blank"
                rel="noreferrer"
              >
                WHATSAPP
                <FaWhatsapp />
              </a>

            </div>

            {/* SOCIAL LINKS */}

            <div className="contact-social-links">

              <a
                href="https://www.facebook.com/agcaw/about/?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=100091272055967&sk=about"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/awangen.cont.alumi.works/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Contact;
