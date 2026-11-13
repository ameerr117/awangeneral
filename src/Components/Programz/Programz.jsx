import { Link } from 'react-router-dom';
import Stories from "../../Components/Stories/Stories";

import blog1 from "../../assets/WhatsApp Image 2026-11-11 at 12.28.50 AM (1).jpeg";
import blog2 from "../../assets/alu006.jpg";
import blog3 from "../../assets/alu008.jpg";
import blog4 from "../../assets/alu006.jpg";

import './Programz.css';

const products = [
  {
    title: "Windows",
    category: "WINDOW SYSTEMS",
    image: blog1,
    description:
      "Modern aluminium window systems designed for smooth operation, natural light and contemporary buildings.",
    link: "/window"
  },
  {
    title: "Doors",
    category: "DOOR SYSTEMS",
    image: blog2,
    description:
      "Professional aluminium door solutions designed for residential, commercial and architectural applications.",
    link: "/door"
  },
  {
    title: "Aluminium Curtain",
    category: "CURTAIN WALL SYSTEMS",
    image: blog3,
    description:
      "Architectural aluminium and glazing systems for elegant commercial buildings and modern exterior facades.",
    link: "/curtain"
  },
  {
    title: "Aluminium Glass",
    category: "GLASS SYSTEMS",
    image: blog4,
    description:
      "Professional architectural glass and glazing solutions for modern residential and commercial spaces.",
    link: "/glass"
  },
  {
    title: "Tents",
    category: "ALUMINIUM SOLUTIONS",
    image: blog1,
    description:
      "Complete aluminium solutions designed for modern construction, fabrication and architectural applications.",
    link: "/tents"
  },
  {
    title: "Aluminium Cladding",
    category: "CLADDING SYSTEMS",
    image: blog2,
    description:
      "Durable aluminium cladding systems designed to protect and enhance modern building facades.",
    link: "/cladding"
  },
  {
    title: "Aluminium Composite Cladding",
    category: "CLADDING SYSTEMS",
    image: blog3,
    description:
      "Contemporary aluminium composite panel solutions for attractive and professional building elevations.",
    link: "/cladding"
  },
  {
    title: "Glass Partition Systems",
    category: "INTERIOR GLASS SYSTEMS",
    image: blog4,
    description:
      "Modern glass partition systems that create functional interior spaces while maintaining openness and natural light.",
    link: "/glass"
  },
  {
    title: "Aluminium Louvers",
    category: "ARCHITECTURAL SYSTEMS",
    image: blog1,
    description:
      "Architectural aluminium louver systems designed for shading, ventilation and modern facade detailing.",
    link: "/tents"
  },
  {
    title: "Automatic Glass Doors",
    category: "DOOR SYSTEMS",
    image: blog2,
    description:
      "Automatic aluminium and glass entrance door solutions for offices, commercial spaces and public buildings.",
    link: "/door"
  },
  {
    title: "Frameless Glass Doors",
    category: "GLASS & DOOR SYSTEMS",
    image: blog3,
    description:
      "Minimalist frameless glass door solutions for clean, modern and elegant architectural spaces.",
    link: "/glass"
  },
  {
    title: "Aluminium Skylights",
    category: "ROOF & GLASS SYSTEMS",
    image: blog4,
    description:
      "Modern aluminium and glazed roof systems designed to introduce natural daylight into architectural spaces.",
    link: "/glass"
  },
  {
    title: "Aluminium Kitchen Cabinets",
    category: "INTERIOR ALUMINIUM",
    image: blog1,
    description:
      "Functional and durable aluminium cabinet solutions designed for modern kitchens and interior environments.",
    link: "/tents"
  },
  {
    title: "Aluminium Shopfront Systems",
    category: "COMMERCIAL SYSTEMS",
    image: blog2,
    description:
      "Professional aluminium shopfront and commercial glazing systems designed for retail and business spaces.",
    link: "/door"
  }
];

const Programz = () => {
  return (
    <div className="Full">

      {/* HERO SECTION */}
      <section className="products-hero">
        <div className="products-hero-content">
          <span className="products-label">AWAN GENERAL ALUMINIUM</span>

          <h1>OUR PRODUCTS</h1>

          <p>
            Explore our range of aluminium, glass and architectural
            systems designed for modern residential and commercial spaces.
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
          <h2>Architectural Aluminium Solutions</h2>
        </div>

        <p>
          Discover our complete range of aluminium, glass and architectural
          solutions. From windows and doors to curtain walls, cladding and
          glazing systems, our products are designed for modern construction.
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
                <img src={product.image} alt={product.title} />

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

                {/* RELATED PAGE LINK */}
                <Link to={product.link} className="product-link">
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
            Contact our team to discuss your aluminium and architectural
            requirements.
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