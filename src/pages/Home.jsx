import { Link } from "react-router-dom";
import AboutUs from "../components/AboutUs";

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="eyebrow">Bring Nature Home</span>
            <h1>Paradise Nursery</h1>
            
            <p>
              Discover beautiful houseplants carefully selected 
              to make your home greener, calmer, and more refreshing.
            </p>
            
            <Link to="/plants" className="primary-btn">
              Get Started
            </Link>
          </div>
        </div>
      </section>
      
      <AboutUs />
    </main>
  );
}

export default Home;
