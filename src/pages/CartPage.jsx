import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Adjust the path if necessary
import backgroundImage from '../images/background.jpg'; // Import the background image

function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalValue = cart.reduce((total, item) => total + parseFloat(item.price), 0); // Ensure price is a number

  const handleCompleteTransaction = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-page" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
      <div className="container cart-content">
        <h2 className="my-4 text-animation">Your Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty. <Link to="/products">Add some products</Link>.</p>
        ) : (
          <>
            <ul className="list-group mb-4">
              {cart.map((product) => (
                <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h5>{product.name}</h5>
                    <p>${product.price}</p>
                  </div>
                  <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>Delete</button>
                </li>
              ))}
            </ul>
            <div className="total-value">
              <h4>Total: ${totalValue.toFixed(2)}</h4>
            </div>
            <button className="btn btn-secondary mb-3" onClick={clearCart}>Clear Cart</button>
            <button className="btn btn-primary" onClick={handleCompleteTransaction}>Complete Transaction</button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
