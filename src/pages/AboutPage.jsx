import React from "react";
import AboutUs from "../components/AboutUs";

function AboutPage() {
  return (
    <main className="about-page">
      {/* ── Hero ──────────────────────── */}
      <section className="about-hero">
        <div className="hero-content">
          <span className="eyebrow">Our Story</span>
          <h1>Growing Green Spaces Together</h1>
          <p>
            Founded in 2023, Paradise Nursery started with a simple mission: 
            to bring the calming, restorative power of nature into every home, office, and corner.
          </p>
        </div>
      </section>

      {/* ── Feature Section ───────────── */}
      <AboutUs />

      {/* ── Company Values ────────────── */}
      <section className="company-details-section">
        <div className="section-container">
          <div className="company-grid">
            <div className="company-content">
              <span className="eyebrow">Our Values</span>
              <h2>Rooted in Sustainability & Care</h2>
              <p>
                At Paradise Nursery, we believe that businesses should give back more to the earth than they take. We work closely with local farmers, utilize eco-friendly packaging, and ensure that our carbon footprint remains as low as possible.
              </p>
              <p>
                Our team consists of passionate botanists, interior designers, and plant enthusiasts who are dedicated to helping you find the perfect green companion for your space. Whether it's a cozy home office or a sprawling living room, we have a plant that fits perfectly.
              </p>
            </div>
            <div className="company-image">
              <div className="image-placeholder">🌿</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Section ──────────────── */}
      <section className="team-section">
        <div className="section-container">
          <span className="eyebrow">Meet The Team</span>
          <h2>The Faces Behind The Foliage</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍🌾</div>
              <h3>Adeel Ahmad</h3>
              <p>Founder & Head Botanist</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍🎨</div>
              <h3>Sarah Khan</h3>
              <p>Lead Plant Stylist</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>Ayesha Ali</h3>
              <p>Customer Happiness Lead</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">🧑‍💻</div>
              <h3>Omar Tariq</h3>
              <p>Operations Manager</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
