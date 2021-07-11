import React from 'react'
import { useItemsContext } from "../ItemsContext/ItemContext";
function Cart() {
    let {carrito}=useItemsContext()
    return (
        <div>
            {carrito.map((productoSelect)=>{
              return(
              <div className="carrito-detail-container">
                <div className="carrito-detail">
                    {` Producto:${productoSelect.title} 
                       Precio: $${productoSelect.precio} 
                       Cantidad:${productoSelect.cantidad}
                    `}
                </div>   
                  
              </div>
              
              )
          })}
        </div>
    )
}

export default Cart
