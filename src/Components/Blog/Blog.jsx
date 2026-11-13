
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Blog.css';

import {
  FaProjectDiagram,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaBuilding,
  FaLayerGroup,
  FaHardHat,
  FaTimes,
  FaTools,
  FaRulerCombined,
  FaShieldAlt,
  FaClipboardCheck
} from 'react-icons/fa';

import blog1 from "../../assets/alu006.jpg";
import blog2 from "../../assets/alu008.jpg";
import blog3 from "../../assets/alu006.jpg";
import blog4 from "../../assets/alu008.jpg";
import blog5 from "../../assets/alu006.jpg";
import blog6 from "../../assets/alu008.jpg";

const projects = [
  {
    id: 1,
    title: "Aluminium Curtain Wall Installation",
    category: "FACADE SYSTEMS",
    status: "active",
    image: blog1,
    description:
      "Architectural aluminium curtain wall solution designed to provide a modern building façade with natural daylight, weather protection and a contemporary appearance.",
    stage: "Installation in progress",
    progress: 75,
    location: "Project location to be confirmed",
    system: "Aluminium framed curtain wall system",
    materials: [
      "Architectural aluminium extrusion profiles",
      "Double or single glazing as specified",
      "EPDM weather seals and gaskets",
      "Structural brackets and approved fasteners",
      "Compatible weather-resistant sealants"
    ],
    specifications: [
      "Aluminium profiles selected according to structural design requirements.",
      "Glass specification and thickness to follow the approved glazing schedule.",
      "Drainage and pressure-equalisation details to follow the system design.",
      "Thermal break provisions where required by the project specification.",
      "Wind-load resistance to be verified through project-specific calculations."
    ],
    installation: [
      "Review approved shop drawings and site dimensions.",
      "Verify structural supports and bracket positions.",
      "Install aluminium framing and structural connections.",
      "Position glazing units using approved installation methods.",
      "Complete gaskets, weather seals and perimeter finishing.",
      "Inspect alignment, drainage and façade interfaces."
    ],
    quality: [
      "Check profile dimensions and material identification.",
      "Inspect frame alignment, plumb and level.",
      "Verify glass condition and glazing clearances.",
      "Inspect gaskets, sealants and weatherproofing.",
      "Record inspections and rectify non-conformities."
    ],
    safety: [
      "Use approved working-at-height protection.",
      "Use suitable glass lifting and handling equipment.",
      "Secure materials against accidental movement.",
      "Maintain exclusion zones beneath installation areas."
    ],
    standards: [
      "EN 13830 – Curtain walling product standard.",
      "EN 755 – Aluminium extrusion product specifications.",
      "ISO 9001 – Quality management system reference."
    ]
  },

  {
    id: 2,
    title: "Aluminium Window Systems",
    category: "WINDOW SYSTEMS",
    status: "active",
    image: blog2,
    description:
      "Modern aluminium window solutions offering durability, smooth operation, architectural appearance and appropriate weather protection for residential and commercial buildings.",
    stage: "Fabrication in progress",
    progress: 60,
    location: "Project location to be confirmed",
    system: "Sliding, hinged and fixed aluminium windows",
    materials: [
      "Aluminium window frame and sash profiles",
      "Single or insulated glazing as specified",
      "EPDM gaskets and weather seals",
      "Stainless steel or approved hardware",
      "Handles, rollers, hinges and locking systems"
    ],
    specifications: [
      "Profile dimensions according to approved system drawings.",
      "Glass thickness according to structural and safety requirements.",
      "Thermal break profiles where specified.",
      "Hardware selected according to sash weight and operating type.",
      "Air, water and wind performance to be confirmed against project requirements."
    ],
    installation: [
      "Measure and verify window opening dimensions.",
      "Fabricate frames and sashes according to approved drawings.",
      "Install compatible hardware and glazing components.",
      "Position and secure frames within prepared openings.",
      "Complete perimeter sealing and finishing.",
      "Test opening, closing and locking operations."
    ],
    quality: [
      "Verify profile dimensions and fabrication accuracy.",
      "Check frame squareness and diagonal measurements.",
      "Inspect glazing and gasket installation.",
      "Test locks, rollers, hinges and handles.",
      "Inspect perimeter sealant and drainage openings."
    ],
    safety: [
      "Wear protective gloves when handling glass.",
      "Use suitable lifting equipment for large window units.",
      "Protect completed frames from construction damage.",
      "Keep working areas clean and unobstructed."
    ],
    standards: [
      "EN 14351-1 – Windows and external pedestrian doorsets.",
      "EN 755 – Aluminium extrusion specifications.",
      "ISO 9001 – Quality management reference."
    ]
  },

  {
    id: 3,
    title: "Architectural Glass Installation",
    category: "GLASS SYSTEMS",
    status: "pending",
    image: blog3,
    description:
      "Architectural glazing works designed to create elegant transparent building elements while addressing safety, structural support, durability and visual quality.",
    stage: "Awaiting approval",
    progress: 0,
    location: "Project location to be confirmed",
    system: "Architectural safety glazing system",
    materials: [
      "Tempered safety glass where specified",
      "Laminated safety glass where required",
      "Aluminium or stainless steel support fittings",
      "Approved glazing setting blocks",
      "Compatible silicone and weather seals"
    ],
    specifications: [
      "Glass type and thickness according to approved structural calculations.",
      "Safety glazing classification according to the intended application.",
      "Glass edges and holes processed according to approved fabrication drawings.",
      "Support fittings selected for the design loads.",
      "Clearances and joints coordinated with the glazing system."
    ],
    installation: [
      "Review approved glazing drawings and specifications.",
      "Verify glass dimensions and support locations.",
      "Inspect glass panels before installation.",
      "Install approved supports and setting blocks.",
      "Position glass using suitable handling equipment.",
      "Complete approved joints and protective finishing."
    ],
    quality: [
      "Check glass dimensions, thickness and identification.",
      "Inspect glass surfaces and processed edges.",
      "Verify support alignment and fixing details.",
      "Check setting blocks and required clearances.",
      "Inspect completed joints and overall appearance."
    ],
    safety: [
      "Use glass suction lifters where appropriate.",
      "Wear cut-resistant gloves and suitable PPE.",
      "Use glass transport racks and edge protection.",
      "Maintain restricted access during lifting operations."
    ],
    standards: [
      "EN 12150 – Thermally toughened safety glass.",
      "EN 14449 – Laminated glass and laminated safety glass.",
      "EN 12600 – Pendulum impact test and classification."
    ]
  },

  {
    id: 4,
    title: "Aluminium Cladding Works",
    category: "CLADDING SYSTEMS",
    status: "pending",
    image: blog4,
    description:
      "Architectural aluminium composite panel cladding designed to enhance building façades with a clean appearance, coordinated panel layouts and durable external finishes.",
    stage: "Material preparation",
    progress: 0,
    location: "Project location to be confirmed",
    system: "Aluminium composite panel façade system",
    materials: [
      "Aluminium composite panels as specified",
      "Aluminium support rails and subframes",
      "Mounting brackets and approved fasteners",
      "Joint profiles and backing materials",
      "Compatible weatherproofing sealants"
    ],
    specifications: [
      "Panel thickness, core type and finish according to approved specifications.",
      "Fire performance classification to meet applicable building regulations.",
      "Subframe design to accommodate project-specific wind loads.",
      "Panel joints and expansion allowances according to system requirements.",
      "Corrosion protection and compatible fixings for the installation environment."
    ],
    installation: [
      "Review approved façade layouts and material submittals.",
      "Survey the building façade and support locations.",
      "Install brackets and supporting subframe.",
      "Verify alignment and panel module dimensions.",
      "Fabricate and install panels according to approved details.",
      "Complete joints, corners and perimeter finishing."
    ],
    quality: [
      "Verify panel colour, finish and material identification.",
      "Inspect subframe alignment and fixing locations.",
      "Check panel dimensions and joint consistency.",
      "Inspect surface condition and finishing quality.",
      "Review fire-related material documentation."
    ],
    safety: [
      "Use approved access equipment and fall protection.",
      "Handle panels carefully to prevent surface damage.",
      "Secure loose materials during installation.",
      "Follow approved site lifting and storage procedures."
    ],
    standards: [
      "EN 13501-1 – Reaction to fire classification.",
      "EN 755 – Aluminium extrusion specifications.",
      "Applicable UAE fire and life-safety requirements."
    ]
  },

  {
    id: 5,
    title: "Commercial Aluminium Doors",
    category: "DOOR SYSTEMS",
    status: "completed",
    image: blog5,
    description:
      "Commercial aluminium door systems combining strong framing, practical operation and modern architectural design for building entrances and internal access areas.",
    stage: "Successfully completed",
    progress: 100,
    location: "Project location to be confirmed",
    system: "Commercial hinged and glazed aluminium doors",
    materials: [
      "Aluminium door frames and sash profiles",
      "Safety glass according to application",
      "Heavy-duty hinges and locking hardware",
      "Handles, cylinders and door accessories",
      "EPDM gaskets and compatible sealants"
    ],
    specifications: [
      "Frame and sash dimensions according to approved shop drawings.",
      "Glass specification according to safety requirements.",
      "Hardware capacity suitable for door weight and usage.",
      "Locking and access provisions according to project requirements.",
      "Weather sealing where external exposure is applicable."
    ],
    installation: [
      "Verify opening dimensions and approved door schedule.",
      "Fabricate frames and door leaves.",
      "Install glass and hardware components.",
      "Position and secure door frames.",
      "Adjust hinges, locks and closing mechanisms.",
      "Complete operational testing and finishing."
    ],
    quality: [
      "Inspect frame alignment and fixing security.",
      "Check door clearances and swing movement.",
      "Test handles, locks and hinges.",
      "Inspect glass, gaskets and sealant.",
      "Complete final visual and operational inspection."
    ],
    safety: [
      "Protect glass edges during handling.",
      "Use suitable equipment for heavy door leaves.",
      "Verify secure fixing before operational testing.",
      "Maintain safe access around installation areas."
    ],
    standards: [
      "EN 14351-1 – External pedestrian doorsets where applicable.",
      "EN 755 – Aluminium extrusion specifications.",
      "ISO 9001 – Quality management reference."
    ]
  },

  {
    id: 6,
    title: "Glass Partition Systems",
    category: "INTERIOR SYSTEMS",
    status: "completed",
    image: blog6,
    description:
      "Contemporary interior glass partition systems designed to create bright, functional and visually open workspaces with carefully coordinated aluminium framing and glass fittings.",
    stage: "Quality inspection completed",
    progress: 100,
    location: "Project location to be confirmed",
    system: "Framed and frameless interior glass partitions",
    materials: [
      "Tempered or laminated safety glass as specified",
      "Aluminium floor and ceiling channels",
      "Stainless steel glass fittings",
      "Compatible partition gaskets",
      "Approved silicone and joint finishing materials"
    ],
    specifications: [
      "Glass type and thickness selected for panel dimensions and application.",
      "Framing profiles coordinated with architectural details.",
      "Glass edge finishing according to approved fabrication drawings.",
      "Fixings and fittings selected for the required loads.",
      "Acoustic performance to be confirmed where specified."
    ],
    installation: [
      "Survey floor, wall and ceiling conditions.",
      "Mark partition lines according to approved layouts.",
      "Install aluminium channels and support fittings.",
      "Position glass panels using suitable handling equipment.",
      "Install doors, handles and associated accessories.",
      "Complete alignment, sealing and final cleaning."
    ],
    quality: [
      "Verify partition dimensions and layout.",
      "Check vertical alignment and panel stability.",
      "Inspect glass surfaces and edges.",
      "Check door operation and fittings.",
      "Inspect joints, sealant and final appearance."
    ],
    safety: [
      "Use suitable glass lifting equipment.",
      "Wear protective gloves and safety footwear.",
      "Protect glass panels during transportation.",
      "Keep installation areas clear during panel positioning."
    ],
    standards: [
      "EN 12150 – Thermally toughened safety glass.",
      "EN 14449 – Laminated glass where applicable.",
      "EN 12600 – Impact classification where applicable."
    ]
  }
];

const statusInfo = {
  active: {
    title: "Active Projects",
    subtitle: "Projects currently being fabricated, installed or executed.",
    icon: <FaProjectDiagram />
  },
  pending: {
    title: "Pending Projects",
    subtitle: "Projects awaiting approval, materials or commencement.",
    icon: <FaClock />
  },
  completed: {
    title: "Completed Projects",
    subtitle: "Projects recorded as completed in this sample portfolio.",
    icon: <FaCheckCircle />
  }
};

const validStatuses = ['active', 'pending', 'completed'];

const Blog = () => {
  const location = useLocation();

  const [selectedStatus, setSelectedStatus] = useState(
    validStatuses.includes(location.state?.projectStatus)
      ? location.state.projectStatus
      : 'active'
  );

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const requestedStatus = location.state?.projectStatus;

    if (validStatuses.includes(requestedStatus)) {
      setSelectedStatus(requestedStatus);
    }
  }, [location.state]);

  useEffect(() => {
    if (!selectedProject) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const filteredProjects = projects.filter(
    project => project.status === selectedStatus
  );

  const getCount = status =>
    projects.filter(project => project.status === status).length;

  const renderList = (items) => (
    <ul className="awan-detail-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <main className="awan-project-page">

      {/* HERO */}
      <section className="awan-project-hero">
        <div className="awan-project-hero-content">
          <span>AWAN GENERAL ALUMINIUM & CONSTRUCTION</span>
          <h1>Our Projects</h1>
          <p>
            Explore our aluminium, glass and architectural solutions.
            Discover our project portfolio and technical capabilities.
          </p>

          <a href="#project-portfolio" className="awan-hero-button">
            EXPLORE PROJECTS <FaArrowRight />
          </a>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="awan-project-intro">
        <span>OUR PROJECT PORTFOLIO</span>
        <h2>Quality Work. Professional Results.</h2>
        <p>
          We deliver architectural aluminium and glass solutions
          through professional fabrication, installation and
          quality management.
        </p>
      </section>

      {/* PROJECT PORTFOLIO */}
      <section className="awan-project-portfolio" id="project-portfolio">

        <div className="awan-portfolio-heading">
          <div>
            <span>PROJECT TRACKING</span>
            <h2>Explore Projects by Status</h2>
            <p>Select a category to view the relevant projects.</p>
          </div>

          <div className="awan-total-projects">
            <FaBuilding />
            <strong>{projects.length}</strong>
            <span>Listed Projects</span>
          </div>
        </div>

        {/* STATUS NAVIGATION */}
        <div className="project-status-navigation">

          <Link
            to="/blog"
            state={{ projectStatus: "active" }}
            className={`project-btn ${selectedStatus === 'active' ? 'selected' : ''}`}
          >
            <FaProjectDiagram />
            View Active Projects
            <strong>{getCount('active')}</strong>
          </Link>

          <Link
            to="/blog"
            state={{ projectStatus: "pending" }}
            className={`project-btn ${selectedStatus === 'pending' ? 'selected' : ''}`}
          >
            <FaClock />
            View Pending Projects
            <strong>{getCount('pending')}</strong>
          </Link>

          <Link
            to="/blog"
            state={{ projectStatus: "completed" }}
            className={`project-btn ${selectedStatus === 'completed' ? 'selected' : ''}`}
          >
            <FaCheckCircle />
            View Completed Projects
            <strong>{getCount('completed')}</strong>
          </Link>

        </div>

        {/* CATEGORY DESCRIPTION */}
        <div className="awan-selected-status">
          <div className="awan-status-icon">
            {statusInfo[selectedStatus].icon}
          </div>

          <div>
            <h3>{statusInfo[selectedStatus].title}</h3>
            <p>{statusInfo[selectedStatus].subtitle}</p>
          </div>
        </div>

        {/* PROJECT CARDS */}
        <div className="awan-project-grid">
          {filteredProjects.map(project => (
            <article className="awan-project-card" key={project.id}>

              <div className="awan-project-image">
                <img src={project.image} alt={project.title} />

                <span className={`awan-status-badge ${project.status}`}>
                  {project.status.toUpperCase()}
                </span>
              </div>

              <div className="awan-project-details">

                <span className="awan-project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="awan-project-stage">
                  <FaHardHat />
                  <span>{project.stage}</span>
                </div>

                <div className="awan-progress-heading">
                  <span>Project Progress</span>
                  <strong>{project.progress}%</strong>
                </div>

                <div className="awan-progress-track">
                  <div
                    className={`awan-progress-fill ${project.status}`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>

                <button
                  type="button"
                  className="awan-project-view"
                  onClick={() => setSelectedProject(project)}
                >
                  VIEW FULL PROJECT DETAILS <FaArrowRight />
                </button>

              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="awan-empty-projects">
            <FaLayerGroup />
            <h3>No Projects Available</h3>
            <p>There are currently no projects in this category.</p>
          </div>
        )}

      </section>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div
          className="awan-project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="awan-project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="awan-modal-title"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              className="awan-modal-close"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes />
            </button>

            <div className="awan-modal-image-wrapper">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="awan-modal-image"
              />

              <span className={`awan-status-badge ${selectedProject.status}`}>
                {selectedProject.status.toUpperCase()}
              </span>
            </div>

            <div className="awan-modal-content">

              <span className="awan-project-category">
                {selectedProject.category}
              </span>

              <h2 id="awan-modal-title">
                {selectedProject.title}
              </h2>

              <p className="awan-modal-description">
                {selectedProject.description}
              </p>

              <div className="awan-modal-overview">
                <div>
                  <FaBuilding />
                  <span>Project Location</span>
                  <strong>{selectedProject.location}</strong>
                </div>

                <div>
                  <FaTools />
                  <span>System Type</span>
                  <strong>{selectedProject.system}</strong>
                </div>

                <div>
                  <FaProjectDiagram />
                  <span>Current Stage</span>
                  <strong>{selectedProject.stage}</strong>
                </div>

                <div>
                  <FaRulerCombined />
                  <span>Progress</span>
                  <strong>{selectedProject.progress}%</strong>
                </div>
              </div>

              <div className="awan-modal-progress">
                <div className="awan-progress-heading">
                  <span>Project Completion</span>
                  <strong>{selectedProject.progress}%</strong>
                </div>

                <div className="awan-progress-track">
                  <div
                    className={`awan-progress-fill ${selectedProject.status}`}
                    style={{ width: `${selectedProject.progress}%` }}
                  />
                </div>
              </div>

              <div className="awan-technical-section">
                <h3><FaLayerGroup /> Materials & Components</h3>
                {renderList(selectedProject.materials)}
              </div>

              <div className="awan-technical-section">
                <h3><FaRulerCombined /> Technical Specifications</h3>
                {renderList(selectedProject.specifications)}
              </div>

              <div className="awan-technical-section">
                <h3><FaTools /> Installation Methodology</h3>
                {renderList(selectedProject.installation)}
              </div>

              <div className="awan-technical-section">
                <h3><FaClipboardCheck /> Quality Control & Inspection</h3>
                {renderList(selectedProject.quality)}
              </div>

              <div className="awan-technical-section">
                <h3><FaShieldAlt /> Health & Safety Requirements</h3>
                {renderList(selectedProject.safety)}
              </div>

              <div className="awan-technical-section awan-standards-section">
                <h3><FaCheckCircle /> Relevant Standards & References</h3>
                {renderList(selectedProject.standards)}
              </div>

              <p className="awan-technical-note">
                Technical references are indicative. Final materials,
                dimensions, performance classifications, testing,
                certifications and applicable authority requirements
                must be verified against approved project documents.
              </p>

              <button
                type="button"
                className="awan-modal-done"
                onClick={() => setSelectedProject(null)}
              >
                CLOSE PROJECT DETAILS
              </button>

            </div>
          </div>
        </div>
      )}

      {/* CONTACT */}
      <section className="awan-project-contact">
        <div>
          <span>HAVE A PROJECT IN MIND?</span>
          <h2>Let's Build Something Exceptional.</h2>
          <p>
            Discuss your aluminium, glass and architectural requirements
            with our professional team.
          </p>
        </div>

        <Link to="/contact">
          CONTACT OUR TEAM <FaArrowRight />
        </Link>
      </section>

    </main>
  );
};

export default Blog;
