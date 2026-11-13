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

      {/* HERO */}
      <section className="portal-hero">
        <div className="portal-container">

          <span className="portal-label">
            AWAN GENERAL ALUMINIUM
          </span>

          <h1>Client Portal</h1>

          <p>
            Everything you need to explore our projects and connect
            with our professional team.
          </p>

          <button
            className="hero-portal-btn"
            onClick={() => setActiveTab('projects')}
          >
            EXPLORE PROJECTS <FaArrowRight />
          </button>

        </div>
      </section>


      {/* PORTAL NAVIGATION */}
      <section className="portal-navigation">
        <div className="portal-container">

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
      </section>


      {/* PORTAL CONTENT */}
      <section className="portal-content">
        <div className="portal-container">

          {/* ================= OVERVIEW ================= */}
          {activeTab === 'overview' && (
            <div className="portal-overview">

              <div className="portal-heading">
                <span>WELCOME TO OUR PORTAL</span>

                <h2>Our Work, Made Easy to Explore</h2>

                <p>
                  Browse our aluminium and architectural projects, see our
                  latest work and contact our team whenever you need help.
                </p>
              </div>


              {/* COMPANY HIGHLIGHTS */}
              <div className="portal-stats">

                <button
                  className="stat-card clickable-card"
                  onClick={() => setActiveTab('projects')}
                >
                  <div className="stat-icon">
                    <FaProjectDiagram />
                  </div>

                  <strong>20+</strong>
                  <span>Active Projects</span>

                  <small>Explore projects currently in progress</small>
                </button>


                <button
                  className="stat-card clickable-card"
                  onClick={() => setActiveTab('projects')}
                >
                  <div className="stat-icon">
                    <FaCheckCircle />
                  </div>

                  <strong>2000+</strong>
                  <span>Completed Tasks</span>

                  <small>Discover our completed work</small>
                </button>


                <button
                  className="stat-card clickable-card"
                  onClick={() => setActiveTab('projects')}
                >
                  <div className="stat-icon">
                    <FaClock />
                  </div>

                  <strong>5+</strong>
                  <span>Upcoming Projects</span>

                  <small>See what we are preparing next</small>
                </button>

              </div>


              {/* SIMPLE CUSTOMER GUIDE */}
              <div className="customer-guide">

                <div className="guide-intro">
                  <span>HOW IT WORKS</span>
                  <h2>Find What You Are Looking For</h2>
                </div>

                <div className="guide-steps">

                  <div className="guide-step">
                    <span>01</span>
                    <FaClipboardList />
                    <h3>Choose Projects</h3>
                    <p>
                      Open My Projects to see all available project categories.
                    </p>
                  </div>

                  <div className="guide-step">
                    <span>02</span>
                    <FaProjectDiagram />
                    <h3>Select a Category</h3>
                    <p>
                      Choose Active, Pending or Completed Projects.
                    </p>
                  </div>

                  <div className="guide-step">
                    <span>03</span>
                    <FaCheckCircle />
                    <h3>Explore Our Work</h3>
                    <p>
                      View detailed projects and discover our aluminium solutions.
                    </p>
                  </div>

                </div>

              </div>


              {/* QUICK ACTIONS */}
              <div className="quick-section">

                <div>
                  <span>QUICK ACCESS</span>
                  <h3>Where would you like to go?</h3>
                </div>

                <div className="quick-actions">

                  <button onClick={() => setActiveTab('projects')}>
                    <FaProjectDiagram />

                    <span>
                      <strong>Explore Projects</strong>
                      <small>View active, pending and completed work</small>
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


          {/* ================= MY PROJECTS ================= */}
          {activeTab === 'projects' && (
            <div className="portal-section">

              <div className="portal-heading project-heading">

                <span>MY PROJECTS</span>

                <h2>Choose a Project Category</h2>

                <p>
                  Select one of the options below to explore our projects.
                  It is simple — just choose the type of project you want
                  to see.
                </p>

              </div>


              <div className="project-options">

                {/* ACTIVE */}
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


                {/* PENDING */}
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


                {/* COMPLETED */}
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


              {/* HELP SECTION */}
              <div className="projects-help">

                <div>
                  <FaHeadset />

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


          {/* ================= CONTACT ================= */}
          {activeTab === 'support' && (
            <div className="support-box">

              <div className="support-icon">
                <FaHeadset />
              </div>

              <span>WE ARE HERE TO HELP</span>

              <h2>How Can We Help You?</h2>

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

    </main>
  );
};

export default Element;