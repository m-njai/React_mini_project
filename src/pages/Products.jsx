import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Bootstrap JS is imported
import '../App.css';
import backgroundImage from '../images/background.jpg';
import { CartContext } from '../context/CartContext';

const categories = [
  'All', 'blush', 'bronzer', 'eyebrow', 'eyeliner', 'eyeshadow', 'foundation',
  'lip liner', 'lipstick', 'mascara', 'nail polish'
];

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart, cart } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const category = query.get('category') || 'All';
    setSelectedCategory(category);

    axios.get('https://makeup-api.herokuapp.com/api/v1/products.json')
      .then(response => {
        const filteredProducts = response.data.filter(product => product.image_link);
        setProducts(filteredProducts);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [location.search]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    navigate(`?category=${category}`); // Update URL search params
  };

  const filteredProducts = selectedCategory === 'All'
    ? products.slice(0, 20)
    : products.filter(product => product.product_type.toLowerCase() === selectedCategory.toLowerCase()).slice(0, 20);

  return (
    <div className="products-background" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
      <div className="container products">
        <h2 className="my-4 text-animation">Products</h2>
      
        {/* Dropdown for Category Selection */}
        <div className="dropdown mb-4">
          <button 
            className="btn btn-secondary dropdown-toggle" 
            type="button" 
            id="categoryDropdown" 
            data-bs-toggle="dropdown" // Bootstrap 5 uses "data-bs-toggle"
            aria-haspopup="true" 
            aria-expanded="false"
          >
            {selectedCategory}
          </button>
          <div className="dropdown-menu" aria-labelledby="categoryDropdown">
            {categories.map(category => (
              <button
                key={category}
                className="dropdown-item"
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="row">
          {filteredProducts.map(product => (
            <div className="col-md-4" key={product.id}>
              <div className="card mb-4 shadow-sm photo-animation">
                <img className="card-img-top" src={product.image_link} alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                  {cart.some(item => item.id === product.id) ? (
                    <button className="btn btn-success" disabled>In Cart</button>
                  ) : (
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                  )}
                  <Link to={`/products/${product.id}`} className="btn btn-secondary ml-2">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
