
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Element.css';

import {
  FaProjectDiagram,
  FaHeadset,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaClipboardList
} from 'react-icons/fa';

const Element = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <main className="portal-page">

      {/* PREMIUM HERO */}
      <section className="portal-hero">
        <div className="portal-hero-overlay"></div>

        <div className="portal-container portal-hero-content">

          <div className="portal-eyebrow">
            <span></span>
            AWAN GENERAL CONTRACTING & ALUMINIUM WORKS
          </div>

          <h1>
            Your Projects.
            <span>Our Commitment.</span>
          </h1>

          <p>
            Welcome to the AWAN Client Portal. Explore our work,
            discover project updates and connect with our professional team.
          </p>

          <button
            className="hero-portal-btn"
            onClick={() => setActiveTab('projects')}
          >
            EXPLORE PROJECTS <FaArrowRight />
          </button>

          <div className="portal-hero-highlights">
            <span><FaCheckCircle /> QUALITY SERVICE</span>
            <span><FaCheckCircle /> PROJECT EXCELLENCE</span>
            <span><FaCheckCircle /> CLIENT SUPPORT</span>
          </div>
        </div>

        {/* AWAN LOGO */}
        <div className="portal-brand-logo">
          <div className="portal-logo-symbol">
            <span>A</span>
          </div>

          <div className="portal-logo-details">
            <h2>AWAN<span>.</span></h2>
            <p>GENERAL CONTRACTING</p>
            <small>ALUMINIUM & ARCHITECTURAL WORKS</small>
          </div>
        </div>

        <div className="portal-hero-side">
          <span>03 / CLIENT PORTAL</span>
          <i></i>
          <span>BUILT WITH PRECISION</span>
        </div>
      </section>


      {/* PORTAL NAVIGATION */}
      <section className="portal-navigation">
        <div className="portal-container portal-nav-inner">

          <div className="portal-nav-brand">
            <span>AWAN</span>
            <small>CLIENT PORTAL</small>
          </div>

          <div className="portal-nav-tabs">
            <button
              className={activeTab === 'overview' ? 'active' : ''}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>

            <button
              className={activeTab === 'projects' ? 'active' : ''}
              onClick={() => setActiveTab('projects')}
            >
              My Projects
            </button>

            <button
              className={activeTab === 'support' ? 'active' : ''}
              onClick={() => setActiveTab('support')}
            >
              Contact Us
            </button>
          </div>

        </div>
      </section>


      {/* PORTAL CONTENT */}
      <section className="portal-content">
        <div className="portal-container">

          {/* OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="portal-overview">

              <div className="portal-heading">
                <span className="portal-section-label">
                  <i></i> WELCOME TO OUR PORTAL
                </span>

                <h2>
                  Our Work, Made Easy
                  <span> to Explore.</span>
                </h2>

                <p>
                  Browse our aluminium and architectural projects, discover
                  our latest work and contact our team whenever you need help.
                </p>
              </div>


              {/* COMPANY HIGHLIGHTS */}
              <div className="portal-stats">

                <button
                  className="stat-card"
                  onClick={() => setActiveTab('projects')}
                >
                  <div className="stat-card-top">
                    <div className="stat-icon">
                      <FaProjectDiagram />
                    </div>
                    <span>01</span>
                  </div>

                  <strong>20+</strong>
                  <h3>Active Projects</h3>
                  <p>Explore projects currently in progress.</p>

                  <div className="stat-card-link">
                    EXPLORE PROJECTS <FaArrowRight />
                  </div>
                </button>


                <button
                  className="stat-card"
                  onClick={() => setActiveTab('projects')}
                >
                  <div className="stat-card-top">
                    <div className="stat-icon">
                      <FaCheckCircle />
                    </div>
                    <span>02</span>
                  </div>

                  <strong>2000+</strong>
                  <h3>Completed Tasks</h3>
                  <p>Discover our completed work.</p>

                  <div className="stat-card-link">
                    VIEW OUR WORK <FaArrowRight />
                  </div>
                </button>


                <button
                  className="stat-card"
                  onClick={() => setActiveTab('projects')}
                >
                  <div className="stat-card-top">
                    <div className="stat-icon">
                      <FaClock />
                    </div>
                    <span>03</span>
                  </div>

                  <strong>5+</strong>
                  <h3>Upcoming Projects</h3>
                  <p>See projects being prepared next.</p>

                  <div className="stat-card-link">
                    VIEW UPCOMING <FaArrowRight />
                  </div>
                </button>

              </div>


              {/* CUSTOMER GUIDE */}
              <div className="customer-guide">

                <div className="guide-intro">
                  <span className="portal-section-label">
                    <i></i> HOW IT WORKS
                  </span>

                  <h2>Find What You Are Looking For.</h2>

                  <p>
                    Three simple steps to explore our project portfolio.
                  </p>
                </div>

                <div className="guide-steps">

                  <div className="guide-step">
                    <span className="guide-number">01</span>
                    <div className="guide-icon">
                      <FaClipboardList />
                    </div>
                    <h3>Choose Projects</h3>
                    <p>
                      Open My Projects to see all available project categories.
                    </p>
                  </div>

                  <div className="guide-step">
                    <span className="guide-number">02</span>
                    <div className="guide-icon">
                      <FaProjectDiagram />
                    </div>
                    <h3>Select a Category</h3>
                    <p>
                      Choose Active, Upcoming or Completed Projects.
                    </p>
                  </div>

                  <div className="guide-step">
                    <span className="guide-number">03</span>
                    <div className="guide-icon">
                      <FaCheckCircle />
                    </div>
                    <h3>Explore Our Work</h3>
                    <p>
                      View project details and discover our aluminium solutions.
                    </p>
                  </div>

                </div>
              </div>


              {/* QUICK ACTIONS */}
              <div className="quick-section">

                <div className="quick-heading">
                  <span className="portal-section-label">
                    <i></i> QUICK ACCESS
                  </span>
                  <h3>Where Would You Like to Go?</h3>
                </div>

                <div className="quick-actions">

                  <button onClick={() => setActiveTab('projects')}>
                    <FaProjectDiagram />

                    <span>
                      <strong>Explore Projects</strong>
                      <small>View active, upcoming and completed work</small>
                    </span>

                    <FaArrowRight />
                  </button>

                  <button onClick={() => setActiveTab('support')}>
                    <FaHeadset />

                    <span>
                      <strong>Contact Our Team</strong>
                      <small>Get help with your project or enquiry</small>
                    </span>

                    <FaArrowRight />
                  </button>

                </div>
              </div>

            </div>
          )}


          {/* PROJECTS */}
          {activeTab === 'projects' && (
            <div className="portal-section">

              <div className="portal-heading project-heading">
                <span className="portal-section-label">
                  <i></i> MY PROJECTS
                </span>

                <h2>
                  Choose a Project
                  <span> Category.</span>
                </h2>

                <p>
                  Select one of the categories below to explore our projects
                  and discover the work delivered by our team.
                </p>
              </div>


              <div className="project-options">

                <Link
                  to="/blog"
                  state={{ projectStatus: 'active' }}
                  className="project-option-card active-option"
                >
                  <div className="option-top">
                    <div className="option-icon">
                      <FaProjectDiagram />
                    </div>
                    <span>01</span>
                  </div>

                  <div className="option-content">
                    <small>IN PROGRESS</small>
                    <h3>Active Projects</h3>
                    <p>
                      See the projects our team is currently working on.
                    </p>
                  </div>

                  <div className="option-footer">
                    <span>EXPLORE PROJECTS</span>
                    <FaArrowRight />
                  </div>
                </Link>


                <Link
                  to="/blog"
                  state={{ projectStatus: 'pending' }}
                  className="project-option-card pending-option"
                >
                  <div className="option-top">
                    <div className="option-icon">
                      <FaClock />
                    </div>
                    <span>02</span>
                  </div>

                  <div className="option-content">
                    <small>COMING SOON</small>
                    <h3>Upcoming Projects</h3>
                    <p>
                      Discover projects that are planned and preparing to begin.
                    </p>
                  </div>

                  <div className="option-footer">
                    <span>VIEW UPCOMING WORK</span>
                    <FaArrowRight />
                  </div>
                </Link>


                <Link
                  to="/blog"
                  state={{ projectStatus: 'completed' }}
                  className="project-option-card completed-option"
                >
                  <div className="option-top">
                    <div className="option-icon">
                      <FaCheckCircle />
                    </div>
                    <span>03</span>
                  </div>

                  <div className="option-content">
                    <small>SUCCESSFULLY DELIVERED</small>
                    <h3>Completed Projects</h3>
                    <p>
                      Explore aluminium and architectural work completed by our team.
                    </p>
                  </div>

                  <div className="option-footer">
                    <span>VIEW COMPLETED WORK</span>
                    <FaArrowRight />
                  </div>
                </Link>

              </div>


              {/* PROJECT HELP */}
              <div className="projects-help">
                <div className="projects-help-left">
                  <div className="projects-help-icon">
                    <FaHeadset />
                  </div>

                  <div>
                    <span>NEED ASSISTANCE?</span>
                    <h3>Have a question about a project?</h3>
                  </div>
                </div>

                <Link to="/contact">
                  CONTACT OUR TEAM <FaArrowRight />
                </Link>
              </div>

            </div>
          )}


          {/* CONTACT SUPPORT */}
          {activeTab === 'support' && (
            <div className="support-box">

              <div className="support-icon">
                <FaHeadset />
              </div>

              <span className="portal-section-label">
                <i></i> WE ARE HERE TO HELP
              </span>

              <h2>
                How Can We
                <span> Help You?</span>
              </h2>

              <p>
                Have a question about our aluminium solutions or projects?
                Our professional team is ready to assist you.
              </p>

              <Link to="/contact" className="support-contact-link">
                CONTACT OUR TEAM <FaArrowRight />
              </Link>

            </div>
          )}

        </div>
      </section>


      {/* BOTTOM BRAND STRIP */}
      <section className="portal-bottom-brand">
        <span>AWAN.</span>
        <p>GENERAL CONTRACTING & ALUMINIUM WORKS</p>
        <small>BUILT WITH PRECISION. DELIVERED WITH CONFIDENCE.</small>
      </section>

    </main>
  );
};

export default Element;
