import React from 'react';
import '../App.css';  // Adjust the path to App.css
import beauty1 from '../images/beauty1.jpg';
import beauty2 from '../images/beauty2.jpg';
import beauty3 from '../images/beauty3.jpg';
import models from '../images/models.jpg';
import faceglam from '../images/faceglam.jpg';
import crownmodel from '../images/crownmodel.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Bootstrap JS is imported
import backgroundImage from '../images/background.jpg';

function Home() {
  const productTypes = [
    { name: 'Blush', image: '/src/images/blush.jpg' },
    { name: 'Bronzer', image: '/src/images/bronzer.jpg' },
    { name: 'Eyebrow', image: '/src/images/eyebrow.jpg' },
    { name: 'Eyeliner', image: '/src/images/eyeliner.jpg' },
    { name: 'Eyeshadow', image: '/src/images/eyeshadow.jpg' },
    { name: 'Foundation', image: '/src/images/foundation.jpg' },
    { name: 'Lip liner', image: '/src/images/lip-liner.jpg' },
    { name: 'Lipstick', image: '/src/images/lipstick.jpg' },
    { name: 'Mascara', image: '/src/images/mascara.jpg' },
    { name: 'Nail polish', image: '/src/images/nail-polish.jpg' },
  ];

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
      <div className="main-content text-animation">
        <h1>Welcome to Our Makeup Store</h1>
        <h4>
          Discover the best makeup products for you. Whether you're a makeup enthusiast,
          a beauty guru, or someone who's just starting their makeup journey, we have everything
          you need to look and feel fabulous. From radiant foundations that match your skin tone
          perfectly to silky smooth powders that set your makeup flawlessly, we offer a wide range
          of high-quality products to suit every style and occasion.
        </h4>
        <a className="btn btn-primary" href="/products" role="button">Shop Now</a>
      </div>

      <section className="product-types">
        <h2 className="text-animation">Explore Our Product Types</h2>
        <div className="row">
          {productTypes.map((productType, index) => (
            <div className="col-md-4" key={index}>
              <div className="card product-type-card photo-animation">
                <img src={productType.image} className="card-img-top" alt={productType.name} />
                <div className="card-body">
                  <h5 className="card-title">{productType.name}</h5>
                  <a href={`/products?category=${productType.name.toLowerCase()}`} className="btn btn-secondary">
                    View Products
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-products">
        <h2 className="text-animation">New Arrivals</h2>
        <div className="product-cards">
          <div className="card photo-animation">
            <img src={beauty1} alt="New Product 1" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Radiant Glow Foundation</h5>
              <p className="card-text">$40.00</p>
              <a href="/products?category=foundation" className="btn btn-secondary">View Foundations</a>
            </div>
          </div>
          <div className="card photo-animation">
            <img src={beauty2} alt="New Product 2" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Silky Smooth Powder</h5>
              <p className="card-text">$25.00</p>
              <a href="/products?category=powder" className="btn btn-secondary">View Powders</a>
            </div>
          </div>
          <div className="card photo-animation">
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
        <h2 className="text-animation">Our Inspiration</h2>
        <div className="gallery">
          <img src={models} alt="Models" className="photo-animation" />
          <img src={faceglam} alt="Face Glam" className="photo-animation" />
          <img src={crownmodel} alt="Crown Model" className="photo-animation" />
          {/* Add more images as needed */}
        </div>
      </section>

      <section className="services">
        <h2 className="text-animation">Exclusive Services</h2>
        <div className="services-cards">
          <div className="service-card photo-animation">
            <h5>Virtual Try-On</h5>
            <p>Try on makeup products virtually to find your perfect match.</p>
            <a href="/register" className="btn btn-secondary">Try Now</a>
          </div>
          <div className="service-card photo-animation">
            <h5>Consult with Experts</h5>
            <p>Get personalized advice from our beauty experts.</p>
            <a href="/contact" className="btn btn-secondary">Consult Now</a>
          </div>
          <div className="service-card photo-animation">
            <h5>Subscription Box</h5>
            <p>Subscribe to receive a curated box of makeup products every month.</p>
            <a href="/register" className="btn btn-secondary">Subscribe Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
