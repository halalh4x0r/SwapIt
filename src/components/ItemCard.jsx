// src/components/ItemCard.jsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Make sure this import is correct
import "../App.css";

function ItemCard({ item, onDelete }) {
  const { addToCart, removeFromCart, cartItems } = useCart();
  
  const isInCart = cartItems.some(cartItem => cartItem.id === item.id);

  // Handle Swap button
// In your ItemCard.jsx, add debugging:
function handleSwapClick() {
  console.log('Swap button clicked for:', item.title);
  console.log('Current cart items:', cartItems);
  console.log('Is in cart:', isInCart);
  
  if (isInCart) {
    removeFromCart(item.id);
    console.log('Removed from cart');
    alert(`Removed ${item.title} from swap cart`);
  } else {
    addToCart(item);
    console.log('Added to cart');
    alert(`Added ${item.title} to swap cart. Ready to swap!`);
  }
}

  return (
    <div className="item-card">
      <img src={item.image} alt={item.title} className="item-image" />
      <h3>{item.title}</h3>
      <p><strong>Category:</strong> {item.category}</p>
      <p>{item.description}</p>
      <p className="item-price">Ksh {item.price}</p>

      <div className="item-actions">
        <button 
          className={`swap-btn ${isInCart ? 'in-cart' : ''}`} 
          onClick={handleSwapClick}
        >
          {isInCart ? "Remove from Swap" : "Swap It"}
        </button>

        <Link to={`/items/${item.id}`} className="details-btn">
          View Details
        </Link>

        <button className="delete-btn" onClick={() => onDelete(item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;