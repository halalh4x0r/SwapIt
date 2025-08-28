import { useState } from "react"
function ItemForm(){
        const[title,setTitle]=useState("")//this is the use state for each input value. 
        const[category,setCategory]=useState("")
        const[description,setDescription]=useState("")
        const[imageURL,setimageURL]=useState("")
        const[price,setPrice]=useState("")
    function handleSubmit(e){
        e.preventDefault()//this is a form we only wnat it to submit and not reload the whole page. 
        const value=e.target.value// here we have grabbed the item on the submit. 
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
}