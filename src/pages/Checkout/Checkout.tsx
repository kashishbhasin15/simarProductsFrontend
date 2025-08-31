import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    upiId: '',
    orderComplete: false
  });

  const steps = [
    { number: 1, title: 'Contact Information', description: 'Your details' },
    { number: 2, title: 'Delivery Address', description: 'Where to send' },
    { number: 3, title: 'Payment', description: 'UPI Payment' },
    { number: 4, title: 'Confirmation', description: 'Order complete' }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setFormData({ ...formData, orderComplete: true });
      setCurrentStep(4);
    }, 2000);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-header">
          <Link to="/products" className="back-link">
            <ArrowLeft size={20} />
            Back to Shopping
          </Link>
          <h1 className="checkout-title">Secure Checkout</h1>
        </div>

        <div className="checkout-content">
          <div className="checkout-steps">
            {steps.map((step) => (
              <div 
                key={step.number} 
                className={`step ${currentStep >= step.number ? 'step-active' : ''} ${currentStep > step.number ? 'step-completed' : ''}`}
              >
                <div className="step-number">
                  {currentStep > step.number ? <CheckCircle size={20} /> : step.number}
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-form">
            {currentStep === 1 && (
              <div className="form-section">
                <h2 className="form-title">Contact Information</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="form-section">
                <h2 className="form-title">Delivery Address</h2>
                <div className="form-grid">
                  <div className="form-group form-group-full">
                    <label className="form-label">Complete Address</label>
                    <textarea 
                      className="form-textarea"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      placeholder="House/Flat no, Street, Area"
                      rows={3}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input 
                      type="text" 
                      className="form-input"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      placeholder="Mumbai"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Pincode</label>
                    <input 
                      type="text" 
                      className="form-input"
                      value={formData.pincode}
                      onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                      placeholder="400001"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="form-section">
                <h2 className="form-title">UPI Payment</h2>
                <div className="payment-section">
                  <div className="upi-apps">
                    <h3 className="upi-title">Supported UPI Apps</h3>
                    <div className="upi-logos">
                      <div className="upi-app">GPay</div>
                      <div className="upi-app">PhonePe</div>
                      <div className="upi-app">Paytm</div>
                      <div className="upi-app">BHIM</div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Enter your UPI ID</label>
                    <input 
                      type="text" 
                      className="form-input upi-input"
                      value={formData.upiId}
                      onChange={(e) => setFormData({...formData, upiId: e.target.value})}
                      placeholder="yourname@upi"
                    />
                  </div>

                  <div className="payment-security">
                    <Shield size={20} />
                    <span>Your payment is secured with 256-bit SSL encryption</span>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && formData.orderComplete && (
              <div className="form-section confirmation-section">
                <div className="confirmation-icon">
                  <CheckCircle size={60} />
                </div>
                <h2 className="confirmation-title">Order Confirmed!</h2>
                <p className="confirmation-message">
                  Thank you for choosing Simri. Your luxury gift is being prepared with care 
                  and will be delivered within 3-5 business days.
                </p>
                <div className="order-details">
                  <h3>Order #SIMRI2025001</h3>
                  <p>Total: ₹4,999</p>
                  <p>Delivery to: {formData.city}</p>
                </div>
                <Link to="/" className="continue-shopping-btn">
                  Continue Shopping
                </Link>
              </div>
            )}

            <div className="checkout-actions">
              {currentStep > 1 && currentStep < 4 && (
                <button className="checkout-btn checkout-btn-back" onClick={handleBack}>
                  <ArrowLeft size={20} />
                  Back
                </button>
              )}
              
              {currentStep < 3 && (
                <button className="checkout-btn checkout-btn-next" onClick={handleNext}>
                  Continue
                  <ArrowRight size={20} />
                </button>
              )}

              {currentStep === 3 && (
                <button className="checkout-btn checkout-btn-pay" onClick={handlePayment}>
                  Pay ₹4,999
                  <ArrowRight size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;