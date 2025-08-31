import React from 'react';
import { User, Users, Crown, Baby } from 'lucide-react';
import { Link } from 'react-router-dom';
import './RecipientsSection.css';

const RecipientsSection: React.FC = () => {
  const recipients = [
    {
      id: 1,
      name: "For Her",
      icon: <Crown size={32} />,
      description: "Elegant gifts that celebrate her grace",
      image: "https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/products?recipient=her"
    },
    {
      id: 2,
      name: "For Him",
      icon: <User size={32} />,
      description: "Sophisticated presents for the modern gentleman",
      image: "https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/products?recipient=him"
    },
    {
      id: 3,
      name: "For Couples",
      icon: <Users size={32} />,
      description: "Thoughtful gifts to strengthen bonds",
      image: "https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/products?recipient=couples"
    },
    {
      id: 4,
      name: "For Kids",
      icon: <Baby size={32} />,
      description: "Delightful surprises for little ones",
      image: "https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/products?recipient=kids"
    }
  ];

  return (
    <section className="recipients-section">
      <div className="section">
        <h2 className="section-title">Shop by Recipient</h2>
        <p className="section-subtitle">
          Find the perfect gift tailored to their personality and preferences. 
          Each selection is curated with care and attention to detail.
        </p>
        
        <div className="recipients-grid">
          {recipients.map((recipient) => (
            <Link 
              key={recipient.id} 
              to={recipient.link} 
              className="recipient-card"
            >
              <div className="recipient-image-container">
                <img src={recipient.image} alt={recipient.name} className="recipient-image" />
                <div className="recipient-overlay">
                  <div className="recipient-icon">
                    {recipient.icon}
                  </div>
                </div>
              </div>
              <div className="recipient-content">
                <h3 className="recipient-name">{recipient.name}</h3>
                <p className="recipient-description">{recipient.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipientsSection;