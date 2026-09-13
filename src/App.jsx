import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

const LandingPage = () => (
  <main className="home-page">
    <section className="hero">
      <div className="hero-content">
        <span className="eyebrow">🌿 Welcome to Paradise</span>
        <h1>
          Bring <em>Nature</em> Into Your Home
        </h1>
        <p>
          Welcome to Paradise Nursery, your number one source for all things plants. We're dedicated to giving you the very best of houseplants, with a focus on dependability, customer service, and uniqueness. Founded in 2023, Paradise Nursery has come a long way from its beginnings.
        </p>
        <Link to="/plants" className="primary-btn">
          Get Started
        </Link>
      </div>
    </section>
    <Footer />
  </main>
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="*"
          element={
            <div className="not-found">
              <h1>Page Not Found</h1>
              <Link to="/">Return Home</Link>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
