import React, { useState ,useEffect} from 'react';
import { useItemsContext } from "../ItemsContext/ItemContext";
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

function Cart() {

  let {carrito,vaciarCarrito,totalP,ActualizarTotal,borrarItems}=useItemsContext()
  //console.log(carrito)
  let vaciar=()=>vaciarCarrito([]);
  
  useEffect(() => {
    ActualizarTotal()
  }, [carrito])
  
  if(carrito==""){
    return(
      <div>
        <h2 style={{color: "white"}}>Ups! ¡tu carrito esta vacio! ¡vuelve a catalogo para comprar!</h2>
      </div>
    )
  }

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
                  <Button style={{backgroundColor:"red" , fontSize:10}} onClick={()=>borrarItems(productoSelect.id)}>X</Button>
              </div>
              
              
            </div>
          )
        })}
        <div>
          Total: ${totalP}
        </div>
        <Link to="/Comprar"><Button color="green">¡Comprar!</Button></Link>
        <Button color="red" className="button-delete" onClick={vaciar}>Vaciar Carrito</Button>
        </div>
      </div>
  )
}
//<FormComponent/>
export default Cart
              
