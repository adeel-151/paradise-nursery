function AboutUs() {
  return (
    <section className="about-section">
      <div className="section-container">
        <span className="eyebrow">About Paradise Nursery</span>
        <h2>Where Every Leaf Tells a Story</h2>

        <p>
          We are passionate plant lovers on a mission to make
          greenery accessible to everyone. Each plant in our
          collection is hand-picked for its beauty, resilience,
          and ability to transform any space.
        </p>

        <p>
          Whether you are a seasoned plant parent or just
          beginning your journey, we are here to help you
          grow something beautiful.
        </p>

        <div className="about-features">
          <div className="about-feature">
            <div className="about-feature-icon">🌱</div>
            <h3>Sustainably Sourced</h3>
            <p>All plants ethically grown at local nurseries with eco-friendly practices.</p>
          </div>

          <div className="about-feature">
            <div className="about-feature-icon">🚚</div>
            <h3>Safe Delivery</h3>
            <p>Carefully packaged and shipped to arrive healthy and thriving at your door.</p>
          </div>

          <div className="about-feature">
            <div className="about-feature-icon">💚</div>
            <h3>Expert Care Tips</h3>
            <p>Every order includes personalized care guides so your plants flourish.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
