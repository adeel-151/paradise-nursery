import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function ProductList() {
  const cartItems = useSelector(state => state.cart.items);
  
  const categories = [
    "Indoor Plants",
    "Succulents", 
    "Air Purifying Plants"
  ];

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <main className="products-page">
        <section className="products-hero">
          <span className="eyebrow">Our Collection</span>
          <h1>Find Your Perfect Plant</h1>
          <p>
            Explore our carefully selected houseplants and 
            bring natural beauty into your space.
          </p>
        </section>
        
        <div className="products-container">
          {categories.map(category => {
            const categoryProducts = products.filter(
              product => product.category === category
            );
            
            return (
              <section 
                className="category-section" 
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
  );
}

export default ProductList;
