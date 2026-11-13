import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">

      {/* Page Banner */}
      <section className="Abouts contact-banner">
        <div className="Abouts-text">
          <span className="contact-eyebrow">
            AWAN GENERAL ALUMINIUM & CONSTRUCTION WORK LLC
          </span>

          <h1>Let Start Your <span>Project.</span></h1>

          <p>
            Professional aluminium, glazing and architectural solutions
            for modern construction projects.
          </p>
        </div>

        <div className="banner-mark">AWAN</div>
      </section>

      {/* Contact Section */}
      <section className="contact-us-container">

        <div className="contact-heading">
          <span className="section-label">GET IN TOUCH</span>

          <h2>
            Lets Build Something <strong>Exceptional.</strong>
          </h2>

          <p>
            Share your project requirements with our team. We are ready
            to support your aluminium and construction project.
          </p>
        </div>

        {/* Professional Contact Frame */}
        <div className="contact-frame">

          <div className="form-top">
            <span className="contact-number">01</span>
            <div className="form-top-line"></div>
            <span>SEND A PROJECT ENQUIRY</span>
          </div>

          <div className="form-heading">
            <h2>Tell Us About Your Project</h2>
            <p>
              Complete the form below and our professional team will
              get in touch with you.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const data = new FormData(form);

              const subject = encodeURIComponent('New Project Enquiry');

              const body = encodeURIComponent(
                `Name: ${data.get('name')}\n` +
                `Phone: ${data.get('phone')}\n` +
                `Email: ${data.get('email')}\n\n` +
                `Project Details:\n${data.get('message')}`
              );

              window.location.href =
                `mailto:fahadyaseen020@gmail.com?subject=${subject}&body=${body}`;
            }}
          >
            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">YOUR NAME</label>
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
                  placeholder="Enter your phone number"
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
              <label htmlFor="message">PROJECT DETAILS</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your aluminium, glass or construction requirements..."
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
      </section>
    </div>
  );
};

export default Contact;