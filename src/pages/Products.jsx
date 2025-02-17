import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// List of categories
const categories = [
  'All', 'blush', 'bronzer', 'eyebrow', 'eyeliner', 'eyeshadow', 'foundation',
  'lip liner', 'lipstick', 'mascara', 'nail polish'
];

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const location = useLocation();

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
  };

  const filteredProducts = selectedCategory === 'All'
    ? products.slice(0, 20)
    : products.filter(product => product.category === selectedCategory).slice(0, 20);

  return (
    <div className="container products">
      <h2 className="my-4">Products</h2>
      <div className="dropdown mb-4">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="categoryDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
      <div className="row">
        {filteredProducts.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4 shadow-sm">
              <img className="card-img-top" src={product.image_link} alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <Link to={`/products/${product.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
