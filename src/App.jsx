import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
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
      <Footer />
    </>
  );
}

export default App;
