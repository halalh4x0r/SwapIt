import { useEffect, useState } from "react"
function ItemForm(){
        const[title,setTitle]=useState("")//this is the use state for each input value. 
        const[category,setCategory]=useState("")
        const[description,setDescription]=useState("")
        const[imageURL,setimageURL]=useState("")
        const[price,setPrice]=useState("")
        const [items, setItems] = useState([]);// this array holds all submitted items
    function handleSubmit(e){
        e.preventDefault()//this is a form we only wnat it to submit and not reload the whole page. 
        const newItem={//takes each piece of each state and puts it on one object
            title:title,
            category:category,
            description:description,
            imageURL:imageURL,
            price:price
        }
        
            fetch("http://localhost:3000/items",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(newItem)//here we are stringifying the variable we are trying to send  i.e the new item on line 11. 
            })
            .then(res=>{
                if(!res.ok){
                    throw new Error("Error")
                }
                return res.json()// here I get a response.json. 
            })
            .then(savedItem=>{//the saved item is the response from server on the newItem we had passed to be posted. 
                setItems([...items,savedItem])//here we are adding a new item to the current state. 
            })
        }
       
    }
    return(
        <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e)=>setTitle(e.target.value)}  placeholder="Title"/>
        <input value={category} onChange={(e)=>setCategory(e.target.value)}placeholder="Category"/> 
        <input value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description"/> 
        <input value={imageURL} onChange={(e)=>setimageURL(e.target.value)} placeholder="Image url"/>  
        <input value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Price"/>  
        <button type="submit" > Add</button>
        </form>
    )


export default ItemForm;