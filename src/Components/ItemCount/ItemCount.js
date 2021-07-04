import React, { useState} from "react";
import { Button } from 'semantic-ui-react';

function Counter({stock}){
    let asd=stock;
    let [numero, setNumero] = useState(0);

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
	    <p>{numero}</p>
	    <Button color='green' id="buttonAdd" className="buttonAdd" onClick={handleIncrement}>+1</Button>
        <Button color='red' onClick={handleDecrement}>-1</Button>
        </div>
    );
}
export default Counter;
