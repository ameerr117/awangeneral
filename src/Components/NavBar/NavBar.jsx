
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
  FaChevronDown,
  FaShieldAlt,
  FaCar,
  FaPaintRoller,
  FaWhatsapp,
  FaPhoneAlt,
  FaTools
} from 'react-icons/fa';

import { SiGmail } from 'react-icons/si';

// ==========================================
// AWAN COMPANY SERVICES
// ==========================================

const AWAN_SERVICES = [
  { number: "01", name: "ALUMINIUM WINDOWS" },
  { number: "02", name: "ALUMINIUM DOORS" },
  { number: "03", name: "GLASS WORKS" },
  { number: "04", name: "GLASS CURTAIN WALLS" },
  { number: "05", name: "ALUMINIUM CLADDING" },
  { number: "06", name: "GLASS PARTITIONS" },
  { number: "07", name: "ALUMINIUM KITCHENS" },
  { number: "08", name: "PERGOLAS & TENTS" },
  { number: "09", name: "PARKING SHADES" },
  { number: "10", name: "WROUGHT IRON WORKS" },
  { number: "11", name: "GENERAL CONTRACTING" },
  { number: "12", name: "CONSTRUCTION WORKS" },
  { number: "13", name: "HEAVY MACHINERY & TRANSPORT SERVICES" }
];

// ==========================================
// WHATSAPP WELCOME MESSAGE
// ==========================================

const whatsappMessage = `👋 *WELCOME TO AWAN GENERAL CONTRACTING & ALUMINIUM WORKS*

Thank you for contacting us!

🏢 *OUR COMPANY SERVICES*

${AWAN_SERVICES.map(
  (service) => `🔹 ${service.name}`
).join("\n")}

🌐 *VISIT OUR WEBSITE*
https://agcaw.com

📞 *CALL OUR TEAM*
+971 558816618

📩 *FOR PROJECT ENQUIRIES*
Please send us your project details, requirements or photographs.

*AWAN GENERAL CONTRACTING & ALUMINIUM WORKS*
Professional Architectural Aluminium Solutions.

Thank you for choosing AWAN! 🤝`;

// WHATSAPP LINK
const whatsappLink = `https://wa.me/971558816618?text=${encodeURIComponent(
  whatsappMessage
)}`;

// ==========================================
// NAVBAR COMPONENT
// ==========================================

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [openDropdown, setOpenDropdown] = useState('');

  const navigate = useNavigate();

  // CONTACT INFORMATION
  const infoEmail = 'info@awangcaw.com';
  const salesEmail = 'sale@awangcaw.com';

  const phoneNumber = '+971558816618';

  // GMAIL LINKS
  const infoGmailLink =
    'https://mail.google.com/mail/?view=cm&fs=1' +
    `&to=${encodeURIComponent(infoEmail)}` +
    '&su=' +
    encodeURIComponent('General Enquiry - AWAN General Contracting');

  const salesGmailLink =
    'https://mail.google.com/mail/?view=cm&fs=1' +
    `&to=${encodeURIComponent(salesEmail)}` +
    '&su=' +
    encodeURIComponent('Sales Enquiry - AWAN General Contracting');

  // ==========================================
  // WEBSITE SEARCH DATABASE
  // ==========================================

  const searchPages = [
    {
      name: 'Home',
      keywords: ['home', 'main', 'awan', 'homepage'],
      path: '/'
    },
    {
      name: 'Heavy Equipment',
      keywords: [
        'machinery',
        'equipment',
        'machinery and equipment',
        'machinery equipment',
        'construction machinery',
        'construction equipment',
        'industrial machinery',
        'heavy equipment',
        'bobcat',
        'shovel',
        'excavator',
        'loader',
        'tools'
      ],
      path: '/Machinery'
    },
    {
      name: 'About Us',
      keywords: [
        'about',
        'about us',
        'company',
        'construction',
        'company profile'
      ],
      path: '/about'
    },
    {
      name: 'Aluminium Solutions',
      keywords: [
        'solution',
        'solutions',
        'services',
        'aluminium solutions'
      ],
      path: '/programz'
    },
    {
      name: 'Windows',
      keywords: [
        'window',
        'windows',
        'aluminium window',
        'sliding window'
      ],
      path: '/Window'
    },
    {
      name: 'Doors',
      keywords: [
        'door',
        'doors',
        'aluminium door',
        'sliding door'
      ],
      path: '/Door'
    },
    {
      name: 'Cladding',
      keywords: [
        'cladding',
        'aluminium cladding',
        'facade',
        'façade',
        'building facade'
      ],
      path: '/Cladding'
    },
    {
      name: 'Tents',
      keywords: [
        'tent',
        'tents',
        'aluminium tent',
        'fabric structure'
      ],
      path: '/Tents'
    },
    {
      name: 'Glass',
      keywords: [
        'glass',
        'architectural glass',
        'toughened glass',
        'glass work'
      ],
      path: '/Glass'
    },
    {
      name: 'Curtain Walls',
      keywords: [
        'curtain',
        'curtain wall',
        'curtain walls',
        'aluminium curtain wall',
        'facade system'
      ],
      path: '/Curtain'
    },
    {
      name: 'Partitions',
      keywords: [
        'partition',
        'partitions',
        'glass partition',
        'office partition',
        'aluminium partition'
      ],
      path: '/Partition'
    },
    {
      name: 'Wrought Iron Gates',
      keywords: [
        'iron',
        'wrought iron',
        'wrought iron gate',
        'iron gate',
        'gates',
        'metal gate'
      ],
      path: '/Iron'
    },
    {
      name: 'Car Parkings & Shades',
      keywords: [
        'parking',
        'car parking',
        'car parkings',
        'parking shade',
        'parking shades',
        'car shade',
        'carport'
      ],
      path: '/Parking'
    },
    {
      name: 'Paints & Gypsum Works',
      keywords: [
        'paint',
        'paints',
        'painting',
        'gypsum',
        'gypsum works',
        'interior painting',
        'exterior painting'
      ],
      path: '/Paints'
    },
    {
      name: 'Insights',
      keywords: [
        'insights',
        'blog',
        'blogs',
        'news',
        'articles'
      ],
      path: '/blog'
    },
    {
      name: 'Projects',
      keywords: [
        'project',
        'projects',
        'our projects',
        'portfolio'
      ],
      path: '/blog'
    },
    {
      name: 'Blog Details',
      keywords: [
        'blog details',
        'other services'
      ],
      path: '/blog-detail'
    },
    {
      name: 'Client Portal',
      keywords: [
        'client portal',
        'client',
        'account',
        'my account',
        'technical information'
      ],
      path: '/element'
    },
    {
      name: 'Contact',
      keywords: [
        'contact',
        'contact us',
        'phone',
        'email',
        'address',
        'location'
      ],
      path: '/contact'
    }
  ];

  // ==========================================
  // SCROLL DETECTION
  // ==========================================

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

  // ==========================================
  // CLOSE MENU WITH ESCAPE
  // ==========================================

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

  // ==========================================
  // PREVENT BACKGROUND SCROLL
  // ==========================================

  useEffect(() => {
    document.body.style.overflow =
      isSearchOpen || isMobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isSearchOpen, isMobileOpen]);

  // ==========================================
  // CLOSE ALL MENUS
  // ==========================================

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

  // ==========================================
  // WEBSITE SEARCH
  // ==========================================

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchTerm
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ');

    if (!query) return;

    const result = searchPages
      .map((page) => {
        let score = 0;

        page.keywords.forEach((keyword) => {
          const key = keyword.toLowerCase();

          if (query === key) {
            score = Math.max(score, 100);
          } else if (key.startsWith(query)) {
            score = Math.max(score, 80);
          } else if (query.startsWith(key)) {
            score = Math.max(score, 70);
          } else if (key.includes(query)) {
            score = Math.max(score, 60);
          } else if (query.includes(key)) {
            score = Math.max(score, 50);
          }
        });

        return { ...page, score };
      })
      .filter((page) => page.score > 0)
      .sort((a, b) => b.score - a.score)[0];

    if (result) {
      goToPage(result.path);
    } else {
      alert(
        `No results found for "${searchTerm}". Please try another keyword.`
      );
    }
  };

  // POPULAR SEARCH HANDLER
  const handlePopularSearch = (item) => {
    const page = searchPages.find(
      (page) => page.name.toLowerCase() === item.toLowerCase()
    );

    if (page) {
      goToPage(page.path);
    }
  };

  // ==========================================
  // ALUMINIUM SOLUTIONS
  // ==========================================

  const solutions = [
    {
      icon: <FaWindowMaximize />,
      title: 'WINDOWS',
      name: 'Aluminium Windows',
      path: '/Window'
    },
    {
      icon: <FaDoorOpen />,
      title: 'DOORS',
      name: 'Aluminium Doors',
      path: '/Door'
    },
    {
      icon: <FaBuilding />,
      title: 'CLADDING',
      name: 'Aluminium Cladding',
      path: '/Cladding'
    },
    {
      icon: <FaLayerGroup />,
      title: 'TENTS',
      name: 'Aluminium Tents',
      path: '/Tents'
    },
    {
      icon: <FaLayerGroup />,
      title: 'GLASS',
      name: 'Architectural Glass',
      path: '/Glass'
    },
    {
      icon: <FaBorderAll />,
      title: 'CURTAIN WALLS',
      name: 'Curtain Wall Systems',
      path: '/Curtain'
    },
    {
      icon: <FaBorderAll />,
      title: 'GLASS PARTITIONS',
      name: 'Glass Partition Systems',
      path: '/Partition'
    },
    {
      icon: <FaShieldAlt />,
      title: 'WROUGHT IRON GATE',
      name: 'Wrought Iron Gate',
      path: '/Iron'
    },
    {
      icon: <FaCar />,
      title: 'CAR PARKINGS & SHADES',
      name: 'Car Parkings & Shades',
      path: '/Parking'
    },
    {
      icon: <FaPaintRoller />,
      title: 'PAINTS & GYPSUM WORKS',
      name: 'Paints & Gypsum Works',
      path: '/Paints'
    }
  ];

  // ==========================================
  // POPULAR SEARCHES
  // ==========================================

  const popularSearches = [
    'Windows',
    'Doors',
    'Glass',
    'Curtain Walls',
    'Partitions',
    'Cladding',
    'Tents',
    'Wrought Iron Gates',
    'Car Parkings & Shades',
    'Paints & Gypsum Works',
    'Heavy Equipment',
    'About Us',
    'Projects',
    'Contact'
  ];

  // ==========================================
  // NAVBAR DISPLAY
  // ==========================================

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
                href={`tel:${phoneNumber}`}
                className="phone-number"
              >
                +971 558816618
              </a>
            </div>

            {/* DESKTOP SOCIAL MEDIA */}
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
                href="https://www.instagram.com/"
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
                href={`mailto:${infoEmail}`}
                aria-label={`Email ${infoEmail}`}
                title={`General Information: ${infoEmail}`}
                className="social-link email"
              >
                <FaEnvelope />
              </a>

              <a
                href={`mailto:${salesEmail}`}
                aria-label={`Email ${salesEmail}`}
                title={`Sales and Quotations: ${salesEmail}`}
                className="social-link email"
              >
                <SiGmail />
              </a>

            </div>
          </div>

          {/* MOBILE HAMBURGER MENU BUTTON */}
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

            {/* HEAVY EQUIPMENT */}
            <li className="machinery-nav-item">
              <Link to="/Machinery" onClick={handleNavigation}>
                <FaTools className="machinery-nav-icon" />
                Heavy Equipment
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={handleNavigation}>
                About Us
              </Link>
            </li>

            {/* ALUMINIUM SOLUTIONS */}
            <li
              className={`dropdown programs-menu ${
                openDropdown === 'solutions' ? 'dropdown-open' : ''
              }`}
            >
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
                    COMPLETE ARCHITECTURAL SOLUTIONS
                  </span>

                  <p>
                    Explore our complete range of aluminium,
                    architectural glass, metal fabrication,
                    parking shades and interior finishing services.
                  </p>
                </div>

                <div className="mega-menu-grid">

                  {solutions.map((item) => (
                    <div className="mega-column" key={item.title}>

                      <h4>
                        {item.icon}
                        {item.title}
                      </h4>

                      <Link
                        to={item.path}
                        onClick={handleNavigation}
                      >
                        {item.name}
                      </Link>

                    </div>
                  ))}

                </div>

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
            <li
              className={`dropdown insights-menu ${
                openDropdown === 'insights' ? 'dropdown-open' : ''
              }`}
            >

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

            {/* WHATSAPP MENU BUTTON */}
            <li className="navbar-whatsapp-item">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-whatsapp-link"
                onClick={() => {
                  setIsMobileOpen(false);
                  setOpenDropdown('');
                }}
              >
                <FaWhatsapp />
                WhatsApp
              </a>

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

          {/* MOBILE CONTACT INFORMATION */}
          {isMobileOpen && (
            <div className="mobile-contact-section">

              <h3>CONTACT OUR TEAM</h3>

              <a href={`tel:${phoneNumber}`}>
                <FaPhoneAlt />
                <span>+971 558816618</span>
              </a>

              <a href={`mailto:${infoEmail}`}>
                <FaEnvelope />
                <span>{infoEmail}</span>
              </a>

              <a href={`mailto:${salesEmail}`}>
                <FaEnvelope />
                <span>{salesEmail}</span>
              </a>

            </div>
          )}

          {/* MOBILE SOCIAL MEDIA */}
          {isMobileOpen && (
            <div className="mobile-social-section">

              <p>CONNECT WITH AWAN</p>

              <div className="mobile-social-icons">

                <a
                  href="https://www.facebook.com/agcaw/about/?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=100091272055967&sk=about"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit AWAN Facebook"
                  title="AWAN Facebook"
                  className="mobile-social-link"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/awangen.cont.alumi.works/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="AWAN Instagram"
                  title="AWAN Instagram"
                  className="mobile-social-link"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="mobile-social-link"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="mobile-social-link"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href={infoGmailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="General Gmail"
                  className="mobile-social-link"
                >
                  <FaEnvelope />
                </a>

                <a
                  href={salesGmailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sales Gmail"
                  className="mobile-social-link"
                >
                  <SiGmail />
                </a>

              </div>

              <span>
                AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
              </span>

            </div>
          )}

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
              Find aluminium solutions, heavy equipment,
              windows, doors, curtain walls, partitions,
              glass systems, wrought iron gates,
              car parking shades, paints and gypsum works.
            </p>

            {/* SEARCH FORM */}
            <form onSubmit={handleSearch}>

              <div className="website-search-input">

                <FaSearch />

                <input
                  type="text"
                  placeholder="Search our services..."
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

              {popularSearches.map((item) => (

                <button
                  key={item}
                  type="button"
                  onClick={() => handlePopularSearch(item)}
                >
                  {item}
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
