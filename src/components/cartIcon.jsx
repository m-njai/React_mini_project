import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

function CartIcon() {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-icon">
      <FaShoppingCart />
      {cart.length > 0 && <span className="badge">{cart.length}</span>}
    </Link>
  );
}

export default CartIcon;
