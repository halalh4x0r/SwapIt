import ItemCard from "./ItemCard";
import { useEffect, useState} from "react";
function ItemDetails(){
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
        },[])// ensures t that this effect only runs once when the component mounts(its the actual syntax)
        //kindly note on the details we have more information about the item in the description
    return(
        <>
        {items.map((item)=>(
            <div key={item.id} >
                <img src={item.image}/>
                <h3>Title:{item.title}</h3>
                <p>Category:{item.category}</p>  
                <p>Category:{item.description}</p> 
            </div>
        ))}
        </>
    )
}

export default ItemDetails;
