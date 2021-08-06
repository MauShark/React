import React, { useState, useEffect } from "react";
import FormComponent from "../FormComponent/FormComponent";
import { db } from "../firebase/firebase";
import TicketUser from "../TicketUser/TicketUser";

let Products = () => {
  let [products, setProducts] = useState();
  let [data, setData] = useState();

  let buscador = (name) => products.find((item) => item.nombre === data.nombre);

  let ticket = [];

  let addProduct = async (object) => {
    await db.collection("Pedidos").doc().set(object);
    console.log("Subido");

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
