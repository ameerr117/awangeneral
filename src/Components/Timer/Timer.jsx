
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Timer.css';

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  const seconds = String(currentTime.getSeconds()).padStart(2, '0');

  return (
    <section className="timer-container">
      <div className="timer-content">

        {/* Left Side - Company Name */}
        <div className="company-name">
          AWAN GENERAL CONTRACTING AND ALUMINIUM  WORK LLC
        </div>

        {/* Center - Live Time */}
        <div className="timer-clock">
          <span className="clock-title">TIME</span>
          <div className="clock-display">
            <span>{hours}</span>
            <span className="time-divider">:</span>
            <span>{minutes}</span>
            <span className="time-divider">:</span>
            <span>{seconds}</span>
          </div>
        </div>

        {/* Right Side - Contact Button */}
        <div className="contact-area">
          <Link to="/contact" className="contact-team-btn">
            Contact My Team
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Timer;