import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="container cart">
      <h2 className="my-4">Your Shopping Cart</h2>
      <ul className="list-group mb-4">
        {cartItems.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{item.name}</h5>
              <p>${item.price}</p>
            </div>
            <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button className="btn btn-danger" onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;
