
import about1 from "../../assets/alu006.jpg";
import './Approach.css';

const Approach = () => {
  return (
    <section className="programs">
      <div className="program">

        <div className="program-image">
          <img
            src={about1}
            alt="Professional aluminium and architectural work"
          />

          <div className="image-badge">
            <span>QUALITY</span>
            <strong>PRECISION</strong>
          </div>
        </div>

        <div className="program-text">
          <span className="approach-label">
            OUR APPROACH
          </span>

          <h1>
            Precision Engineering for Modern Aluminium Solutions
          </h1>

          <div className="title-line"></div>

          <p>
            At AWAN GENERAL CONTRACTING & ALUMINIUM WORK LLC,
            we provide professional aluminium, glass and architectural
            solutions for residential, commercial and construction
            projects. Our approach focuses on accurate fabrication,
            quality materials and reliable installation.
          </p>

          <p>
            From initial project requirements through fabrication
            and final installation, our team works with attention
            to detail, clear coordination and professional
            workmanship to support successful project delivery.
          </p>

          <div className="approach-features">
            <div>
              <span>01</span>
              <p>Precision Fabrication</p>
            </div>

            <div>
              <span>02</span>
              <p>Quality Workmanship</p>
            </div>

            <div>
              <span>03</span>
              <p>Professional Installation</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Approach;
