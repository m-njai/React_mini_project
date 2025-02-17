import React from 'react';
import '../App.css';  // Adjust the path to App.css
import beauty1 from '../images/beauty1.jpg';
import beauty2 from '../images/beauty2.jpg';
import beauty3 from '../images/beauty3.jpg';
import models from '../images/models.jpg';
import faceglam from '../images/faceglam.jpg';
import crownmodel from '../images/crownmodel.jpg';

function Home() {
  return (
    <div>
      <div className="background">
        <div className="main-content">
          <h1>Welcome to Our Makeup Store</h1>
          <p>Discover the best makeup products for you.</p>
          <a className="btn btn-primary" href="/products" role="button">Shop Now</a>
        </div>
      </div>

      <section className="featured-products">
        <h2>New Arrivals</h2>
        <div className="product-cards">
          <div className="card">
            <img src={beauty1} alt="New Product 1" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Radiant Glow Foundation</h5>
              <p className="card-text">$40.00</p>
              <a href="/products?category=foundation" className="btn btn-secondary">View Foundations</a>
            </div>
          </div>
          <div className="card">
            <img src={beauty2} alt="New Product 2" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Silky Smooth Powder</h5>
              <p className="card-text">$25.00</p>
              <a href="/products?category=powder" className="btn btn-secondary">View Powders</a>
            </div>
          </div>
          <div className="card">
            <img src={beauty3} alt="New Product 3" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Luminous Brow Pencil</h5>
              <p className="card-text">$15.00</p>
              <a href="/products?category=brow pencil" className="btn btn-secondary">View Brow Pencils</a>
            </div>
          </div>
        </div>
      </section>

      <section className="photo-gallery">
        <h2>Our Inspiration</h2>
        <div className="gallery">
          <img src={models} alt="Models" />
          <img src={faceglam} alt="Face Glam" />
          <img src={crownmodel} alt="Crown Model" />
          {/* Add more images as needed */}
        </div>
      </section>

      <section className="services">
        <h2>Exclusive Services</h2>
        <div className="services-cards">
          <div className="service-card">
            <h5>Virtual Try-On</h5>
            <p>Try on makeup products virtually to find your perfect match.</p>
            <a href="/services/try-on" className="btn btn-secondary">Try Now</a>
          </div>
          <div className="service-card">
            <h5>Consult with Experts</h5>
            <p>Get personalized advice from our beauty experts.</p>
            <a href="/services/consult" className="btn btn-secondary">Consult Now</a>
          </div>
          <div className="service-card">
            <h5>Subscription Box</h5>
            <p>Subscribe to receive a curated box of makeup products every month.</p>
            <a href="/services/subscription" className="btn btn-secondary">Subscribe Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
