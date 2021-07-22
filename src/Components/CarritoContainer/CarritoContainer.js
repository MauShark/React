import React from 'react';
import img from './carrito-de-compras.png';
import { useItemsContext } from "../ItemsContext/ItemContext";
import CarritoModal from "../Modal/Modal";
import { Link } from '@material-ui/core';
function CarritoContainer () {
    let {carrito}=useItemsContext()
  return(
        <div className="LogoCarrito" name="LogoCarrito">
            {/* <CarritoModal/> */}
            <Link to="/Cart">
                <img src={img} height="30" width="30" alt="Carrito de compras" />
                <span>{carrito.length}</span>
            </Link>
             
        </div>
    );
}
export default CarritoContainer;   