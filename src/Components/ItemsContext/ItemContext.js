import React, { createContext, useContext, useState } from "react";

export let ItemsContext = createContext({});

export let useItemsContext = () => useContext(ItemsContext);

export let ItemsProvider = ({ children }) => {
  let [carrito, setCarrit] = useState([]);
  console.log("carrito", carrito);
  let [totalP, setTotal] = useState([0]);
  //console.log("PrecioTotal",totalP)
  let [contadorItems, setContadorItems] = useState();
  //console.log("contadorNav",contadorItems)
  let actualizarTotal = () => {
    let PrecioTotal = carrito.reduce(
      (acc, item) => acc + item.price * item.cantidad,
      0
    );
    setTotal(PrecioTotal);
  };

  let actualizarContador = () => {
    let contadorTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    setContadorItems(contadorTotal);
  };

  let vaciarCarrito = () => setCarrit([]);

  let [loading, setLoading] = useState(true);

  let agregarAlCarrito = (item, cantidad) => {
    //setCarrit(prev=>[...prev,{...item,cantidad}])
    if (buscadorCarrito(item.id)) {
      let carritoProv = carrito.map((producto) => {
        if (producto.id === item.id) {
          return { ...producto, cantidad: producto.cantidad + cantidad };
        } else return producto;
      });
      setCarrit(carritoProv);
    } else {
      setCarrit((prev) => [...prev, { ...item, cantidad }]);
    }
  };
  let buscadorCarrito = (id) => carrito.some((item) => item.id === id);

  let borrarItems = (id) => {
    console.log("id a borrar", id);
    let carritoCop = [...carrito];

    let indexBuscado = carritoCop.findIndex((Object) => Object.id === id);
    //let indexBuscado=carritoCop.findIndex()
    console.log("indexbuscado", indexBuscado);
    if (indexBuscado !== -1) {
      carritoCop.splice(indexBuscado, 1);
      setCarrit(carritoCop);
    }
  };

  let stockContext = (producto) => {
    let itemBuscado = carrito.find((e) => e.id === producto.id);
    return itemBuscado ? producto.stock - itemBuscado.cantidad : producto.stock;
  };
  return (
    <ItemsContext.Provider
      value={{
        carrito,
        setCarrit,
        vaciarCarrito,
        agregarAlCarrito,
        actualizarTotal,
        totalP,
        borrarItems,
        setLoading,
        loading,
        actualizarContador,
        contadorItems,
        stockContext,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
