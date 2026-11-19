
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

  // SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // SCROLL TO TOP
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // NAVIGATION HANDLER
  const handleNavigation = () => {
    setIsSearchOpen(false);
    setSearchTerm('');
    scrollTop();
  };

  // NAVIGATE TO A PAGE
  const goToPage = (path) => {
    setIsSearchOpen(false);
    setSearchTerm('');
    navigate(path);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // WEBSITE SEARCH
  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchTerm
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ');

    if (!query) return;

    const searchPages = [
      {
        keywords: ['home', 'main', 'awan'],
        path: '/'
      },
      {
        keywords: ['about', 'company', 'construction', 'aluminium company'],
        path: '/about'
      },
      {
        keywords: ['window', 'windows', 'sliding window', 'aluminium window'],
        path: '/window'
      },
      {
        keywords: ['door', 'doors', 'aluminium door'],
        path: '/door'
      },
      {
        keywords: ['cladding', 'facade', 'façade', 'panel'],
        path: '/cladding'
      },
      {
        keywords: ['tent', 'tents', 'aluminium tent'],
        path: '/tents'
      },
      {
        keywords: ['glass', 'architectural glass', 'glazing'],
        path: '/glass'
      },

      // CURTAIN AND PARTITION PAGE
      {
        keywords: [
          'curtain',
          'curtains',
          'curtain wall',
          'curtain walls',
          'curtain wall systems',
          'partition',
          'partitions',
          'glass partition',
          'glass partitions',
          'aluminium partition',
          'aluminium partitions',
          'curtain and partition',
          'curtain & partition',
          'curtain partition systems',
          'partition systems',
          'office partition',
          'office partitions',
          'glass wall',
          'glass walls'
        ],
        path: '/curtain'
      },

      {
        keywords: ['solution', 'solutions', 'services'],
        path: '/programz'
      },
      {
        keywords: ['blog', 'news', 'insights'],
        path: '/blog'
      },
      {
        keywords: ['project', 'projects'],
        path: '/blog-detail'
      },
      {
        keywords: ['technical', 'information'],
        path: '/element'
      },
      {
        keywords: ['contact', 'phone', 'email', 'call'],
        path: '/contact'
      }
    ];

    const result = searchPages.find((page) =>
      page.keywords.some((keyword) =>
        query === keyword ||
        query.includes(keyword) ||
        keyword.includes(query)
      )
    );

    if (result) {
      goToPage(result.path);
    } else {
      alert(`No results found for "${searchTerm}".`);
    }
  };

  // GMAIL MESSAGE LINK
  const gmailLink =
    'https://mail.google.com/mail/?view=cm&fs=1' +
    '&to=awangcaw@gmail.com' +
    '&su=' +
    encodeURIComponent(
      'New Website Enquiry - AWAN General Contracting'
    ) +
    '&body=' +
    encodeURIComponent(
      'Hello AWAN Team,\n\n' +
      'I visited your website and would like to know more about your services.\n\n' +
      'Please contact me with further information.\n\n' +
      'Thank you.'
    );

  return (
    <>
      {/* MAIN NAVBAR */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>

        {/* TOP NAVBAR */}
        <div className="navbar-top">

          {/* COMPANY LOGO */}
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

            {/* CONTACT NUMBER */}
            <div className="contact-info">
              <span className="call">CALL US</span>

              <a
                href="tel:
+971558816618"
                className="phone-number"
              >
                
+971558816618
              </a>
            </div>

            {/* SOCIAL MEDIA */}
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
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message AWAN through Gmail"
                title="Message Us Anytime - Gmail"
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

            {/* HOME */}
            <li>
              <Link to="/" onClick={handleNavigation}>
                Home
              </Link>
            </li>

            {/* ABOUT */}
            <li>
              <Link to="/about" onClick={handleNavigation}>
                About Us
              </Link>
            </li>

            {/* ALUMINIUM SOLUTIONS */}
            <li className="dropdown programs-menu">

              <Link
                to="/programz"
                onClick={handleNavigation}
              >
                Aluminium Solutions
                <span className="nav-arrow">⌄</span>
              </Link>

              <div className="mega-menu">

                {/* MEGA MENU HEADER */}
                <div className="mega-menu-header">
                  <span>
                    ARCHITECTURAL ALUMINIUM SOLUTIONS
                  </span>

                  <p>
                    Explore our modern aluminium, curtain and glass
                    systems, engineered for residential, commercial
                    and architectural projects.
                  </p>
                </div>

                {/* SOLUTIONS GRID */}
                <div className="mega-menu-grid">

                  {/* WINDOWS */}
                  <div className="mega-column">
                    <h4>
                      <FaWindowMaximize /> WINDOWS
                    </h4>

                    <Link to="/window" onClick={handleNavigation}>
                      Aluminium Windows
                    </Link>
                  </div>

                  {/* DOORS */}
                  <div className="mega-column">
                    <h4>
                      <FaDoorOpen /> DOORS
                    </h4>

                    <Link to="/door" onClick={handleNavigation}>
                      Aluminium Doors
                    </Link>
                  </div>

                  {/* CLADDING */}
                  <div className="mega-column">
                    <h4>
                      <FaBuilding /> CLADDING
                    </h4>

                    <Link to="/cladding" onClick={handleNavigation}>
                      Aluminium Cladding
                    </Link>
                  </div>

                  {/* TENTS */}
                  <div className="mega-column">
                    <h4>
                      <FaLayerGroup /> TENTS
                    </h4>

                    <Link to="/tents" onClick={handleNavigation}>
                      Aluminium Tents
                    </Link>
                  </div>

                  {/* GLASS */}
                  <div className="mega-column">
                    <h4>
                      <FaLayerGroup /> GLASS
                    </h4>

                    <Link to="/glass" onClick={handleNavigation}>
                      Architectural Glass
                    </Link>
                  </div>

                  {/* CURTAIN AND PARTITIONS */}
                  <div className="mega-column curtain-column">
                    <h4>
                      <FaBorderAll /> CURTAIN & PARTITIONS
                    </h4>

                    <Link
                      to="/curtain"
                      onClick={handleNavigation}
                      title="Open Curtain and Partition Systems"
                    >
                      Curtain & Partition Systems
                    </Link>
                  </div>

                </div>

                {/* MEGA MENU FOOTER */}
                <div className="mega-menu-footer">
                  <FaBorderAll />

                  <span>
                    Quality. Precision. Architectural Excellence.
                  </span>

                  <Link
                    to="/programz"
                    onClick={handleNavigation}
                  >
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

            {/* CONTACT */}
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

      {/* WEBSITE SEARCH POPUP */}
      {isSearchOpen && (
        <div
          className="website-search-overlay"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="website-search-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
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
              Find aluminium solutions, windows, doors, curtains,
              partitions, glass systems, projects and more.
            </p>

            {/* SEARCH FORM */}
            <form onSubmit={handleSearch}>

              <div className="website-search-input">
                <FaSearch />

                <input
                  type="text"
                  placeholder="Search windows, doors, curtains, partitions..."
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

            {/* POPULAR SEARCHES */}
            <div className="website-search-suggestions">
              <span>POPULAR SEARCHES</span>

              {[
                'windows',
                'doors',
                'glass',
                'curtains',
                'partitions',
                'curtain walls',
                'contact'
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => goToPage(
                    item === 'curtains' ||
                    item === 'partitions' ||
                    item === 'curtain walls'
                      ? '/curtain'
                      : item === 'windows'
                        ? '/window'
                        : item === 'doors'
                          ? '/door'
                          : item === 'glass'
                            ? '/glass'
                            : '/contact'
                  )}
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
