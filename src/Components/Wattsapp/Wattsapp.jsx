
import './WhatsAppButton.css';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '971562700627';

  const message = encodeURIComponent(
    'Hello AWAN GENERAL CONTRACTING & ALUMINIUM WORK LLC, I would like to know more about your services.'
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AWAN on WhatsApp"
    >
      <span className="whatsapp-icon">
        <FaWhatsapp />
      </span>

      <span className="whatsapp-text">
        Chat with Us
      </span>
    </a>
  );
};

export default WhatsAppButton;
