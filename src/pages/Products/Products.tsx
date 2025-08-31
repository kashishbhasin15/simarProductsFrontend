import React, { useState } from 'react';
import { Filter, Search, Grid, List } from 'lucide-react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Products.css';

const Products: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterOpen, setFilterOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "The Artisan's Dream",
      price: "₹3,499",
      image: "https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Handcrafted treasures from local artisans",
      category: "artisan",
      recipient: "her"
    },
    {
      id: 2,
      name: "Executive Elegance",
      price: "₹5,999",
      image: "https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Sophisticated gifts for the modern professional",
      category: "corporate",
      recipient: "him"
    },
    {
      id: 3,
      name: "Sweet Serenity Spa",
      price: "₹4,299",
      image: "https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Luxury wellness collection for ultimate relaxation",
      category: "wellness",
      recipient: "her"
    },
    {
      id: 4,
      name: "Gourmet Journey",
      price: "₹6,799",
      image: "https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Curated culinary experiences and fine delicacies",
      category: "gourmet",
      recipient: "couples"
    },
    {
      id: 5,
      name: "Heritage Collection",
      price: "₹4,999",
      image: "https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Timeless pieces celebrating cultural heritage",
      category: "heritage",
      recipient: "couples"
    },
    {
      id: 6,
      name: "Little Explorer's Box",
      price: "₹2,799",
      image: "https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Educational and fun gifts for curious minds",
      category: "kids",
      recipient: "kids"
    }
  ];

  return (
    <div className="products-page">
      <div className="products-container">
        <div className="products-header">
          <div className="products-title-section">
            <h1 className="products-title">Our Collections</h1>
            <p className="products-subtitle">
              Discover handpicked luxury gifts curated for every special moment
            </p>
          </div>

          <div className="products-controls">
            <div className="search-container">
              <Search size={20} />
              <input 
                type="text" 
                placeholder="Search collections..."
                className="search-input"
              />
            </div>

            <button 
              className="filter-btn"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter size={20} />
              Filters
            </button>

            <div className="view-controls">
              <button 
                className={`view-btn ${viewMode === 'grid' ? 'view-btn-active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid size={20} />
              </button>
              <button 
                className={`view-btn ${viewMode === 'list' ? 'view-btn-active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="products-content">
          <div className={`filters-sidebar ${filterOpen ? 'filters-open' : ''}`}>
            <div className="filter-section">
              <h3 className="filter-title">Category</h3>
              <div className="filter-options">
                <label className="filter-option">
                  <input type="checkbox" />
                  <span>Artisan Crafts</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span>Wellness & Spa</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span>Gourmet Treats</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span>Corporate Gifts</span>
                </label>
              </div>
            </div>

            <div className="filter-section">
              <h3 className="filter-title">Recipient</h3>
              <div className="filter-options">
                <label className="filter-option">
                  <input type="checkbox" />
                  <span>For Her</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span>For Him</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span>For Couples</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span>For Kids</span>
                </label>
              </div>
            </div>

            <div className="filter-section">
              <h3 className="filter-title">Price Range</h3>
              <div className="filter-options">
                <label className="filter-option">
                  <input type="checkbox" />
                  <span>Under ₹3,000</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span>₹3,000 - ₹5,000</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span>₹5,000 - ₹10,000</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span>Above ₹10,000</span>
                </label>
              </div>
            </div>
          </div>

          <div className="products-grid-container">
            <div className={`products-grid ${viewMode === 'list' ? 'products-list' : ''}`}>
              {products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  variant="luxury"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;