import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function CartPage() {
  const cartItems = useSelector(state => state.cart.items);
  
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  
  const totalCost = cartItems.reduce(
    (total, item) => 
      total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Checkout Coming Soon!");
  };

  return (
    <main className="cart-page">
        <section className="cart-header">
          <div>
            <span className="eyebrow">
              Your Selection
            </span>
            <h1>Shopping Cart</h1>
            <p>
              {totalItems} plant{totalItems !== 1 ? "s" : ""} in your cart
            </p>
          </div>
        </section>
        
        <div className="cart-container">
          {cartItems.length === 0 ? (
            <section className="empty-cart">
              <div className="empty-cart-icon">🪴</div>
              <h2>Your cart is empty</h2>
              <p>
                Discover a beautiful plant for your home.
              </p>
              <Link 
                to="/plants" 
                className="primary-btn"
              >
                Continue Shopping
              </Link>
            </section>
          ) : (
            <>
              <section className="cart-items">
                {cartItems.map(item => (
                  <CartItem 
                    key={item.id}
                    item={item}
                  />
                ))}
              </section>
              
              <aside className="cart-summary">
                <h2>Order Summary</h2>
                
                <div className="summary-row">
                  <span>Total Plants</span>
                  <strong>{totalItems}</strong>
                </div>
                
                <div className="summary-row">
                  <span>Subtotal</span>
                  <strong>
                    ${totalCost.toFixed(2)}
                  </strong>
                </div>
                
                <div className="summary-divider"></div>
                
                <div className="summary-total">
                  <span>Total</span>
                  <strong>
                    ${totalCost.toFixed(2)}
                  </strong>
                </div>
                
                <div className="cart-actions">
                  <Link 
                    to="/plants" 
                    className="secondary-btn"
                  >
                    Continue Shopping
                  </Link>
                  
                  <button 
                    className="primary-btn"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </button>
                </div>
              </aside>
            </>
          )}
        </div>
    </main>
  );
}

export default CartPage;
