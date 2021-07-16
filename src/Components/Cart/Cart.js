import React from 'react'
import { useItemsContext } from "../ItemsContext/ItemContext";
function Cart(props) {
    let {carrito}=useItemsContext()
    console.log(props.total)
    return (
        <div style={{height:"60vh"}} >
          
          <div style={{color:'white'}}>
            {carrito.map((productoSelect)=>{
              return(
              <div>
                <div className="carrito-detail">
                    {` Producto:${productoSelect.title} 
                       Precio: $${productoSelect.price} 
                       Cantidad:${productoSelect.cantidad}
                    `}
                </div>
                <div>Total:{props.total}</div>
              </div>
            )
          })}
          </div>
        </div>
    )
}

export default Cart
              
