
import './WhatsAppButton.css';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '971562700627';

  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AWAN on WhatsApp"
    >
      <FaWhatsapp />
      <span>Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
