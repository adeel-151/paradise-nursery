import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector(state => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        Paradise<span>Nursery</span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>

        <NavLink to="/cart" className="cart-link">
          <span>🛒</span>
          <span>Cart</span>
          <span className="cart-count">{totalItems}</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
