import './About.css';
import Approach from "../../Components/Approach/Approach";
import Resources from "../../Components/Resources/Resources";
import Stories from "../../Components/Stories/Stories";
import Parteners from "../../Components/Parteners/Parteners";
import Page from "../../Components/Page/Page";

const About = () => {
  return (
    <main className="Full">

      {/* Professional About Banner */}
      <section className="Abouts">
        <div className="about-overlay"></div>

        <div className="Abouts-text">
          <span className="about-tag">
            AWAN GENERAL CONTRACTING & ALUMINIUM WORK L.L.C
          </span>

          <h1>Engineering Quality. Building Confidence.</h1>

          <p>
            We deliver professional aluminium, glass and architectural
            solutions for residential, commercial and construction projects,
            combining precision fabrication, quality workmanship and reliable
            project execution.
          </p>

          <div className="about-banner-line"></div>

          <div className="about-highlights">
            <span>ALUMINIUM SYSTEMS</span>
            <span>ARCHITECTURAL GLAZING</span>
            <span>PROFESSIONAL INSTALLATION</span>
          </div>
        </div>
      </section>

      {/* Company Sections */}
      <Approach />
      <Resources />
      <Stories />
      <Parteners />
      <Page />

    </main>
  );
};

export default About;