<<<<<<< HEAD
import { useEffect,useState } from "react";
import ItemDetails from "./ItemDetails";

function ItemCard(){
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/items")//fetched on dbjsons
        .then((res)=>{
            if(!res.ok) {
                throw new Error('Error!');
            };
            return res.json();///data passed
        })
        .then(data=>{
            setItems(data)/// we setting the state item  state with new data from the server. it replaces the whole state now items is "data" from the server
        })
        .catch (error=>{
            console.error("Fetch error:,error")
        })
    },[])// ensures  that this effect only runs once when the component mounts(its the actual syntax)
///we need to route on this component so that we can have a button that leads to itemdetails on each item. 
    return(
        <>
        {items.map((item)=>(
            <div key={item.id} >
                <img src={item.image}/>
                <h3>Title:{item.title}</h3>
                <p>Category:{item.category}</p>
                <p>price:{item.price}</p>
            </div>
        ))}
        </>
    )
=======
import { Link } from "react-router-dom";
import React from "react";
import "../App.css";


function ItemCard({ item, onDelete, onToggleCart, onSwap }) { 
=======
function ItemCard({ item, onDelete, onToggleCart, onFilter }) {
  function handleSwapClick() {
    alert(`You want to swap: ${item.title}`);
  }


  return (
    <div className="item-card">
      <img src={item.image} alt={item.title} className="item-image" />
      <h3>{item.title}</h3>
      <p><strong>Category:</strong> {item.category}</p>
      <p>{item.description}</p>
      <p className="item-price">Ksh {item.price}</p>

      <div className="item-actions">

        {onSwap && (
          <button className="swap-btn" onClick={() => onSwap(item.id)}>
            Swap It
          </button>
        )}
=======
        <button className="swap-btn" onClick={handleSwapClick}>
          Swap It
        </button>


        <Link to={`/items/${item.id}`} className="details-btn">
          View Details
        </Link>

        <button className="delete-btn" onClick={() => onDelete(item.id)}>
          Delete
        </button>

        <button 
          className="cart-btn" 
          onClick={() => onToggleCart(item.id)}
        >
          {item.inCart ? "Remove from Cart" : "Add to Cart"}
        </button>

        
        {onFilter && (
          <button 
            className="filter-btn"
            onClick={() => onFilter(item.category)}
          >
            More in {item.category}
          </button>
        )}
      </div>
    </div>
  );
>>>>>>> 3325a7658a5737b04728056fea4e01ba3d1f16ca
}

export default ItemCard;
