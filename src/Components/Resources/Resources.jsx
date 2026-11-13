
import { Link } from 'react-router-dom';
import visit1 from "../../assets/alu007.jpg";
import './Resources.css';

const Resources = () => {
  const solutions = [
    {
      number: '01',
      title: 'Windows & Door Systems',
      description:
        'Precision-engineered aluminium windows and doors designed for modern architecture, durability and everyday performance.',
      link: '/window',
    },
    {
      number: '02',
      title: 'Curtain Walls & Facades',
      description:
        'Contemporary glazing and facade systems that combine architectural beauty with reliable structural performance.',
      link: '/curtain',
    },
    {
      number: '03',
      title: 'Custom Aluminium Works',
      description:
        'Tailored aluminium fabrication, partitions, railings and architectural solutions developed around your project.',
      link: '/services',
    },
  ];

  return (
    <section className="resources-section">
      <div className="resources-layout">

        {/* Content Side */}
        <div className="resources-content">
          <div className="section-label">
            <span></span>
            OUR EXPERTISE
          </div>

          <h1>
            Architectural Solutions
            <strong>Built With Precision.</strong>
          </h1>

          <p className="resources-description">
            AWAN GENERAL ALUMINIUM AND CONSTRUCTION WORK LLC delivers
            professional aluminium and glazing solutions for residential,
            commercial and architectural projects.
          </p>

          <div className="solution-list">
            {solutions.map((solution) => (
              <Link
                to={solution.link}
                className="solution-card"
                key={solution.number}
              >
                <span className="solution-number">{solution.number}</span>

                <div className="solution-details">
                  <h2>{solution.title}</h2>
                  <p>{solution.description}</p>
                </div>

                <span className="solution-arrow">→</span>
              </Link>
            ))}
          </div>

          <Link to="/programz" className="all-solutions-btn">
            Explore All Solutions
            <span>→</span>
          </Link>
        </div>

        {/* Image Side */}
        <div className="resources-image-area">
          <div className="image-frame">
            <img
              src={visit1}
              alt="Professional aluminium architectural work"
              className="resources-image"
            />
          </div>

          <div className="experience-badge">
            <span className="badge-line"></span>
            <div>
              <strong>QUALITY</strong>
              <p>Precision in Every Detail</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resources;
