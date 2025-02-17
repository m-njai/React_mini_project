import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container p-4">
        <div className="row">
          <div className="footer-message">
            <h5 className="text-uppercase">Makeup Store</h5>
            <p>
            At our Makeup Store, we believe that makeup is a form of self-expression. 
            That's why we curate a diverse selection of products to help you create the look you desire. 
            Whether you're going for a natural everyday look, a bold and glamorous appearance, or anything 
            in between, you'll find the perfect products to achieve it. Explore our extensive collection of 
            foundations, powders, brow pencils, and more to enhance your beauty and boost your confidence.</p>
          </div>
          <div className="footer-text">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-dark">Home</a>
              </li>
              <li>
                <a href="/products" className="text-dark">Products</a>
              </li>
              <li>
                <a href="/contact" className="text-dark">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-text">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="https://www.facebook.com" className="text-dark">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com" className="text-dark">Instagram</a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="text-dark">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        © 2023 Makeup Store. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
