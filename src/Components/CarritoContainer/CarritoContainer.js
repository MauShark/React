import React from 'react';
import img from './carrito-de-compras.png';
import { useItemsContext } from "../ItemsContext/ItemContext";
import CarritoModal from "../Modal/Modal";
function CarritoContainer () {
    let {carrito}=useItemsContext()
  return(
        <div className="LogoCarrito" name="LogoCarrito">
            <CarritoModal/>
            {/* <img src={img} height="30" width="30" alt="Carrito de compras" /> <span>{carrito.length}</span> */}
        </div>
    );
}
export default CarritoContainer;   