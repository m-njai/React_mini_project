import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import ThankYouPage from './pages/ThankYouPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import MainProduct from './pages/MainProduct';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext'; // Import UserProvider
import './App.css'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <UserProvider> {/* Wrap the app with UserProvider */}
        <CartProvider>
          <div className="App">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/main" element={<MainProduct />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<PaymentPage />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
