
import { Link } from "react-router-dom";
import "./Approach.css";

// IMPORT LOCAL IMAGES
import windowImage from "../../assets/window mirror.jpeg";
import doorImage from "../../assets/Glass door.jpeg";
import claddingImage from "../../assets/cladding.jpeg";
import tentImage from "../../assets/tents.jpeg";
import kitchenImage from "../../assets/kitchen.jpeg";
import curtainImage from "../../assets/cutain wall.jpeg";
import partitionImage from "../../assets/partition.jpeg";
import gateImage from "../../assets/Wrought Iron Gate.jpeg";
import parkingImage from "../../assets/Car Parking and shade .jpeg";
import gypsumImage from "../../assets/paints and gypsum works.jpeg";

// ALL 10 AWAN SERVICES
const solutions = [
  {
    id: 1,
    name: "WINDOWS",
    description: "Aluminium Windows",
    image: windowImage,
    link: "/window",
  },
  {
    id: 2,
    name: "DOORS",
    description: "Aluminium Doors",
    image: doorImage,
    link: "/door",
  },
  {
    id: 3,
    name: "CLADDING",
    description: "Aluminium Cladding",
    image: claddingImage,
    link: "/cladding",
  },
  {
    id: 4,
    name: "TENTS",
    description: "Aluminium Tents",
    image: tentImage,
    link: "/tents",
  },
  {
    id: 5,
    name: "KITCHEN ALUMINIUM",
    description: "Custom Aluminium Kitchen Solutions",
    image: kitchenImage,
    link: "/glass",
  },
  {
    id: 6,
    name: "CURTAIN WALLS",
    description: "Curtain Wall Systems",
    image: curtainImage,
    link: "/check",
  },
  {
    id: 7,
    name: "GLASS PARTITIONS",
    description: "Glass Partition Systems",
    image: partitionImage,
    link: "/gallery",
  },
  {
    id: 8,
    name: "WROUGHT IRON GATE",
    description: "Wrought Iron Gate",
    image: gateImage,
    link: "/wrought-iron",
  },
  {
    id: 9,
    name: "CAR PARKINGS & SHADES",
    description: "Car Parking and Shade Structures",
    image: parkingImage,
    link: "/car-parking",
  },
  {
    id: 10,
    name: "PAINTS & GYPSUM WORKS",
    description: "Interior Finishing Services",
    image: gypsumImage,
    link: "/timer",
  },
];

const Approach = () => {
  return (
    <section className="awan-approach" id="solutions">

      <div className="awan-solutions-container">

        {/* SECTION HEADING */}
        <div className="awan-solutions-heading">
          <span>
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          </span>

          <h2>ARCHITECTURAL ALUMINIUM SOLUTIONS</h2>

          <p>
            Explore our complete range of aluminium, architectural glass,
            kitchen aluminium, structural systems, gates, parking shades
            and interior finishing services for residential and
            commercial projects.
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="awan-solutions-grid">

          {solutions.map((item) => (
            <Link
              to={item.link}
              className="awan-solution-card"
              key={item.id}
            >

              {/* IMAGE */}
              <div className="awan-solution-image">

                <img
                  src={item.image}
                  alt={item.description}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.opacity = "0";
                  }}
                />

                <div className="awan-solution-image-overlay"></div>

                {/* COMPANY BRANDING */}
                <div className="awan-solution-brand">
                  <strong>AWAN</strong>
                  <small>ALUMINIUM WORKS</small>
                </div>

                {/* NUMBER */}
                <span className="awan-solution-number">
                  {String(item.id).padStart(2, "0")}
                </span>

                {/* VIEW DETAILS */}
                <span className="awan-solution-view">
                  VIEW DETAILS ↗
                </span>

              </div>

              {/* PRODUCT INFORMATION */}
              <div className="awan-solution-info">

                <h3>{item.name}</h3>

                <p>{item.description}</p>

                <span className="awan-solution-link">
                  EXPLORE SOLUTION <span>↗</span>
                </span>

              </div>

            </Link>
          ))}

        </div>

        {/* FOOTER */}
        <div className="awan-solutions-footer">

          <p>
            <span>✥</span>
            Quality. Precision. Architectural Excellence.
          </p>

          <Link to="/contact">
            DISCUSS YOUR PROJECT →
          </Link>

        </div>

      </div>

    </section>
  );
};

export default Approach;
