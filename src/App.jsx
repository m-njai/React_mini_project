import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';  // Updated import to CartPage
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Mainproduct from './pages/Mainproducts';  // Import the MainPage component
import { CartProvider } from './context/CartContext';
import './App.css';  // Ensure this path is correct

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/main" element={<Mainproduct />} />  {/* Add the MainPage route */}
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<CartPage />} />  {/* Updated route to CartPage */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
