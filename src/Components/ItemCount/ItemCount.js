import React, { useState} from "react";
import { Button } from 'semantic-ui-react';

function Counter(){

    let [numero, setNumero] = useState(0);

    let handleIncrement = () => {
        setNumero(numero + 1);
    };
    
    let handleDecrement = () => {
       setNumero(numero - 1);
       if (numero===0){
           setNumero(numero = 0);
           throw alert("No hay stock");
       }
    };

    return(
        <div className='CounterSection'>
	    <h3>Contador:</h3>
	    <p>{numero}</p>
	    <Button color='green' onClick={handleIncrement}>+1</Button>
        <Button color='red' onClick={handleDecrement}>-1</Button>
        </div>
    );
}
export default Counter;
