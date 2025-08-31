import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">SIMRI</h3>
            <p className="footer-tagline">Luxury Gifting Reimagined</p>
            <p className="footer-description">
              Curating exceptional gifts for life's most precious moments.
              Every package tells a story of thoughtfulness and elegance.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/products">Collections</a></li>
              <li><a href="/products?category=occasions">Occasions</a></li>
              <li><a href="/corporate">Corporate Gifting</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Customer Care</h4>
            <ul className="footer-links">
              <li>Track Your Order</li>
              <li>Return Policy</li>
              <li>Size Guide</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>hello@simri.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Mumbai, India</span>
              </div>
            </div>
            <div className="footer-social">
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Facebook size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Simri. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;