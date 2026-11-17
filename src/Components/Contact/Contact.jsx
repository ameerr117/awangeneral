
import './Contact.css';

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get('name');
    const phone = data.get('phone');
    const email = data.get('email');
    const project = data.get('project');
    const message = data.get('message');

    const subject = encodeURIComponent(
      `New Project Enquiry - ${name}`
    );

    const body = encodeURIComponent(
`Dear AWAN General Contracting & Aluminium Works Team,

I would like to enquire about your services.

CUSTOMER DETAILS
-------------------------
Full Name: ${name}
Phone Number: ${phone}
Email Address: ${email}

PROJECT INFORMATION
-------------------------
Project Type: ${project}

Project Requirements:
${message}

I would appreciate it if your team could contact me to discuss the project details, pricing and next steps.

Thank you.

Best Regards,
${name}
`
    );

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1&to=awangcaw@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="contact-page">

      <section className="Abouts contact-banner">
        <div className="Abouts-text">

          <span className="contact-eyebrow">
            AWAN GENERAL ALUMINIUM & CONSTRUCTION WORK LLC
          </span>

          <h1>
            Lets Start Your <span>Project.</span>
          </h1>

          <p>
            Professional aluminium, glazing and architectural solutions
            for modern construction projects.
          </p>

        </div>

        <div className="banner-mark">AWAN</div>
      </section>

      <section className="contact-us-container">

        <div className="contact-heading">

          <span className="section-label">GET IN TOUCH</span>

          <h2>
            Lets Build Something <strong>Exceptional.</strong>
          </h2>

          <p>
            Have a construction or aluminium project in mind?
            Send your requirements directly to our team.
            We look forward to working with you.
          </p>

        </div>

        <div className="contact-frame">

          <div className="form-top">
            <span className="contact-number">01</span>
            <div className="form-top-line"></div>
            <span>SEND A PROJECT ENQUIRY</span>
          </div>

          <div className="form-heading">

            <h2>Tell Us About Your Project</h2>

            <p>
              Complete the details below. Your enquiry will be
              prepared in Gmail and addressed directly to our team.
            </p>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">YOUR FULL NAME</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">PHONE NUMBER</label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+971 XX XXX XXXX"
                  required
                />
              </div>

            </div>

            <div className="form-group">

              <label htmlFor="email">EMAIL ADDRESS</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="project">SELECT PROJECT TYPE</label>

              <select
                id="project"
                name="project"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select your project type
                </option>

                <option>Aluminium Windows & Doors</option>
                <option>Curtain Wall & Facade</option>
                <option>Glass & Glazing Works</option>
                <option>Aluminium Cladding</option>
                <option>Glass Railings</option>
                <option>Painting Works</option>
                <option>Plumbing Works</option>
                <option>Electrical Works</option>
                <option>Flooring & Tiling</option>
                <option>Carpentry & Joinery</option>
                <option>Civil Construction</option>
                <option>Building Maintenance</option>
                <option>Other Construction Works</option>

              </select>

            </div>

            <div className="form-group">

              <label htmlFor="message">PROJECT DETAILS</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Describe your project, location, required services and any other important details..."
                required
              />

            </div>

            <button type="submit" className="contact-submit">

              <span>SEND YOUR ENQUIRY</span>
              <b>→</b>

            </button>

          </form>

          <div className="form-footer">

            <span>AWAN</span>
            <div></div>
            <small>QUALITY • PRECISION • PROFESSIONALISM</small>

          </div>

        </div>

        <div className="contact-direct-email">
          <p>Prefer to contact us directly?</p>
          <a href="mailto:awangcaw@gmail.com">
            awangcaw@gmail.com
          </a>
        </div>

      </section>

    </div>
  );
};

export default Contact;
