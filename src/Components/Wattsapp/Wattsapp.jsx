import './WhatsAppButton.css';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '971562700627';

  const message = encodeURIComponent(
    'Hello! I would like to know more about your aluminium and contracting services.'
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
      <span>Chat with Us</span>
    </a>
  );
};

export default WhatsAppButton;