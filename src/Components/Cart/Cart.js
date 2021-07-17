import React from 'react'
import { useItemsContext } from "../ItemsContext/ItemContext";
import {Button} from 'semantic-ui-react'
function Cart(props) {
    let {carrito,borrarItems}=useItemsContext()
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
                <Button style={{backgroundColor:"red" , fontSize:10}} onClick={()=>borrarItems(productoSelect.id)}>X</Button>
              </div>
            )
          })}
          </div>
        </div>
    )
}

export default Cart
              
