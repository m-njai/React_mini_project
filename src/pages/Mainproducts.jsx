import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';  // Adjust the path to App.css

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

function MainProducts() {
  return (
    <div className="container product-types">
      <h2 className="my-4 text-animation">Explore Our Product Types</h2>
      <div className="row">
        {productTypes.map((productType, index) => (
          <div className="col-md-4" key={index}>
            <div className="card product-type-card photo-animation">
              <img src={productType.image} className="card-img-top" alt={productType.name} />
              <div className="card-body">
                <h5 className="card-title">{productType.name}</h5>
                <Link to={`/products/${productType.name.toLowerCase()}`} className="btn btn-secondary">
                  View {productType.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainProducts;
