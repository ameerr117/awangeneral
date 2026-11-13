import './WhatsAppButton.css';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '923001234567'; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
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