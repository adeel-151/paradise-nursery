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
            Bringing the beauty and tranquility of nature into
            your home, one plant at a time. Sustainably sourced,
            lovingly delivered.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Pinterest">📌</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/plants">Shop Plants</Link>
          <Link to="/cart">Shopping Cart</Link>
          <a href="#">New Arrivals</a>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <a href="#">Shipping Info</a>
          <a href="#">Returns Policy</a>
          <a href="#">Plant Care Guide</a>
          <a href="#">FAQ</a>
        </div>

        <div className="footer-column newsletter-col">
          <h3>Stay in the Loop</h3>
          <p>
            Get 10% off your first order plus weekly plant care
            tips and exclusive deals.
          </p>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              required
            />
            <button type="submit" className="primary-btn">
              Join
            </button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Paradise Nursery. Crafted with 💚 for plant lovers.</p>
      </div>
    </footer>
  );
}

export default Footer;
