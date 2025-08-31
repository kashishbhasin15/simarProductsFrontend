import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          SIMRI
        </Link>
        
        <div className={`navbar-menu ${isMenuOpen ? 'navbar-menu-open' : ''}`}>
          <Link to="/products" className="navbar-link">Collections</Link>
          <Link to="/products?category=occasions" className="navbar-link">Occasions</Link>
          <Link to="/products?category=recipients" className="navbar-link">Recipients</Link>
          <Link to="/corporate" className="navbar-link">Corporate</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>

        <div className="navbar-actions">
          <button className="navbar-action-btn">
            <Search size={20} />
          </button>
          <Link to="/checkout" className="navbar-action-btn">
            <ShoppingBag size={20} />
            <span className="cart-count">0</span>
          </Link>
          <button 
            className="navbar-mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;