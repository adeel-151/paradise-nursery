import { Link } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import products from "../data/products";

function Home() {
  const bestsellers = products.filter(p => [1, 8, 13, 5].includes(p.id));

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Interior Designer",
      text: "Paradise Nursery transformed my workspace. The quality of their plants is unmatched and the delivery was flawless.",
      rating: 5
    },
    {
      id: 2,
      name: "Ahmed Khan",
      role: "Plant Enthusiast",
      text: "I've ordered from many nurseries, but none compare to the care and attention Paradise puts into every plant.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Ross",
      role: "Home Decorator",
      text: "The Monstera I received was even more beautiful than the photos. It's now the centerpiece of my living room!",
      rating: 5
    }
  ];

  return (
    <main className="home-page">
      {/* ── Hero ──────────────────────────────── */}
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

      {/* ── About ─────────────────────────────── */}
      <AboutUs />

      {/* ── How It Works ──────────────────────── */}
      <section className="how-it-works">
        <div className="hiw-container">
          <span className="eyebrow">Simple Process</span>
          <h2>How It Works</h2>
          <p className="hiw-subtitle">
            Getting your dream plant is as easy as 1-2-3.
          </p>

          <div className="hiw-steps">
            <div className="hiw-step">
              <div className="hiw-number">01</div>
              <div className="hiw-icon">🔍</div>
              <h3>Browse & Choose</h3>
              <p>Explore our curated collection and find the perfect plant for your space.</p>
            </div>

            <div className="hiw-connector"></div>

            <div className="hiw-step">
              <div className="hiw-number">02</div>
              <div className="hiw-icon">🛒</div>
              <h3>Add to Cart</h3>
              <p>Select your favorites and add them to your cart with a single click.</p>
            </div>

            <div className="hiw-connector"></div>

            <div className="hiw-step">
              <div className="hiw-number">03</div>
              <div className="hiw-icon">🌱</div>
              <h3>Enjoy & Grow</h3>
              <p>Receive your plants with a care guide and watch them thrive in your home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bestsellers ───────────────────────── */}
      <section className="bestsellers">
        <div className="bestsellers-container">
          <div className="bestsellers-header">
            <div>
              <span className="eyebrow">Most Loved</span>
              <h2>Bestselling Plants</h2>
            </div>
            <Link to="/plants" className="secondary-btn">
              View All →
            </Link>
          </div>

          <div className="bestsellers-grid">
            {bestsellers.map(plant => (
              <Link to="/plants" key={plant.id} className="bestseller-card">
                <div className="bestseller-img">
                  <img src={plant.image} alt={plant.name} />
                </div>
                <div className="bestseller-info">
                  <span className="product-category">{plant.category}</span>
                  <h3>{plant.name}</h3>
                  <strong>${plant.price.toFixed(2)}</strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────── */}
      <section className="testimonials">
        <div className="testimonials-container">
          <span className="eyebrow">Customer Love</span>
          <h2>What Our Customers Say</h2>

          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div className="testimonial-card" key={t.id}>
                <div className="testimonial-stars">
                  {"★".repeat(t.rating)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter Banner ─────────────────── */}
      <section className="cta-banner">
        <div className="cta-content">
          <span className="eyebrow">Join 15,000+ Plant Lovers</span>
          <h2>Get 10% Off Your First Order</h2>
          <p>
            Subscribe to our newsletter for exclusive deals, plant
            care tips, and new arrival alerts.
          </p>
          <form className="cta-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit" className="primary-btn">Subscribe →</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Home;
