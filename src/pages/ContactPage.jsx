import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const faqs = [
    {
      q: "How do I care for my new plant?",
      a: "Every order comes with a personalized care card. You can also visit our Plant Care Guide for detailed tips on light, water, and soil needs."
    },
    {
      q: "What is your return policy?",
      a: "If your plant arrives damaged, contact us within 48 hours with a photo and we'll send a free replacement — no questions asked."
    },
    {
      q: "Do you offer nationwide shipping?",
      a: "Yes! We ship to all major cities with climate-controlled packaging to ensure your plant arrives healthy and happy."
    },
    {
      q: "Can I visit your nursery in person?",
      a: "Absolutely! Our nursery is open Monday–Saturday, 9 AM – 6 PM. Walk-ins are welcome, but appointments are recommended for large orders."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="contact-page">
        {/* ── Header ──────────────────────── */}
      <section className="contact-hero">
        <span className="eyebrow">Get in Touch</span>
        <h1>We'd Love to Hear From You</h1>
        <p>
          Have a question about plants, orders, or care tips?
          Reach out and our team will get back to you shortly.
        </p>
      </section>

      <div className="contact-body">
        {/* ── Info Cards ────────────────── */}
        <div className="contact-info-cards">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Visit Us</h3>
            <p>123 Green Valley Road</p>
            <p>Lahore, Pakistan</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Call Us</h3>
            <p>+92 300 123 4567</p>
            <p>Mon – Sat, 9AM – 6PM</p>
          </div>

          <div className="info-card">
            <div className="info-icon">✉️</div>
            <h3>Email Us</h3>
            <p>hello@paradisenursery.com</p>
            <p>We reply within 24 hours</p>
          </div>
        </div>

        {/* ── Form + Map ────────────────── */}
        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send Us a Message</h2>

            {submitted && (
              <div className="form-success">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                required
              ></textarea>
            </div>

            <button type="submit" className="primary-btn">
              Send Message →
            </button>
          </form>

          <div className="contact-map">
            <div className="map-placeholder">
              <div className="map-pin">📍</div>
              <h3>Paradise Nursery</h3>
              <p>123 Green Valley Road, Lahore</p>
              <span>Open on Google Maps →</span>
            </div>
          </div>
        </div>

        {/* ── FAQ ───────────────────────── */}
        <section className="faq-section">
          <span className="eyebrow">Common Questions</span>
          <h2>Frequently Asked Questions</h2>

          <div className="faq-grid">
            {faqs.map((faq, i) => (
              <details className="faq-item" key={i}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
    <Footer />
    </>
  );
}

export default ContactPage;
