
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
  FaEnvelope,
  FaBars,
  FaChevronDown
} from 'react-icons/fa';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [openDropdown, setOpenDropdown] = useState('');

  const navigate = useNavigate();

  // SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // CLOSE MENU WITH ESCAPE
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsMobileOpen(false);
        setOpenDropdown('');
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // PREVENT BACKGROUND SCROLL
  useEffect(() => {
    document.body.style.overflow =
      isSearchOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isSearchOpen]);

  // CLOSE ALL MENUS
  const closeMenus = () => {
    setIsMobileOpen(false);
    setOpenDropdown('');
    setIsSearchOpen(false);
    setSearchTerm('');
  };

  // NAVIGATION HANDLER
  const handleNavigation = () => {
    closeMenus();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // NAVIGATE TO PAGE
  const goToPage = (path) => {
    closeMenus();
    navigate(path);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // DROPDOWN HANDLER
  const toggleDropdown = (name) => {
    setOpenDropdown((current) =>
      current === name ? '' : name
    );
  };

  // SEARCH PAGES
  const searchPages = [
    { keywords: ['home', 'main', 'awan'], path: '/' },
    { keywords: ['about', 'company', 'construction'], path: '/about' },
    { keywords: ['window', 'windows'], path: '/window' },
    { keywords: ['door', 'doors'], path: '/door' },
    { keywords: ['cladding', 'facade', 'façade'], path: '/cladding' },
    { keywords: ['tent', 'tents'], path: '/tents' },
    { keywords: ['glass', 'architectural glass'], path: '/glass' },

    {
      keywords: [
        'curtain',
        'curtain wall',
        'curtain walls',
        'curtain wall systems'
      ],
      path: '/check'
    },

    {
      keywords: [
        'partition',
        'partitions',
        'glass partition',
        'glass partitions',
        'office partition'
      ],
      path: '/gallery'
    },

    { keywords: ['solution', 'solutions', 'services'], path: '/programz' },
    { keywords: ['blog', 'news', 'insights'], path: '/blog' },
    { keywords: ['project', 'projects'], path: '/blog' },
    { keywords: ['technical', 'information', 'client portal'], path: '/element' },
    { keywords: ['contact', 'phone', 'email'], path: '/contact' }
  ];

  // WEBSITE SEARCH
  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchTerm.trim().toLowerCase();

    if (!query) return;

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

  // GMAIL LINK
  const gmailLink =
    'https://mail.google.com/mail/?view=cm&fs=1' +
    '&to=awangcaw@gmail.com' +
    '&su=' +
    encodeURIComponent('New Website Enquiry - AWAN General Contracting') +
    '&body=' +
    encodeURIComponent(
      'Hello AWAN Team,\n\n' +
      'I visited your website and would like to know more about your services.\n\n' +
      'Please contact me with further information.\n\n' +
      'Thank you.'
    );

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

          {/* BRAND NAME */}
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

            <div className="contact-info">
              <span className="call">CALL US</span>

              <a
                href="tel:+971558816618"
                className="phone-number"
              >
                +971 558816618
              </a>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="social-icons">

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-link facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/fadibadshah/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-link instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link linkedin"
              >
                <FaLinkedinIn />
              </a>

              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email AWAN"
                className="social-link email"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* NAVIGATION LINKS */}
        <div className={`nav-links ${isMobileOpen ? 'mobile-active' : ''}`}>

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
            <li className={`dropdown programs-menu ${
              openDropdown === 'solutions' ? 'dropdown-open' : ''
            }`}>

              <div className="nav-dropdown-heading">

                <Link to="/programz" onClick={handleNavigation}>
                  Aluminium Solutions
                </Link>

                <button
                  type="button"
                  className="dropdown-toggle"
                  onClick={() => toggleDropdown('solutions')}
                  aria-label="Toggle Aluminium Solutions"
                  aria-expanded={openDropdown === 'solutions'}
                >
                  <FaChevronDown />
                </button>

              </div>

              {/* MEGA MENU */}
              <div className="mega-menu">

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

                  {/* CURTAIN WALLS - CHECK.JSX */}
                  <div className="mega-column">
                    <h4><FaBorderAll /> CURTAIN WALLS</h4>
                    <Link to="/check" onClick={handleNavigation}>
                      Curtain Wall Systems
                    </Link>
                  </div>

                  {/* GLASS PARTITIONS - GALLERY.JSX */}
                  <div className="mega-column">
                    <h4><FaBorderAll /> GLASS PARTITIONS</h4>
                    <Link to="/gallery" onClick={handleNavigation}>
                      Glass Partition Systems
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
            <li className={`dropdown insights-menu ${
              openDropdown === 'insights' ? 'dropdown-open' : ''
            }`}>

              <div className="nav-dropdown-heading">

                <Link to="/blog" onClick={handleNavigation}>
                  Insights
                </Link>

                <button
                  type="button"
                  className="dropdown-toggle"
                  onClick={() => toggleDropdown('insights')}
                  aria-label="Toggle Insights"
                  aria-expanded={openDropdown === 'insights'}
                >
                  <FaChevronDown />
                </button>

              </div>

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
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsMobileOpen(false);
                  setOpenDropdown('');
                }}
                aria-label="Search website"
              >
                <FaSearch />
                <span>SEARCH</span>
              </button>

            </li>

          </ul>

        </div>

      </nav>

      {/* MOBILE BACKDROP */}
      {isMobileOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={closeMenus}
        />
      )}

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
              Find aluminium solutions, windows, doors, curtain walls,
              partitions, glass systems, projects and more.
            </p>

            <form onSubmit={handleSearch}>

              <div className="website-search-input">

                <FaSearch />

                <input
                  type="text"
                  placeholder="Search windows, doors, partitions..."
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
                'Windows',
                'Doors',
                'Glass',
                'Curtain Walls',
                'Partitions',
                'Cladding',
                'Contact'
              ].map((item) => {

                const paths = {
                  Windows: '/window',
                  Doors: '/door',
                  Glass: '/glass',
                  'Curtain Walls': '/check',
                  Partitions: '/gallery',
                  Cladding: '/cladding',
                  Contact: '/contact'
                };

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => goToPage(paths[item])}
                  >
                    {item}
                  </button>
                );

              })}

            </div>

          </div>

        </div>

      )}

    </>
  );
};

export default NavBar;
