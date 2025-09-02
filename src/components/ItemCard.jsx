import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaEye } from "react-icons/fa"; //  Eye icon
import "../App.css";

function ItemCard({ item, onDelete }) {
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(cartItem => cartItem.id === item.id);

  function handleSwapClick() {
    if (isInCart) {
      removeFromCart(item.id);
      alert(`Removed ${item.title} from swap cart`);
    } else {
      addToCart(item);
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

        {/* Now uses react-icons  */}
        <Link to={`/items/${item.id}`} className="icon-link view">
          <FaEye />
        </Link>

        <button className="delete-btn" onClick={() => onDelete(item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
