import React from 'react';
import { Calendar, Heart, Briefcase, Baby, GraduationCap, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import './OccasionsSection.css';

const OccasionsSection: React.FC = () => {
  const occasions = [
    {
      id: 1,
      name: "Birthdays",
      icon: <Calendar size={24} />,
      description: "Make every birthday extraordinary",
      link: "/products?occasion=birthday"
    },
    {
      id: 2,
      name: "Anniversaries",
      icon: <Heart size={24} />,
      description: "Celebrate love and milestones",
      link: "/products?occasion=anniversary"
    },
    {
      id: 3,
      name: "Corporate Events",
      icon: <Briefcase size={24} />,
      description: "Professional gifts that impress",
      link: "/products?occasion=corporate"
    },
    {
      id: 4,
      name: "Baby Showers",
      icon: <Baby size={24} />,
      description: "Welcome new beginnings",
      link: "/products?occasion=baby"
    },
    {
      id: 5,
      name: "Graduations",
      icon: <GraduationCap size={24} />,
      description: "Honor achievements and success",
      link: "/products?occasion=graduation"
    },
    {
      id: 6,
      name: "Housewarming",
      icon: <Home size={24} />,
      description: "Bless new homes and spaces",
      link: "/products?occasion=housewarming"
    }
  ];

  return (
    <section className="occasions-section">
      <div className="section">
        <h2 className="section-title">Shop by Occasion</h2>
        <p className="section-subtitle">
          Every moment deserves the perfect gift. Browse our curated selections 
          for life's most meaningful celebrations.
        </p>
        
        <div className="occasions-grid">
          {occasions.map((occasion) => (
            <Link 
              key={occasion.id} 
              to={occasion.link} 
              className="occasion-card"
            >
              <div className="occasion-icon">
                {occasion.icon}
              </div>
              <h3 className="occasion-name">{occasion.name}</h3>
              <p className="occasion-description">{occasion.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OccasionsSection;