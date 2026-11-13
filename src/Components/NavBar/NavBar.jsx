
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

import logo from "../../assets/a6759469-cb67-47ae-be2d-838ac8b91cec.png";
import fb from "../../assets/FBlogo.png";
import insta from "../../assets/instalogo.webp";
import twitter from "../../assets/Twitterlogo.png";
import linkdin from "../../assets/inlogo.png";
import gmail from "../../assets/Gmaillogo.png";

import {
  FaWindowMaximize,
  FaDoorOpen,
  FaBuilding,
  FaLayerGroup,
  FaBorderAll,
  FaUserCircle,
  FaSearch,
  FaTimes
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

  /* =========================================
     WEBSITE SEARCH
  ========================================= */

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchTerm.trim().toLowerCase();

    if (!query) return;

    const searchPages = [
      {
        keywords: ['home', 'main', 'awan'],
        path: '/',
      },
      {
        keywords: ['about', 'company', 'construction', 'aluminium company'],
        path: '/about',
      },
      {
        keywords: ['window', 'windows', 'sliding window', 'aluminium window'],
        path: '/window',
      },
      {
        keywords: ['door', 'doors', 'aluminium door'],
        path: '/door',
      },
      {
        keywords: ['cladding', 'facade', 'façade', 'panel'],
        path: '/cladding',
      },
      {
        keywords: ['tent', 'tents', 'aluminium tent'],
        path: '/tents',
      },
      {
        keywords: ['glass', 'architectural glass', 'glazing'],
        path: '/glass',
      },
      {
        keywords: ['solution', 'solutions', 'services', 'aluminium solutions'],
        path: '/programz',
      },
      {
        keywords: ['blog', 'news', 'insights', 'industry news'],
        path: '/blog',
      },
      {
        keywords: ['project', 'projects', 'project insights'],
        path: '/blog-detail',
      },
      {
        keywords: ['technical', 'technical information', 'information'],
        path: '/element',
      },
      {
        keywords: ['contact', 'phone', 'email', 'call'],
        path: '/contact',
      }
    ];

    const result = searchPages.find((page) =>
      page.keywords.some(
        (keyword) =>
          query.includes(keyword) || keyword.includes(query)
      )
    );

    if (result) {
      navigate(result.path);
      setIsSearchOpen(false);
      setSearchTerm('');
      scrollTop();
    } else {
      alert(`No results found for "${searchTerm}". Please try another keyword.`);
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>

        {/* =====================================
            TOP NAVBAR
        ====================================== */}
        <div className="navbar-top">

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
              AWAN GENERAL CONSTRUCTION
            </span>

            <span className="brand-subtitle">
              & ALUMINIUM WORK LLC
            </span>

            <span className="brand-tagline">
              ARCHITECTURAL ALUMINIUM SOLUTIONS
            </span>
          </div>

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

              <a href="tel:+9710050607000" className="phone-number">
                +971 005 060 7000
              </a>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="social-icons">

              <a
                href="https://web.facebook.com/fahad.yaseen.5076/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img src={fb} alt="Facebook" />
              </a>

              <a
                href="https://www.instagram.com/fadibadshah/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img src={insta} alt="Instagram" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <img src={twitter} alt="Twitter" />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src={linkdin} alt="LinkedIn" />
              </a>

              <a
                href="mailto:AGCAW@gmail.com"
                aria-label="Company Email"
              >
                <img src={gmail} alt="Email" />
              </a>

            </div>

          </div>
        </div>

        {/* =====================================
            MAIN NAVIGATION
        ====================================== */}
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

            {/* ALUMINIUM SOLUTIONS MEGA MENU */}
            <li className="dropdown programs-menu">

              <Link to="/programz" onClick={handleNavigation}>
                Aluminium Solutions
                <span className="nav-arrow">⌄</span>
              </Link>

              <div className="mega-menu">

                <div className="mega-menu-header">
                  <span>ARCHITECTURAL ALUMINIUM SOLUTIONS</span>

                  <p>
                    Explore our range of modern aluminium and glass
                    systems, engineered for residential, commercial
                    and architectural projects.
                  </p>
                </div>

                <div className="mega-menu-grid">

                  <div className="mega-column">
                    <h4>
                      <FaWindowMaximize />
                      WINDOWS
                    </h4>

                    <Link to="/window" onClick={handleNavigation}>
                      Aluminium Windows
                    </Link>
                  </div>

                  <div className="mega-column">
                    <h4>
                      <FaDoorOpen />
                      DOORS
                    </h4>

                    <Link to="/door" onClick={handleNavigation}>
                      Aluminium Doors
                    </Link>
                  </div>

                  <div className="mega-column">
                    <h4>
                      <FaBuilding />
                      CLADDING
                    </h4>

                    <Link to="/cladding" onClick={handleNavigation}>
                      Aluminium Cladding
                    </Link>
                  </div>

                  <div className="mega-column">
                    <h4>
                      <FaLayerGroup />
                      TENTS
                    </h4>

                    <Link to="/tents" onClick={handleNavigation}>
                      Aluminium Tents
                    </Link>
                  </div>

                  <div className="mega-column">
                    <h4>
                      <FaLayerGroup />
                      GLASS
                    </h4>

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

            {/* INSIGHTS DROPDOWN */}
            <li className="dropdown">

              <Link to="/blog" onClick={handleNavigation}>
                Insights
                <span className="nav-arrow">⌄</span>
              </Link>

              <ul className="dropdown-content">

                <li>
                  <Link to="/blog" onClick={handleNavigation}>
                    Industry News
                  </Link>
                </li>

                <li>
                  <Link to="/blog-detail" onClick={handleNavigation}>
                    Project Insights
                  </Link>
                </li>

                <li>
                  <Link to="/element" onClick={handleNavigation}>
                    Technical Information
                  </Link>
                </li>

              </ul>
            </li>

            <li>
              <Link to="/contact" onClick={handleNavigation}>
                Contact
              </Link>
            </li>

            {/* PROFESSIONAL SEARCH BUTTON - BELOW ROW */}
            <li className="nav-search-item">
              <button
                type="button"
                className="nav-search-modern"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search website"
                title="Search website"
              >
                <FaSearch />
                <span>SEARCH</span>
              </button>
            </li>

          </ul>
        </div>

      </nav>

      {/* =====================================
          WEBSITE SEARCH POPUP
      ====================================== */}
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

              <button type="submit" className="website-search-submit">
                SEARCH WEBSITE
              </button>
            </form>

            <div className="website-search-suggestions">
              <span>POPULAR SEARCHES</span>

              <button
                type="button"
                onClick={() => setSearchTerm('windows')}
              >
                Windows
              </button>

              <button
                type="button"
                onClick={() => setSearchTerm('doors')}
              >
                Doors
              </button>

              <button
                type="button"
                onClick={() => setSearchTerm('glass')}
              >
                Glass
              </button>

              <button
                type="button"
                onClick={() => setSearchTerm('contact')}
              >
                Contact
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
