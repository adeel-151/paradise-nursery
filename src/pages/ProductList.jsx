import { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";

function ProductList() {
  const cartItems = useSelector(state => state.cart.items);
  
  const categories = [
    "All",
    "Indoor Plants",
    "Succulents", 
    "Air Purifying Plants"
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <>
      <Navbar />
      <main className="products-page">
          <section className="products-hero animate-fade-in">
            <span className="eyebrow">Our Collection</span>
            <h1>Find Your Perfect Plant</h1>
            <p>
              Explore our carefully selected houseplants and 
              bring natural beauty into your space.
            </p>
            
            <div className="filter-container">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>
          
          <div className="products-container">
            {categories.filter(c => c !== "All" && (activeCategory === "All" || activeCategory === c)).map((category, index) => {
              const categoryProducts = products.filter(
                product => product.category === category
              );
              
              return (
                <section 
                  className={`category-section animate-fade-in delay-${index + 1}`}
                  key={category}
                >
                  <div className="category-heading">
                    <div>
                      <span className="eyebrow">
                        Paradise Nursery
                      </span>
                      <h2>{category}</h2>
                    </div>
                    
                    <span className="plant-count">
                      {categoryProducts.length} Plants
                    </span>
                  </div>
                  
                  <div className="product-grid">
                    {categoryProducts.map(product => (
                      <ProductCard 
                        key={product.id}
                        product={product}
                        isAdded={isInCart(product.id)}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
      </main>
      <Footer />
    </>
  );
}

export default ProductList;
