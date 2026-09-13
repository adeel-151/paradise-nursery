import { Link } from "react-router-dom";
import AboutUs from "../components/AboutUs";

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">🌿 Welcome to Paradise</span>
          <h1>
            Bring <em>Nature</em> Into Your Home
          </h1>

          <p>
            Curated collection of premium houseplants — from lush
            tropicals to striking succulents. Sustainably sourced
            and delivered to your door.
          </p>

          <Link to="/plants" className="primary-btn">
            Explore Collection →
          </Link>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>200+</strong>
              <span>Plant Species</span>
            </div>
            <div className="hero-stat">
              <strong>15K+</strong>
              <span>Happy Customers</span>
            </div>
            <div className="hero-stat">
              <strong>4.9★</strong>
              <span>Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      <AboutUs />
    </main>
  );
}

export default Home;
