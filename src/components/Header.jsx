import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Adjust the path if necessary
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(UserContext);

  return (
    <header className="header">
      <div className="brand-container">
        <Link className="navbar-brand" to="/">
          <h1>GLAM MAKEUP STORE</h1>
        </Link>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rosybrown' }}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" // Fix Bootstrap 5 syntax
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Fix alignment class */}
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link><FaShoppingCart />{cart.length > 0 && <span className="badge">{cart.length}</span>}</li>
            {!user && (
              <>
                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
              </>
            )}
            {user && (
              <li className="nav-item"><button className="btn btn-link nav-link" onClick={logout}>Logout</button></li>
            )}
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
