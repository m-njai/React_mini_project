import React, { useState, useContext, createContext } from 'react';

// 1. Create the context
const CartContext = createContext();

// Custom provider component for this context.
// Use it in App.jsx like <CartProvider>...</CartProvider>
export const CartProvider = (props) => {
  // Store the current cart items in state at the top level
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Function to remove a product from the cart by its id
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // 2. Provide the context.
  // The Provider component of any context (CartContext.Provider)
  // sends data via its value prop to all children at every level.
  // We are sending the current cart items, and the add, remove, and clear functions.
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

// Export the CartContext itself
export { CartContext };

// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useCartContext = () => {
  return useContext(CartContext);
};
