import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mega-footer">
      <div className="footer-container">
        
        <div className="footer-column brand-col">
          <Link to="/" className="logo">
            Paradise<span>Nursery</span>
          </Link>
          <p className="footer-desc">
            Bringing the beauty and tranquility of nature into your home, one plant at a time.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Twitter">🐦</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/plants">Shop Plants</Link>
          <Link to="/cart">Shopping Cart</Link>
        </div>

        <div className="footer-column">
          <h3>Customer Support</h3>
          <a href="#">Shipping & Returns</a>
          <a href="#">Plant Care Guide</a>
          <a href="#">FAQ</a>
        </div>

        <div className="footer-column newsletter-col">
          <h3>Join Our Community</h3>
          <p>Subscribe for 10% off your first order and exclusive plant care tips.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="primary-btn">Subscribe</button>
          </form>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Paradise Nursery. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
