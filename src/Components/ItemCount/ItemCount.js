import React, { useState} from "react";
import { Button } from 'semantic-ui-react';
import { useItemsContext } from "../ItemsContext/ItemContext";
import { Link } from "react-router-dom";
function Counter({stock , producto}){
    
    let {AgregarAlCarrito}=useItemsContext()
    let [numero, setNumero] = useState(0);
    // let carrito1={carrito}

    let addCarrito =()=>{
        AgregarAlCarrito(producto,numero)
        
    }
    
    let handleIncrement = () => {
        setNumero(numero + 1);
        if (numero>=stock-1){
            alert("Limite de Stock");
            setNumero(stock)
        }
    };

    let handleDecrement = () => {
        setNumero(numero - 1);
        if (numero===0){
            setNumero(numero = 0);
            alert("No hay stock");
        }
        
    };
    return(
        <div className='CounterSection'>
	    <span><strong>Cantidad</strong></span>
        <p>{numero}</p>
	    <Button color='green'onClick={handleIncrement}>+</Button>
        <Button color='red' onClick={handleDecrement}>-</Button>
        {numero > 0 && <Button color='blue' onClick={()=>addCarrito()}>Agregar al carrito</Button>}
        {numero > 0 && <Button color='gray'><Link to="/Cart" className="link">Comprar ahora</Link></Button>}
        </div>
    );
}
export default Counter;
