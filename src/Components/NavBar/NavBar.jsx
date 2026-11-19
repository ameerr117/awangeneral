
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

import logo from "../../assets/a6759469-cb67-47ae-be2d-838ac8b91cec.png";

import {
  FaWindowMaximize,
  FaDoorOpen,
  FaBuilding,
  FaLayerGroup,
  FaBorderAll,
  FaUserCircle,
  FaSearch,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope
} from 'react-icons/fa';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavigation = () => {
    scrollTop();
  };

  /* WEBSITE SEARCH */
  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchTerm.trim().toLowerCase();

    if (!query) return;

    const searchPages = [
      { keywords: ['home', 'main', 'awan'], path: '/' },
      { keywords: ['about', 'company', 'construction', 'aluminium company'], path: '/about' },
      { keywords: ['window', 'windows', 'sliding window', 'aluminium window'], path: '/window' },
      { keywords: ['door', 'doors', 'aluminium door'], path: '/door' },
      { keywords: ['cladding', 'facade', 'façade', 'panel'], path: '/cladding' },
      { keywords: ['tent', 'tents', 'aluminium tent'], path: '/tents' },
      { keywords: ['glass', 'architectural glass', 'glazing'], path: '/glass' },
      { keywords: ['solution', 'solutions', 'services'], path: '/programz' },
      { keywords: ['blog', 'news', 'insights'], path: '/blog' },
      { keywords: ['project', 'projects'], path: '/blog-detail' },
      { keywords: ['technical', 'information'], path: '/element' },
      { keywords: ['contact', 'phone', 'email', 'call'], path: '/contact' }
    ];

    const result = searchPages.find((page) =>
      page.keywords.some((keyword) =>
        query.includes(keyword) || keyword.includes(query)
      )
    );

    if (result) {
      navigate(result.path);
      setIsSearchOpen(false);
      setSearchTerm('');
      scrollTop();
    } else {
      alert(`No results found for "${searchTerm}".`);
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>

        {/* TOP NAVBAR */}
        <div className="navbar-top">

          {/* LOGO */}
          <div className="navbar-left">
            <Link to="/" onClick={handleNavigation}>
              <img
                src={logo}
                alt="AWAN Company Logo"
                className="logoo"
              />
            </Link>
          </div>

          {/* COMPANY BRAND */}
          <div className="navbar-brand">
            <span className="brand-name">
              AWAN GENERAL CONTRACTING
            </span>

            <span className="brand-subtitle">
              & ALUMINIUM WORK LLC
            </span>

            <span className="brand-tagline">
              ARCHITECTURAL ALUMINIUM SOLUTIONS
            </span>
          </div>

          {/* RIGHT INFORMATION */}
          <div className="navbar-right">

            {/* CLIENT PORTAL */}
            <Link
              to="/element"
              onClick={handleNavigation}
              className="account-link"
            >
              <FaUserCircle className="account-icon" />

              <div className="account-text">
                <span>CLIENT PORTAL</span>
                <strong>MY ACCOUNT</strong>
              </div>
            </Link>

            {/* CONTACT */}
            <div className="contact-info">
              <span className="call">CALL US</span>

              <a
                href="tel:+971508089726"
                className="phone-number"
              >
                +971 0508089726
              </a>
            </div>

            {/* SOCIAL MEDIA ICONS */}
            <div className="social-icons">

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="social-link facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/fadibadshah/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="social-link instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="social-link linkedin"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="mailto:AGCAW@gmail.com"
                aria-label="Company Email"
                title="Email"
                className="social-link email"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>
        </div>

        {/* MAIN NAVIGATION */}
        <div className="nav-links">
          <ul>

            <li>
              <Link to="/" onClick={handleNavigation}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={handleNavigation}>
                About Us
              </Link>
            </li>

            {/* ALUMINIUM SOLUTIONS */}
            <li className="dropdown programs-menu">

              <Link to="/programz" onClick={handleNavigation}>
                Aluminium Solutions
                <span className="nav-arrow">⌄</span>
              </Link>

              <div className="mega-menu">

                <div className="mega-menu-header">
                  <span>ARCHITECTURAL ALUMINIUM SOLUTIONS</span>

                  <p>
                    Explore our modern aluminium and glass systems,
                    engineered for residential, commercial and
                    architectural projects.
                  </p>
                </div>

                <div className="mega-menu-grid">

                  <div className="mega-column">
                    <h4><FaWindowMaximize /> WINDOWS</h4>
                    <Link to="/window" onClick={handleNavigation}>
                      Aluminium Windows
                    </Link>
                  </div>

                  <div className="mega-column">
                    <h4><FaDoorOpen /> DOORS</h4>
                    <Link to="/door" onClick={handleNavigation}>
                      Aluminium Doors
                    </Link>
                  </div>

                  <div className="mega-column">
                    <h4><FaBuilding /> CLADDING</h4>
                    <Link to="/cladding" onClick={handleNavigation}>
                      Aluminium Cladding
                    </Link>
                  </div>

                  <div className="mega-column">
                    <h4><FaLayerGroup /> TENTS</h4>
                    <Link to="/tents" onClick={handleNavigation}>
                      Aluminium Tents
                    </Link>
                  </div>

                  <div className="mega-column">
                    <h4><FaLayerGroup /> GLASS</h4>
                    <Link to="/glass" onClick={handleNavigation}>
                      Architectural Glass
                    </Link>
                  </div>

                </div>

                <div className="mega-menu-footer">
                  <FaBorderAll />

                  <span>
                    Quality. Precision. Architectural Excellence.
                  </span>

                  <Link to="/programz" onClick={handleNavigation}>
                    VIEW ALL SOLUTIONS →
                  </Link>
                </div>

              </div>
            </li>

            {/* INSIGHTS */}
            <li className="dropdown">

              <Link to="/blog" onClick={handleNavigation}>
                Insights
                <span className="nav-arrow">⌄</span>
              </Link>

              <ul className="dropdown-content">

                <li>
                  <Link to="/blog" onClick={handleNavigation}>
                    Projects
                  </Link>
                </li>

                <li>
                  <Link to="/blog-detail" onClick={handleNavigation}>
                    Other Services
                  </Link>
                </li>

                <li>
                  <Link to="/element" onClick={handleNavigation}>
                    Client Portal
                  </Link>
                </li>

              </ul>
            </li>

            <li>
              <Link to="/contact" onClick={handleNavigation}>
                Contact
              </Link>
            </li>

            {/* SEARCH */}
            <li className="nav-search-item">
              <button
                type="button"
                className="nav-search-modern"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search website"
              >
                <FaSearch />
                <span>SEARCH</span>
              </button>
            </li>

          </ul>
        </div>

      </nav>

      {/* SEARCH POPUP */}
      {isSearchOpen && (
        <div
          className="website-search-overlay"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="website-search-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              className="website-search-close"
              onClick={() => setIsSearchOpen(false)}
              aria-label="Close search"
            >
              <FaTimes />
            </button>

            <span className="website-search-label">
              AWAN GENERAL ALUMINIUM
            </span>

            <h2>Search Our Website</h2>

            <p className="website-search-text">
              Find aluminium solutions, windows, doors, glass systems,
              project information and more.
            </p>

            <form onSubmit={handleSearch}>

              <div className="website-search-input">
                <FaSearch />

                <input
                  type="text"
                  placeholder="Search windows, doors, glass, projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
              </div>

              <button
                type="submit"
                className="website-search-submit"
              >
                SEARCH WEBSITE
              </button>

            </form>

            <div className="website-search-suggestions">
              <span>POPULAR SEARCHES</span>

              {['windows', 'doors', 'glass', 'contact'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSearchTerm(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

          </div>
        </div>
      )}

    </>
  );
};

export default NavBar;
