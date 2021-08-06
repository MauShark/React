import React, { useState, useEffect } from "react";
import FormComponent from "../FormComponent/FormComponent";
import { db } from "../firebase/firebase";
import TicketUser from "../TicketUser/TicketUser";

let Products = () => {
  let [products, setProducts] = useState();
  let [data, setData] = useState();
  //console.log("dataguardada",data)
  //console.log(products)
  let buscador = (name) => products.find((item) => item.nombre === data.nombre);
  //console.log("buscado",buscador(data))
  let ticket = [];

  let addProduct = async (object) => {
    await db.collection("Pedidos").doc().set(object);
    console.log("Subido");
    //console.log("obj",object)
    const data = object;
    setData(data);
  };
  const getProducts = () => {
    db.collection("Pedidos").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
    });
  };
  useEffect(() => {
    getProducts();
    //setCarrit([])
  }, []);

  if (data) {
    ticket = buscador(data);
  }

  return (
    <div>
      {data ? (
        <TicketUser ticket={ticket.id} />
      ) : (
        <FormComponent addProduct={addProduct} />
      )}
    </div>
  );
};

export default Products;
