<<<<<<< HEAD
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
=======
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ItemDetails() {
  const { id } = useParams(); // get item id from URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/items/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.error("Error fetching item:", err));
  }, [id]);

  if (!item) {
    return <p className="p-6">Loading item details...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-blue-500 underline">
        ← Back to Items
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Image */}
        <div>
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-96 object-cover rounded-lg shadow"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">{item.name}</h1>
          <p className="text-gray-600">Category: {item.category}</p>
          <p className="text-lg text-green-600 font-semibold">
            Ksh {item.price}
          </p>
          <p>{item.description}</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Swap It
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
>>>>>>> d93b9cb7c788d95384d38fa0f6c30eda17f18b88
