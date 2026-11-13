
import './Page.css';
import { Link } from 'react-router-dom';
import visit2 from "../../assets/WhatsApp Image 2026-11-07 at 1.31.17 AM.jpeg";

const Page = () => {
  return (
    <div className="page-container">

      <div className="leftside">
        <img
          src={visit2}
          alt="Aluminium and construction project"
          className="left-image"
        />
      </div>

      <div className="rightside">
        <span className="page-tag">AWAN GENERAL ALUMINIUM</span>

        <h1>
          QUALITY ALUMINIUM SOLUTIONS FOR MODERN PROJECTS
        </h1>

        <p>
          We provide professional aluminium and glass solutions for
          residential, commercial and architectural projects.
        </p>

        <p>
          Our services include aluminium windows, doors, curtain wall
          systems, glass partitions, railings and custom fabrication.
          We focus on quality workmanship, precision and reliable service.
        </p>

        <Link to="/programz" className="learn-more">
          Explore Our Services
          <span> ↗</span>
        </Link>
      </div>

    </div>
  );
};

export default Page;
