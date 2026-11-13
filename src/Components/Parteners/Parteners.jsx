import  { useEffect, useState } from 'react';
import './Parteners.css';
import logo1 from "../../assets/brand1.png.webp";
import logo2 from "../../assets/brand2.png.webp";
import logo3 from "../../assets/brand3.png.webp";
import logo4 from "../../assets/brand4.png.webp";
import logo5 from "../../assets/brand5.png.webp";
import logo6 from"../../assets/brand6.png.webp";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const Parteners = () => {
  const [visibleLogos, setVisibleLogos] = useState(logos.slice(0, 4));
  const [index, setIndex] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLogos(prev => {
        const newLogos = [...prev];
        newLogos.shift(); // Remove the first logo (moving left)
        newLogos.push(logos[index]); // Add the new logo on the right
        setIndex((prevIndex) => (prevIndex + 1) % logos.length); // Update index for next logo
        return newLogos;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="parteners">
      <h1>Our Partners</h1>
      <p>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere.</p>
      <div className="logos-container">
        {visibleLogos.map((logo, idx) => (
          <img key={idx} src={logo} alt={`Logo ${idx}`} className="logo" />
        ))}
      </div>
    </div>
  );
};

export default Parteners;