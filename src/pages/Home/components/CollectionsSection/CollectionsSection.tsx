import React from 'react';
import ProductCard from "../../../../components/ProductCard/ProductCard";
import './CollectionsSection.css';

const CollectionsSection: React.FC = () => {
  const collections = [
    {
      id: 1,
      name: "The Heritage Collection",
      price: "₹2,999",
      image: "https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Timeless elegance with artisanal craftsmanship"
    },
    {
      id: 2,
      name: "The Artisan Box",
      price: "₹4,499",
      image: "https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Handpicked treasures from local artisans"
    },
    {
      id: 3,
      name: "The Wellness Retreat",
      price: "₹3,799",
      image: "https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Luxury spa essentials for ultimate relaxation"
    },
    {
      id: 4,
      name: "The Gourmet Experience",
      price: "₹5,299",
      image: "https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Exquisite culinary delights and fine treats"
    }
  ];

  return (
    <section className="collections-section">
      <div className="section">
        <h2 className="section-title">Curated Gift Collections</h2>
        <p className="section-subtitle">
          Each collection is thoughtfully assembled to create unforgettable moments. 
          Discover the perfect gift that speaks to your story.
        </p>
        
        <div className="collections-grid">
          {collections.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              variant="luxury"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;