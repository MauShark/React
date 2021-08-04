import React,{useEffect} from 'react';
import img from './carrito-de-compras.png';
import { useItemsContext } from "../ItemsContext/ItemContext";
import { Link } from '@material-ui/core';
function CarritoContainer () {
    let {carrito,ActualizarContador,contadorItems}=useItemsContext()

    useEffect(()=>{
        ActualizarContador()
    },[carrito])

    return(
        <div className="LogoCarrito" name="LogoCarrito">
            <Link to="/Cart">
                <img src={img} height="30" width="30" alt="Carrito de compras" />
                <span style={{textDecoration: "none", color:'black'}}>{contadorItems}</span>
            </Link>
             
        </div>
    );
}
export default CarritoContainer;   