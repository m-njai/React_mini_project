import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="footer bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Makeup Store</h5>
            <p>
              Discover the best makeup products for you. Find the perfect makeup products that suit your style.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
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
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
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
