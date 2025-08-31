// src/pages/CheckoutPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Fixed import path
import "../App.css";

function CheckoutPage() {
  const { cartItems, removeFromCart, clearCart, getTotalPrice, cartCount } = useCart();

  const handleCheckout = () => {
    alert("Swap request submitted! The other party will contact you soon.");
    clearCart();
  };

  if (cartCount === 0) {
    return (
      <div className="checkout-page">
        <div className="empty-cart">
          <h2>Your Swap Cart is Empty</h2>
          <p>Add items to your cart by clicking "Swap It" on items you want to trade</p>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Swap Cart ({cartCount} items)</h1>
      
      <div className="checkout-content">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p className="cart-item-category">{item.category}</p>
                <p className="cart-item-price">Ksh {item.price}</p>
              </div>
              <button 
                className="remove-item-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="checkout-summary">
          <h2>Swap Summary</h2>
          <div className="summary-details">
            <p>Total Items: {cartCount}</p>
            <p>Total Value: Ksh {getTotalPrice()}</p>
          </div>
          
          <button className="checkout-btn" onClick={handleCheckout}>
            Confirm Swap Request
          </button>
          
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear All Items
          </button>
          
          <Link to="/" className="continue-shopping-link">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;