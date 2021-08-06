import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { useItemsContext } from "../ItemsContext/ItemContext";
function Counter({ stock, producto }) {
  let { agregarAlCarrito } = useItemsContext();
  let [numero, setNumero] = useState(0);

  let [botonN, setbotonN] = useState(false);
  let [botonAdd, setbotonAdd] = useState(false);

  useEffect(() => {
    if (numero > 0) {
      setbotonN(true);
      setbotonAdd(true);
    }
    if (numero == 0) {
      setbotonN(false);
      setbotonAdd(false);
    }
  }, [numero]);

  let addCarrito = () => {
    agregarAlCarrito(producto, numero);
  };

  let handleIncrement = () => {
    setNumero(numero + 1);
    if (numero >= stock - 1) {
      alert("Limite de Stock");
      setNumero(stock);
    }
  };

  let handleDecrement = () => {
    setNumero(numero - 1);
    if (numero === 0) {
      setNumero((numero = 0));
      alert("No hay stock");
    }
  };
  return (
    <div className="CounterSection">
      <span>
        <strong>Cantidad a agregar</strong>
      </span>
      <p>{numero}</p>
      {
        <Button color="green" onClick={handleIncrement}>
          +
        </Button>
      }
      {botonN && (
        <Button color="red" onClick={handleDecrement}>
          -
        </Button>
      )}
      {botonAdd && (
        <Button color="blue" onClick={() => addCarrito()}>
          Agregar al carrito
        </Button>
      )}
    </div>
  );
}
export default Counter;
