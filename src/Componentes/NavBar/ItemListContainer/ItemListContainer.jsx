import React,{useEffect, useState} from "react"
import ItemList from "../../ItemList/ItemList"
import { getProducts } from "../../../mock/data"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {
    const [productos, setProductos]= useState([])
    const {categoriaid} = useParams()
    useEffect(()=>{
    getProducts()
    .then((res)=> {
        if (categoriaid){
            setProductos(res.filter((item)=> item.categoria === categoriaid))
        }
        else{
            setProductos(res)
        }
    })
    .catch((error)=> console.log(error))
        },[categoriaid])

    
    return (
        <div>
<p>{props.greeting} <span>{categoriaid && categoriaid}</span></p>
<ItemList productos={productos}/>
        </div>

    )

}
export default ItemListContainer