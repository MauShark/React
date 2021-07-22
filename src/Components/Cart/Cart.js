import React from 'react'
import { useItemsContext } from "../ItemsContext/ItemContext";
import {Button} from 'semantic-ui-react'
function Cart() {
    let {carrito}=useItemsContext()
    console.log(carrito)
    
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
                    <Button style={{backgroundColor:"red" , fontSize:10}} >X</Button>
                </div>
                
                
              </div>
            )
          })}
          <div>
            Total:{}
          </div>
          </div>
        </div>
    )
}

export default Cart
              
