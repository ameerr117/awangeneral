
import { Link } from 'react-router-dom';
import Stories from "../../Components/Stories/Stories";

import blog1 from "../../assets/WhatsApp Image 2026-11-11 at 12.28.50 AM (1).jpeg";
import blog2 from "../../assets/alu006.jpg";
import blog3 from "../../assets/alu008.jpg";
import blog4 from "../../assets/alu007.jpg";

import './Programz.css';


const products = [
  {
    title: "Aluminium Windows",
    category: "WINDOWS",
    image: blog1,
    description: "Premium aluminium window systems for modern residential and commercial buildings.",
    link: "/Window"
  },
  {
    title: "Aluminium Doors",
    category: "DOORS",
    image: blog2,
    description: "Modern aluminium door solutions combining durability, functionality and architectural style.",
    link: "/Door"
  },
  {
    title: "Aluminium Cladding",
    category: "CLADDING",
    image: blog3,
    description: "High-quality aluminium cladding systems for contemporary building facades.",
    link: "/Cladding"
  },
  {
    title: "Aluminium Tents",
    category: "TENTS",
    image: blog4,
    description: "Strong and durable aluminium tent structures for outdoor and commercial applications.",
    link: "/Tents"
  },
  {
    title: "Architectural Glass",
    category: "GLASS",
    image: blog1,
    description: "Architectural glass solutions for modern buildings, offices and interior spaces.",
    link: "/Glass"
  },
  {
    title: "Curtain Wall Systems",
    category: "CURTAIN WALLS",
    image: blog2,
    description: "Modern aluminium and glass curtain wall systems for elegant building exteriors.",
    link: "/Curtain"
  },
  {
    title: "Glass Partition Systems",
    category: "GLASS PARTITIONS",
    image: blog3,
    description: "Professional glass partition systems for modern offices and interior environments.",
    link: "/Partition"
  },
  {
    title: "Wrought Iron Gate",
    category: "WROUGHT IRON GATE",
    image: blog4,
    description: "Custom wrought iron gates designed for security, strength and attractive entrances.",
    link: "/Iron"
  },
  {
    title: "Car Parkings & Shades",
    category: "CAR PARKINGS & SHADES",
    image: blog1,
    description: "Durable parking shades and structures designed to protect vehicles from sunlight and weather.",
    link: "/Parking"
  },
  {
    title: "Paints & Gypsum Works",
    category: "PAINTS & GYPSUM WORKS",
    image: blog2,
    description: "Professional painting and gypsum finishing solutions for modern residential and commercial interiors.",
    link: "/Paints"
  }
];


const Programz = () => {
  return (
    <div className="Full">

      {/* HERO SECTION */}
      <section className="products-hero">
        <div className="products-hero-content">
          <span className="products-label">
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          </span>

          <h1>OUR PRODUCTS</h1>

          <p>
            Explore our complete range of aluminium, glass and
            architectural solutions designed for modern residential,
            commercial and industrial projects.
          </p>

          <Link to="/contact" className="products-hero-btn">
            DISCUSS YOUR PROJECT →
          </Link>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="products-intro">
        <div className="products-intro-heading">
          <span>WHAT WE OFFER</span>
          <h2>Complete Aluminium Solutions</h2>
        </div>

        <p>
          From aluminium windows and doors to curtain walls, glass
          partitions, cladding and structural shades, AWAN delivers
          professional solutions for modern construction projects.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="products-section">

        <div className="products-section-heading">
          <div>
            <span>OUR COLLECTION</span>
            <h2>Explore Our Products</h2>
          </div>

          <p>{products.length} PRODUCT CATEGORIES</p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.title}>

              {/* IMAGE */}
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                />

                <span className="product-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="product-image-overlay">
                  AWAN ALUMINIUM
                </span>
              </div>

              {/* CONTENT */}
              <div className="product-content">

                <span className="product-category">
                  {product.category}
                </span>

                <h3>{product.title}</h3>

                <p>{product.description}</p>

                <Link
                  to={product.link}
                  className="product-link"
                >
                  VIEW DETAILS <span>↗</span>
                </Link>

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="products-contact">
        <div>
          <span>HAVE A PROJECT IN MIND?</span>

          <h2>Lets Build Something Exceptional.</h2>

          <p>
            Contact our team to discuss your aluminium, glass
            and architectural requirements.
          </p>
        </div>

        <Link to="/contact" className="products-contact-btn">
          CONTACT US →
        </Link>
      </section>

      {/* STORIES */}
      <section className="products-stories">
        <Stories />
      </section>

    </div>
  );
};

export default Programz;
