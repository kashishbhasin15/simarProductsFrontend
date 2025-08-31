import React from 'react';
import { Package, Sparkles, ArrowRight,Heart  } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CustomHampers.css';

const CustomHampers: React.FC = () => {
  return (
    <section className="custom-hampers-section">
      <div className="section">
        <div className="custom-hampers-container">
          <div className="custom-hampers-content">
            <div className="custom-badge">
              <Sparkles size={16} />
              <span>Personalized Experience</span>
            </div>
            
            <h2 className="custom-title">Create Your Custom Hamper</h2>
            <p className="custom-description">
              Design a truly unique gift experience by selecting from our premium collection 
              of artisanal products, gourmet treats, and luxury accessories. Each hamper is 
              beautifully packaged and can be personalized with your message.
            </p>

            <div className="custom-features">
              <div className="custom-feature">
                <Package size={20} />
                <span>Choose Your Box Size</span>
              </div>
              <div className="custom-feature">
                <Sparkles size={20} />
                <span>Select Premium Items</span>
              </div>
              <div className="custom-feature">
                <Heart size={20} />
                <span>Add Personal Message</span>
              </div>
            </div>

            <Link to="/products?build=custom" className="custom-btn">
              Start Building
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="custom-visual">
            <div className="custom-image-container">
              <img 
                src="https://images.pexels.com/photos/264906/pexels-photo-264906.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Custom Gift Hamper"
                className="custom-image"
              />
              <div className="custom-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomHampers;