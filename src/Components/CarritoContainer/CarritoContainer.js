import React from 'react';
import img from './carrito-de-compras.png';
import { useItemsContext } from "../ItemsContext/ItemContext";
import { Link } from '@material-ui/core';
function CarritoContainer () {
    let {carrito}=useItemsContext()
  return(
        <div className="LogoCarrito" name="LogoCarrito">
            <Link to="/Cart">
                <img src={img} height="30" width="30" alt="Carrito de compras" />
                <span style={{textDecoration: "none", color:'black'}}>{carrito.length}</span>
            </Link>
             
        </div>
    );
}
export default CarritoContainer;   