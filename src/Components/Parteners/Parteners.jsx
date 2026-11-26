
import "./Parteners.css";

const statistics = [
  {
    number: "2019",
    label: "ESTABLISHED YEAR",
    description: "Our journey of quality and excellence",
    index: "01",
  },
  {
    number: "50+",
    label: "PROFESSIONAL EMPLOYEES",
    description: "A dedicated and skilled workforce",
    index: "02",
  },
  {
    number: "1.2M",
    label: "ALUMINIUM PROCESSING",
    unit: "KG / YEAR",
    description: "Annual aluminium processing capacity",
    index: "03",
  },
];

const Parteners = () => {
  return (
    <section className="partners-brand">
      <div className="partners-bg-circle"></div>

      <div className="partners-main-container">

        {/* LEFT SIDE */}
        <div className="partners-left">

          <span className="partners-eyebrow">
            <span className="partners-eyebrow-line"></span>
            WELCOME TO AWAN
          </span>

          <h2>
            BUILDING
            <span> EXCELLENCE.</span>
            <br />
            SHAPING
            <span> THE FUTURE.</span>
          </h2>

          <p className="partners-description">
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS delivers
            quality aluminium solutions, professional workmanship
            and architectural excellence. We combine precision,
            innovation and experience to bring every project to life.
          </p>

          <div className="partners-divider">
            <span></span>
          </div>

          <div className="partners-brand-bottom">
            <span className="partners-brand-mark">AWAN</span>
            <div>
              <strong>GENERAL CONTRACTING</strong>
              <small>& ALUMINIUM WORKS</small>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="partners-right">

          <div className="partners-stats-heading">
            <span>OUR COMPANY</span>
            <h3>AT A GLANCE</h3>
          </div>

          <div className="partners-statistics">

            {statistics.map((item) => (
              <div className="partner-stat-item" key={item.index} tabIndex="0">

                <div className="partner-stat-number">
                  {item.index}
                </div>

                <div className="partner-stat-content">
                  <h4>
                    {item.number}
                    {item.unit && (
                      <small>{item.unit}</small>
                    )}
                  </h4>

                  <p>{item.label}</p>
                  <span>{item.description}</span>
                </div>

                <div className="partner-stat-arrow">↗</div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Parteners;
