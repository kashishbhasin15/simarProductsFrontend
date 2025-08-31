import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            We're here to help make your gifting experience extraordinary. 
            Reach out to us for personalized assistance.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h3 className="contact-method">Phone</h3>
                <p className="contact-value">+91 98765 43210</p>
                <p className="contact-note">Mon-Sat, 9 AM - 8 PM</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <h3 className="contact-method">Email</h3>
                <p className="contact-value">hello@simri.com</p>
                <p className="contact-note">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <h3 className="contact-method">Address</h3>
                <p className="contact-value">
                  Simri Luxury Gifts<br />
                  Bandra West, Mumbai<br />
                  Maharashtra 400050
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Clock size={24} />
              </div>
              <div className="contact-details">
                <h3 className="contact-method">Business Hours</h3>
                <p className="contact-value">
                  Monday - Saturday<br />
                  9:00 AM - 8:00 PM<br />
                  Sunday: 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Send us a Message</h2>
            
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input 
                  type="text" 
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input 
                  type="email" 
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="form-group form-group-full">
                <label className="form-label">Subject</label>
                <input 
                  type="text" 
                  className="form-input"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="How can we help you?"
                />
              </div>
              <div className="form-group form-group-full">
                <label className="form-label">Message *</label>
                <textarea 
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your requirements or any questions you have"
                  rows={5}
                  required
                />
              </div>
            </div>

            <button type="submit" className="contact-submit-btn">
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;