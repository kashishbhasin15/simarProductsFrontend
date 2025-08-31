import React from 'react';
import { ArrowRight, Gift, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Star size={16} />
            <span>Premium Gifting Experience</span>
          </div>
          
          <h1 className="hero-title">
            SIMRI
            <span className="hero-subtitle">Luxury Gifting Reimagined</span>
          </h1>
          
          <p className="hero-description">
            Discover our curated collection of extraordinary gifts, thoughtfully designed 
            for life's most cherished moments. From intimate celebrations to grand occasions, 
            we craft experiences that speak to the heart.
          </p>

          <div className="hero-actions">
            <Link to="/products" className="hero-btn hero-btn-primary">
              Explore Collections
              <ArrowRight size={20} />
            </Link>
            <Link to="/corporate" className="hero-btn hero-btn-secondary">
              Corporate Gifting
            </Link>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <Gift size={20} />
              <span>Curated Collections</span>
            </div>
            <div className="hero-feature">
              <Heart size={20} />
              <span>Personalized Touch</span>
            </div>
            <div className="hero-feature">
              <Star size={20} />
              <span>Premium Quality</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-container">
            <img 
              src="https://images.pexels.com/photos/264906/pexels-photo-264906.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Luxury Gift Box"
              className="hero-image"
            />
            <div className="hero-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;