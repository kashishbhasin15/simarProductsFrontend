import React from 'react';
import { ShoppingBag, Heart } from 'lucide-react';
import './ProductCard.css';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'luxury';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, variant = 'default' }) => {
  return (
    <div className={`product-card ${variant === 'luxury' ? 'product-card-luxury' : ''}`}>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-overlay">
          <button className="product-action-btn">
            <Heart size={20} />
          </button>
          <button className="product-action-btn product-cart-btn">
            <ShoppingBag size={20} />
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">{product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;