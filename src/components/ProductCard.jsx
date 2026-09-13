import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";

function ProductCard({ product, isAdded }) {
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>
      
      <div className="product-content">
        <span className="product-category">
          {product.category}
        </span>
        
        <h3>{product.name}</h3>
        
        <p>{product.description}</p>
        
        <div className="product-bottom">
          <strong>${product.price.toFixed(2)}</strong>
          
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={isAdded}
            className="add-btn"
          >
            {isAdded ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>

      {showToast && (
        <div className="toast-container">
          <div className="toast">
            <div className="toast-icon">✓</div>
            <p>{product.name} added to cart!</p>
          </div>
        </div>
      )}
    </article>
  );
}

export default ProductCard;
