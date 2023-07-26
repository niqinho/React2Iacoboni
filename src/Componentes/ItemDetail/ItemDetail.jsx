import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {

    const onAdd = (cantidad) => {
        console.log (`compraste ${cantidad} producto/s`)
    }

    return (
    <div className='d-flex flex-column align-items-center'>
    <h4>Detalle : {producto.nombre}</h4>
    <p>${producto.precio}</p>
    <img src={producto.img} alt={producto.nombre}/>
    <ItemCount stock = {producto.stock} onAdd = {onAdd}/>
    </div>
    )
}

export default ItemDetail