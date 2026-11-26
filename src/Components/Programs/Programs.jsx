
import { Link } from "react-router-dom";
import "./Programs.css";

const Programs = () => {
  return (
    <section className="awan-project-banner">

      {/* Architectural background illustration */}
      <svg
        className="awan-building-art awan-building-left"
        viewBox="0 0 650 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g stroke="#00C8EF" strokeWidth="1.2">
          <path d="M30 400V0L74 30V400" />
          <path d="M30 0L74 30" />
          <path d="M30 105L74 82L153 130V400" />
          <path d="M74 82V30" />
          <path d="M74 82L153 130V153L74 105" />
          <path d="M153 400V82L194 59L273 105V400" />
          <path d="M153 82L194 59L273 105" />
          <path d="M194 59V105" />
          <path d="M194 82L273 128V151L194 105" />
          <path d="M194 151L234 128L313 175V400" />
          <path d="M234 128V175" />
          <path d="M234 151L313 198V221L234 175" />
          <path d="M313 400V175L354 152L433 199V400" />
          <path d="M313 175L354 152L433 199" />
          <path d="M354 152V199" />
          <path d="M354 175L433 222V245L354 199" />
          <path d="M433 400V128L473 105L553 151V400" />
          <path d="M433 128L473 105L553 151" />
          <path d="M473 105V151" />
          <path d="M473 128L553 175V198L473 151" />
          <path d="M553 400V221L593 198L633 221V400" />
          <path d="M553 221L593 198L633 221" />
          <path d="M593 198V245" />
          <path d="M553 268L593 245L633 268" />
          <path d="M553 291L593 268L633 291" />
          <path d="M114 400V198L153 175L194 198" />
          <path d="M114 245V198" />
          <path d="M153 175V221" />
          <path d="M153 198L194 221V244L153 221" />
          <path d="M273 400V290L313 267L353 290" />
          <path d="M273 313V290" />
          <path d="M313 267V313" />
          <path d="M313 290L353 313V336L313 313" />
        </g>
      </svg>

      <svg
        className="awan-building-art awan-building-right"
        viewBox="0 0 430 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g stroke="#00C8EF" strokeWidth="1.2">
          <path d="M10 220V116L91 70L131 94V220" />
          <path d="M10 116L91 70V115" />
          <path d="M91 70V27L131 50V94" />
          <path d="M131 94L171 116V220" />
          <path d="M131 116L171 139V162L131 139" />
          <path d="M210 220V115L290 70L330 94V220" />
          <path d="M210 115L290 70V116" />
          <path d="M290 70V27L330 50V94" />
          <path d="M330 94L370 116V220" />
          <path d="M330 116L370 139V162L330 139" />
          <path d="M370 220V145L410 122V220" />
          <path d="M370 145L410 122" />
          <path d="M210 150L290 105L330 128" />
          <path d="M10 150L91 105L131 128" />
        </g>
      </svg>

      {/* Main content */}
      <div className="awan-banner-content">

        <div className="awan-banner-heading">
          <h1>
            Get in Touch
            <br />
            for Your Next Project
          </h1>
        </div>

        <div className="awan-banner-actions">

          <Link to="/contact" className="awan-quote-button">
            Get a quote
          </Link>

          <Link to="/programz" className="awan-services-button">
            Our services
          </Link>

        </div>

      </div>

    </section>
  );
};

export default Programs;
