import React, { useState } from 'react';
import { Building, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';
import './Corporate.css';

const Corporate: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    orderSize: '',
    message: ''
  });

  const benefits = [
    {
      icon: <Building size={24} />,
      title: "Corporate Branding",
      description: "Custom packaging with your company logo and colors"
    },
    {
      icon: <Users size={24} />,
      title: "Bulk Pricing",
      description: "Attractive discounts for orders above 50 units"
    },
    {
      icon: <Star size={24} />,
      title: "Dedicated Support",
      description: "Personal account manager for seamless experience"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Quality Assurance",
      description: "Every gift is hand-checked before delivery"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Corporate inquiry submitted:', formData);
  };

  return (
    <div className="corporate-page">
      <div className="corporate-container">
        <div className="corporate-hero">
          <div className="corporate-hero-content">
            <h1 className="corporate-title">Corporate Gifting Excellence</h1>
            <p className="corporate-subtitle">
              Strengthen business relationships with thoughtfully curated luxury gifts. 
              From client appreciation to employee recognition, make every corporate 
              gesture memorable with Simri's premium collections.
            </p>
          </div>
          <div className="corporate-hero-image">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Corporate Gifts"
              className="hero-image"
            />
          </div>
        </div>

        <div className="benefits-section">
          <h2 className="benefits-title">Why Choose Simri for Corporate Gifting?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="enquiry-section">
          <div className="enquiry-content">
            <div className="enquiry-info">
              <h2 className="enquiry-title">Ready to Get Started?</h2>
              <p className="enquiry-description">
                Fill out our enquiry form and our corporate gifting specialists will 
                get back to you within 24 hours with a customized proposal.
              </p>
              
              <div className="enquiry-highlights">
                <div className="highlight-item">
                  <CheckCircle size={20} />
                  <span>Free consultation & quote</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle size={20} />
                  <span>Custom packaging options</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle size={20} />
                  <span>Bulk pricing available</span>
                </div>
              </div>
            </div>

            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Company Name *</label>
                  <input 
                    type="text" 
                    className="form-input"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
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
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input 
                    type="tel" 
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Order Size</label>
                  <select 
                    className="form-input"
                    value={formData.orderSize}
                    onChange={(e) => setFormData({...formData, orderSize: e.target.value})}
                  >
                    <option value="">Select quantity range</option>
                    <option value="10-25">10-25 units</option>
                    <option value="25-50">25-50 units</option>
                    <option value="50-100">50-100 units</option>
                    <option value="100+">100+ units</option>
                  </select>
                </div>
                <div className="form-group form-group-full">
                  <label className="form-label">Additional Requirements</label>
                  <textarea 
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your specific requirements, timeline, or customization needs"
                    rows={4}
                  />
                </div>
              </div>

              <button type="submit" className="enquiry-submit-btn">
                Submit Enquiry
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;