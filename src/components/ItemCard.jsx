function ItemCard(){

    ItemList.map((item)=>(
        <div key={item.id} >{item}</div>
    ))
}

export default ItemCard;