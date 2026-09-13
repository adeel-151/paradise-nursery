import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector(state => state.cart.items);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // close menu on route change
  const handleNav = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={handleNav}>
        Paradise<span>Nursery</span>
      </Link>

      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        <NavLink to="/" end onClick={handleNav}>Home</NavLink>
        <NavLink to="/plants" onClick={handleNav}>Plants</NavLink>
        <NavLink to="/contact" onClick={handleNav}>Contact</NavLink>

        <NavLink to="/cart" className="cart-link" onClick={handleNav}>
          <span>🛒</span>
          <span>Cart</span>
          <span className="cart-count">{totalItems}</span>
        </NavLink>
      </nav>

      {menuOpen && <div className="nav-overlay" onClick={handleNav}></div>}
    </header>
  );
}

export default Navbar;
