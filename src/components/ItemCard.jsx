import { useEffect,useState } from "react";
import ItemList from "./ItemList"

function ItemCard(){
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/items")
        .then((res)=>{
            if(!res.ok) {
                throw new Error('Error!');
            };
            return res.json();
        })
        .then(data=>{
            setItems(data)
        })
        .catch (error=>{
            console.error("Fetch error:,error")
        })
    },[])

    return(
        <>
        {items.map((item)=>(
            <div key={item.id} >
                <img src={item.image}/>
                <h3>Title:{item.title}</h3>
                <p>Category:{item.category}</p>  
            </div>
        ))}
        </>
    )
}

export default ItemCard;
