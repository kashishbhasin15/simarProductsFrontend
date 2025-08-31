import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppFloat.css';

const WhatsAppFloat: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210?text=Hello! I would like to inquire about Simri luxury gifts.', '_blank');
  };

  return (
    <button className="whatsapp-float" onClick={handleWhatsAppClick}>
      <MessageCircle size={24} />
      <span className="whatsapp-tooltip">Chat with us</span>
    </button>
  );
};

export default WhatsAppFloat;